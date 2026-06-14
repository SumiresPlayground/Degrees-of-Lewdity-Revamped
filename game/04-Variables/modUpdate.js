function pruneNPCName() {
    const V = State.variables;
    if (!Array.isArray(V.NPCName) || !Array.isArray(V.NPCNameList)) return;

    const allowed = new Set(setup.NPCNameList);

    for (let i = V.NPCName.length - 1; i >= 0; i--) {
        const nam = V.NPCName[i]?.nam;
        if (typeof nam !== "string" || !allowed.has(nam)) V.NPCName.splice(i, 1);
    }

    const have = new Set(V.NPCName.map(n => n?.nam).filter(n => typeof n === "string"));
    for (let i = V.NPCNameList.length - 1; i >= 0; i--) {
        if (!have.has(V.NPCNameList[i])) V.NPCNameList.splice(i, 1);
    }
}

window.pruneNPCName = pruneNPCName;