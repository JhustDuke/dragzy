<template>
	<div
		class="d-flex flex-column align-items-center justify-content-center min-vh-100 gap-4 p-4">
		<h3>Dragzy</h3>
		<p class="mb-0">Choose a styling framework to start building</p>

		<!-- development notice -->
		<p class="red-text fw-bold mb-0">This website is still under development</p>

		<div class="d-flex flex-wrap justify-content-center gap-3">
			<!-- plain links on purpose, so a full page load resets the stores -->
			<a
				href="/bs5"
				class="card framework-card text-decoration-none text-reset"
				style="background-image: url('https://cdn.simpleicons.org/bootstrap')">
				<div class="framework-label text-center p-2">
					<h5 class="mb-0">Bootstrap 5</h5>
					<p class="mb-0 small">Build with Bootstrap classes</p>
				</div>
			</a>

			<a
				href="/tw"
				class="card framework-card text-decoration-none text-reset"
				style="
					background-image: url('https://cdn.simpleicons.org/tailwindcss');
				">
				<div class="framework-label text-center p-2">
					<h5 class="mb-0">Tailwind</h5>
					<p class="mb-0 small">Build with Tailwind classes</p>
				</div>
			</a>
		</div>
	</div>
</template>

<style scoped>
	.framework-card {
		width: 260px;
		height: 200px;
		display: flex;
		justify-content: flex-end;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center 30%;
	}

	.framework-label {
		background: rgba(255, 255, 255, 0.85);
		border-radius: 0 0 0.375rem 0.375rem;
	}

	.framework-card:hover {
		outline: 2px solid black;
	}
</style>
