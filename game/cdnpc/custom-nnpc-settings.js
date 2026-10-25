function updateAll() {
    let width = Number(V.customNNPC.customData[V.customNNPC.settingsActivePreview]?.scalingX) / 1000;
    let height = Number(V.customNNPC.customData[V.customNNPC.settingsActivePreview]?.scalingY) / 1000;

    if (V.passage !== "Start") {
        nnpcOutfitUpdate();
    }
    Wikifier.wikifyEval("<<options-render-custom-nnpc-update T.customNNPCClothingSet>>");
    Wikifier.wikifyEval('<<options-custom-nnpc-custom-layers-list-update>>');
    Wikifier.wikifyEval("<<options-custom-nnpc-tattoos-list-update>>");

    $('#imageset-target')?.text(V.customNNPC.imageset[V.customNNPC.settingsActivePreview].replace(/[^a-zA-Z0-9_]/g, ''));
    $("#options-render-custom-nnpc").css("transform", "scale(" + width + "," + height + ")");
}

function nnpcImagePreviewUpdate() {
    let targets = "#npcSettingsMenu .macro-radiobutton," +
      "#npcSettingsMenu .macro-listbox," +
      "#npcSettingsMenu .macro-checkbox,"+
      "#npcSettingsMenu .macro-textbox,"+
      "#npcSettingsMenu .custom-nnpc-tear-slider,"+
      "#npcSettingsMenu .macro-numberbox,"+
      "#npcSettingsMenu input";

    jQuery(document).on("change", targets, (event) => {
        updateAll();
    });

    jQuery(document).on("change", "#listbox--customnnpcsettingstabactive", (event) => {
        customNNPCSettingsTabSetActive(T.CustomNNPCSettingsTabActive);
    });
    return "";
}

DefineMacroS("nnpc-image-preview-auto-update", nnpcImagePreviewUpdate);

