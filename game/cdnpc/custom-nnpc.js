function detectedNNPC(){
	if (V.NPCList?.[0]?.fullDescription) {
		T.customNNPCDetectedName = V.NPCList[0].fullDescription;
		T.customNNPCDetectedClothesSet = V.NPCList[0].clothes.set;
		T.customNNPCDetectedId = V.NPCNameList.indexOf(T.customNNPCDetectedName);
	} else{
		if (V.npc?.name) {
			T.customNNPCDetectedName = V.npc.name;
		} else if (V.person1?.name) {
			T.customNNPCDetectedName = V.person1.name;
		}

		if(T.customNNPCDetectedName !== ""){
			T.customNNPCDetectedId = V.NPCNameList.indexOf(T.customNNPCDetectedName);
			if(T.customNNPCDetectedId !== -1){
				T.customNNPCDetectedClothesSet = V.NPCName[T.customNNPCDetectedId].clothes.set;
			}
		}
	}
}
DefineMacro("custom-nnpc-autodetect", detectedNNPC);

function getNNPCNameId(NPCname){
		return V.NPCNameList.indexOf(NPCname);
}

function getNNPCData(NPCname){
	let id = getNNPCNameId(NPCname);
	if (id >= 0){
		let ret = $.extend(true, {}, V.NPCName[id]);

		let hairColour = setup.colours.hair.find(hc => hc.name === ret.hairColour);

		if(hairColour === undefined) {
			if (ret.hairColour === "chestnut") {
				ret.hairColour = "softbrown";
			} else if (ret.hairColour === "mousy") {
				ret.hairColour = "lightbrown";
			} else if (ret.hairColour === 0) {
				ret.hairColour = "black";
			}else if (ret.hairColour === "mint green") {
				ret.hairColour = "darklime";
			}
		}else{
			ret.hairColour = hairColour.variable;
		}

		let eyeColour = setup.colours.eyes.find(ec => ec.name === ret.eyeColour);

		if(eyeColour === undefined){
			if(ret.eyeColour === "black" || ret.eyeColour === 0){
				ret.eyeColour = "grey";
			}else if(ret.eyeColour === "brown"){
				ret.eyeColour = "hazel";
			}else if (ret.eyeColour === "mint green") {
				ret.eyeColour = "darklime";
			}
		}else{
			ret.eyeColour = eyeColour.variable;
		}

		return ret;
	}
	else return {};
}

function compileCustomLayer(layer, assetN, childN){
	let filter = [];
	if(layer.filterOption === "custom"){
		let filterTitle = "customNPCArtAsset" + assetN + (childN >= 0 ? "-"+childN : "");
		T.modeloptions.additional_filters[filterTitle] = {
			blend: layer.filterColour.toLowerCase(),
			blendMode: layer.blendMode,
			desaturate: layer.desaturate,
		};
		filter = [filterTitle];
	}
	else if(layer.filterOption !== "none"){
		filter = [layer.filterOption];
	}

	let layerOptions = {
		name: "custom-npc-asset-"+assetN + (childN >= 0 ? "-"+childN : ""),
		show: true,
		filters: filter,
		animation: "idle",
		srcfn(options){
			return "img/" + layer.source.replace(/(?:\.\.[\/\\])+/g, '');
		},
		zfn(options) {
			return Number(layer.zIndex);
		},
		defaultOptions:{
			show: false,
			brightness: 0.0,
			contrast: 1.0,
			blend: "",
			blendMode: "",
			maskBlendMode: "destination-in",
			alpha: 1.0,
			desaturate: false,
		}
	};

	if(layer.targetMask !== "none" && layer.sourceMask !== ""){
		T.modeloptions.additional_masks.push([layer.targetMask, "img/" + layer.sourceMask.replace(/(?:\.\.[\/\\])+/g, '')]);
	}
	if(layer.mask !== "none") {
		layerOptions.masksrcfn = function (options) {
			return options[layer.mask];
		};
	}

	return layerOptions;
}

function filterLayerForScene(layer) {
	if(layer.displayScene === ""){
		return true;
	}

	const scenes = layer.displayScene.split(/[\n;]+/);

	for (let i = 0; i < scenes.length; i++) {
		const scene = scenes[i];

		if(scene === ""){
			continue;
		}

		if(layer.displaySceneExact && V.passage === scene){
			return true;
		}
		else if(!layer.displaySceneExact && V.passage.includes(scene)) {
			return true;
		}
	}

	return false;
}

