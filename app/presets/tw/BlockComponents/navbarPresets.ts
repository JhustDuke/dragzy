import type { CanvasElem } from "~/types";

//placeholder ids everywhere - createClone regenerates every one of these

//the moment a preset is actually placed, so these values never reach the canvas

//1. Top navbar - full navigation on large screens, compact navigation on smaller screens.

const topNavbarPreset: CanvasElem = {
	id: "preset-navbar-top",
	elemType: "nav",
	textContent: "",
	cssClasses: ["flex", "flex-wrap", "items-center", "bg-gray-100", "p-3"],
	props: {},
	customStyles: {},
	children: [
		{
			id: "preset-navbar-top-container",
			elemType: "div",
			textContent: "",
			cssClasses: ["flex", "w-full", "items-center"],
			props: {},
			customStyles: {},
			children: [
				{
					id: "preset-navbar-top-brand",
					elemType: "a",
					textContent: "Brand",
					cssClasses: ["mr-auto", "text-xl", "font-semibold", "text-gray-900"],
					props: { href: "#" },
					customStyles: {},
					children: [],
				},
				{
					id: "preset-navbar-top-links",
					elemType: "div",
					textContent: "",
					cssClasses: ["ml-auto", "flex", "flex-row", "gap-2"],
					props: {},
					customStyles: {},
					children: [
						{
							id: "preset-navbar-top-home",
							elemType: "a",
							textContent: "",
							cssClasses: ["flex", "items-center", "text-blue-600"],
							props: { href: "#" },
							customStyles: {},
							children: [
								{
									id: "preset-navbar-top-home-icon",
									elemType: "span",
									textContent: "",
									cssClasses: ["fa", "fa-home", "mr-1"],
									props: {},
									customStyles: {},
									children: [],
								},
								{
									id: "preset-navbar-top-home-text",
									elemType: "span",
									textContent: "Home",
									cssClasses: ["hidden", "md:inline"],
									props: {},
									customStyles: {},
									children: [],
								},
							],
						},
						{
							id: "preset-navbar-top-about",
							elemType: "a",
							textContent: "",
							cssClasses: [
								"flex",
								"items-center",
								"text-gray-700",
								"hover:text-blue-600",
							],
							props: { href: "#" },
							customStyles: {},
							children: [
								{
									id: "preset-navbar-top-about-icon",
									elemType: "span",
									textContent: "",
									cssClasses: ["fa", "fa-info-circle", "mr-1"],
									props: {},
									customStyles: {},
									children: [],
								},
								{
									id: "preset-navbar-top-about-text",
									elemType: "span",
									textContent: "About",
									cssClasses: ["hidden", "md:inline"],
									props: {},
									customStyles: {},
									children: [],
								},
							],
						},
						{
							id: "preset-navbar-top-contact",
							elemType: "a",
							textContent: "",
							cssClasses: [
								"flex",
								"items-center",
								"text-gray-700",
								"hover:text-blue-600",
							],
							props: { href: "#" },
							customStyles: {},
							children: [
								{
									id: "preset-navbar-top-contact-icon",
									elemType: "span",
									textContent: "",
									cssClasses: ["fa", "fa-envelope", "mr-1"],
									props: {},
									customStyles: {},
									children: [],
								},
								{
									id: "preset-navbar-top-contact-text",
									elemType: "span",
									textContent: "Contact",
									cssClasses: ["hidden", "md:inline"],
									props: {},
									customStyles: {},
									children: [],
								},
							],
						},
					],
				},
			],
		},
	],
};

//2. Bottom navbar - app-style navigation with labels hidden on smaller screens.

