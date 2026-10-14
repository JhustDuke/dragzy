// heroPresets.ts
import type { CanvasElem } from "~/types";

// Placeholder IDs everywhere - createClone regenerates every one of these
// the moment a preset is actually placed, so these values never reach the canvas.

// 1. Centered hero - heading, subtext, single CTA button.

const centeredHeroPreset: CanvasElem = {
	id: "preset-hero-centered",
	elemType: "div",
	textContent: "",
	cssClasses: ["text-center", "py-5", "px-3", "w-full"],
	props: {},
	customStyles: {},
	children: [
		{
			id: "preset-hero-centered-heading",
			elemType: "h1",
			textContent: "Build something great",
			cssClasses: ["font-bold", "mb-3"],
			props: {},
			customStyles: {},
			children: [],
		},
		{
			id: "preset-hero-centered-subtext",
			elemType: "p",
			textContent:
				"A short line explaining what this product does and why it matters.",
			cssClasses: ["text-gray-500", "mb-4", "mx-auto"],
			props: {},
			customStyles: { maxWidth: "480px" },
			children: [],
		},
		{
			id: "preset-hero-centered-cta",
			elemType: "button",
			textContent: "Get Started",
			cssClasses: [
				"rounded-md",
				"bg-blue-600",
				"px-5",
				"py-3",
				"text-lg",
				"font-medium",
				"text-white",
				"hover:bg-blue-700",
				"focus:outline-none",
				"focus:ring-2",
				"focus:ring-blue-500",
				"focus:ring-offset-2",
			],
			props: {},
			customStyles: {},
			children: [],
		},
	],
};

// 2. Split hero - heading/text/CTA on one side, image on the other.

const splitHeroPreset: CanvasElem = {
	id: "preset-hero-split",
	elemType: "div",
	textContent: "",
	cssClasses: [
		"flex",
		"flex-col",
		"md:flex-row",
		"items-center",
		"gap-4",
		"py-5",
		"px-3",
		"w-full",
	],
	props: {},
	customStyles: {},
	children: [
		{
			id: "preset-hero-split-content",
			elemType: "div",
			textContent: "",
			cssClasses: ["flex-1"],
			props: {},
			customStyles: { minWidth: "0" },
			children: [
				{
					id: "preset-hero-split-heading",
					elemType: "h1",
					textContent: "Build something great",
					cssClasses: ["font-bold", "mb-3"],
					props: {},
					customStyles: {},
					children: [],
				},
				{
					id: "preset-hero-split-subtext",
					elemType: "p",
					textContent:
						"A short line explaining what this product does and why it matters.",
					cssClasses: ["text-gray-500", "mb-4"],
					props: {},
					customStyles: {},
					children: [],
				},
				{
					id: "preset-hero-split-cta",
					elemType: "button",
					textContent: "Get Started",
					cssClasses: [
						"rounded-md",
						"bg-blue-600",
						"px-5",
						"py-3",
						"text-lg",
						"font-medium",
						"text-white",
						"hover:bg-blue-700",
						"focus:outline-none",
						"focus:ring-2",
						"focus:ring-blue-500",
						"focus:ring-offset-2",
					],
					props: {},
					customStyles: {},
					children: [],
				},
			],
		},
		{
			id: "preset-hero-split-img",
			elemType: "img",
			textContent: "",
			cssClasses: ["max-w-full", "rounded", "flex-1"],
			props: { src: "./dragzy2.jpg", alt: "Hero image" },
			customStyles: { minWidth: "0", maxWidth: "100%" },
			children: [],
		},
	],
};

export const heroPresets = {
	hero: {
		variant: [
			{
				label: "Centered Hero — Heading, Subtext & CTA",
				preset: centeredHeroPreset,
			},
			{
				label: "Split Hero — Text & Image Side by Side",
				preset: splitHeroPreset,
			},
		],
	},
};
