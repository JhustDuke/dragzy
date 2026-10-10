import type { CanvasElem } from "~/types";

import type { BlockPresets } from "~/presets/types";

//placeholder ids everywhere - createClone regenerates every one of these

//the moment a preset is actually placed, so these values never reach the canvas

//1. Basic card - title, text, one button. The default "just a card" option.
//7. Blank card - just the card surface (shadow, padding, minimum height), no content.
//Lets the user build their own layout inside from scratch.

const blankCardPreset: CanvasElem = {
	id: "preset-card-blank",
	elemType: "div",
	textContent: "",
	cssClasses: ["shadow", "p-3", "w-full", "mx-auto"],
	props: {},
	customStyles: { maxWidth: "540px", minHeight: "200px" },
	children: [],
};

const basicCardPreset: CanvasElem = {
	id: "preset-card-basic",
	elemType: "div",
	textContent: "",
	cssClasses: ["rounded", "p-3", "w-full", "mx-auto", "shadow"],
	props: {},
	customStyles: { maxWidth: "540px" },
	children: [
		{
			id: "preset-card-basic-title",
			elemType: "h5",
			textContent: "Card title",
			cssClasses: ["text-lg", "font-semibold", "mb-2"],
			props: {},
			customStyles: {},
			children: [],
		},
		{
			id: "preset-card-basic-text",
			elemType: "p",
			textContent:
				"Some quick example text to build on the card title and make up the bulk of the card's content.",
			cssClasses: ["text-gray-600", "mb-3"],
			props: {},
			customStyles: {},
			children: [],
		},
		{
			id: "preset-card-basic-btn",
			elemType: "button",
			textContent: "Go somewhere",
			cssClasses: [
				"inline-block",
				"rounded",
				"bg-blue-600",
				"px-4",
				"py-2",
				"text-white",
				"hover:bg-blue-700",
			],
			props: {},
			customStyles: {},
			children: [],
		},
	],
};

//2. Image-top card - img above title/text, common "product/blog" card shape.

const imageTopCardPreset: CanvasElem = {
	id: "preset-card-imgtop",
	elemType: "div",
	textContent: "",
	cssClasses: ["w-full", "mx-auto", "overflow-hidden", "rounded", "shadow"],
	props: {},
	customStyles: { maxWidth: "540px" },
	children: [
		{
			id: "preset-card-imgtop-img",
			elemType: "img",
			textContent: "",
			cssClasses: ["block", "w-full", "h-auto"],
			props: {
				src: "./dragzy2.jpg",
				alt: "Card image",
			},
			customStyles: {},
			children: [],
		},
		{
			id: "preset-card-imgtop-body",
			elemType: "div",
			textContent: "",
			cssClasses: ["p-4"],
			props: {},
			customStyles: {},
			children: [
				{
					id: "preset-card-imgtop-title",
					elemType: "h5",
					textContent: "Card title",
					cssClasses: ["text-lg", "font-semibold", "mb-2"],
					props: {},
					customStyles: {},
					children: [],
				},
				{
					id: "preset-card-imgtop-text",
					elemType: "p",
					textContent:
						"Some quick example text to build on the card title and make up the bulk of the card's content.",
					cssClasses: ["text-gray-600"],
					props: {},
					customStyles: {},
					children: [],
				},
			],
		},
	],
};

//3. Horizontal card - img beside content, side-by-side using flex utilities.

const horizontalCardPreset: CanvasElem = {
	id: "preset-card-horizontal",
	elemType: "div",
	textContent: "",
	cssClasses: [
		"flex",
		"flex-row",
		"w-full",
		"mx-auto",
		"overflow-hidden",
		"rounded",
		"shadow",
	],
	props: {},
	customStyles: { maxWidth: "540px" },
	children: [
		{
			id: "preset-card-horizontal-img",
			elemType: "img",
			textContent: "",
			cssClasses: ["max-w-full", "h-auto", "object-cover"],
			props: {
				src: "./dragzy3.jpg",
				alt: "Card image",
			},
			customStyles: { width: "150px", height: "auto" },
			children: [],
		},
		{
			id: "preset-card-horizontal-body",
			elemType: "div",
			textContent: "",
			cssClasses: ["flex-1", "p-4"],
			props: {},
			customStyles: {},
			children: [
				{
					id: "preset-card-horizontal-title",
					elemType: "h5",
					textContent: "Card title",
					cssClasses: ["text-lg", "font-semibold", "mb-2"],
					props: {},
					customStyles: {},
					children: [],
				},
				{
					id: "preset-card-horizontal-text",
					elemType: "p",
					textContent:
						"This is a wider card with supporting text alongside a custom image.",
					cssClasses: ["text-gray-600"],
					props: {},
					customStyles: {},
					children: [],
				},
			],
		},
	],
};

//4. Pricing card - plan name, price, feature list, CTA button. Common SaaS/pricing-page shape.

