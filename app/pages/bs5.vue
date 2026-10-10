<template>
	<div>
		<!-- fixed framework badge, top right e.g. the bs5 image -->
		<img
			src="https://cdn.simpleicons.org/bootstrap"
			alt="Bootstrap 5"
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
	import { useAppActionStore } from "~/store";
	import AppCanvas from "~/components/AppCanvas.vue";

	const appActionStore = useAppActionStore();

	// which preset set this page uses
	appActionStore.setFramework("bs5");
</script>
