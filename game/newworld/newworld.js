function exportCreators() {
    const creators = {};
    for (const key of Object.keys(State.variables)) {
        if (key.startsWith("creator")) {
            creators[key] = State.variables[key];
        }
    }
    const blob = new Blob([JSON.stringify(creators, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "nnpc-export.json";
    a.click();
    URL.revokeObjectURL(url);
}
DefineMacro("exportCreators", exportCreators);

window.importCreators = function (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            for (const [key, value] of Object.entries(data)) {
                if (key.startsWith("creator")) {
                    State.variables[key] = value;
                }
            }
            UI.alert("NNPC sprites imported successfully!");
        } catch (err) {
            UI.alert("Invalid file: " + err.message);
        }
    };
    reader.readAsText(file[0]);
    closeOverlay()
}

function desktopMove(moveTo) {
		Engine.play(moveTo);
}
window.desktopMove = desktopMove;

function sillypregnancy(carrier, carrierSpecies, donor, donorSpecies, orifice, location = V.location) {
    if (V.settings.pregnancyType !== "silly") return null;
    if (V.worn.hands.name !== "naked" && (V.leftaction === "lefthandholdkeep" || V.rightaction === "lefthandholdkeep")) return null;
    if (V.worn.face.type.includes("face_covering") && V.NPCList[_nn].mouth === "kiss") return null;
    const pregnancyId = createPregnancy(
		"pc",
		"human",
		donor,
		donorSpecies,
		[{ name: donor, species: donorSpecies }],
		Time.date.timeStamp,
		orifice,
		location
	);
	if (V.settings.pregnancyType === "silly") {
		setKnowsDonor(pregnancyId, "pc");
		setKnowsCarrier(pregnancyId, "pc");
		T.playerIsNowPregnant = donor;
	}
	return pregnancyId;
}
window.sillypregnancy = sillypregnancy;

DefineMacro("sillypregnancy", sillypregnancy);

(() => {
	// Ensure setup exists
	if (typeof window.setup !== "object" || window.setup === null) {
		window.setup = {};
	}

	// Ensure Math.clamp exists (some forks have it, some don't)
	if (typeof Math.clamp !== "function") {
		Math.clamp = (n, min, max) => Math.min(max, Math.max(min, n));
	}

	// Valid bodysize values in build
	setup.bodySizeSteps = [-1, 0, 1, 2, 2.5, 3, 4];

	// Snap any number to nearest valid bodysize step
	setup.snapBodySize = function (v) {
		v = Number(v);
		if (!Number.isFinite(v)) return 2;

		let best = setup.bodySizeSteps[0];
		let bestD = Math.abs(v - best);

		for (const s of setup.bodySizeSteps) {
			const d = Math.abs(v - s);
			if (d < bestD) {
				best = s;
				bestD = d;
			}
		}
		return best;
	};

	// Move by N steps in the discrete list (prevents 1.5 / 3.5 etc)
	setup.stepBodySize = function (cur, stepDelta) {
		cur = setup.snapBodySize(cur);
		stepDelta = Math.trunc(Number(stepDelta) || 0);

		const arr = setup.bodySizeSteps;
		let idx = arr.indexOf(cur);
		if (idx < 0) idx = arr.indexOf(2);

		let next = idx + stepDelta;
		next = Math.clamp(next, 0, arr.length - 1);

		return arr[next];
	};
})();