function filterLayerForClothing(layer) {
	switch (layer.clothingLayer) {
		case "upper":
			return !V.customNNPC.topExposed;
		case "lower":
			return !V.customNNPC.bottomExposed;
		case "none":
		default:
			return true;
	}
}

function modelPrepareNNPCBody(NPCname, setName) {
	T.modeloptions.additional_filters = {};
	T.modeloptions.additional_masks = [];

	if(NPCname === ""){
		T.modeloptions.force_defaults = true;
		return;
	}else{
		T.modeloptions.force_defaults = false;
	}

	T.modeloptions.force_naked = setName.toLowerCase() === "naked";

	T.modeloptions.model_source = V.customNNPC.imageset[NPCname] ?? "img";

	const NNPCData = getNNPCData(NPCname);
	if(!NNPCData){
		V.customNNPC.errorStack.push("Trying to render an NPC with no data");
		console.error("Trying to render an NPC with no data");
		return;
	}

	let wraithMimic = false;
	if(V.wraith !== undefined && V.wraith.mimic !== undefined){
		if(NPCname === V.wraith.mimic){
			wraithMimic = true;
		}
	}

	let arousal = V.enemyarousal/V.enemyarousalmax;

	// DoL+ multi-orgasm tweak
	if("ejaculatingMid" in V){
		if(V.ejaculatingMid === true){
			arousal = 1.0;
		}
	}

	let pain = 1.0 - (Number(V.enemyhealth)/Number(V.enemyhealthmax));

	// Body
	T.modeloptions.body_type = V.customNNPC.customData[NPCname].body_type;
	const breastSizeMap = {
		12: 6,
		8: 5,
		9: 5,
		10: 5,
		11: 5,
		6: 4,
		7: 4,
		4: 3,
		5: 3,
		3: 2,
		1: 1,
		2: 1,
	};

	T.modeloptions.breast_size = breastSizeMap[NNPCData.breastsize] || 0;
	T.modeloptions.breasts = "default";

	T.modeloptions.tanningEnabled = false;

	// Skin
	if(NPCname !== "Ivory Wraith"){
		T.modeloptions.skin_type = V.customNNPC.customData[NPCname].skintone + "gyaru";
		if(NNPCData.skincolour === "black"){
			T.modeloptions.skin_tone = 50 + V.customNNPC.customData[NPCname].skintan;
		}else{
			T.modeloptions.skin_tone = 0 + V.customNNPC.customData[NPCname].skintan;
		}
	}else {
		T.modeloptions.skin_type = "wraith";
		T.modeloptions.filters["tan"] = {
			tan: {
				blend: "#ffffff",
				blendMode: "multiply",
				desaturate: true,
			},
		};
	}

	// Face
	T.modeloptions.facestyle = "default";
	T.modeloptions.facevariant = V.customNNPC.customData[NPCname].facevariant || "default";
	T.modeloptions.freckles = V.customNNPC.customData[NPCname].freckles === true;
	T.modeloptions.brows_colour = NNPCData.hairColour;

	// Eyes
	if(V.customNNPC.customData[NPCname].heterochromic){
		T.modeloptions.left_eye = V.customNNPC.customData[NPCname].lefteye;
		T.modeloptions.right_eye = NNPCData.eyeColour;
	}else{
		T.modeloptions.left_eye = NNPCData.eyeColour;
		T.modeloptions.right_eye = NNPCData.eyeColour;
	}

	let mouth = "neutral";
	let brows = "top";
	T.modeloptions.trauma = false;
	T.modeloptions.tears = 0;
	T.modeloptions.blush = 0;

	const mood = setup.customNNPC.moodCallback[NPCname](NNPCData);

	/** Facial Expression **/
	// Blush
	{
		// Start at 3 if in seggs and add one level for every 40 arousal
		if(V.combat === 1){
			T.modeloptions.blush = Math.min(5, Math.floor(arousal/0.40) + 3);
		}
		else{
			T.modeloptions.blush = mood.blush;
		}
	}
	// Facial tweaks based on NPC mood (in order of most to least priority)

	//Ivory Wraith mimic
	if(wraithMimic){
		brows = "top";
		mouth = "neutral";
		T.modeloptions.trauma = true;
		T.modeloptions.blush = 0;
		T.modeloptions.left_eye = "red possessed";
		T.modeloptions.right_eye = "red possessed";
	}
	// High Rage
	else if(mood.anger === 2){
		brows = "low";
		mouth = "frown";
		T.modeloptions.blush = 0;
	}
	// Normal Rage
	else if(mood.anger === 1){
		brows = "mid";
		mouth = "frown";
		T.modeloptions.blush = 0;
	}
	// Trauma
	else if(mood.trauma){
		brows = "top";
		mouth = "neutral";
		T.modeloptions.blush = 0;
		T.modeloptions.trauma = true;
	}
	// Smile
	else if(mood.smile){
		mouth = "smile";
	}
	// Tears
	{
		// Add tear level based on pain from seggs
		if(V.combat === 1) {
			T.modeloptions.tears += Math.floor(Math.clamp(pain * 100, 0, 99) / 20);
		}

		// Tears Safety Clamp
		T.modeloptions.tears = Math.clamp(5, T.modeloptions.tears);

		// Set mouth to cry if pain level is greater than 2
		mouth = T.modeloptions.tears >= 2 ? "cry" : mouth;
	}
	// Tweak brows based on arousal
	if(V.combat === 1) {
		if (arousal >= 0.9) {
			brows = "orgasm";
		} else if (pain >= 0.6) {
			brows = "low";
		} else if (pain >= 0.2) {
			brows = "mid";
		}
	}

	T.modeloptions.brows = brows;
	T.modeloptions.mouth = mouth;

	if(!wraithMimic && NPCname in setup.customNNPC.expressionOverrides){
		setup.customNNPC.expressionOverrides[NPCname](mood);
	}

	// Fluids
	const cumsprite = {
		chest: [null, "1", "2", "3", "4", "4"],
		face: [null, "1", "1", "2", "2", "3"],
		feet: [null, null, "1", "1", "2", "2"],
		leftarm: [null, "1", "1", "1", "2", "2"],
		rightarm: [null, "1", "1", "1", "2", "2"],
		neck: [null, "1", "1", "2", "2", "3"],
		thigh: [null, "1", "2", "3", "4", "5"],
		tummy: [null, "1", "2", "3", "4", "5"],
	};
	const bodyparts = ["chest", "face", "feet", "leftarm", "rightarm", "neck", "thigh", "tummy"];
	bodyparts.forEach(bodypart => {
		const liquidamt = Math.clamp(V.customNNPC.orgasmCount[bodypart], 0, 5);
		T.modeloptions["cum_" + bodypart] = cumsprite[bodypart].select(liquidamt);
	});

	// Makeup
	if (V.customNNPC.customData[NPCname].makeup.eyeshadow != 0) {
		T.modeloptions.eyeshadow_colour = V.customNNPC.customData[NPCname].makeup.eyeshadow;
	}else{
		T.modeloptions.eyeshadow_colour = "";
	}

	if (V.customNNPC.customData[NPCname].makeup.mascara != 0) {
		T.modeloptions.mascara_colour = V.customNNPC.customData[NPCname].makeup.mascara;
	}else{
		T.modeloptions.mascara_colour = "";
	}

	T.modeloptions.mascara_running = V.customNNPC.customData[NPCname].makeup.mascara_running;

	if (V.customNNPC.customData[NPCname].makeup.lipstick != 0) {
		T.modeloptions.lipstick_colour = V.customNNPC.customData[NPCname].makeup.lipstick;
	}else {
		T.modeloptions.lipstick_colour = "";
	}

	if (V.customNNPC.customData[NPCname].makeup.blusher != 0) {
		T.modeloptions.blusher_colour = V.customNNPC.customData[NPCname].makeup.blusher;
	}else{
		T.modeloptions.blusher_colour = "";
	}

	// Hair
	T.modeloptions.hair_colour = NNPCData.hairColour;
	T.modeloptions.hair_colour_style = "simple";
	T.modeloptions.hair_fringe_colour_style = "simple";

	if(V.customNNPC.customData[NPCname].hair_dye.fringe_colour === false){
		T.modeloptions.hair_fringe_colour = NNPCData.hairColour;
	}else{
		T.modeloptions.hair_fringe_colour = V.customNNPC.customData[NPCname].hair_dye.fringe_colour;
	}

	if(V.customNNPC.customData[NPCname].hair_dye.side_dual_type !== false){
		T.modeloptions.hair_colour_style = "gradient";
		T.modeloptions.hair_colour_gradient = {
			style: V.customNNPC.customData[NPCname].hair_dye.side_dual_type,
			colours: [V.customNNPC.customData[NPCname].hair_dye.side_colour2, NNPCData.hairColour]
		};
	}

	let fringe_type = V.customNNPC.customData[NPCname].hair_dye.fringe_dual_type;
	if(fringe_type === "copy"){
		fringe_type = V.customNNPC.customData[NPCname].hair_dye.side_dual_type;
	}

	if(fringe_type !== false){
		T.modeloptions.hair_fringe_colour_style = "gradient";

		let col1 = V.customNNPC.customData[NPCname].hair_dye.fringe_colour !== false ?
			V.customNNPC.customData[NPCname].hair_dye.fringe_colour
			:
			NNPCData.hairColour;
		let col2 = V.customNNPC.customData[NPCname].hair_dye.fringe_colour2 !== false ?
			V.customNNPC.customData[NPCname].hair_dye.fringe_colour2
			:
			V.customNNPC.customData[NPCname].hair_dye.side_colour2;

		T.modeloptions.hair_fringe_colour_gradient = {
			style: fringe_type,
			colours: [col2, col1]
		};
	}

	if(NPCname === "Night Monster"){
		T.modeloptions.show_hair = false;
	}

	T.modeloptions.hair_sides_type = V.customNNPC.customData[NPCname].hairstyle_side;
	T.modeloptions.hair_fringe_type = V.customNNPC.customData[NPCname].hairstyle_fringe;

	T.modeloptions.hair_sides_length = V.customNNPC.customData[NPCname].hair_length_side;
	T.modeloptions.hair_fringe_length = V.customNNPC.customData[NPCname].hair_length_fringe;

	// Genitals
	let hasPenis = (NNPCData.penis !== "" && NNPCData.penis !== "none" && NNPCData.penisdesc !== "" && NNPCData.penisdesc !== "none");
	let hasVagina = (NNPCData.vagina !== "" && NNPCData.vagina !== "none");
	T.modeloptions.crotch_visible = true;

	// Penis
	if(hasPenis){
		T.modeloptions.penis_size = Math.clamp(NNPCData.penissize, 0, 6);
		T.modeloptions.balls = V.customNNPC.customData[NPCname].testicles;

		if("condom" in V.NPCList[0] && V.NPCList[0].condom.worn === true){
			T.modeloptions.penis_condom = V.NPCList[0].condom.type ?? "none";
			T.modeloptions.condom_colour = V.NPCList[0].condom.colour ?? "none";
		}

		const flaccid = arousal < 0.20 ? "soft" : "hard";
		const virgin = NNPCData.virginity.penile === true ? "-virgin-" : "-";

		T.modeloptions.penis = flaccid + virgin + T.modeloptions.penis_size;
	}

	// Pubic Hair
	T.modeloptions.pbhair_colour = NNPCData.hairColour;
	T.modeloptions.pbhair_level = V.customNNPC.customData[NPCname].pb_level;
	T.modeloptions.pbhair_strip = V.customNNPC.customData[NPCname].pb_styling;
	T.modeloptions.pbhair_balls = V.customNNPC.customData[NPCname].pb_level_testicles;

	// Pregnancy
	if(NNPCData.pregnancy?.fetus?.length > 0){
		let progress = Math.clamp(NNPCData.pregnancy.timer / NNPCData.pregnancy.timerEnd, 0, 1);
		let max = 21 + Math.clamp(NNPCData.pregnancy.fetus.length, 1, 3);
		T.modeloptions.belly = Math.floor(Math.clamp(Math.clamp(progress * Math.clamp(max + 5, 0, 24 + 5) - 5, 0, 24), 0, 24));
	}

	// tattoo
	for (const [label, value] of Object.entries(V.customNNPC.customData[NPCname].skin)) {
		if (value!=="none") {
			T.modeloptions["writing_" + label] = value;
		}
	}

	// apply option overrides
	if(NPCname in setup.customNNPC.canvasOptionsOverrides){
		for (const [option, value] of Object.entries(setup.customNNPC.canvasOptionsOverrides[NPCname])){
			T.modeloptions[option] = value;
		}
	}

	// Custom layer assets
	T.modeloptions.additional_layers_options_overrides = {};
	T.modeloptions.additional_layers = [];
	for (let i = 0; i < V.customNNPC.customImageLayers[NPCname].length; i++) {
		const layer = V.customNNPC.customImageLayers[NPCname][i];
		if(layer.clothingSet.includes("all") || layer.clothingSet.includes(setName)) {
			if(!filterLayerForScene(layer) || !filterLayerForClothing(layer)){
				continue;
			}

			// Special toggles
			if(layer.toggles.includes("chew")){
				T.modeloptions.mouth = "chew";
			}
			if(layer.toggles.includes("right-hold")){
				T.modeloptions.additional_layers_options_overrides["arm_right"] = "hold";
			}
			if(layer.toggles.includes("right-cover")){
				T.modeloptions.additional_layers_options_overrides["arm_right"] = "cover";
			}
			if(layer.toggles.includes("left-cover")){
				T.modeloptions.additional_layers_options_overrides["arm_left"] = "cover";
			}

			T.modeloptions.additional_layers.push(compileCustomLayer(layer, i,-1));

			for (let j = 0; j < layer.children.length; j++) {
				T.modeloptions.additional_layers.push(compileCustomLayer(layer.children[j], i, j));
			}
		}
	}
}
DefineMacro("modelprepare-nnpc-body",  modelPrepareNNPCBody);

