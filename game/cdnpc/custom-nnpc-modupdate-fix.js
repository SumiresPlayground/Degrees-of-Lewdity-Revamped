//Fix object structure for b0.8.1 and bellow
function customNNPCb081tob082(){
    if(Array.isArray(V.customNNPC.useCustom)){
        console.log("CustomNNPC modupdate: b0.8.1 and lower bug detected, updating object structure to b0.8.2 model...");

        let tmp = {
            useCustom: {},
            customData: {},
            imageset: {},
            customImageLayers: {},

            customClothesSets: {},
        };
        for (let n = 0; n < V.NPCNameList.length; n++) {
            let target = V.NPCNameList[n];
            tmp.useCustom[target] = V.customNNPC.useCustom[target];
            tmp.customData[target] = V.customNNPC.customData[target];
            tmp.imageset[target] = V.customNNPC.imageset[target];
            tmp.customImageLayers[target] = V.customNNPC.customImageLayers[target];

            //customClothesSets needs to be recursive because of NPC clothing data
            tmp.customClothesSets[target] = {};
            let entries = Object.entries(V.customNNPC.customClothesSets[target]);
            for(let k = 0; k < entries.length; k++) {
                tmp.customClothesSets[target][entries[k][0]] = entries[k][1];
            }
        }

        V.customNNPC.useCustom = tmp.useCustom;
        V.customNNPC.customData = tmp.customData;
        V.customNNPC.imageset = tmp.imageset;
        V.customNNPC.customImageLayers = tmp.customImageLayers;
        V.customNNPC.customClothesSets = tmp.customClothesSets;
        console.log("CustomNNPC modupdate: Object structure updated.");
    }
}

DefineMacro("custom-nnpc-fix-b081-b082", customNNPCb081tob082);


DefineMacro("custom-nnpc-fix-custom-layers", function(){
    const objectEntries = Object.entries(V.customNNPC.customImageLayers);
    for (let i = 0; i < objectEntries.length; i++) {
        let npcName = objectEntries[i][0];
        for (let j = 0; j < objectEntries[i][1].length; j++) {
            let current = objectEntries[i][1][j].clothingSet;

            if(Array.isArray(current)) continue;

            V.customNNPC.customImageLayers[npcName][j].clothingSet = [];
            V.customNNPC.customImageLayers[npcName][j].clothingSet.push(current);

            V.customNNPC.customImageLayers[npcName][j].filterColour = "#000000";
            V.customNNPC.customImageLayers[npcName][j].blendMode = "multiply";
            V.customNNPC.customImageLayers[npcName][j].desaturate = false;
        }
    }

    V.customNNPC.versionFixes["customLayers"] = true;
});


DefineMacro("custom-nnpc-fix-custom-layers2", function(){
    for (let i = 0; i < V.NPCNameList.length; i++) {
        let npcName = V.NPCNameList[i];
        for (let j = 0; j < V.customNNPC.customImageLayers[npcName].length; j++) {
            if(!("toggles" in V.customNNPC.customImageLayers[npcName][j])){
                V.customNNPC.customImageLayers[npcName][j].toggles = [];
            }
        }
    }

    V.customNNPC.versionFixes["customLayers2"] = true;
});

DefineMacro("custom-nnpc-fix-custom-layers3", function(){
    for (let i = 0; i < V.NPCNameList.length; i++) {
        let npcName = V.NPCNameList[i];
        for (let j = 0; j < V.customNNPC.customImageLayers[npcName].length; j++) {
            if(!("displayScene" in V.customNNPC.customImageLayers[npcName][j])){
                V.customNNPC.customImageLayers[npcName][j].displayScene = "";
            }
            if(!("displaySceneExact" in V.customNNPC.customImageLayers[npcName][j])){
                V.customNNPC.customImageLayers[npcName][j].displaySceneExact = true;
            }
        }
    }

    V.customNNPC.versionFixes["customLayers3"] = true;
});


DefineMacro("custom-nnpc-fix-custom-layers4", function(){
    for (let i = 0; i < V.NPCNameList.length; i++) {
        let npcName = V.NPCNameList[i];
        for (let j = 0; j < V.customNNPC.customImageLayers[npcName].length; j++) {
            if(!("children" in V.customNNPC.customImageLayers[npcName][j])){
                V.customNNPC.customImageLayers[npcName][j].children = [];
            }
        }
    }

    V.customNNPC.versionFixes["customLayers4"] = true;
});

DefineMacro("custom-nnpc-fix-custom-layers5", function(){
    for (let i = 0; i < V.NPCNameList.length; i++) {
        let npcName = V.NPCNameList[i];
        for (let j = 0; j < V.customNNPC.customImageLayers[npcName].length; j++) {
            if(!("sourceMask" in V.customNNPC.customImageLayers[npcName][j])){
                V.customNNPC.customImageLayers[npcName][j].sourceMask = "";
                V.customNNPC.customImageLayers[npcName][j].targetMask = "none";
                V.customNNPC.customImageLayers[npcName][j].mask = "none";
            }

            if("children" in V.customNNPC.customImageLayers[npcName][j]){
                for (let k = 0; k <  V.customNNPC.customImageLayers[npcName][j].children.length; k++) {
                    if(!("sourceMask" in V.customNNPC.customImageLayers[npcName][j].children[k])){
                        V.customNNPC.customImageLayers[npcName][j].children[k].sourceMask = "";
                        V.customNNPC.customImageLayers[npcName][j].children[k].targetMask = "none";
                        V.customNNPC.customImageLayers[npcName][j].children[k].mask = "none";
                    }
                }
            }
        }
    }

    V.customNNPC.versionFixes["customLayers5"] = true;
});

DefineMacro("custom-nnpc-fix-custom-layers6", function(){
    for (let i = 0; i < V.NPCNameList.length; i++) {
        let npcName = V.NPCNameList[i];
        for (let j = 0; j < V.customNNPC.customImageLayers[npcName].length; j++) {
            if(!("clothingLayer" in V.customNNPC.customImageLayers[npcName][j])){
                V.customNNPC.customImageLayers[npcName][j].clothingLayer = "none";
            }
        }
    }

    V.customNNPC.versionFixes["customLayers6"] = true;
});

DefineMacro("custom-nnpc-fix-hair-eye-colour", function(){
    for (let i = 0; i < V.NPCName.length; i++) {
        let hairColour = V.NPCName[i].hairColour;
        let eyeColour = V.NPCName[i].eyeColour;

        let hairColourObject = setup.colours.hair.find(hc => hc.variable === hairColour);

        if(hairColourObject !== undefined){
            V.NPCName[i].hairColour = hairColourObject.name;
        }

        let eyeColourObject = setup.colours.eyes.find(ec => ec.variable === eyeColour);

        if(eyeColourObject !== undefined){
            V.NPCName[i].eyeColour = eyeColourObject.name;
        }
    }

    V.customNNPC.versionFixes["hairEyeColour"] = true;
});