function nnpcOutfitUpdate() {
    let activeNPC = V.customNNPC.settingsActivePreview;
    let outfit = setup.npcClothesSets.find(hs => hs.name === T.customNNPCClothingSet);

    if(!(outfit.name in V.customNNPC.customClothesSets[activeNPC])){
        console.log("Generating clothing set "+outfit.name+" for "+activeNPC);
        customNNPCDefaultClothes(outfit.name, activeNPC);
    }

    $('#nnpc-outfit-desc-id')?.text(outfit.desc);
    $('#nnpc-outfit-desc-gender')?.text(outfit.gender);
    $('#nnpc-outfit-desc-type')?.text(outfit.type);
    $('#nnpc-outfit-desc-top')?.text((outfit.clothes.upper.word !== "n" ? outfit.clothes.upper.word + " " : "") + outfit.clothes.upper.name);
    $('#nnpc-outfit-desc-bottom')?.text((outfit.clothes.lower.word !== "n" ? outfit.clothes.lower.word + " " : "") + outfit.clothes.lower.name);

    //We changed outfits, load the new one
    if (T.customNNPCClothingSet !== T.customNNPCClothingSetPrevious) {
        for (let j = 0; j < T.clothesTargets.length; j++) {
            let target = T.clothesTargets[j];
            if (outfit.name in V.customNNPC.customClothesSets[activeNPC]) {
                let newClothes = V.customNNPC.customClothesSets[activeNPC][outfit.name][target];
                if(typeof newClothes === "undefined"){
                    newClothes = setup.clothes[target].find(hs => hs.variable === "naked");
                }
                T.wornClothes[target] = newClothes.variable;
                if ("colour_options" in newClothes && newClothes.colour_options.length > 0) {
                    T.wornColours[target]["colour"] = newClothes.colour ?? newClothes.colour_options[0];

                    if("custom_colour" in newClothes){
                        T.wornColours[target]["customColour"] = newClothes.custom_colour;
                    }
                }
                if ("accessory_colour_options" in newClothes && newClothes.accessory_colour_options.length > 0) {
                    T.wornColours[target]["accessory_colour"] = newClothes.accessory_colour ?? newClothes.accessory_colour_options[0];

                    if("custom_colour_acc" in newClothes){
                        T.wornColours[target]["customColourAcc"] = newClothes.custom_colour_acc;
                    }
                }
                if ("pattern_options" in newClothes && newClothes.pattern_options.length > 0) {
                    T.wornColours[target]["pattern"] = newClothes.pattern ?? newClothes.pattern_options[0];
                }
                if ("integrity" in newClothes && newClothes.index !== 0) {
                    T.wornColours[target]["integrity"] = newClothes.integrity;
                    T.wornColours[target]["integrity_max"] = newClothes.integrity_max;
                } else {
                    T.wornColours[target]["integrity"] = 0;
                    T.wornColours[target]["integrity_max"] = 0;
                }
                if ("altposition" in newClothes && newClothes.index !== 0) {
                    T.wornColours[target]["altposition"] = newClothes.altposition;
                } else {
                    T.wornColours[target]["altposition"] = "";
                }
            }
        }
        T.customNNPCClothingSetPrevious = T.customNNPCClothingSet;
    }// We (may have) changed an item of clothing, update
    else {
        if (outfit.name === "naked") return;
        for (let j = 0; j < T.clothesTargets.length; j++) {
            let target = T.clothesTargets[j];
            let worn = T.wornClothes[target];
            if (outfit.name in V.customNNPC.customClothesSets[activeNPC]) {
                let newClothes = setup.clothes[target].find(hs => hs.variable === worn);
                let current = V.customNNPC.customClothesSets[activeNPC][outfit.name][target];
                let same = newClothes.variable === current.variable;

                // We loaded a new piece of clothing
                if (!same) {
                    if ("colour_options" in newClothes && newClothes.colour_options.length > 0) {
                        newClothes.colour = newClothes.colour_options[0];

                        if(newClothes.colour_options.includes("custom")){
                            newClothes.custom_colour = "#000000";
                        }
                    }
                    if ("accessory_colour_options" in newClothes && newClothes.accessory_colour_options.length > 0) {
                        newClothes.accessory_colour = newClothes.accessory_colour_options[0];

                        if(newClothes.accessory_colour_options.includes("custom")){
                            newClothes.custom_colour_acc = "#000000";
                        }
                    }
                    if ("pattern_options" in newClothes && newClothes.pattern_options.length > 0) {
                        newClothes.pattern = newClothes.pattern_options[0];
                    }
                    if ("integrity" in newClothes && newClothes.index !== 0) {
                        T.wornColours[target]["integrity"] = newClothes.integrity;
                        T.wornColours[target]["integrity_max"] = newClothes.integrity_max;
                    } else {
                        T.wornColours[target]["integrity"] = 0;
                        T.wornColours[target]["integrity_max"] = 0;
                    }
                    if ("altposition" in newClothes && newClothes.index !== 0) {
                        T.wornColours[target]["altposition"] = newClothes.altposition;
                    } else {
                        T.wornColours[target]["altposition"] = "";
                    }
                }
                //Piece of clothing is the current one, check _wornColours parameters for potential changes
                else {
                    newClothes = current;
                    if ("colour" in newClothes && newClothes.colour_options.length > 0) {
                        newClothes.colour = T.wornColours[target]["colour"];

                        if(newClothes.colour_options.includes("custom")){
                            newClothes.custom_colour = T.wornColours[target]["customColour"];
                        }
                    }
                    if ("accessory_colour" in newClothes && newClothes.accessory_colour_options.length > 0) {
                        newClothes.accessory_colour = T.wornColours[target]["accessory_colour"];

                        if(newClothes.accessory_colour_options.includes("custom")){
                            newClothes.custom_colour_acc = T.wornColours[target]["customColourAcc"];
                        }
                    }
                    if ("pattern" in newClothes && newClothes.pattern_options.length > 0) {
                        newClothes.pattern = T.wornColours[target]["pattern"];
                    }
                    if ("integrity" in newClothes) {
                        newClothes.integrity = T.wornColours[target]["integrity"];
                    }
                    if ("altposition" in newClothes) {
                        newClothes.altposition = T.wornColours[target]["altposition"];
                    }
                }

                V.customNNPC.customClothesSets[activeNPC][outfit.name][target] = newClothes;
            }
        }
    }
    Wikifier.wikifyEval("<<options-custom-nnpc-clothes-list-update>>");
}

function orderClothesByName(clothingA, clothingB) {
    if (clothingA.name === "naked") return -1;
    if (clothingB.name === "naked") return 1;
    else return clothingA.name.localeCompare(clothingB.name);
}

