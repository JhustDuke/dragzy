import { buildSingleElemPresets } from "../../utils";

export const tailwindElemVariants = buildSingleElemPresets({
	div: [
		{ label: "Blank", classes: ["p-1", "my-2"] },
		{
			label: "Mobile-First",
			classes: ["flex", "flex-col", "md:flex-row", "items-start"],
		},
		{ label: "Container", classes: ["container", "mx-auto", "p-3"] },
		{ label: "Full Width", classes: ["w-full", "p-3"] },
		{
			label: "Grid 2 Col",
			classes: ["grid", "grid-cols-2", "gap-2", "p-3"],
		},
		{
			label: "Grid 3 Col",
			classes: ["grid", "grid-cols-3", "gap-2", "p-3"],
		},
		{
			label: "Grid 4 Col",
			classes: ["grid", "grid-cols-4", "gap-2", "p-3"],
		},
	],

	span: [
		{ label: "Muted", classes: ["text-gray-500"] },
		{ label: "Primary", classes: ["text-blue-600"] },
		{ label: "Success", classes: ["text-green-600"] },
		{
			label: "Badge",
			classes: [
				"inline-block",
				"rounded",
				"bg-blue-600",
				"px-2",
				"py-1",
				"text-sm",
				"font-semibold",
				"text-white",
			],
		},
	],

	p: [
		{ label: "Lead", classes: ["text-xl", "font-light"] },
		{ label: "Muted", classes: ["text-gray-500"] },
		{ label: "Small", classes: ["text-sm"] },
		{ label: "Centered", classes: ["text-center"] },
	],

	a: [
		{ label: "Link", classes: ["text-blue-600", "underline"] },
		{
			label: "Button",
			classes: [
				"inline-block",
				"rounded",
				"bg-blue-600",
				"px-4",
				"py-2",
				"text-white",
			],
		},
		{
			label: "Outline Button",
			classes: [
				"inline-block",
				"rounded",
				"border",
				"border-blue-600",
				"px-4",
				"py-2",
				"text-blue-600",
			],
		},
		{ label: "Muted Link", classes: ["text-gray-500", "underline"] },
	],

	button: [
		{
			label: "Primary",
			classes: [
				"rounded",
				"bg-blue-600",
				"px-4",
				"py-2",
				"text-white",
				"hover:bg-blue-700",
			],
		},
		{
			label: "Secondary",
			classes: [
				"rounded",
				"bg-gray-600",
				"px-4",
				"py-2",
				"text-white",
				"hover:bg-gray-700",
			],
		},
		{
			label: "Success",
			classes: [
				"rounded",
				"bg-green-600",
				"px-4",
				"py-2",
				"text-white",
				"hover:bg-green-700",
			],
		},
		{
			label: "Danger",
			classes: [
				"rounded",
				"bg-red-600",
				"px-4",
				"py-2",
				"text-white",
				"hover:bg-red-700",
			],
		},
		{
			label: "Warning",
			classes: [
				"rounded",
				"bg-yellow-400",
				"px-4",
				"py-2",
				"text-black",
				"hover:bg-yellow-500",
			],
		},
		{
			label: "Outline Primary",
			classes: [
				"rounded",
				"border",
				"border-blue-600",
				"px-4",
				"py-2",
				"text-blue-600",
				"hover:bg-blue-600",
				"hover:text-white",
			],
		},
		{
			label: "Small",
			classes: [
				"rounded",
				"bg-blue-600",
				"px-2",
				"py-1",
				"text-sm",
				"text-white",
			],
		},
		{
			label: "Large",
			classes: [
				"rounded",
				"bg-blue-600",
				"px-6",
				"py-3",
				"text-lg",
				"text-white",
			],
		},
	],

	ul: [
		{
			label: "List Group",
			classes: [
				"divide-y",
				"divide-gray-200",
				"rounded",
				"border",
				"border-gray-200",
			],
		},
		{
			label: "Numbered",
			classes: ["list-decimal", "list-inside", "space-y-1"],
		},
		{
			label: "Horizontal",
			classes: ["flex", "flex-row", "flex-wrap", "gap-2"],
		},
	],

	li: [
		{
			label: "List Item",
			classes: ["border-b", "border-gray-200", "px-4", "py-2"],
		},
		{ label: "Active", classes: ["bg-blue-600", "px-4", "py-2", "text-white"] },
		{
			label: "Disabled",
			classes: [
				"cursor-not-allowed",
				"bg-gray-100",
				"px-4",
				"py-2",
				"text-gray-400",
			],
		},
	],

	form: [
		{
			label: "Inline",
			classes: ["flex", "flex-wrap", "items-center", "gap-3"],
		},
		{ label: "Bordered", classes: ["border", "rounded", "p-3"] },
		{
			label: "Card Form",
			classes: ["rounded-lg", "bg-white", "p-6", "shadow"],
		},
	],

	label: [
		{
			label: "Form Label",
			classes: ["mb-2", "block", "text-sm", "font-medium", "text-gray-700"],
		},
		{
			label: "Inline Label",
			classes: ["inline-block", "text-sm", "font-medium", "text-gray-700"],
		},
	],

	input: [
		{
			label: "Text Input",
			classes: [
				"w-full",
				"rounded",
				"border",
				"border-gray-300",
				"px-3",
				"py-2",
				"focus:border-blue-500",
				"focus:outline-none",
			],
		},
		{
			label: "Small Input",
			classes: [
				"w-full",
				"rounded",
				"border",
				"border-gray-300",
				"px-2",
				"py-1",
				"text-sm",
			],
		},
		{
			label: "Large Input",
			classes: [
				"w-full",
				"rounded",
				"border",
				"border-gray-300",
				"px-4",
				"py-3",
				"text-lg",
			],
		},
		{
			label: "Checkbox",
			classes: [
				"h-4",
				"w-4",
				"rounded",
				"border-gray-300",
				"text-blue-600",
				"focus:ring-blue-500",
			],
		},
		{
			label: "Switch",
			classes: [
				"h-4",
				"w-4",
				"rounded-full",
				"border-gray-300",
				"bg-blue-600",
				"text-blue-600",
				"focus:ring-blue-500",
			],
		},
	],

	textarea: [
		{
			label: "Text Area",
			classes: [
				"w-full",
				"rounded",
				"border",
				"border-gray-300",
				"px-3",
				"py-2",
				"focus:border-blue-500",
				"focus:outline-none",
			],
		},
		{
			label: "Small",
			classes: [
				"w-full",
				"rounded",
				"border",
				"border-gray-300",
				"px-2",
				"py-1",
				"text-sm",
			],
		},
		{
			label: "Large",
			classes: [
				"w-full",
				"rounded",
				"border",
				"border-gray-300",
				"px-4",
				"py-3",
				"text-lg",
			],
		},
	],

	select: [
		{
			label: "Select",
			classes: [
				"w-full",
				"rounded",
				"border",
				"border-gray-300",
				"bg-white",
				"px-3",
				"py-2",
			],
		},
		{
			label: "Small Select",
			classes: [
				"w-full",
				"rounded",
				"border",
				"border-gray-300",
				"bg-white",
				"px-2",
				"py-1",
				"text-sm",
			],
		},
		{
			label: "Large Select",
			classes: [
				"w-full",
				"rounded",
				"border",
				"border-gray-300",
				"bg-white",
				"px-4",
				"py-3",
				"text-lg",
			],
		},
	],

	option: [{ label: "Default", classes: [] }],

	img: [
		{ label: "Fluid", classes: ["max-w-full", "h-auto"] },
		{ label: "Rounded", classes: ["max-w-full", "h-auto", "rounded"] },
		{ label: "Circle", classes: ["max-w-full", "h-auto", "rounded-full"] },
		{
			label: "Thumbnail",
			classes: [
				"max-w-full",
				"h-auto",
				"rounded",
				"border",
				"border-gray-300",
				"p-1",
			],
		},
		{ label: "Shadow", classes: ["max-w-full", "h-auto", "shadow"] },
		{
			label: "Responsive Rounded",
			classes: ["max-w-full", "h-auto", "rounded", "shadow"],
		},
	],
});
