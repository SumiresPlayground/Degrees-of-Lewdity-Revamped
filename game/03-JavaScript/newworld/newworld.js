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