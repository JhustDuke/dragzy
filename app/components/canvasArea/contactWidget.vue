<template>
	<!-- fixed tab on the left side of the page -->
	<button
		class="feedback-tab position-fixed btn teal white-text"
		@click="openFeedbackModal"
		style="bottom: 0; left: 0">
		Feedback
	</button>

	<Teleport to="body">
		<div
			v-if="isFeedbackModalOpen"
			class="feedback-overlay position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
			@mousedown.stop
			@keydown.stop>
			<div class="feedback-modal white rounded p-3">
				<h5 class="mb-3">Send feedback</h5>

				<textarea
					v-model="feedbackMessage"
					class="form-control mb-3"
					rows="6"
					placeholder="Suggestion or complaint..."></textarea>

				<div class="d-flex justify-content-between">
					<button
						class="btn btn-outline-secondary"
						@click="closeFeedbackModal"
						>Close</button
					>

					<div>
						<button
							class="btn teal white-text me-2"
							:disabled="!feedbackMessage.trim()"
							@click="openFeedbackInGmail">
							Open in Gmail
						</button>
						<button
							class="btn teal white-text"
							:disabled="!feedbackMessage.trim()"
							@click="openFeedbackInMailApp">
							Open in mail app
						</button>
					</div>
				</div>
			</div>
		</div>
	</Teleport>
</template>

<script setup lang="ts">
	import { ref } from "vue";

	const feedbackRecipientEmail = "techycardicduke@gmail.com";
	const feedbackEmailSubject = "Dragzy feedback";

	const isFeedbackModalOpen = ref(false);
	const feedbackMessage = ref("");

	function openFeedbackModal() {
		isFeedbackModalOpen.value = true;
	}

	function closeFeedbackModal() {
		isFeedbackModalOpen.value = false;
	}

	function openFeedbackInGmail() {
		// gmail compose url with recipient, subject and body prefilled
		const gmailComposeUrl =
			"https://mail.google.com/mail/?view=cm&fs=1" +
			"&to=" +
			encodeURIComponent(feedbackRecipientEmail) +
			"&su=" +
			encodeURIComponent(feedbackEmailSubject) +
			"&body=" +
			encodeURIComponent(feedbackMessage.value);

		window.open(gmailComposeUrl, "_blank");
	}

	function openFeedbackInMailApp() {
		// mailto link opens the user's default mail app
		const mailtoUrl =
			"mailto:" +
			feedbackRecipientEmail +
			"?subject=" +
			encodeURIComponent(feedbackEmailSubject) +
			"&body=" +
			encodeURIComponent(feedbackMessage.value);

		window.location.href = mailtoUrl;
	}
</script>

<style scoped>
	.feedback-tab {
		z-index: 1040;
		writing-mode: vertical-rl;
		transform: translateY(-50%) rotate(180deg);
		border-radius: 0 6px 6px 0;
	}

	.feedback-overlay {
		z-index: 2000;
		background: rgba(0, 0, 0, 0.5);
	}

	.feedback-modal {
		width: 420px;
		max-width: 90vw;
	}
</style>