const bottomNavbarPreset: CanvasElem = {
	id: "preset-navbar-bottom",
	elemType: "nav",
	textContent: "",
	cssClasses: [
		"fixed",
		"bottom-0",
		"left-0",
		"z-50",
		"w-full",
		"bg-gray-900",
		"p-3",
		"text-white",
	],
	props: {},
	customStyles: {},
	children: [
		{
			id: "preset-navbar-bottom-container",
			elemType: "div",
			textContent: "",
			cssClasses: ["flex", "w-full", "justify-center"],
			props: {},
			customStyles: {},
			children: [
				{
					id: "preset-navbar-bottom-links",
					elemType: "div",
					textContent: "",
					cssClasses: ["flex", "flex-row", "gap-4"],
					props: {},
					customStyles: {},
					children: [
						{
							id: "preset-navbar-bottom-home",
							elemType: "a",
							textContent: "",
							cssClasses: [
								"flex",
								"flex-col",
								"items-center",
								"text-center",
								"text-blue-400",
							],
							props: { href: "#" },
							customStyles: {},
							children: [
								{
									id: "preset-navbar-bottom-home-icon",
									elemType: "span",
									textContent: "",
									cssClasses: ["fa", "fa-home", "mb-1"],
									props: {},
									customStyles: {},
									children: [],
								},
								{
									id: "preset-navbar-bottom-home-text",
									elemType: "span",
									textContent: "Home",
									cssClasses: ["inline"],
									props: {},
									customStyles: {},
									children: [],
								},
							],
						},
						{
							id: "preset-navbar-bottom-services",
							elemType: "a",
							textContent: "",
							cssClasses: [
								"flex",
								"flex-col",
								"items-center",
								"text-center",
								"text-gray-300",
								"hover:text-white",
							],
							props: { href: "#" },
							customStyles: {},
							children: [
								{
									id: "preset-navbar-bottom-services-icon",
									elemType: "span",
									textContent: "",
									cssClasses: ["fa", "fa-th-large", "mb-1"],
									props: {},
									customStyles: {},
									children: [],
								},
								{
									id: "preset-navbar-bottom-services-text",
									elemType: "span",
									textContent: "Services",
									cssClasses: ["inline"],
									props: {},
									customStyles: {},
									children: [],
								},
							],
						},
						{
							id: "preset-navbar-bottom-profile",
							elemType: "a",
							textContent: "",
							cssClasses: [
								"flex",
								"flex-col",
								"items-center",
								"text-center",
								"text-gray-300",
								"hover:text-white",
							],
							props: { href: "#" },
							customStyles: {},
							children: [
								{
									id: "preset-navbar-bottom-profile-icon",
									elemType: "span",
									textContent: "",
									cssClasses: ["fa", "fa-user", "mb-1"],
									props: {},
									customStyles: {},
									children: [],
								},
								{
									id: "preset-navbar-bottom-profile-text",
									elemType: "span",
									textContent: "Profile",
									cssClasses: ["inline"],
									props: {},
									customStyles: {},
									children: [],
								},
							],
						},
					],
				},
			],
		},
	],
};

//3. Centered navbar - centered brand on large screens, compact centered navigation on smaller screens.

const centeredNavbarPreset: CanvasElem = {
	id: "preset-navbar-centered",
	elemType: "nav",
	textContent: "",
	cssClasses: ["bg-gray-100", "p-3"],
	props: {},
	customStyles: {},
	children: [
		{
			id: "preset-navbar-centered-container",
			elemType: "div",
			textContent: "",
			cssClasses: [
				"flex",
				"flex-wrap",
				"items-center",
				"justify-center",
				"gap-3",
			],
			props: {},
			customStyles: {},
			children: [
				{
					id: "preset-navbar-centered-brand",
					elemType: "a",
					textContent: "Brand",
					cssClasses: ["mr-4", "text-xl", "font-semibold", "text-gray-900"],
					props: { href: "#" },
					customStyles: {},
					children: [],
				},
				{
					id: "preset-navbar-centered-links",
					elemType: "div",
					textContent: "",
					cssClasses: ["flex", "flex-row", "gap-3"],
					props: {},
					customStyles: {},
					children: [
						{
							id: "preset-navbar-centered-home",
							elemType: "a",
							textContent: "",
							cssClasses: ["flex", "items-center", "text-blue-600"],
							props: { href: "#" },
							customStyles: {},
							children: [
								{
									id: "preset-navbar-centered-home-icon",
									elemType: "span",
									textContent: "",
									cssClasses: ["fa", "fa-home", "mr-1"],
									props: {},
									customStyles: {},
									children: [],
								},
								{
									id: "preset-navbar-centered-home-text",
									elemType: "span",
									textContent: "Home",
									cssClasses: ["inline"],
									props: {},
									customStyles: {},
									children: [],
								},
							],
						},
						{
							id: "preset-navbar-centered-about",
							elemType: "a",
							textContent: "",
							cssClasses: [
								"hidden",
								"items-center",
								"text-gray-700",
								"hover:text-blue-600",
								"md:flex",
							],
							props: { href: "#" },
							customStyles: {},
							children: [
								{
									id: "preset-navbar-centered-about-icon",
									elemType: "span",
									textContent: "",
									cssClasses: ["fa", "fa-info-circle", "mr-1"],
									props: {},
									customStyles: {},
									children: [],
								},
								{
									id: "preset-navbar-centered-about-text",
									elemType: "span",
									textContent: "About",
									cssClasses: ["inline"],
									props: {},
									customStyles: {},
									children: [],
								},
							],
						},
						{
							id: "preset-navbar-centered-contact",
							elemType: "a",
							textContent: "",
							cssClasses: [
								"hidden",
								"items-center",
								"text-gray-700",
								"hover:text-blue-600",
								"lg:flex",
							],
							props: { href: "#" },
							customStyles: {},
							children: [
								{
									id: "preset-navbar-centered-contact-icon",
									elemType: "span",
									textContent: "",
									cssClasses: ["fa", "fa-envelope", "mr-1"],
									props: {},
									customStyles: {},
									children: [],
								},
								{
									id: "preset-navbar-centered-contact-text",
									elemType: "span",
									textContent: "Contact",
									cssClasses: ["inline"],
									props: {},
									customStyles: {},
									children: [],
								},
							],
						},
					],
				},
			],
		},
	],
};

