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