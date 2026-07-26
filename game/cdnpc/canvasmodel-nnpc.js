function copyLayers(){
	let layers = $.extend( true, {}, Renderer.CanvasModels.main.layers );

	const layersToDelete = [
		"npcpresentback",
		"npcpresentfront",
		"background",
		"backgroundBed",
		"backgroundchair",
		"backgrounddecoration",
		"backgrounddesk",
		"backgroundposter",
		"backgroundwallpaper",
		"backgroundwardrobe",
		"backgroundwindowsill",
		"backgroundowlplushie",
		"backgroundtable",
		"backgroundpc",
		"backgroundtank",
		"backgroundtankdecorations",
		"backgroundtankfeeder",
		"backgroundparasite",
		"foregroundmirror",
		"foreground",
	];

	for (let i = 0; i < layersToDelete.length; i++) {
		if(layersToDelete[i] in layers){
			delete layers[layersToDelete[i]];
		}
	}

	return layers;
}

Renderer.CanvasModels.customNNPC = {
	name: "customNNPC",
	width: 256,
	height: 256,
	frames: 2,
	scale: true, // Can be overridden for each layer
	generatedOptions() {
		let base = Renderer.CanvasModels.main.generatedOptions();
		//Tweak here if need be
		return base
	},
	defaultOptions() {
		let base = Renderer.CanvasModels.main.defaultOptions();
		base["force_naked"] = false;
		base["model_source"] = "img";
		base["additional_layers"] = [];
		base["additional_layers_options_overrides"] = {};
		base["show_nnpc"] = false;
		base["mouth"] = "neutral";

		return base;
	},
	preprocess(options) {
		if(T.modeloptions.force_defaults){
			if(options.force_naked){
				options = this.defaultOptions();
				options["force_naked"] = true;
			}else{
				options = this.defaultOptions();
			}
		}

		if(V.customNNPC.topExposed){
			options.worn["upper"] = this.defaultOptions().worn["upper"];
			options.worn["under_upper"] = this.defaultOptions().worn["under_upper"];
			options.worn["handheld"] = this.defaultOptions().worn["handheld"];
		}
		if(V.customNNPC.bottomExposed){
			options.worn["lower"] = this.defaultOptions().worn["lower"];
			if(!options.worn["under_lower"].setup.type.includes("strap-on")){
				options.worn["under_lower"] = this.defaultOptions().worn["under_lower"];
			}
			options.worn["feet"] = this.defaultOptions().worn["feet"];
		}

		options.filters = Object.assign(options.filters, options.additional_filters);

		// Try catching otherwise if the evil hack has been applied then we're in trouble
		try{
			Renderer.CanvasModels.main.preprocess.bind(this)(options);
		}catch(e){
			V.customNNPC.errorStack.push("Custom NNPC Preprocess Failed:" + e);
			console.error("Custom NNPC Preprocess Failed:" + e);
		}

		for (let i = 0; i < T.modeloptions.additional_masks.length; i++) {
			const mask = T.modeloptions.additional_masks[i][0];
			const src = T.modeloptions.additional_masks[i][1];
			if(mask in options && Array.isArray(options[mask])){
				options[mask].push(src);
			}
		}

	},
	postprocess(options) {
		if(T.modeloptions.force_defaults){
			options = this.defaultOptions();
		}

		// Try catching otherwise if the evil hack has been applied then we're in trouble
		try{
			Renderer.CanvasModels.main.postprocess.bind(this)(options);
		}catch(e){
			V.customNNPC.errorStack.push("Custom NNPC Postprocess Failed:" + e);
			console.error("Custom NNPC Postprocess Failed:" + e);
		}

	},
	layers: copyLayers(),

	// Huge thanks to the DoL X-Change modding team for the basis of this system
	compile(options) {
		function rewritePath (path, source){
			if(typeof path !== "string" || !source || typeof source !== "string"){
				return path;
			}

			if (path[0] === '/') {
				path = path.substring(1);
			}

			if(path.indexOf('/') === -1){
				return path;
			}

			path = path.substring(path.indexOf('/'));

			return source + path;
		}

		function layerRedirectSrc (layerSrc){
			let source = options.model_source.replace(/[^a-zA-Z0-9_]/g, '');

			if(!layerSrc) return layerSrc;
			if(source === "img") return layerSrc;

			if(Array.isArray(layerSrc)){
				let newSrc =[];
				for(let i=0; i<layerSrc.length;i++){
					newSrc.push(rewritePath(layerSrc[i], source));
				}
				return newSrc;
			}
			if(typeof layerSrc === "string") return rewritePath(layerSrc, source);
			if(typeof layerSrc === "object" && typeof layerSrc.path === "string"){
				return {...layerSrc, path: rewritePath(layerSrc.path, source)};
			}

			return layerSrc;
		}

		function propeval(layer, propname) {
			if (propname !== "show" && !debug && !layer.show) {
				// TODO: Hook something in here to warn use that a piece of clothing combo isn't available
				// Situation A:
				// layer.srcfn: () => 'img/items/' + V.item.name + '.png'
				// and if V.item is undefined layer is skipped
				// So we don't want to eval skipped layer here
				//
				// Situation B:
				// Layer is skipped by mistake.
				// We want to debug its properties and show manually
				// So we might want to eval it still
				//
				// This is why we eval all properties in debug mode, but ignore their errors
				return;
			}
			const fnkey = propname + "fn";
			if (fnkey in layer) {
				try {
					layer[propname] = layer[fnkey](options);
				} catch (e) {
					if (layer.show) {
						console.error("Error evaluating layer " + layer.name + " property " + propname);
					}
				}
			}
		}

		const processLayer = layer => {
			layer.model = this;
			layer.show || propeval(layer, "show");
			propeval(layer, "src");
			if (!!layer.src) {
				layer.src = layerRedirectSrc(layer.src); // redirect to alt img folder depending on gender
			}
			if (!layer.src) {
				layer.src = ""; // force string value
				layer.show = false;
			}
			propeval(layer, "z");
			if (typeof layer.z !== "number" && layer.show !== false) {
				console.error("Layer " + layer.name + " missing property z");
			}
			propeval(layer, "alpha");
			propeval(layer, "maskAlpha");
			propeval(layer, "compositeOperation");
			propeval(layer, "blendMode");
			propeval(layer, "maskBlendMode");
			propeval(layer, "blend");
			propeval(layer, "desaturate");
			propeval(layer, "brightness");
			propeval(layer, "contrast");
			propeval(layer, "masksrc");
			layer.masksrc = layerRedirectSrc(layer.masksrc);
			propeval(layer, "animation");
			propeval(layer, "filters");
			propeval(layer, "dx");
			propeval(layer, "dy");
			propeval(layer, "width");
			propeval(layer, "height");
			propeval(layer, "worn");
			propeval(layer, "scale");
			if (!layer.scale) layer.scale = this.scale;
			if (layer.show !== false && layer.filters) {
				for (let filter of layer.filters) {
					if (typeof filter !== "object") {
						filter = options.filters[filter];
						if (!filter) {
							continue;
						}
					}
					if (!filter.blend) continue;
					Renderer.mergeLayerData(layer, filter, true);
				}
			}
		};

		let tmpWorn = {};
		if(!options.force_naked){
			// Evil hack
			tmpWorn = V.worn;
			V.worn = options.haxworn;
		}

		// Push custom art assets
		for (let i = 0; i < options.additional_layers.length; i++){
			this.layerList.push(options.additional_layers[i]);
		}

		// No choice other than to rewrite the compiling function here sadly
		const debug = V.debug;
		if (!options) options = { filters: {} };
		if (!("filters" in options)) options.filters = {};
		try {
			this.preprocess(options);
		} catch (e) {
			V.customNNPC.errorStack.push("Error in model preprocessing:" + e);
			console.error(e);
			throw new Error("Error in model preprocessing: " + e.stack.slice(0, e.stack.indexOf(Browser.isGecko ? "@" : "(eval")));
		}
		for (const layer of this.layerList) {
			// Reset some options
			layer.brightness = layer.defaultOptions.brightness;
			layer.contrast = layer.defaultOptions.contrast;
			layer.frameDx = 0;
			layer.frameDy = 0;
		}

		for (const layer of this.layerList) {
			processLayer(layer);
		}

		this.postprocess(options);

		// Process generated layers after post-process
		const layers = [];
		if (options.generatedLayers) {
			for (const layer in options.generatedLayers) {
				processLayer(options.generatedLayers[layer]);
				layers.push(options.generatedLayers[layer]);
			}
		}

		if(!options.force_naked){
			// Undo evil hack
			V.worn = tmpWorn;
		}

		return [...this.layerList, ...layers];
	},
}