//4. Search navbar - brand, links, and a search input on the right (large screens only).

const searchNavbarPreset: CanvasElem = {
	id: "preset-navbar-search",
	elemType: "nav",
	textContent: "",
	cssClasses: ["bg-gray-100", "p-3"],
	props: {},
	customStyles: {},
	children: [
		{
			id: "preset-navbar-search-container",
			elemType: "div",
			textContent: "",
			cssClasses: ["flex", "w-full", "flex-wrap", "items-center", "gap-3"],
			props: {},
			customStyles: {},
			children: [
				{
					id: "preset-navbar-search-brand",
					elemType: "a",
					textContent: "Brand",
					cssClasses: ["mr-3", "text-xl", "font-semibold", "text-gray-900"],
					props: { href: "#" },
					customStyles: {},
					children: [],
				},
				{
					id: "preset-navbar-search-links",
					elemType: "div",
					textContent: "",
					cssClasses: ["mr-auto", "flex", "flex-row", "gap-2"],
					props: {},
					customStyles: {},
					children: [
						{
							id: "preset-navbar-search-home",
							elemType: "a",
							textContent: "Home",
							cssClasses: ["text-blue-600"],
							props: { href: "#" },
							customStyles: {},
							children: [],
						},
						{
							id: "preset-navbar-search-about",
							elemType: "a",
							textContent: "About",
							cssClasses: [
								"hidden",
								"text-gray-700",
								"hover:text-blue-600",
								"md:block",
							],
							props: { href: "#" },
							customStyles: {},
							children: [],
						},
					],
				},
				{
					id: "preset-navbar-search-input",
					elemType: "input",
					textContent: "",
					cssClasses: [
						"hidden",
						"rounded",
						"border",
						"border-gray-300",
						"px-3",
						"py-2",
						"focus:border-blue-500",
						"focus:outline-none",
						"lg:block",
					],
					props: { type: "search", placeholder: "Search..." },
					customStyles: { maxWidth: "220px" },
					children: [],
				},
			],
		},
	],
};

//5. Sidebar navbar - vertical stack of icon + label links, meant for a fixed side column layout.

