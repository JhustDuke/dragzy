import { type AllElemType } from "../../common";

//keyed directly off allElems - if allElems gains or loses an elem type,
//this object breaks at compile time until every key is accounted for.
//no separate SupportedElemType import, so there's only one place
//(allElems) that defines what elem types exist at all
export const defaultClasses: Record<AllElemType, string[]> = {
	div: [
		"flex",
		"w-full",
		"bg-green-500",
		"p-3",
		"justify-between",
		"my-2",
		"border",
		"border-gray-900",
	],
	span: [],
	p: [],
	a: ["text-blue-600"],
	button: ["px-4", "py-2", "bg-blue-600", "text-white", "rounded"],
	ul: ["list-none", "p-0", "m-0"],
	li: ["py-2", "px-3", "border-b"],
	form: ["p-3", "rounded"],
	label: ["block", "mb-2"],
	input: ["w-full", "px-3", "py-2", "border", "border-gray-300", "rounded"],
	textarea: ["w-full", "px-3", "py-2", "border", "border-gray-300", "rounded"],
	select: [
		"w-full",
		"px-3",
		"py-2",
		"border",
		"border-gray-300",
		"rounded",
		"bg-white",
	],
	img: ["max-w-full", "h-auto"],
	option: [],
	h1: ["mb-2"],
	h2: ["mb-2"],
	h3: ["mb-2"],
	h4: ["mb-2"],
	h5: ["mb-2"],
	h6: ["mb-2"],
};