function nnpcOutfitSetupSelector() {
    let target = T.clothesTargets[T.i];
    let worn = T.wornClothes[target];

    if(worn === undefined) {
        worn = "naked";
    }

    if (T.customNNPCClothingSet === "naked") {
        T.customNPCClothingMain["Naked"] = "naked";
        return "";
    }

    let selected = setup.clothes[target].find(hs => hs.variable === worn);

    let search = T.customNNPCClothesSearchbar.toLowerCase();
    let list = [...setup.clothes[target]]

    //Setup the full list
    list.sort(orderClothesByName).forEach(clothing => {
        if (search !== "") {
            let typeIncludes = false;
            clothing.type.forEach((type) => {
                if (typeIncludes) return;

                if (type.toLowerCase().includes(search)) {
                    typeIncludes = true;
                }
            });
            if (
                typeIncludes ||
                clothing.variable === worn ||
                clothing.index === 0 ||
                clothing.name.toLowerCase().includes(search) ||
                clothing.description.toLowerCase().includes(search)) {
                T.customNPCClothingMain[clothing.name_cap] = clothing.variable;
            }
        } else {
            T.customNPCClothingMain[clothing.name_cap] = clothing.variable;
        }
    });

    if ("colour_options" in selected && selected.colour_options.length > 0) {
        for (let i = 0; i < selected.colour_options.length; i++) {
            T.customNPCClothingColour[selected.colour_options[i]] = selected.colour_options[i];
        }
        T.customNPCClothingColourSkip = false;
    } else {
        T.customNPCClothingColour = {};
    }

    if ("accessory_colour_options" in selected && selected.accessory_colour_options.length > 0) {
        for (let i = 0; i < selected.accessory_colour_options.length; i++) {
            T.customNPCClothingAcc[selected.accessory_colour_options[i]] = selected.accessory_colour_options[i];
        }
        T.customNPCClothingAccSkip = false;
    } else {
        T.customNPCClothingAcc = {};
    }

    if ("pattern_options" in selected && selected.pattern_options.length > 0) {
        for (let i = 0; i < selected.pattern_options.length; i++) {
            T.customNPCClothingPattern[selected.pattern_options[i]] = selected.pattern_options[i];
        }
        T.customNPCClothingPatternSkip = false;
    } else {
        T.customNPCClothingPattern = {};
    }

    if("altposition" in selected && selected.altposition !== "" && selected.variable !== "naked"){
        T.customNNPCClothingAltPosSkip = false;
    }

    if(selected.integrity_max !== 0  && selected.variable !== "naked"){
        T.customNNPCClothingIntegritySkip = false;
    }

    return "";
}

DefineMacroS("nnpc-outfit-setup-selector", nnpcOutfitSetupSelector);

function nnpcGetAllClothingSets() {
    if ("outfits" in V.NPCName[T.npcId]) {
        V.NPCName[T.npcId].outfits.forEach(outfitName => {
            if (outfitName === "naked") return;
            T.customNnpcAllOutfits[outfitName] = outfitName;
        })
    }

    let additionalEntries = Object.entries(V.customNNPC.customClothesSets[V.customNNPC.settingsActivePreview]);

    for (let i = 0; i < additionalEntries.length; i++ ){
        if(! (additionalEntries[i][0] in T.customNnpcAllOutfits) && additionalEntries[i][0] !== "naked"){
            T.customNnpcAllOutfits[additionalEntries[i][0]] = additionalEntries[i][0];
        }
    }
}

DefineMacro("custom-nnpc-get-all-sets", nnpcGetAllClothingSets);

function copyOutfit(outfitData, targetNpc, targetOutfit){
    for (let i = 0; i < T.clothesTargets.length; i++) {
        let target = T.clothesTargets[i];
        let newClothes = outfitData[target];

        V.customNNPC.customClothesSets[targetNpc][targetOutfit][target] = $.extend(true, {}, newClothes);
        T.wornClothes[target] = newClothes.variable;
        if ("colour_options" in newClothes && newClothes.colour_options.length > 0) {
            T.wornColours[target]["colour"] = newClothes.colour;

            if(newClothes.colour_options.includes("custom")){
                T.wornColours[target]["customColour"] = newClothes.custom_colour;
            }
        }
        if ("accessory_colour_options" in newClothes && newClothes.accessory_colour_options.length > 0) {
            T.wornColours[target]["accessory_colour"] = newClothes.accessory_colour;

            if(newClothes.accessory_colour_options.includes("custom")){
                T.wornColours[target]["customColourAcc"] = newClothes.custom_colour_acc;
            }
        }
        if ("pattern_options" in newClothes && newClothes.pattern_options.length > 0) {
            T.wornColours[target]["pattern"] = newClothes.pattern;
        }
        if ("integrity" in newClothes) {
            T.wornColours[target]["integrity"] = newClothes.integrity;
            T.wornColours[target]["integrity_max"] = newClothes.integrity_max;
        }
        if ("altposition" in newClothes) {
            T.wornColours[target]["altposition"] = newClothes.altposition;
        }
    }
}

function customNNPCCopyClothingSet() {
    console.log("Copying from: " + T.customNNPCCopyTarget + " to " + T.customNNPCClothingSet);
    if (T.customNNPCClothingSet === "naked") return;
    if (T.customNNPCCopyTarget === T.customNNPCClothingSet) return;
    let activeNPC = V.customNNPC.settingsActivePreview;

    copyOutfit(V.customNNPC.customClothesSets[activeNPC][T.customNNPCCopyTarget], activeNPC, T.customNNPCClothingSet);

    Wikifier.wikifyEval("<<options-render-custom-nnpc-update T.customNNPCClothingSet>>");
    Wikifier.wikifyEval("<<options-custom-nnpc-clothes-list-update>>");
}

DefineMacro("custom-nnpc-copy-clothing-set", customNNPCCopyClothingSet);

function customNNPCClothingTearSlider(target) {
    let max = T.wornColours[target].integrity_max;
    let current = T.wornColours[target].integrity;

    return `
	<div class="macro-numberslider">
		<input
		    class="custom-nnpc-tear-slider macro-numberslider"
			type="range"
			min="0"
			max="${max}"
			value="${current}"
			step="1"
			onChange="
				T.wornColours['${target}'].integrity = this.value;
				$('#custom-nnpc-tear-slider-indicator-${target}').text(this.value);
			"
			id="custom-nnpc-tear-slider-${target}"
			/>
		<span id="custom-nnpc-tear-slider-indicator-${target}">${current}</span>
		</div>
		`;
}

