<template>
	<button
		type="button"
		class="info btn red mx-2 white-text"
		@click="openHelp('button')"
		@mouseenter="
			showAndHideToolTip(hints.helpInfo, {
				left: 0,
				top: 30,
			})
		">
		<i class="fa fa-question-circle me-1"></i>
		Help
	</button>

	<div
		v-if="isModalOpen"
		class="position-fixed top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center"
		style="background: rgba(0, 0, 0, 0.5); z-index: 1050"
		@click.self="closeHelp">
		<div
			class="bg-white rounded p-3"
			style="width: min(900px, 95vw); max-height: 90vh; overflow-y: auto">
			<div class="d-flex justify-content-between align-items-center mb-3">
				<h5 class="m-0">How to use Dragzy</h5>

				<button
					type="button"
					class="btn-close"
					@click="closeHelp"></button>
			</div>

			<div class="d-flex flex-wrap gap-2 mb-3">
				<button
					v-for="topic in topics"
					:key="topic.id"
					type="button"
					class="btn btn-sm"
					:class="
						activeTopic === topic.id
							? 'grey darken-3 white-text'
							: 'btn-outline-secondary'
					"
					@click="activeTopic = topic.id">
					{{ topic.label }}
				</button>
			</div>

			<HelpGettingStarted v-if="activeTopic === 'getting-started'" />
			<HelpElements v-else-if="activeTopic === 'elements'" />
			<HelpEditing v-else-if="activeTopic === 'editing'" />
			<Shortcuts v-else-if="activeTopic === 'shortcuts'" />
			<HelpImport v-else-if="activeTopic === 'import'" />
			<HelpHistory v-else-if="activeTopic === 'history'" />
			<HelpResponsive v-else-if="activeTopic === 'responsive'" />
			<HelpExport v-else-if="activeTopic === 'export'" />
			<HelpAskAi v-else-if="activeTopic === 'ask-ai'" />
			<HelpTips v-else-if="activeTopic === 'tips'" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, onMounted } from "vue";
	import { useCookie, showAndHideToolTip, hints } from "#imports";
	import { trackAnalytics } from "~/utils";

	import HelpGettingStarted from "./GettingStarted.vue";
	import HelpElements from "./HelpElements.vue";
	import HelpEditing from "./HelpEditing.vue";
	import HelpImport from "./HelpImports.vue";
	import HelpHistory from "./HelpHistory.vue";
	import HelpResponsive from "./HelpResponsive.vue";
	import HelpExport from "./HelpExport.vue";
	import HelpAskAi from "./HelpAskAi.vue";
	import HelpTips from "./HelpTips.vue";
	import Shortcuts from "./Shortcuts.vue";

	type HelpTopicId =
		| "getting-started"
		| "elements"
		| "editing"
		| "shortcuts"
		| "import"
		| "history"
		| "responsive"
		| "export"
		| "ask-ai"
		| "tips";

	const isModalOpen = ref(false);
	const activeTopic = ref<HelpTopicId>("getting-started");

	// remembers the visitor has seen the help e.g. "true"
	const isAcquaintedUserCookie = useCookie<string | null>("isAcquaintedUser", {
		maxAge: 60 * 60 * 24 * 365,
		sameSite: "lax",
	});

	onMounted(function () {
		// first visit, no cookie yet, so show the help first
		if (!isAcquaintedUserCookie.value) {
			openHelp("first-visit");
		}
	});

	const topics: Array<{
		id: HelpTopicId;
		label: string;
	}> = [
		{ id: "getting-started", label: "Getting Started" },
		{ id: "elements", label: "Elements & Templates" },
		{ id: "editing", label: "Editing" },
		{ id: "shortcuts", label: "Shortcuts" },
		{ id: "import", label: "Import" },
		{ id: "history", label: "Undo / Redo" },
		{ id: "responsive", label: "Responsive" },
		{ id: "export", label: "Export" },
		{ id: "ask-ai", label: "Ask AI" },
		{ id: "tips", label: "Tips" },
	];

	function openHelp(openedBy: "button" | "first-visit"): void {
		isModalOpen.value = true;
		trackAnalytics("help-opened", { openedBy: openedBy });
	}

	function closeHelp(): void {
		isModalOpen.value = false;
		isAcquaintedUserCookie.value = "true";
	}
</script>

<style scoped>
	.info:hover {
		background: black !important;
		outline: 2px solid red !important;
	}
</style>
