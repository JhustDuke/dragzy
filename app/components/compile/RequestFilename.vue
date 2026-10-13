<template>
	<!-- Filename modal: teleported to body -->
	<Teleport to="body">
		<div
			class="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
			style="background: rgba(0, 0, 0, 0.5); z-index: 2000">
			<div
				class="bg-white rounded shadow p-4 mx-3"
				style="width: 100%; max-width: 400px">
				<h5
					id="filename-modal-title"
					class="mb-3">
					Name your export
				</h5>

				<form @submit.prevent="confirmFilename">
					<label
						for="export-filename"
						class="form-label">
						Filename
					</label>

					<div class="input-group mb-3">
						<input
							id="export-filename"
							v-model="filename"
							type="text"
							class="form-control"
							placeholder="Enter filename"
							required
							autofocus />

						<span class="input-group-text"> .{{ exportExtension }} </span>
					</div>

					<div class="d-flex justify-content-end gap-2">
						<button
							type="button"
							class="btn btn-secondary"
							@click="emit('closeModal')">
							Cancel
						</button>

						<button
							type="submit"
							class="btn btn-success"
							:disabled="!filename.trim()">
							Continue
						</button>
					</div>
				</form>
			</div>
		</div>
	</Teleport>
</template>

<script setup lang="ts">
	import { ref, computed, watch } from "vue";

	// Props control modal visibility and the export format
	const props = defineProps<{
		selectedFramework: "HTML" | "Vue" | "React";
	}>();

	// Emit the completed filename or cancellation
	const emit = defineEmits<{
		confirm: [filename: string];
		closeModal: [];
	}>();

	const filename = ref("dragzy");

	// Determine the extension from the selected export format
	const exportExtension = computed(function () {
		if (props.selectedFramework === "HTML") return "html";
		if (props.selectedFramework === "Vue") return "vue";
		return "jsx";
	});

	function confirmFilename(): void {
		// Remove an existing supported extension and sanitize invalid characters
		const cleanFilename = filename.value
			.trim()
			.replace(/\.(html|vue|jsx)$/i, "")
			.replace(/[<>:"/\\|?*\x00-\x1F]/g, "-")
			.replace(/[. ]+$/g, "")
			.trim();

		if (!cleanFilename) return;

		// Send the complete filename to the parent
		emit("confirm", `${cleanFilename}.${exportExtension.value}`);
	}
</script>

<style scoped></style>