DefineMacroS("custom-nnpc-clothing-tear-slider", customNNPCClothingTearSlider);

function importNNPCSettings(jsonContent, activeNPC = "") {
    if (activeNPC === "") {
        activeNPC = V.customNNPC.settingsActivePreview
    }
    const activeId = getNNPCNameId(activeNPC);

    console.log("Importing jsonContent: ", jsonContent);

    if ("vanillaData" in jsonContent) {
        for (const [key, value] of Object.entries(jsonContent.vanillaData)) {
            V.NPCName[activeId][key] = value;
        }
    }

    if ("customData" in jsonContent) {
        for (const [key, value] of Object.entries(jsonContent.customData)) {
            V.customNNPC.customData[activeNPC][key] = value;
        }
    }

    if ("clothingSets" in jsonContent) {
        for (let i = 0; i < jsonContent.clothingSets.length; i++) {
            V.customNNPC.customClothesSets[activeNPC][jsonContent.clothingSets[i].set] = jsonContent.clothingSets[i].clothes;
        }
    }

    if ("useCustom" in jsonContent) {
        V.customNNPC.useCustom[activeNPC] = jsonContent.useCustom;
    }

    if("imageset" in jsonContent) {
        V.customNNPC.imageset[activeNPC] = jsonContent.imageset;
    }

    if("customImageLayers" in jsonContent) {
        V.customNNPC.customImageLayers[activeNPC] = jsonContent.customImageLayers;
    }
}

function stringifyCustomNpcData(activeNPC) {
    const NNPCData = getNNPCData(activeNPC);
    return JSON.stringify({
        character: activeNPC,
        clothingSets: Object.keys(V.customNNPC.customClothesSets[activeNPC]).map(key => ({
            set: key,
            clothes: V.customNNPC.customClothesSets[activeNPC][key]
        })),
        customData: V.customNNPC.customData[activeNPC],
        vanillaData: {
            eyeColour: NNPCData.eyeColour,
            hairColour: NNPCData.hairColour,
            breastsize: NNPCData.breastsize,
            outfits: NNPCData.outfits,
            skincolour: NNPCData.skincolour,
            gender: NNPCData.gender,
            pronoun: NNPCData.pronoun,
        },
        useCustom: V.customNNPC.useCustom[activeNPC],
        imageset: V.customNNPC.imageset[activeNPC],
        customImageLayers: V.customNNPC.customImageLayers[activeNPC],
    });
}

DefineMacro("custom-nnpc-file-setup", function () {
    if(SugarCube.Browser.isMobile.any()){
        jQuery(document).off('click', "#custom-nnpc-settings-import");
        jQuery(document).on('click', "#custom-nnpc-settings-import", (event) => {
            try {
                const fileContent = $("#custom-nnpc-settings-textarea").val();
                const jsonContent = JSON.parse(fileContent);

                if (!"character" in jsonContent) {
                    throw "Missing character name";
                }
                if (jsonContent.character !== V.customNNPC.settingsActivePreview) {
                    if (confirm("The saved data is for " + jsonContent.character + ", not " + V.customNNPC.settingsActivePreview + "\nAre you sure you want to import?")) {
                        importNNPCSettings(jsonContent);
                    }
                } else {
                    importNNPCSettings(jsonContent);
                }
            } catch (e) {
                alert("Error loading file: " + e);
            }
        });
    }else{
        jQuery(document).off('change', "#custom-nnpc-settings-import");
        jQuery(document).on('change', "#custom-nnpc-settings-import", (event) => {
            try {
                const reader = new FileReader();
                reader.onload = function (event) {
                    const fileContent = event.target.result;
                    const jsonContent = JSON.parse(fileContent);

                    if (!"character" in jsonContent) {
                        throw "Missing character name";
                    }
                    if (jsonContent.character !== V.customNNPC.settingsActivePreview) {
                        if (confirm("The saved data is for " + jsonContent.character + ", not " + V.customNNPC.settingsActivePreview + "\nAre you sure you want to import?")) {
                            importNNPCSettings(jsonContent);
                        }
                    } else {
                        importNNPCSettings(jsonContent);
                    }
                };
                reader.readAsText(document.getElementById("custom-nnpc-settings-import").files[0]);
            } catch (e) {
                alert("Error loading file: " + e);
            }
        });
    }

    jQuery(document).off('click', "#custom-nnpc-settings-export");
    jQuery(document).on("click", "#custom-nnpc-settings-export", (event) => {
        const activeNPC = V.customNNPC.settingsActivePreview;
        const title = activeNPC.replace(" ", "_").toLowerCase() + "_custom_settings.json";

        let jsonContent = stringifyCustomNpcData(activeNPC);

        if(SugarCube.Browser.isMobile.any()){
            $("#custom-nnpc-settings-textarea").val(jsonContent);
        }else{
            const blob = new Blob([jsonContent], {type: 'application/json'});
            saveAs(blob, title);
        }
    });
});