function compileNNPCClothes(worn){
	if("strapon" in V.NPCList[0] && V.NPCList[0].strapon.state === "worn"){
		worn["under_lower"] = $.extend(true, {}, setup.clothes["under_lower"].find(hs => hs.variable === "straponlower"));
		worn["under_lower"].colour = V.NPCList[0].strapon.color;
		worn["under_lower"].state = "waist";
	}

	for(const [key, data] of Object.entries(worn)) {
		const integrity = data.integrity / data.integrity_max;
		let integrityKeyword = "full";
		if (integrity <= 0.2) {
			integrityKeyword = "tattered";
		} else if (integrity <= 0.5) {
			integrityKeyword = "torn";
		} else if (integrity <= 0.9) {
			integrityKeyword = "frayed";
		}

		T.modeloptions.worn[key] = {
			index : data.index,
			alpha : 1,
			integrity: integrityKeyword,
			colour: data.colour,
			accColour: data.accessory_colour,
			pattern: data.pattern,
			setup: data,
		};
		if(data.altposition){
			T.modeloptions.worn[key].alt = data.altposition;
		}
		if(data.colour === "custom"){
			T.modeloptions.additional_filters["worn_" + key + "_custom"] = {
				"blendMode" : "hard-light",
				"blend" : data.custom_colour,
				contrast: 1.4
			}
		}
		if(data.accessory_colour === "custom"){
			T.modeloptions.additional_filters["worn_" + key + "_acc_custom"] = {
				"blendMode" : "hard-light",
				"blend" : data.custom_colour_acc,
				contrast: 1.4
			}
		}
	}
	T.modeloptions.haxworn = worn;
}

