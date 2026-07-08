$(document).on(":storyready", function (ev) {
	if (typeof window.HGP_getAvailablePatterns === "function") {
		console.log("[dye harder] HGP detected. Absorbing patterns.");
		const hgpPatterns = window.HGP_getAvailablePatterns();

		for (const pattern of hgpPatterns) {
			if (!Object.values(setup.dhmod.gradients).includes(pattern)) {
				const _patternName =
					pattern.charAt(0).toUpperCase() +
					pattern.slice(1).replace("-", " ");

				setup.dhmod.gradients[_patternName] = pattern;
			}
		}
	}
});