DefineMacro("custom-nnpc-file-setup-all", function () {
    if(SugarCube.Browser.isMobile.any()) {
        jQuery(document).off('click', "#custom-nnpc-settings-import-all");
        jQuery(document).on('click', "#custom-nnpc-settings-import-all", (event) => {
            try {
                const fileContent = $("#custom-nnpc-settings-textarea-all").val();
                const jsonContent = JSON.parse(fileContent);
                for (const [, value] of Object.entries(jsonContent)) {
                    const data = JSON.parse(value);
                    if (!"character" in data) {
                        throw "Missing character name";
                    } else {
                        importNNPCSettings(data, data.character);
                    }
                }
            } catch (e) {
                alert("Error loading file: " + e);
            }
        });
    }
    else{
        jQuery(document).off('change', "#custom-nnpc-settings-import-all");
        jQuery(document).on('change', "#custom-nnpc-settings-import-all", (event) => {
            try {
                const reader = new FileReader();
                reader.onload = function (event) {
                    const fileContent = event.target.result;
                    const jsonContent = JSON.parse(fileContent);
                    for (const [, value] of Object.entries(jsonContent)) {
                        const data = JSON.parse(value);
                        if (!"character" in data) {
                            throw "Missing character name";
                        } else {
                            importNNPCSettings(data, data.character);
                        }
                    }
                };
                reader.readAsText(document.getElementById("custom-nnpc-settings-import-all").files[0]);
            } catch (e) {
                alert("Error loading file: " + e);
            }
        });
    }

    jQuery(document).off('click', "#custom-nnpc-settings-export-all");
    jQuery(document).on("click", "#custom-nnpc-settings-export-all", (event) => {
        let jsonContent = [];
        for (let i = 0; i < V.NPCNameList.length; i++) {
            jsonContent.push(stringifyCustomNpcData(V.NPCNameList[i]));
        }
        jsonContent = JSON.stringify(jsonContent);

        if(SugarCube.Browser.isMobile.any()){
            $("#custom-nnpc-settings-textarea-all").val(jsonContent);
        }else{
            const blob = new Blob([jsonContent], {type: 'application/json'});
            saveAs(blob, "custom-nnpc-settings", jsonContent);
        }
    });
});


function importOutfitSettings(data) {
    if(!confirm(`Do you want to import outfit ${data.character} ${data.outfit} into ${V.customNNPC.settingsActivePreview} ${T.customNNPCClothingSet}?`)) {
        return;
    }

    copyOutfit(data.outfitData, V.customNNPC.settingsActivePreview, T.customNNPCClothingSet);

    Wikifier.wikifyEval("<<options-render-custom-nnpc-update T.customNNPCClothingSet>>");
    Wikifier.wikifyEval("<<options-custom-nnpc-clothes-list-update>>");
}

DefineMacro("custom-nnpc-outfit-import-export-setup", function () {
    if(SugarCube.Browser.isMobile.any()) {
        jQuery(document).off('click', "#custom-nnpc-outfit-settings-import");
        jQuery(document).on('click', "#custom-nnpc-outfit-settings-import", (event) => {
            try {
                const fileContent = $("#custom-nnpc-outfit-settings-textarea").val();
                const jsonContent = JSON.parse(fileContent);
                if (!"character" in jsonContent || !"outfit" in jsonContent) {
                    throw "Missing character name or outfit name";
                } else {
                    importOutfitSettings(jsonContent);
                }
            } catch (e) {
                alert("Error loading file: " + e);
            }
        });
    }
    else{
        jQuery(document).off('change', "#custom-nnpc-outfit-settings-import");
        jQuery(document).on('change', "#custom-nnpc-outfit-settings-import", (event) => {
            try {
                const reader = new FileReader();
                reader.onload = function (event) {
                    const fileContent = event.target.result;
                    const jsonContent = JSON.parse(fileContent);
                    if (!"character" in jsonContent || !"outfit" in jsonContent) {
                        throw "Missing character name or outfit name";
                    } else {
                        importOutfitSettings(jsonContent);
                    }
                };
                reader.readAsText(document.getElementById("custom-nnpc-outfit-settings-import").files[0]);
            } catch (e) {
                alert("Error loading file: " + e);
            }
        });
    }

    jQuery(document).off('click', "#custom-nnpc-outfit-settings-export");
    jQuery(document).on("click", "#custom-nnpc-outfit-settings-export", (event) => {
        const activeNPC = V.customNNPC.settingsActivePreview;
        const activeOutfit = T.customNNPCClothingSet;

        const title = (activeNPC + "_" + activeOutfit).replace(" ", "_").toLowerCase() + "_outfit.json";

        let jsonContent = JSON.stringify({
            character: activeNPC,
            outfit: activeOutfit,
            outfitData: V.customNNPC.customClothesSets[activeNPC][activeOutfit]
        });

        if(SugarCube.Browser.isMobile.any()){
            $("#custom-nnpc-outfit-settings-textarea").val(jsonContent);
        }else{
            const blob = new Blob([jsonContent], {type: 'application/json'});
            saveAs(blob, title, jsonContent);
        }
    });
});

