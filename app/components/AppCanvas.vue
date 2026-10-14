<template>
	<div
		class="grey lighten-3 d-flex flex-column"
		id="dragzy"
		style="min-height: 100vh">
		<nav
			class="flex-shrink-0 mb-5 pink"
			style="position: sticky; top: 0; z-index: 1000">
			<ToolBar />
		</nav>

		<section class="flex-grow-1 mt-3">
			<!-- Desktop: unchanged, still the real interactive canvas -->
			<div
				style="max-width: 1400px; margin: 0 auto; position: relative"
				v-if="viewportStore.activeViewport === 'desktop'"
				class=""
				dragzy-root
				@dblclick="handleCanvasDblClick">
				<!-- shown until the page and its CDN files finish loading -->
				<div
					v-if="!isCanvasReady"
					class="d-flex flex-column align-items-center justify-content-center py-5"
					@dblclick.stop>
					<div
						class="spinner-border text-success"
						role="status"></div>
					<p class="mt-3 mb-0">Loading your canvas, please wait...</p>
				</div>

				<!-- empty canvas hint, lives here and not in the store so it never exports -->
				<div
					v-if="
						isCanvasReady && canvasElemsStore.elems[0]?.children.length === 0
					"
					class="position-absolute top-0 start-50 translate-middle-x mt-4 text-center grey-text text-darken-2"
					style="pointer-events: none; z-index: 1; max-width: 420px">
					<p class="fw-bold mb-1"
						>This is your blank canvas, you can change it's default height and
						width etc. by pressing the + icon in the quicktoolbar.</p
					>
					<p class="mb-1">Add cards, navbars and other blocks inside it.</p>
					<p class="mb-1"
						>Double-click the canvas to add one, or press C for to create from
						Scratch.</p
					>
					<p class="mb-1">Select an element and press U to edit it.</p>

					<p class="mb-0"
						>Stuck? Ask AI by pressing the android icon, e.g. "make the cards
						sit side by side". be sure to select the parent/wrapper element for
						prompts like the e.g to work
					</p>
					<p class="mb-0 fw-bolder">Press the help button for more.</p>
				</div>

				<CanvasArea />
			</div>

			<!-- Mobile/Tablet: now a read-only PREVIEW, rendered via iframe
    so Bootstrap's media queries evaluate against the iframe's
    own real width, matching actual browser behavior exactly -
    not a div faking a width. -->
			<div
				v-else
				class="w-100 d-flex align-items-center justify-content-center grey lighten-1"
				style="z-index: 998; min-height: 100vh"
				@click.self="viewportStore.setDesktop()">
				<iframe
					class="green lighten-5 shadow border rounded-3"
					:style="{ width: viewportStore.activeWidth, height: '600px' }"
					:srcdoc="previewHtml"
					sandbox="allow-scripts"
					title="Responsive preview"></iframe>
			</div>
		</section>

		<footer class="flex-shrink-0 black text-center text-white py-3 border-top">
			Placeholder footer text — Dragzy
		</footer>

		<undoRedoToast />
		<AskAiModal
			:framework="appActionStore.framework"
			:activeElement="canvasElemsStore.getActiveElem!" />

		<!-- this component handles persistence store showing -->
		<RestoreOrNewPrompt />
		<ToggleView />
		<AiMinimizedIcon />
		<SmallScreenNotice />
		<contactWidget />
	</div>
</template>

<script setup lang="ts">
	import { ref, onMounted, onBeforeUnmount, watch, computed } from "vue";
	import ToolBar from "~/components/toolbar/ToolBar.vue";
	import ToggleView from "~/components/toolbar/viewportToggle.vue";
	import CanvasArea from "~/components/canvasArea/CanvasArea.vue";
	import undoRedoToast from "~/components/canvasArea/undoRedoToast.vue";
	import SmallScreenNotice from "~/components/canvasArea/SmallScreenNotice.vue";
	import RestoreOrNewPrompt from "~/components/indexdb/RestorePrompt.vue";
	import contactWidget from "~/components/canvasArea/contactWidget.vue";
	import { usePreviewHtml } from "~/iframe";
	import AskAiModal from "~/components/ai/AskAiPanel.vue";
	import AiMinimizedIcon from "~/components/ai/AiMinimizeIcon.vue";

	import {
		useViewportStore,
		useAppActionStore,
		useCanvasElemsStore,
		useCanvasPersistenceStore,
		useHistoryStore,
	} from "~/store";

	//this composable is used as src doc for the preview windown
	const { previewHtml } = usePreviewHtml();

	// true once the page and its CDN files have finished loading
	const isCanvasReady = ref(false);

	function markCanvasReady() {
		isCanvasReady.value = true;
	}

	onMounted(function () {
		historyStore.trackCanvasChanges();
		window.addEventListener("beforeunload", warnBeforePageLeave);

		// load fires after CSS and scripts finish, or already done on fast loads
		if (document.readyState === "complete") {
			markCanvasReady();
		} else {
			window.addEventListener("load", markCanvasReady, { once: true });
		}
	});

	// removes the listeners when the user goes back to the chooser page
	onBeforeUnmount(function () {
		window.removeEventListener("beforeunload", warnBeforePageLeave);
		window.removeEventListener("load", markCanvasReady);
	});

	watch(
		function () {
			return useCanvasPersistenceStore().canvasName;
		},
		function (canvasName) {
			if (!document) return;
			if (canvasName) {
				document.title = `${canvasName} — Dragzy`;
			} else {
				document.title = "dragzy";
			}
		},
		{ immediate: true }
	);

	const viewportStore = useViewportStore();
	const appActionStore = useAppActionStore();
	const canvasElemsStore = useCanvasElemsStore();

	const historyStore = useHistoryStore();

	function handleCanvasDblClick(event: MouseEvent): void {
		if (
			appActionStore.getActiveAction !== "create" &&
			appActionStore.getActiveAction !== "presets" &&
			appActionStore.getActiveAction !== "imports"
		)
			return;

		const canvasRoot = event.target as HTMLElement;
		if (canvasRoot.hasAttribute("dragzy-root")) {
			canvasElemsStore.setActiveElem(null);
		}

		if (appActionStore.getActiveAction === "presets") {
			const stagedVariant = appActionStore.getActiveBlock.variant;
			if (!stagedVariant) return;
			canvasElemsStore.addElemFromPreset(stagedVariant);
			return;
		}

		if (appActionStore.getActiveAction === "imports") {
			const stagedImport = appActionStore.getActiveImportedElem;
			if (!stagedImport) return;
			canvasElemsStore.addElemFromPreset(stagedImport);
			return;
		}

		canvasElemsStore.addElem(appActionStore.getSelectedElemType);
	}
	// asks the browser to confirm before closing, refreshing or leaving the site
	function warnBeforePageLeave(event: BeforeUnloadEvent) {
		// app-root is elems[0], so children means work was placed
		if (canvasElemsStore.elems[0]!.children.length > 0) {
			event.preventDefault();
		}
	}
</script>
<style scoped></style>
