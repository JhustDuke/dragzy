import type { CanvasElem } from "~/types";

//placeholder ids everywhere - createClone regenerates every one of these

//the moment a preset is actually placed, so these values never reach the canvas

//1. Features grid - 3-across icon, title, text blocks. "Why choose us" style section.

const featuresGridPreset: CanvasElem = {
	id: "preset-features-grid",
	elemType: "div",
	textContent: "",
	cssClasses: [
		"flex",
		"flex-col",
		"md:flex-row",
		"gap-4",
		"py-5",
		"px-3",
		"w-full",
	],
	props: {},
	customStyles: {},
	children: [
		{
			id: "preset-features-grid-item-1",
			elemType: "div",
			textContent: "",
			cssClasses: ["text-center", "flex-1"],
			props: {},
			customStyles: { minWidth: "0" },
			children: [
				{
					id: "preset-features-grid-item-1-icon",
					elemType: "span",
					textContent: "",
					cssClasses: ["fa", "fa-bolt", "fa-2x", "text-blue-600", "mb-3"],
					props: {},
					customStyles: {},
					children: [],
				},
				{
					id: "preset-features-grid-item-1-title",
					elemType: "h5",
					textContent: "Fast",
					cssClasses: ["font-bold"],
					props: {},
					customStyles: {},
					children: [],
				},
				{
					id: "preset-features-grid-item-1-text",
					elemType: "p",
					textContent:
						"A short line describing this feature and why it matters.",
					cssClasses: ["text-gray-500", "text-sm"],
					props: {},
					customStyles: {},
					children: [],
				},
			],
		},
		{
			id: "preset-features-grid-item-2",
			elemType: "div",
			textContent: "",
			cssClasses: ["text-center", "flex-1"],
			props: {},
			customStyles: { minWidth: "0" },
			children: [
				{
					id: "preset-features-grid-item-2-icon",
					elemType: "span",
					textContent: "",
					cssClasses: ["fa", "fa-shield", "fa-2x", "text-blue-600", "mb-3"],
					props: {},
					customStyles: {},
					children: [],
				},
				{
					id: "preset-features-grid-item-2-title",
					elemType: "h5",
					textContent: "Secure",
					cssClasses: ["font-bold"],
					props: {},
					customStyles: {},
					children: [],
				},
				{
					id: "preset-features-grid-item-2-text",
					elemType: "p",
					textContent:
						"A short line describing this feature and why it matters.",
					cssClasses: ["text-gray-500", "text-sm"],
					props: {},
					customStyles: {},
					children: [],
				},
			],
		},
		{
			id: "preset-features-grid-item-3",
			elemType: "div",
			textContent: "",
			cssClasses: ["text-center", "flex-1"],
			props: {},
			customStyles: { minWidth: "0" },
			children: [
				{
					id: "preset-features-grid-item-3-icon",
					elemType: "span",
					textContent: "",
					cssClasses: ["fa", "fa-heart", "fa-2x", "text-blue-600", "mb-3"],
					props: {},
					customStyles: {},
					children: [],
				},
				{
					id: "preset-features-grid-item-3-title",
					elemType: "h5",
					textContent: "Reliable",
					cssClasses: ["font-bold"],
					props: {},
					customStyles: {},
					children: [],
				},
				{
					id: "preset-features-grid-item-3-text",
					elemType: "p",
					textContent:
						"A short line describing this feature and why it matters.",
					cssClasses: ["text-gray-500", "text-sm"],
					props: {},
					customStyles: {},
					children: [],
				},
			],
		},
	],
};

export const featuresPresets = {
	features: {
		variant: [
			{
				label: "Features Grid — 3 Icon, Title & Text Blocks",
				preset: featuresGridPreset,
			},
		],
	},
};