const pricingCardPreset: CanvasElem = {
	id: "preset-card-pricing",
	elemType: "div",
	textContent: "",
	cssClasses: ["rounded", "shadow", "p-3", "w-full", "mx-auto", "text-center"],
	props: {},
	customStyles: { maxWidth: "360px" },
	children: [
		{
			id: "preset-card-pricing-plan",
			elemType: "h5",
			textContent: "Pro Plan",
			cssClasses: ["text-lg", "font-semibold"],
			props: {},
			customStyles: {},
			children: [],
		},
		{
			id: "preset-card-pricing-price",
			elemType: "p",
			textContent: "$19/mo",
			cssClasses: ["text-4xl", "font-bold", "my-2"],
			props: {},
			customStyles: {},
			children: [],
		},
		{
			id: "preset-card-pricing-features",
			elemType: "ul",
			textContent: "",
			cssClasses: ["list-none", "text-left", "my-3", "p-0"],
			props: {},
			customStyles: {},
			children: [
				{
					id: "preset-card-pricing-feature-1",
					elemType: "li",
					textContent: "✓ Feature one",
					cssClasses: ["mb-1"],
					props: {},
					customStyles: {},
					children: [],
				},
				{
					id: "preset-card-pricing-feature-2",
					elemType: "li",
					textContent: "✓ Feature two",
					cssClasses: ["mb-1"],
					props: {},
					customStyles: {},
					children: [],
				},
				{
					id: "preset-card-pricing-feature-3",
					elemType: "li",
					textContent: "✓ Feature three",
					cssClasses: ["mb-1"],
					props: {},
					customStyles: {},
					children: [],
				},
			],
		},
		{
			id: "preset-card-pricing-btn",
			elemType: "button",
			textContent: "Choose Plan",
			cssClasses: [
				"block",
				"w-full",
				"rounded",
				"bg-blue-600",
				"px-4",
				"py-2",
				"text-white",
				"hover:bg-blue-700",
			],
			props: {},
			customStyles: {},
			children: [],
		},
	],
};

//5. Profile card - circular avatar, name, role/subtitle, short bio. Team/about-page shape.

const profileCardPreset: CanvasElem = {
	id: "preset-card-profile",
	elemType: "div",
	textContent: "",
	cssClasses: ["rounded", "shadow", "p-3", "w-full", "mx-auto", "text-center"],
	props: {},
	customStyles: { maxWidth: "300px" },
	children: [
		{
			id: "preset-card-profile-avatar",
			elemType: "img",
			textContent: "",
			cssClasses: ["rounded-full", "mx-auto", "mb-3", "object-cover"],
			props: {
				src: "./dragzy2.jpg",
				alt: "Profile photo",
			},
			customStyles: { width: "96px", height: "96px" },
			children: [],
		},
		{
			id: "preset-card-profile-name",
			elemType: "h5",
			textContent: "Jane Doe",
			cssClasses: ["text-lg", "font-semibold", "mb-0"],
			props: {},
			customStyles: {},
			children: [],
		},
		{
			id: "preset-card-profile-role",
			elemType: "p",
			textContent: "Product Designer",
			cssClasses: ["text-gray-500", "text-sm", "mb-2"],
			props: {},
			customStyles: {},
			children: [],
		},
		{
			id: "preset-card-profile-bio",
			elemType: "p",
			textContent: "A short bio or tagline goes here.",
			cssClasses: ["text-gray-600"],
			props: {},
			customStyles: {},
			children: [],
		},
	],
};

//6. Testimonial card - quote text, small avatar + name/title. Social-proof shape.

const testimonialCardPreset: CanvasElem = {
	id: "preset-card-testimonial",
	elemType: "div",
	textContent: "",
	cssClasses: ["rounded", "shadow", "p-3", "w-full", "mx-auto"],
	props: {},
	customStyles: { maxWidth: "420px" },
	children: [
		{
			id: "preset-card-testimonial-quote",
			elemType: "p",
			textContent:
				"\u201cThis product completely changed how our team works. Couldn't imagine going back.\u201d",
			cssClasses: ["text-gray-700", "italic"],
			props: {},
			customStyles: {},
			children: [],
		},
		{
			id: "preset-card-testimonial-author-row",
			elemType: "div",
			textContent: "",
			cssClasses: ["flex", "items-center", "gap-2", "mt-3"],
			props: {},
			customStyles: {},
			children: [
				{
					id: "preset-card-testimonial-avatar",
					elemType: "img",
					textContent: "",
					cssClasses: ["rounded-full", "object-cover"],
					props: {
						src: "./dragzy3.jpg",
						alt: "Author photo",
					},
					customStyles: { width: "40px", height: "40px" },
					children: [],
				},
				{
					id: "preset-card-testimonial-name",
					elemType: "p",
					textContent: "Alex Rivera, CEO at Acme",
					cssClasses: ["font-bold", "mb-0", "text-sm"],
					props: {},
					customStyles: {},
					children: [],
				},
			],
		},
	],
};

//the ONE public export for cards, keyed by category name

export const blockPresets: BlockPresets = {
	card: {
		variant: [
			{ label: "Basic Card — Title, Text & Button", preset: basicCardPreset },
			{
				label: "Product Card — Image Top, Title & Text",
				preset: imageTopCardPreset,
			},
			{
				label: "Horizontal Card — Image Beside Content",
				preset: horizontalCardPreset,
			},
			{
				label: "Pricing Card — Plan, Price & Feature List",
				preset: pricingCardPreset,
			},
			{ label: "Profile Card — Avatar, Name & Bio", preset: profileCardPreset },
			{
				label: "Testimonial Card — Quote & Author",
				preset: testimonialCardPreset,
			},
			{ label: "Blank Card — Just the Surface", preset: blankCardPreset },
		],
	},
};