function orderTattoosByName(tatA, tatB) {
    if (tatA.writing === "none") return -1;
    if (tatB.writing === "none") return 1;
    else return tatA.writing.localeCompare(tatB.writing);
}

DefineMacro("custom-nnpc-settings-tattoos", function () {
    const activeNPC = V.customNNPC.settingsActivePreview;

    for (let key in V.skin) {
        // skip useless keys
        if (key === "back" || key === "left_bottom" || key === "right_bottom") {
            continue;
        }
        T.customNNPCTattoosSpots.push(key);
    }

    let search = T.customNNPCTattoosSearchbar.toLowerCase();

    let keysList = [];
    for (let i = 0; i < T.customNNPCTattoosSpots.length; i++) {
        let target = T.customNNPCTattoosSpots[i];
        V.customNNPC.customData[activeNPC].skin[target]; //Only store the key to setup.bodywriting
        keysList.push(V.customNNPC.customData[activeNPC].skin[target]);
    }

    let list = {...setup.bodywriting};
    for (const [key, value] of Object.entries(list).sort(
        ([, tatA], [, tatb]) => {
            orderTattoosByName(tatA, tatb);
        }
    )) {
        if (search !== "") {
            if (
                keysList.indexOf(key) !== -1 ||
                value.special.toLowerCase().includes(search) ||
                value.type.toLowerCase().includes(search) ||
                value.writing.toLowerCase().includes(search)) {
                T.customNNPCTattoosOptions[value.writing] = key;
            }
        } else {
            T.customNNPCTattoosOptions[value.writing] = key;
        }
    }

    T.customNNPCTattoosOptions = {"None": "none", ...T.customNNPCTattoosOptions};
});

function customNNPCSettingsTabSetup(){
    T.CustomNNPCSettingsTabs = [];

    // Face
    T.CustomNNPCSettingsTabs.push(["Face", "custom-nnpc-settings-tab-face"]);
    T.CustomNNPCSettingsTabs.push(["Eyes", "custom-nnpc-settings-tab-eyes"]);

    // Hair
    T.CustomNNPCSettingsTabs.push(["Hair Colour", "custom-nnpc-settings-tab-hair1"]);
    T.CustomNNPCSettingsTabs.push(["Hair Colour (Fringe)", "custom-nnpc-settings-tab-hair2"]);
    T.CustomNNPCSettingsTabs.push(["Hairstyle", "custom-nnpc-settings-tab-hairstyles"]);

    // Body
    T.CustomNNPCSettingsTabs.push(["Body", "custom-nnpc-settings-tab-bodyshape"]);

    T.CustomNNPCSettingsTabs.push(["Makeup", "custom-nnpc-settings-tab-makeup"]);

    // Pubes
    T.CustomNNPCSettingsTabs.push(["Pubic Hair", "custom-nnpc-settings-tab-pubes"]);

    // Clothes
    T.CustomNNPCSettingsTabs.push(["Clothes", "custom-nnpc-settings-tab-clothes"]);
    T.CustomNNPCSettingsTabs.push(["Body Writing & Tattoos", "custom-nnpc-settings-tab-bodywriting"]);

    // Settings
    T.CustomNNPCSettingsTabs.push(["Height Scaling", "custom-nnpc-settings-tab-custom-scaling"]);
    T.CustomNNPCSettingsTabs.push(["Custom art assets", "custom-nnpc-settings-tab-custom-layers"]);
    T.CustomNNPCSettingsTabs.push(["Import Settings", "custom-nnpc-settings-tab-export"]);
    T.CustomNNPCSettingsTabs.push(["ImageSet", "custom-nnpc-settings-tab-imageset"]);


    T.CustomNNPCSettingsTabsBis = {};
    for (let i = 0; i < T.CustomNNPCSettingsTabs.length; i++) {
        T.CustomNNPCSettingsTabsBis[T.CustomNNPCSettingsTabs[i][0]] = i;
    }
}

function customNNPCSettingsTabSetActive(tabPos){
    T.CustomNNPCSettingsTabActive = tabPos;
    for (let i = 0; i < T.CustomNNPCSettingsTabs.length; i++) {
        let tabData = T.CustomNNPCSettingsTabs[i];
        if(i === T.CustomNNPCSettingsTabActive){
            $("#"+tabData[1])?.show();

            if(tabData[1] === "custom-nnpc-settings-tab-custom-scaling"){
                $(".canvas-mannequin-two").show();
            }else {
                $(".canvas-mannequin-two").hide();
            }
        }else{
            $("#"+tabData[1])?.hide();
        }
    }

    $("#listbox--customnnpcsettingstabactive").val(tabPos);
}

