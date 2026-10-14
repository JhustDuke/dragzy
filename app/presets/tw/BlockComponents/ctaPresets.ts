import type { CanvasElem } from "~/types";

// Placeholder ids everywhere - createClone regenerates every one of these
// the moment a preset is actually placed, so these values never reach the canvas

// 1. CTA banner - full-width colored band, heading + single button.
// Page-ending prompt.

const ctaBannerPreset: CanvasElem = {
	id: "preset-cta-banner",
	elemType: "div",
	textContent: "",
	cssClasses: [
		"bg-blue-600",
		"text-white",
		"text-center",
		"flex",
		"flex-col",
		"items-center",
		"gap-3",
		"py-5",
		"px-3",
		"w-full",
	],
	props: {},
	customStyles: {},
	children: [
		{
			id: "preset-cta-banner-heading",
			elemType: "h3",
			textContent: "Ready to get started?",
			cssClasses: ["font-bold", "mb-0"],
			props: {},
			customStyles: {},
			children: [],
		},
		{
			id: "preset-cta-banner-btn",
			elemType: "button",
			textContent: "Sign Up",
			cssClasses: [
				"rounded-md",
				"bg-white",
				"px-5",
				"py-3",
				"text-lg",
				"font-medium",
				"text-gray-900",
				"hover:bg-gray-100",
				"focus:outline-none",
				"focus:ring-2",
				"focus:ring-white",
				"focus:ring-offset-2",
				"focus:ring-offset-blue-600",
			],
			props: {},
			customStyles: {},
			children: [],
		},
	],
};

// 2. CTA split - supporting text on the left and action on the right.
// Common for product and service landing pages.

const ctaSplitPreset: CanvasElem = {
	id: "preset-cta-split",
	elemType: "div",
	textContent: "",
	cssClasses: [
		"bg-gray-100",
		"border",
		"border-gray-200",
		"rounded",
		"flex",
		"flex-col",
		"md:flex-row",
		"justify-between",
		"items-center",
		"gap-4",
		"p-4",
		"w-full",
	],
	props: {},
	customStyles: {},
	children: [
		{
			id: "preset-cta-split-content",
			elemType: "div",
			textContent: "",
			cssClasses: ["flex-grow"],
			props: {},
			customStyles: {},
			children: [
				{
					id: "preset-cta-split-heading",
					elemType: "h3",
					textContent: "Ready to grow your business?",
					cssClasses: ["font-bold", "mb-2"],
					props: {},
					customStyles: {},
					children: [],
				},
				{
					id: "preset-cta-split-text",
					elemType: "p",
					textContent:
						"Start using our tools today and take your workflow to the next level.",
					cssClasses: ["text-gray-500", "mb-0"],
					props: {},
					customStyles: {},
					children: [],
				},
			],
		},
		{
			id: "preset-cta-split-btn",
			elemType: "button",
			textContent: "Get Started",
			cssClasses: [
				"rounded-md",
				"bg-blue-600",
				"text-white",
				"px-4",
				"py-2",
				"hover:bg-blue-700",
				"focus:outline-none",
				"focus:ring-2",
				"focus:ring-blue-500",
				"focus:ring-offset-2",
				"whitespace-nowrap",
			],
			props: {},
			customStyles: {},
			children: [],
		},
	],
};

// 3. CTA card - compact promotional CTA.
// Useful inside a page section rather than as a full-width banner.

