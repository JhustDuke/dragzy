<template>
	<div>
		<h6>Exporting</h6>

		<ul>
			<li>Build and review your canvas first.</li>
			<li>Export as Vue, React or HTML.</li>
			<li>
				Export the whole canvas, or select one element to export just that
				element and everything inside it.
			</li>
			<li>
				For HTML, choose between a full page and a fragment. For Vue and React,
				you can leave out the main container from the export.
			</li>
			<li>Preview the result before using the exported component.</li>
		</ul>

		<div class="grey lighten-3 rounded p-3">
			<strong>Images:</strong>
			Image files are not included in the export. They are referenced by
			filename (for example <code>./image.jpg</code>), so copy your image files
			next to the exported file.
		</div>

		<p class="mt-3">
			Dragzy is designed to help you create reusable HTML components without
			hidden editor wrappers in the exported output.
		</p>
	</div>
</template>