function compileProp(propName){
	const key = normaliseKey(removeDiacritics(propName));
	const tendingItem = key.replace("_gift", "").replace("_basket", "");
	const tending = setup.foodstuff[tendingItem];
	const propErties = setup.props[key] ?? {};
	let prop = Object.assign({}, setup.propDefaults, propErties, {
		name: normaliseFileName(key),
		colour: (propErties.colour?.length ? propErties.colour.random() : false),
		accColour: (propErties.accColour?.length ? propErties.accColour.random() : false),
	});

	if (prop.hasLevels) prop.name += propLevels(key);

	if (key.startsWith("antique")) {
		prop.name = prop.name.replace(/^antique[_-]?/, "").trim();
		prop.folder = "antique";
	} else if (tending && !propErties.folder) {
		prop.folder = tending.prop_folder;
		if (["food", "drink"].includes(prop.folder)) prop.zIndex = "handheld_over_sleeve";
	}
	if (prop.overUnderSplit || prop.overUnderAccSplit) prop.zIndex = "handheld_over_sleeve";

	prop.show =
		(T.modeloptions.arm_left !== "none" && T.modeloptions.arm_right !== "none") || T.modeloptions.prop.armPosition === "handsfree";

	return prop;
}
window.customNNPC_compileProp = compileProp;