const sidebarNavbarPreset: CanvasElem = {
	id: "preset-navbar-sidebar",
	elemType: "nav",
	textContent: "",
	cssClasses: [
		"flex",
		"h-full",
		"flex-col",
		"bg-gray-900",
		"p-3",
		"text-white",
	],
	props: {},
	customStyles: { width: "220px" },
	children: [
		{
			id: "preset-navbar-sidebar-brand",
			elemType: "a",
			textContent: "Brand",
			cssClasses: ["mb-3", "text-xl", "font-semibold", "text-white"],
			props: { href: "#" },
			customStyles: {},
			children: [],
		},
		{
			id: "preset-navbar-sidebar-links",
			elemType: "div",
			textContent: "",
			cssClasses: ["flex", "w-full", "flex-col", "gap-2"],
			props: {},
			customStyles: {},
			children: [
				{
					id: "preset-navbar-sidebar-home",
					elemType: "a",
					textContent: "",
					cssClasses: [
						"flex",
						"items-center",
						"rounded",
						"bg-gray-700",
						"px-3",
						"py-2",
						"text-white",
					],
					props: { href: "#" },
					customStyles: {},
					children: [
						{
							id: "preset-navbar-sidebar-home-icon",
							elemType: "span",
							textContent: "",
							cssClasses: ["fa", "fa-home", "mr-2"],
							props: {},
							customStyles: {},
							children: [],
						},
						{
							id: "preset-navbar-sidebar-home-text",
							elemType: "span",
							textContent: "Home",
							cssClasses: [],
							props: {},
							customStyles: {},
							children: [],
						},
					],
				},
				{
					id: "preset-navbar-sidebar-services",
					elemType: "a",
					textContent: "",
					cssClasses: [
						"flex",
						"items-center",
						"rounded",
						"px-3",
						"py-2",
						"text-gray-300",
						"hover:bg-gray-700",
						"hover:text-white",
					],
					props: { href: "#" },
					customStyles: {},
					children: [
						{
							id: "preset-navbar-sidebar-services-icon",
							elemType: "span",
							textContent: "",
							cssClasses: ["fa", "fa-th-large", "mr-2"],
							props: {},
							customStyles: {},
							children: [],
						},
						{
							id: "preset-navbar-sidebar-services-text",
							elemType: "span",
							textContent: "Services",
							cssClasses: [],
							props: {},
							customStyles: {},
							children: [],
						},
					],
				},
				{
					id: "preset-navbar-sidebar-profile",
					elemType: "a",
					textContent: "",
					cssClasses: [
						"flex",
						"items-center",
						"rounded",
						"px-3",
						"py-2",
						"text-gray-300",
						"hover:bg-gray-700",
						"hover:text-white",
					],
					props: { href: "#" },
					customStyles: {},
					children: [
						{
							id: "preset-navbar-sidebar-profile-icon",
							elemType: "span",
							textContent: "",
							cssClasses: ["fa", "fa-user", "mr-2"],
							props: {},
							customStyles: {},
							children: [],
						},
						{
							id: "preset-navbar-sidebar-profile-text",
							elemType: "span",
							textContent: "Profile",
							cssClasses: [],
							props: {},
							customStyles: {},
							children: [],
						},
					],
				},
			],
		},
	],
};

//6. Blank navbar - just the nav surface with a brand, no link structure. Lets the user build their own nav items from scratch.

const blankNavbarPreset: CanvasElem = {
	id: "preset-navbar-blank",
	elemType: "nav",
	textContent: "",
	cssClasses: ["bg-gray-100", "p-2"],
	props: {},
	customStyles: {},
	children: [
		{
			id: "preset-navbar-blank-brand",
			elemType: "a",
			textContent: "Brand",
			cssClasses: ["text-xl", "font-semibold", "text-gray-900"],
			props: { href: "#" },
			customStyles: {},
			children: [],
		},
	],
};

//the ONE public export - keyed by category name, matching

//blockPresets.navbar.variant. mirrors cardsPresets.ts exactly.

export const navbarPresets = {
	navbar: {
		variant: [
			{
				label: "Top Navbar — Brand & Links, Collapses on Mobile",
				preset: topNavbarPreset,
			},
			{
				label: "Bottom Navbar — Fixed App-Style Tab Bar",
				preset: bottomNavbarPreset,
			},
			{
				label: "Centered Navbar — Centered Brand & Links",
				preset: centeredNavbarPreset,
			},
			{
				label: "Search Navbar — Brand, Links & Search Input",
				preset: searchNavbarPreset,
			},
			{
				label: "Sidebar Navbar — Vertical Icon + Label Links",
				preset: sidebarNavbarPreset,
			},
			{
				label: "Blank Navbar — Just the Brand, Build Your Own",
				preset: blankNavbarPreset,
			},
		],
	},
};
