<template>
	<div>
		<h6>Editing Elements</h6>

		<ul>
			<li>Click an element on the canvas to select it.</li>
			<li>
				The action bar appears along the top edge of the selected element. It
				shows on the main container and on any element you create or select.
			</li>
			<li>
				Quick styles sit underneath the action bar for fast changes to common
				classes on the selected element.
			</li>
			<li>
				Press <kbd>U</kbd> to open the update controls. You can change its text,
				classes, attributes, inline styles and ID.
			</li>
			<li>
				Drag an element onto another one to move it inside it. The move buttons
				in the action bar reorder it within its current parent.
			</li>
		</ul>

		<h6 class="mt-3">Action bar buttons</h6>

		<table class="table table-sm table-bordered">
			<thead>
				<tr>
					<th>Button</th>
					<th>Action</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<td><kbd>C</kbd></td>
					<td>Create an element</td>
				</tr>

				<tr>
					<td><kbd>P</kbd></td>
					<td>Templates</td>
				</tr>

				<tr>
					<td><kbd>E</kbd></td>
					<td>Export the selected element</td>
				</tr>

				<tr>
					<td><kbd>R</kbd></td>
					<td>Resize</td>
				</tr>

				<tr>
					<td><kbd>I</kbd></td>
					<td>Import</td>
				</tr>

				<tr>
					<td><kbd>D</kbd></td>
					<td>Duplicate the selected element</td>
				</tr>
			</tbody>
		</table>

		<h6 class="mt-3">Working with Images</h6>

		<ul>
			<li>
				To add an image, upload it to the image library, click it to make it
				active, then double-click the canvas where you want it.
			</li>
			<li>To change an image already on the canvas, select it first.</li>
			<li>Find the image icon in the action bar and click it.</li>
			<li>
				Pick the image you want from the library. You can upload a new one there
				first, then click it to apply it.
			</li>
			<li>
				The same library is used for background images, from the inline styles
				controls.
			</li>
		</ul>

		<p>
			Changes apply to the selected canvas element. When you resize an element,
			Dragzy warns you that it now has a fixed width or height, so you don't get
			surprised by it later.
		</p>
	</div>
</template>