const ctaCardPreset: CanvasElem = {
	id: "preset-cta-card",
	elemType: "div",
	textContent: "",
	cssClasses: [
		"border",
		"border-gray-200",
		"rounded-lg",
		"shadow-sm",
		"text-center",
		"p-4",
		"w-full",
	],
	props: {},
	customStyles: {},
	children: [
		{
			id: "preset-cta-card-heading",
			elemType: "h4",
			textContent: "Start your free trial",
			cssClasses: ["font-bold"],
			props: {},
			customStyles: {},
			children: [],
		},
		{
			id: "preset-cta-card-text",
			elemType: "p",
			textContent: "No credit card required. Try everything free for 14 days.",
			cssClasses: ["text-gray-500", "mb-3"],
			props: {},
			customStyles: {},
			children: [],
		},
		{
			id: "preset-cta-card-btn",
			elemType: "button",
			textContent: "Start Free Trial",
			cssClasses: [
				"rounded-md",
				"bg-blue-600",
				"text-white",
				"px-4",
				"py-2",
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

// 4. CTA with primary and secondary actions.
// Useful when visitors may want to either start or learn more.

const ctaDualActionPreset: CanvasElem = {
	id: "preset-cta-dual-action",
	elemType: "div",
	textContent: "",
	cssClasses: [
		"bg-gray-900",
		"text-white",
		"text-center",
		"rounded-lg",
		"p-5",
		"w-full",
	],
	props: {},
	customStyles: {},
	children: [
		{
			id: "preset-cta-dual-action-heading",
			elemType: "h2",
			textContent: "Build something people love",
			cssClasses: ["font-bold", "mb-2"],
			props: {},
			customStyles: {},
			children: [],
		},
		{
			id: "preset-cta-dual-action-text",
			elemType: "p",
			textContent:
				"Everything you need to launch, manage, and grow your next project.",
			cssClasses: ["text-gray-300", "mb-4"],
			props: {},
			customStyles: {},
			children: [],
		},
		{
			id: "preset-cta-dual-action-actions",
			elemType: "div",
			textContent: "",
			cssClasses: ["flex", "justify-center", "gap-2", "flex-wrap"],
			props: {},
			customStyles: {},
			children: [
				{
					id: "preset-cta-dual-action-primary",
					elemType: "button",
					textContent: "Get Started",
					cssClasses: [
						"rounded-md",
						"bg-blue-600",
						"text-white",
						"px-4",
						"py-2",
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
				{
					id: "preset-cta-dual-action-secondary",
					elemType: "button",
					textContent: "Learn More",
					cssClasses: [
						"rounded-md",
						"border",
						"border-white",
						"bg-transparent",
						"text-white",
						"px-4",
						"py-2",
						"hover:bg-white",
						"hover:text-gray-900",
						"focus:outline-none",
						"focus:ring-2",
						"focus:ring-white",
						"focus:ring-offset-2",
						"focus:ring-offset-gray-900",
					],
					props: {},
					customStyles: {},
					children: [],
				},
			],
		},
	],
};

// 5. Newsletter CTA - email signup section.
// Common for blogs, SaaS products, and content websites.

const ctaNewsletterPreset: CanvasElem = {
	id: "preset-cta-newsletter",
	elemType: "div",
	textContent: "",
	cssClasses: ["bg-gray-100", "text-center", "p-5", "w-full"],
	props: {},
	customStyles: {},
	children: [
		{
			id: "preset-cta-newsletter-heading",
			elemType: "h3",
			textContent: "Stay in the loop",
			cssClasses: ["font-bold", "mb-2"],
			props: {},
			customStyles: {},
			children: [],
		},
		{
			id: "preset-cta-newsletter-text",
			elemType: "p",
			textContent:
				"Get product updates, useful tips, and news delivered to your inbox.",
			cssClasses: ["text-gray-500", "mb-4"],
			props: {},
			customStyles: {},
			children: [],
		},
		{
			id: "preset-cta-newsletter-form",
			elemType: "form",
			textContent: "",
			cssClasses: [
				"flex",
				"flex-col",
				"sm:flex-row",
				"justify-center",
				"gap-2",
				"flex-wrap",
				"w-full",
				"max-w-lg",
				"mx-auto",
			],
			props: {},
			customStyles: {},
			children: [
				{
					id: "preset-cta-newsletter-input",
					elemType: "input",
					textContent: "",
					cssClasses: [
						"block",
						"w-full",
						"min-w-0",
						"flex-1",
						"rounded-md",
						"border",
						"border-gray-300",
						"bg-white",
						"px-3",
						"py-2",
						"text-base",
						"text-gray-900",
						"placeholder:text-gray-400",
						"focus:border-blue-500",
						"focus:outline-none",
						"focus:ring-1",
						"focus:ring-blue-500",
					],
					props: {
						type: "email",
						placeholder: "Enter your email",
					},
					customStyles: {},
					children: [],
				},
				{
					id: "preset-cta-newsletter-btn",
					elemType: "button",
					textContent: "Subscribe",
					cssClasses: [
						"rounded-md",
						"bg-blue-600",
						"text-white",
						"px-4",
						"py-2",
						"hover:bg-blue-700",
						"focus:outline-none",
						"focus:ring-2",
						"focus:ring-blue-500",
						"focus:ring-offset-2",
						"whitespace-nowrap",
					],
					props: {
						type: "submit",
					},
					customStyles: {},
					children: [],
				},
			],
		},
	],
};

// 6. Promotional CTA - limited-time offer.
// Useful for ecommerce and promotional landing pages.

const ctaHighlightPreset: CanvasElem = {
	id: "preset-cta-highlight",
	elemType: "div",
	textContent: "",
	cssClasses: [
		"border",
		"border-blue-600",
		"rounded-lg",
		"text-center",
		"p-5",
		"w-full",
	],
	props: {},
	customStyles: {},
	children: [
		{
			id: "preset-cta-highlight-label",
			elemType: "span",
			textContent: "LIMITED TIME",
			cssClasses: [
				"inline-block",
				"rounded-full",
				"bg-blue-600",
				"text-white",
				"text-xs",
				"font-semibold",
				"px-3",
				"py-1",
				"mb-3",
			],
			props: {},
			customStyles: {},
			children: [],
		},
		{
			id: "preset-cta-highlight-heading",
			elemType: "h3",
			textContent: "Get 20% off your first order",
			cssClasses: ["font-bold", "mb-2"],
			props: {},
			customStyles: {},
			children: [],
		},
		{
			id: "preset-cta-highlight-text",
			elemType: "p",
			textContent: "Join today and save on your first purchase.",
			cssClasses: ["text-gray-500", "mb-4"],
			props: {},
			customStyles: {},
			children: [],
		},
		{
			id: "preset-cta-highlight-btn",
			elemType: "button",
			textContent: "Claim Offer",
			cssClasses: [
				"rounded-md",
				"bg-blue-600",
				"text-white",
				"px-4",
				"py-2",
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

// 7. Contact CTA - support/contact prompt.
// Useful near the bottom of service and business pages.

const ctaContactPreset: CanvasElem = {
	id: "preset-cta-contact",
	elemType: "div",
	textContent: "",
	cssClasses: [
		"bg-blue-600",
		"text-white",
		"rounded-lg",
		"flex",
		"flex-col",
		"sm:flex-row",
		"items-center",
		"gap-4",
		"p-4",
		"w-full",
	],
	props: {},
	customStyles: {},
	children: [
		{
			id: "preset-cta-contact-icon",
			elemType: "div",
			textContent: "☎",
			cssClasses: [
				"bg-white",
				"text-blue-600",
				"rounded-full",
				"flex",
				"justify-center",
				"items-center",
				"shrink-0",
			],
			props: {},
			customStyles: {
				width: "3.5rem",
				height: "3.5rem",
			},
			children: [],
		},
		{
			id: "preset-cta-contact-content",
			elemType: "div",
			textContent: "",
			cssClasses: ["flex-grow"],
			props: {},
			customStyles: {},
			children: [
				{
					id: "preset-cta-contact-heading",
					elemType: "h4",
					textContent: "Need some help?",
					cssClasses: ["font-bold", "mb-1"],
					props: {},
					customStyles: {},
					children: [],
				},
				{
					id: "preset-cta-contact-text",
					elemType: "p",
					textContent: "Our team is here to help you get started.",
					cssClasses: ["mb-0"],
					props: {},
					customStyles: {},
					children: [],
				},
			],
		},
		{
			id: "preset-cta-contact-btn",
			elemType: "button",
			textContent: "Contact Us",
			cssClasses: [
				"rounded-md",
				"bg-white",
				"text-blue-600",
				"px-4",
				"py-2",
				"font-medium",
				"hover:bg-gray-100",
				"focus:outline-none",
				"focus:ring-2",
				"focus:ring-white",
				"focus:ring-offset-2",
				"focus:ring-offset-blue-600",
				"whitespace-nowrap",
			],
			props: {},
			customStyles: {},
			children: [],
		},
	],
};

// 8. Social proof CTA - action supported by customer-focused messaging.
// Useful near the bottom of landing pages.

const ctaSocialProofPreset: CanvasElem = {
	id: "preset-cta-social-proof",
	elemType: "div",
	textContent: "",
	cssClasses: ["text-center", "p-5", "w-full"],
	props: {},
	customStyles: {},
	children: [
		{
			id: "preset-cta-social-proof-heading",
			elemType: "h2",
			textContent: "Join thousands of happy customers",
			cssClasses: ["font-bold", "mb-2"],
			props: {},
			customStyles: {},
			children: [],
		},
		{
			id: "preset-cta-social-proof-text",
			elemType: "p",
			textContent:
				"See why teams choose us to simplify their everyday workflow.",
			cssClasses: ["text-gray-500", "mb-4"],
			props: {},
			customStyles: {},
			children: [],
		},
		{
			id: "preset-cta-social-proof-btn",
			elemType: "button",
			textContent: "See How It Works",
			cssClasses: [
				"rounded-md",
				"border",
				"border-blue-600",
				"bg-transparent",
				"text-blue-600",
				"px-4",
				"py-2",
				"hover:bg-blue-600",
				"hover:text-white",
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

export const ctaPresets = {
	cta: {
		variant: [
			{
				label: "CTA Banner — Heading & Button",
				preset: ctaBannerPreset,
			},
			{
				label: "CTA Split — Content & Action",
				preset: ctaSplitPreset,
			},
			{
				label: "CTA Card — Free Trial",
				preset: ctaCardPreset,
			},
			{
				label: "CTA Dual Action — Primary & Secondary",
				preset: ctaDualActionPreset,
			},
			{
				label: "CTA Newsletter — Email Signup",
				preset: ctaNewsletterPreset,
			},
			{
				label: "CTA Highlight — Special Offer",
				preset: ctaHighlightPreset,
			},
			{
				label: "CTA Contact — Get Help",
				preset: ctaContactPreset,
			},
			{
				label: "CTA Social Proof — Customer Action",
				preset: ctaSocialProofPreset,
			},
		],
	},
};
