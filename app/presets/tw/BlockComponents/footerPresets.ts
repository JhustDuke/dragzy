import type { CanvasElem } from "~/types";

//placeholder ids everywhere - createClone regenerates every one of these
//the moment a preset is actually placed, so these values never reach the canvas

//1. Basic footer - simple centered copyright text.
const basicFooterPreset: CanvasElem = {
	id: "preset-footer-basic",
	elemType: "footer",
	textContent: "",
	cssClasses: ["text-center", "p-3", "bg-gray-100"],
	props: {},
	customStyles: {},
	children: [
		{
			id: "preset-footer-basic-text",
			elemType: "p",
			textContent: "© 2026 Your Company. All rights reserved.",
			cssClasses: ["mb-0"],
			props: {},
			customStyles: {},
			children: [],
		},
	],
};

//2. Simple footer - copyright line + a row of links, split left/right.

const simpleFooterPreset: CanvasElem = {
	id: "preset-footer-simple",
	elemType: "footer",
	textContent: "",
	cssClasses: [
		"flex",
		"flex-col",
		"md:flex-row",
		"justify-between",
		"items-center",
		"gap-2",
		"p-3",
		"border-t",
		"w-full",
	],
	props: {},
	customStyles: {},
	children: [
		{
			id: "preset-footer-simple-copyright",
			elemType: "p",
			textContent: "© 2026 Your Company. All rights reserved.",
			cssClasses: ["text-gray-500", "text-sm", "mb-0"],
			props: {},
			customStyles: {},
			children: [],
		},
		{
			id: "preset-footer-simple-links",
			elemType: "div",
			textContent: "",
			cssClasses: ["flex", "gap-3"],
			props: {},
			customStyles: {},
			children: [
				{
					id: "preset-footer-simple-link-privacy",
					elemType: "a",
					textContent: "Privacy",
					cssClasses: ["text-gray-600", "text-sm", "hover:text-gray-900"],
					props: { href: "#" },
					customStyles: {},
					children: [],
				},
				{
					id: "preset-footer-simple-link-terms",
					elemType: "a",
					textContent: "Terms",
					cssClasses: ["text-gray-600", "text-sm", "hover:text-gray-900"],
					props: { href: "#" },
					customStyles: {},
					children: [],
				},
				{
					id: "preset-footer-simple-link-contact",
					elemType: "a",
					textContent: "Contact",
					cssClasses: ["text-gray-600", "text-sm", "hover:text-gray-900"],
					props: { href: "#" },
					customStyles: {},
					children: [],
				},
			],
		},
	],
};

//3. Multi-column footer - brand blurb + several link columns. Common marketing-site shape.

const multiColumnFooterPreset: CanvasElem = {
	id: "preset-footer-multicolumn",
	elemType: "footer",
	textContent: "",
	cssClasses: [
		"flex",
		"flex-col",
		"md:flex-row",
		"gap-4",
		"p-4",
		"border-t",
		"w-full",
	],
	props: {},
	customStyles: {},
	children: [
		{
			id: "preset-footer-multicolumn-brand",
			elemType: "div",
			textContent: "",
			cssClasses: ["flex-1"],
			props: {},
			customStyles: { minWidth: "0" },
			children: [
				{
					id: "preset-footer-multicolumn-brand-name",
					elemType: "h6",
					textContent: "Brand",
					cssClasses: ["font-bold"],
					props: {},
					customStyles: {},
					children: [],
				},
				{
					id: "preset-footer-multicolumn-brand-blurb",
					elemType: "p",
					textContent: "A short line about the company or product.",
					cssClasses: ["text-gray-500", "text-sm"],
					props: {},
					customStyles: {},
					children: [],
				},
			],
		},
		{
			id: "preset-footer-multicolumn-links-col",
			elemType: "div",
			textContent: "",
			cssClasses: ["flex", "flex-col", "gap-1"],
			props: {},
			customStyles: {},
			children: [
				{
					id: "preset-footer-multicolumn-links-title",
					elemType: "h6",
					textContent: "Links",
					cssClasses: ["font-bold", "text-sm"],
					props: {},
					customStyles: {},
					children: [],
				},
				{
					id: "preset-footer-multicolumn-link-about",
					elemType: "a",
					textContent: "About",
					cssClasses: ["text-gray-600", "text-sm", "hover:text-gray-900"],
					props: { href: "#" },
					customStyles: {},
					children: [],
				},
				{
					id: "preset-footer-multicolumn-link-pricing",
					elemType: "a",
					textContent: "Pricing",
					cssClasses: ["text-gray-600", "text-sm", "hover:text-gray-900"],
					props: { href: "#" },
					customStyles: {},
					children: [],
				},
			],
		},
		{
			id: "preset-footer-multicolumn-legal-col",
			elemType: "div",
			textContent: "",
			cssClasses: ["flex", "flex-col", "gap-1"],
			props: {},
			customStyles: {},
			children: [
				{
					id: "preset-footer-multicolumn-legal-title",
					elemType: "h6",
					textContent: "Legal",
					cssClasses: ["font-bold", "text-sm"],
					props: {},
					customStyles: {},
					children: [],
				},
				{
					id: "preset-footer-multicolumn-link-privacy",
					elemType: "a",
					textContent: "Privacy",
					cssClasses: ["text-gray-600", "text-sm", "hover:text-gray-900"],
					props: { href: "#" },
					customStyles: {},
					children: [],
				},
				{
					id: "preset-footer-multicolumn-link-terms",
					elemType: "a",
					textContent: "Terms",
					cssClasses: ["text-gray-600", "text-sm", "hover:text-gray-900"],
					props: { href: "#" },
					customStyles: {},
					children: [],
				},
			],
		},
	],
};

//the ONE public export - keyed by category name, matching
//blockPresets.footer.variant. mirrors cardsPresets.ts / navbarPresets.ts.
export const footerPresets = {
	footer: {
		variant: [
			{ label: "Basic Footer", preset: basicFooterPreset },
			{
				label: "Simple Footer — Copyright & Links",
				preset: simpleFooterPreset,
			},
			{
				label: "Multi-Column Footer — Brand & Link Groups",
				preset: multiColumnFooterPreset,
			},
		],
	},
};