function assignNPCSexFlipped(NPCname){
	if(V.customNNPC.cd[NPCname].fringe_style !== false){
		T.modeloptions.hair_fringe_type = V.customNNPC.cd[NPCname].fringe_style;
	}
	if(V.customNNPC.cd[NPCname].side_style !== false){
		T.modeloptions.hair_sides_type = V.customNNPC.cd[NPCname].side_style;
	}
}

function compileLayerOverrides(options){
	const layerOverrides = Object.entries(T.modeloptions.additional_layers_options_overrides);
	for(let i = 0; i < layerOverrides.length; i++) {
		T.modeloptions[layerOverrides[i][0]] = layerOverrides[i][1];
	}
}

function modelPrepareNNPCClothes(NPCname, setName, reset=false) {
	const NNPCData = getNNPCData(NPCname);
	let worn = {};

	if(typeof(playerIsXChanged) === "function" && NNPCData.xchange?.genderflipEffect){
		assignNPCSexFlipped(NPCname);
	}
	else if(V.customNNPC.cd[NPCname].discovered){
		let gender = NNPCData.pronoun;
		let clothingGender = setup.npcClothesSets.find(outfit => outfit.name === setName).gender;
		if(clothingGender !== 'n' && gender !== clothingGender){
			assignNPCSexFlipped(NPCname);
		}
	}

	if(setName.toLowerCase() === "naked"){
		// Chastity devices override
		if(NNPCData.chastity.penis !== ""){
			worn["genitals"] = setup.clothes["genitals"].find(hs => hs.name === NNPCData.chastity.penis);
		}else if (NNPCData.chastity.vagina !== ""){
			worn["genitals"] = setup.clothes["genitals"].find(hs => hs.name === NNPCData.chastity.vagina);
		}
		compileLayerOverrides();
		compileNNPCClothes(worn);
		return;
	}

	if(!(setName in V.customNNPC.customClothesSets[NPCname]) || reset === true){
		console.log("Generating clothing set "+setName+" for "+NPCname);
		customNNPCDefaultClothes(setName, NPCname);
	}

	worn = $.extend( true, {}, V.customNNPC.customClothesSets[NPCname][setName]);

	if(NPCname === "Sydney" && V.customNNPC.sydney.sync === true){
		if(V.sydney.glasses === "glasses" || V.sydney.glasses === "playerbought"){
			worn["face"] = $.extend(true, {}, setup.clothes["face"].find(hs => hs.variable === "glasses"));
			worn["face"].colour = "black";
		}else{
			worn["face"] = $.extend(true, {}, setup.clothes["face"][0]);
		}
	}

	if(NPCname in setup.customNNPC.sceneTweaks){
		for (let i = 0; i < setup.customNNPC.sceneTweaks[NPCname].length; i++) {
			const tweak = setup.customNNPC.sceneTweaks[NPCname][i];

			if(!tweak.exact){
				if(!V.passage.includes(tweak.passage)){
					continue;
				}
			}else{
				if(V.passage !== tweak.passage){
					continue;
				}
			}

			tweak.callback(worn);
		}
	}

	// Chastity devices override
	if(NNPCData.chastity.penis !== ""){
		worn["genitals"] = setup.clothes["genitals"].find(hs => hs.name === NNPCData.chastity.penis);
	}else if (NNPCData.chastity.vagina !== ""){
		worn["genitals"] = setup.clothes["genitals"].find(hs => hs.name === NNPCData.chastity.vagina);
	}

	// Hoodie overwrite
	if("hoodposition" in worn["upper"]){
		if(worn["upper"].variable === worn["head"]?.variable){
			worn["upper"].hoodposition = "up";
		}else{
			worn["upper"].hoodposition = "down";
		}
	}

	// Breasts
	let tempbreast = NNPCData.breastsize;
	if (clothingData("upper", worn.upper, "bustresize") != null) {
		tempbreast += clothingData("upper", worn.upper, "bustresize");
	}
	if (clothingData("under_upper", worn.under_upper, "bustresize") != null) {
		tempbreast += clothingData("under_upper", worn.under_upper, "bustresize");
	}
	if (clothingData("over_upper", worn.over_upper, "bustresize") != null) {
		tempbreast += clothingData("over_upper", worn.over_upper, "bustresize");
	}
	// using the default values of $breastsizemin and $breastsizemax, to avoid issues with the values changing during the game
	let perceived_breastsize = Math.clamp(tempbreast, 0, setup.breastsizes.length - 1);
	T.modeloptions.breast_size = Math.floor(perceived_breastsize / 2);

	/*
	const hairstyle = setup.hairstyles.sides.find(hs => hs.variable === V.customNNPC.customData[NPCname].hairstyle_side);
	if (hairstyle.alt_head_type && hairstyle.alt_head_type.includes(setup.clothes.head[clothesIndex("head", V.worn.head)].head_type)) {
		T.modeloptions.hair_sides_type = hairstyle.alt;
	} else {
		T.modeloptions.hair_sides_type = V.hairtype;
	}
	*/

	T.modeloptions.breasts =
		!worn.upper.type.includes("naked") || !worn.under_upper.type.includes("naked");

	T.modeloptions.crotch_visible = !!V.customNNPC.bottomExposed;

	T.modeloptions.hood_down = worn.upper.hoodposition === "down";

	if (
		((worn.over_head.hood === 1 && worn.over_head.mask_img !== 1) || (worn.head.hood === 1 && worn.head.mask_img !== 1)) &&
		worn.upper.hoodposition === "down"
	) {
		T.modeloptions.hair_sides_length = "short";
		T.modeloptions.hair_fringe_length = "short";
	}

	Object.assign(T.modeloptions, getClothingOptions());
	const overrides = V.modeloptionsOverride;
	if (Object.keys(overrides).length > 0) {
		for (const [key, value] of Object.entries(overrides)) {
			T.modeloptions[key] = value;
		}
	}


	// Arm position
	T.modeloptions.arm_right  =
		setup.clothes_all_slots.some(slot => ["right_hold", "clutch"].includes(worn[slot]?.holdPosition)) ||
		(worn.handheld.name !== "naked" && !["left_cover", "left_idle", "idle_both"].includes(worn.handheld?.holdPosition))
	? "cover" : "idle";
	T.modeloptions.arm_left = setup.clothes_all_slots.some(slot => worn[slot]?.holdPosition === "left_hold") ? "cover" : "idle";

	if("prop_arm_position" in T.modeloptions){
		switch (T.modeloptions.prop_arm_position){
			case "hold":
				T.modeloptions.arm_right = "hold";
				break;
			case "hold_both":
				T.modeloptions.arm_right = "hold";
				T.modeloptions.arm_left = "cover";
				break;
			default:
				break;
		}
	}

	// Tucking
	if(!worn.neck_tucked){
		worn.neck_tucked = false;
	}
	if(!worn.lower_tucked){
		worn.lower_tucked = false;
	}
	if(!worn.upper_tucked){
		worn.upper_tucked = false;
	}
	if(!worn.altsleeve){
		worn.altsleeve = false;
	}
	T.modeloptions.neck_tucked = worn.neck_tucked;
	T.modeloptions.upper_tucked = worn.upper_tucked && !setup.clothes.upper[clothesIndex("upper", worn.upper)].notuck && worn.upper.outfitPrimary === undefined;
	T.modeloptions.lower_tucked = !worn.feet.notuck && !worn.lower.notuck && worn.lower_tucked;
	T.modeloptions.alt_sleeve = worn.altsleeve && "altsleeve" in worn["upper"];
	if(T.modeloptions.alt_sleeve){
		worn["upper"].altsleeve = "alt";
	}else {
		worn["upper"].altsleeve = "none";
	}
	compileLayerOverrides();
	compileNNPCClothes(worn);
}

