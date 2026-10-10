// presets/index.ts
import * as bs5Presets from "~/presets/bs5";
import * as twPresets from "~/presets/tw";

// picks the preset set e.g. getPresetFactories("tw")
export function getPresetFactories(framework: "bs5" | "tw") {
	if (framework === "tw") {
		return twPresets;
	}

	return bs5Presets;
}