window.customNNPCSettingsTabSetActive = customNNPCSettingsTabSetActive;

function customNNPCSettingsTabMove(delta) {
    let currentPos = T.CustomNNPCSettingsTabActive;
    let len = T.CustomNNPCSettingsTabs.length;
    let newPos;

    if(currentPos + delta < 0) {
        newPos = len - (currentPos - delta);
    }else if (currentPos + delta >= len) {
        newPos = currentPos + delta - len;
    }else{
        newPos = currentPos + delta;
    }

    customNNPCSettingsTabSetActive(newPos);
}

DefineMacro("custom-nnpc-settings-tab-setup", customNNPCSettingsTabSetup);

DefineMacro("custom-nnpc-settings-tab-move", customNNPCSettingsTabMove);

function customNNPCAddAssetLayer(){
    const activeNPC = V.customNNPC.settingsActivePreview;
    const id = V.customNNPC.customImageLayers[activeNPC].length;
    V.customNNPC.customImageLayers[activeNPC].push(
        {
            "source":"",
            "sourceMask":"",
            "targetMask": "none",
            "mask": "none",
            "zIndex":0,
            "clothingSet":["all"],
            "filterOption":"none",
            "clothingLayer":"none",

            "filterColour":"#000000",
            "blendMode":"multiply",
            "desaturate":false,

            "toggles": [],

            "displaySceneExact": true,
            "displayScene": "",

            "children": []
        });

    const fragment = Wikifier.wikifyEval(`<<options-custom-nnpc-custom-layers-list-item $customNNPC.settingsActivePreview ${id}>>`);
    $("#options-custom-nnpc-custom-layers-list").append(fragment);
}

DefineMacro("custom-nnpc-settings-custom-layer-add", customNNPCAddAssetLayer);

DefineMacroS("custom-nnpc-settings-custom-layer-add-child", function(NPCname, n) {
    return `
        <button
        class="macro-button"
        onclick="
            V.customNNPC.customImageLayers['${NPCname}'][${n}].children.push({
                source: '',
                sourceMask: '',
                targetMask: 'none',
                mask: 'none',
                filterOption:'copy',
                filterColour:'#000000',
                blendMode:'multiply',
                desaturate:false,
                zIndex:0,
            });
            Wikifier.wikifyEval('<<options-custom-nnpc-custom-layers-list-update>>');
        "
        >
        Add child layer
        </button>
    `;
});

DefineMacroS("custom-nnpc-settings-custom-layer-scene-input", function (NPCname, n) {
    return `
        <textarea class="macro-textbox" rows="4" cols="40" onchange="
            V.customNNPC.customImageLayers['${NPCname}'][${n}].displayScene = this.value;
        ">${V.customNNPC.customImageLayers[NPCname][n].displayScene}</textarea>    
    `;
});

function customNNPCAssetLayerClothingSetCheckbox(NPCname, layerID, clothingSet){
    const idx = V.customNNPC.customImageLayers[NPCname][layerID].clothingSet.indexOf(clothingSet);
    return `
        <label>
        
        <input type="checkbox"
        class="macro-checkbox"
        onclick="
            if( ${idx} !== -1 ){
                V.customNNPC.customImageLayers['${NPCname}'][${layerID}].clothingSet.splice(${idx}, 1);
            }else{
                V.customNNPC.customImageLayers['${NPCname}'][${layerID}].clothingSet.push('${clothingSet}');
            }
        "
        ${idx !== -1 ? 'checked="checked"' : ""}
        >
        ${clothingSet}
        </label>
    `;
}

DefineMacroS("custom-nnpc-settings-custom-layer-clothing-checkbox", customNNPCAssetLayerClothingSetCheckbox);

function customNNPCAssetLayerClothingLayerRadio(NPCname, layerID, optionName){
    let current = V.customNNPC.customImageLayers[NPCname][layerID].clothingLayer;
    return `
        <input type="radio"
        class="macro-radiobutton"
        onclick="
            V.customNNPC.customImageLayers['${NPCname}'][${layerID}].clothingLayer = '${optionName}';
        "
        ${current === optionName ? 'checked="checked"' : ""}
        >
    `;
}

DefineMacroS("custom-nnpc-settings-custom-layer-clothing-layer-radio", customNNPCAssetLayerClothingLayerRadio);