DefineMacro("modelprepare-nnpc-clothes", modelPrepareNNPCClothes);

function modelPrepareNNPCNaked() {
	let worn = {};

	for (const type in setup.clothes) {
		worn[type] = setup.clothes[type][0];
	}

	T.modeloptions.force_naked = true;

	compileNNPCClothes(worn);
}

DefineMacro("modelprepare-nnpc-naked", modelPrepareNNPCNaked);

function customNNPCTrackOrgasmPosition(action){
	<!--
"chest", "face", "feet", "leftarm", "rightarm", "neck", "thigh", "tummy"
-->
	let allTargets = ["chest", "face", "feet", "leftarm", "rightarm", "neck", "thigh", "tummy"];
	let arms = ["leftarm","rightarm"];

	let targets = [];
	if (action.includes("othermouth")){
		targets.push("face");
		targets.push("neck");
	}else if(action.includes("othervagina")){
		targets.push("thigh");
		targets.push("tummy");
	}else if(action.includes("otheranus")){
		targets.push("thigh");
	}else if(action.includes("otherpenis")){
		targets.push("tummy");
		targets.push("chest");
	}else if(action.includes("otherhand")){
		targets.push("chest");
		targets.push(arms[Math.floor(Math.random() * arms.length)]);
	}else if(action.includes("otherfeet")){
		targets.push("feet");
	}else{
		targets.push(allTargets[Math.floor(Math.random() * allTargets.length)]);
	}
	return targets;
}

