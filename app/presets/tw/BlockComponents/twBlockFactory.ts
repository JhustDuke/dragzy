import { blockPresets as cardBlockPresets } from "./cardsPresets";
import { navbarPresets } from "./navbarPresets";
import { formPresets } from "./formPresets";
import { heroPresets } from "./heroPresets";
import { footerPresets } from "./footerPresets";
import { ctaPresets } from "./ctaPresets";
import { featuresPresets } from "./featuresPresets";
// import { dashboardPresets } from "./dashboardPresets";
import type { BlockPresetVariant, BlockPresets } from "~/presets/types";

const blockPresets: BlockPresets = {
	...navbarPresets,
	...heroPresets,
	...featuresPresets,
	...cardBlockPresets,
	...footerPresets,
	...formPresets,
	// ...dashboardPresets,
	...ctaPresets,
};

export const blockPresetFactory = (function () {
	const categoryNames = Object.keys(blockPresets);
	const defaultCategory = categoryNames[0] ?? null;
	const defaultVariant = defaultCategory
		? blockPresets[defaultCategory]?.variant[0]?.preset ?? null
		: null;

	const blockElemsData = function () {
		return {
			presets: blockPresets,
			categoryNames,
			defaultCategory,
			defaultVariant,
		};
	};

	const getVariants = function (categoryName: string): BlockPresetVariant[] {
		return blockPresets[categoryName]?.variant ?? [];
	};

	return { blockElemsData, getVariants };
})();
