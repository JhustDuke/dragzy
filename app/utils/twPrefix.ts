//splits a class into its variants and the real class name
//e.g. "md:hover:-mt-2" -> variants "md:hover:", utility "-mt-2"
//colons inside square brackets are skipped
//e.g. "[&:hover]:flex" -> variants "[&:hover]:", utility "flex"
function splitVariantsAndUtility(className: string): {
	variants: string;
	utility: string;
} {
	let bracketDepth = 0;
	let lastVariantColonIndex = -1;

	for (let i = 0; i < className.length; i++) {
		const character = className[i];

		if (character === "[") {
			bracketDepth++;
		} else if (character === "]") {
			bracketDepth--;
		} else if (character === ":" && bracketDepth === 0) {
			lastVariantColonIndex = i;
		}
	}

	return {
		variants: className.slice(0, lastVariantColonIndex + 1),
		utility: className.slice(lastVariantColonIndex + 1),
	};
}

// Add tw- for display without modifying the original classes.
export function appendTWprefix(elemClasses: string[]): string[] {
	const prefixedClasses: string[] = [];

	for (const className of elemClasses) {
		const { variants, utility } = splitVariantsAndUtility(className);

		if (
			utility.startsWith("tw-") ||
			utility.startsWith("-tw-") ||
			utility.startsWith("[")
		) {
			//already prefixed e.g. "tw-flex", or a raw property e.g. "[mask-type:alpha]"
			prefixedClasses.push(className);
		} else if (utility.startsWith("-")) {
			//negative e.g. "-mt-2" -> "-tw-mt-2"
			prefixedClasses.push(variants + "-tw-" + utility.slice(1));
		} else {
			//normal e.g. "hover:flex" -> "hover:tw-flex"
			prefixedClasses.push(variants + "tw-" + utility);
		}
	}

	return prefixedClasses;
}

// Remove tw- before saving pure classes to the store.
export function stripTWprefix(elemClasses: string[]): string[] {
	const pureClasses: string[] = [];

	for (const className of elemClasses) {
		const { variants, utility } = splitVariantsAndUtility(className);

		if (utility.startsWith("-tw-")) {
			//negative e.g. "-tw-mt-2" -> "-mt-2"
			pureClasses.push(variants + "-" + utility.slice(4));
		} else if (utility.startsWith("tw-")) {
			//normal e.g. "hover:tw-flex" -> "hover:flex"
			pureClasses.push(variants + utility.slice(3));
		} else {
			pureClasses.push(className);
		}
	}

	return pureClasses;
}