function customNNPCTrackOrgasm(){
	if(V.combat !== 1) {
		return;
	}

	let penisTargets = customNNPCTrackOrgasmPosition(V.penisuse);
	let vaginaTargets = customNNPCTrackOrgasmPosition(V.vaginause);

	//$customNNPC.orgasmCount.X
	for (let i = 0; i < penisTargets.length; i++) {
		V.customNNPC.orgasmCount[penisTargets[i]]++;
	}
	for (let i = 0; i < vaginaTargets.length; i++) {
		V.customNNPC.orgasmCount[vaginaTargets[i]]++;
	}

}

DefineMacro("custom-nnpc-track-orgasm", customNNPCTrackOrgasm);

DefineMacroS("custom-nnpc-canvas-resizer", function (NPCName){
	let width = Number(V.customNNPC.customData[NPCName]?.scalingX) / 1000;
	let height = Number(V.customNNPC.customData[NPCName]?.scalingY) / 1000;

	let canvasSize = V.options.bigCanvas === true ? 358 : 256;

	return `<style>
	#custom-nnpc-header-renderer .custom-nnpc-canvas,
	#custom-nnpc-footer-renderer .custom-nnpc-canvas
	 {
		height :${V.customNNPC.canvasSize}px;
		width : ${V.customNNPC.canvasSize}px; 
	}
	#img .custom-nnpc-canvas-container{
		overflow : hidden;
		margin-left:${V.customNNPC.canvasContents.offset}%;
		width: ${V.customNNPC.canvasContents.cutoff}%;
		transform: 
			scale(${V.customNNPC.canvasContents.mirror ? "-":""}${width}, ${height})
			translate(0px, ${((1-height)*100)/2}%);
			;
	}
	#img .custom-nnpc-canvas
    {
    	height: ${canvasSize}px;
    	width: ${canvasSize}px;
		transform: scale(${width}, ${height});
	}
	</style>`;
});

DefineMacro("render-custom-nnpc", function(){
	let fragment = Wikifier.wikifyEval("<<render-custom-nnpc-content>>");

	if(V.creatorname === "cdnpc"){
		jQuery(document).ready(function(){
			if(V.customNNPC.canvasContents.overflow){
				$("#img").css({
					"overflow": "initial",
					"z-index": "99999",
				});
			}
			$("#img").append(fragment);
			if(V.customNNPC.sidebarLayer === "back"){
				$("#img .custom-nnpc-canvas-container").insertBefore("#img .mainCanvas");
			}
		});
	}
	else if(V.customNNPC.canvasLocation === "header"){
		jQuery(document).ready(function(){
			$("#custom-nnpc-header-renderer").append(fragment);
		});
	}
	else if(V.customNNPC.canvasLocation === "footer"){
		jQuery(document).ready(function(){
			$("#custom-nnpc-footer-renderer").append(fragment);
		});
	}
});