function customNNPCAssetLayerClothingMaskCheckbox(NPCname, layerID, optionName, isTarget, childID=-1){
    let subType = isTarget ? "targetMask" : "mask";
    let current = ""
    if (childID === -1) {
        current = V.customNNPC.customImageLayers[NPCname][layerID][subType];
    }else{
        current = V.customNNPC.customImageLayers[NPCname][layerID].children[childID][subType];
    }
    return `
        <input type="radio"
        class="macro-radiobutton"
        value="${optionName}"
        onclick="
            let childID = ${childID}
            let selfValue = '${optionName}'
            if(childID === -1){
                V.customNNPC.customImageLayers['${NPCname}'][${layerID}]['${subType}'] = '${optionName}';
            }else{
                V.customNNPC.customImageLayers['${NPCname}'][${layerID}].children[childID]['${subType}'] = '${optionName}';  
            }
        "
        ${current === optionName ? 'checked="checked"' : ""}
        >
    `;
}

DefineMacroS("custom-nnpc-settings-custom-layer-clothing-mask-checkbox", customNNPCAssetLayerClothingMaskCheckbox);

function customNNPCAssetLayerToggleCheckboxes(NPCname, layerID){
    let ret = ``;

    const entries = Object.entries(setup.customNNPC.customLayerToggles);

    for(let i= 0; i < entries.length; i++){
        const idx = V.customNNPC.customImageLayers[NPCname][layerID].toggles.indexOf(entries[i][1]);

        ret += i !== 0 ? "|" : "";
        ret += `
        <label>
        <input type="checkbox"
        class="macro-checkbox"
        onclick="
            if ( ${idx} !== -1 ){
                V.customNNPC.customImageLayers['${NPCname}'][${layerID}].toggles.splice(${idx}, 1);
            }else{
                V.customNNPC.customImageLayers['${NPCname}'][${layerID}].toggles.push('${entries[i][1]}');
            }
        "
        ${idx !== -1 ? 'checked="checked"' : ''}
        >
        ${entries[i][0]}
        </label>
        `
    }

    return ret;
}

DefineMacroS("custom-nnpc-settings-custom-layer-toggle-checkboxes", customNNPCAssetLayerToggleCheckboxes);

function customNNPCSidebarPreviewer(){
    if(V.passage === "Start" || V.passage.includes("Settings")){
        jQuery(document).ready(function(){
            $("#img-preview .custom-nnpc-canvas-container")?.css({
                "overflow": "hidden",
                "height": "100%",
                "margin-left" : V.customNNPC.canvasContents.offset + "%",
                "width" : V.customNNPC.canvasContents.cutoff + "%",
                "transform": V.customNNPC.canvasContents.mirror ? "scale(-1, 1)" : "scale(1, 1)"
            });
            if(V.customNNPC.sidebarLayer === "back"){
                $("#img-preview .custom-nnpc-canvas-container").insertBefore("#img-preview .canvas-mannequin");
            }else{
                $("#img-preview .canvas-mannequin").insertBefore("#img-preview .custom-nnpc-canvas-container");
            }

            jQuery(document).on("change", "#custom-nnpc-sidebar-preview-controls .macro-numberbox, #custom-nnpc-sidebar-preview-controls .macro-checkbox", (event) => {
                $("#img-preview .custom-nnpc-canvas-container")?.css({
                    "margin-left" : V.customNNPC.canvasContents.offset + "%",
                    "width" : V.customNNPC.canvasContents.cutoff + "%",
                    "transform": V.customNNPC.canvasContents.mirror ? "scale(-1, 1)" : "scale(1, 1)"
                });
            });
            jQuery(document).on("change", "#custom-nnpc-sidebar-preview-controls .macro-checkbox", (event) => {
                // img-preview .custom-nnpc-canvas-container
                // img-preview .canvas-mannequin
                if(V.customNNPC.sidebarLayer === "back"){
                    $("#img-preview .custom-nnpc-canvas-container").insertBefore("#img-preview .canvas-mannequin");
                }else{
                    $("#img-preview .canvas-mannequin").insertBefore("#img-preview .custom-nnpc-canvas-container");
                }
            });
        });
    }
}

DefineMacro("custom-nnpc-sidebar-previewer",customNNPCSidebarPreviewer);

function customNNPCOptionsResetOutfit(){
    if(confirm("You are about to reset this outfit:\n\n" + "Character: "+V.customNNPC.settingsActivePreview + "\nOutfit: " + T.customNNPCClothingSet + "\n\nProceed?")){
        T.CustomNNPCForceSetReset = true;
        updateAll();
        T.CustomNNPCForceSetReset = false;
    }
}

DefineMacro("custom-nnpc-options-reset-outfit",customNNPCOptionsResetOutfit);

function customNNPCResetHairstyle(){
    if(confirm("You are about to reset " + V.customNNPC.settingsActivePreview + "'s hair. \n\nProceed?")){
        Wikifier.wikifyEval("<<custom-nnpc-reset-hairstyle " + V.customNNPC.settingsActivePreview + " true>>");
        Wikifier.wikifyEval(`<<replace "#custom-nnpc-settings-tab-hairstyles">><<custom-nnpc-settings-tab-hairstyles ${V.customNNPC.settingsActivePreview}>><</replace>>`);
        updateAll();
    }
}

DefineMacro("custom-nnpc-options-reset-hair", customNNPCResetHairstyle);