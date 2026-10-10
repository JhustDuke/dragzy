<template>
	<div>
		<!-- fixed framework badge, top right e.g. the tw image -->
		<img
			src="https://cdn.simpleicons.org/tailwindcss"
			alt="Tailwind"
			class="position-fixed"
			style="
				top: 150px;
				left: 8px;
				height: 40px;
				z-index: 1001;
				pointer-events: none;
			" />

		<AppCanvas />
	</div>
</template>

<script setup lang="ts">
	import { useHead } from "#imports";
	import { useAppActionStore } from "~/store";
	import AppCanvas from "~/components/AppCanvas.vue";

	const appActionStore = useAppActionStore();

	// which preset set this page uses
	appActionStore.setFramework("tw");

	// loads tailwind only on this page, so the bs5 page never carries it
	useHead({
		script: [
			{ src: "https://cdn.tailwindcss.com" },
			{
				// prefix keeps tw classes from clashing with the bootstrap app ui
				innerHTML:
					"tailwind.config = { prefix: 'tw-', corePlugins: { preflight: false } }",
			},
		],
	});
</script>
