const dhmUtils = {
	defaultColors: {},
	stolenColors: {},

	versionUpdate() {
		// long and ugly do not read
		// {{{
		if (!!dhmod.filters) {
			/*
			 *	previously, hair filter was stored directly in the save variable
			 *	and some brute force renderer interception was involved.
			 *	now, all thats stored in the save is an is_custom flag, and an encoded
			 *	filter string. said filter string is decoded on load and pushed
			 *	to setup.colours.hair_map.
			 *	tl;dr: dont need to hack the renderer as much anymore
			 */
			if (!!dhmod.filters.hair) {
				if (
					V.hairColourStyle === "simple" &&
					V.haircolour === "custom"
				) {
					this.hairPlain(dhmod.filters.hair);
				} else if (
					V.hairColourStyle === "gradient" &&
					!!V.hairColourGradient &&
					!!V.hairColourGradient.custom_filters
				) {
					this.hairGradient(V.hairColourGradient.custom_filters);
					delete V.hairColourGradient.custom_filters;
				}
				delete V.dhmod.filters.hair;
			}

			if (!!V.dhmod.filters.fringe) {
				if (
					V.hairFringeColourStyle === "simple" &&
					V.hairfringecolour === "custom"
				) {
					this.fringePlain(dhmod.filters.fringe);
				} else if (
					V.hairFringeColourStyle === "gradient" &&
					!!V.hairFringeColourGradient &&
					!!V.hairFringeColourGradient.custom_filters
				) {
					this.fringeGradient(
						V.hairFringeColourGradient.custom_filters,
					);
					delete V.hairFringeColourGradient.custom_filters;
				}
				delete dhmod.filters.fringe;
			}
			delete dhmod.filters;
		}
		// }}}
	},

	/*
	 ** COLORS COLORS COLORS COLORS
	 ** added 0.20
	 * {{{ */

	/**
	 * register vanilla colors to colorNamer-compatible dict
	 * later used to set fallbacks for custom colors
	 */
	colorMapGen() {
		let colors = setup.colours.hair;
		for (let i in setup.colours.hair) {
			this.defaultColors[colors[i].variable] = tinycolor(
				colors[i].canvasfilter.blend,
			).toHsl();
		}
		if (!!this.defaultColors["random"]) {
			delete this.defaultColors["random"];
		}

		colors = window.stealColorNamerColors();
		let keys = Object.keys(colors);

		for (let i in keys) {
			//console.log(`stealing ${keys}`);
			this.stolenColors[colors[keys[i]][2]] = tinycolor(
				colors[keys[i]][0],
			).toHsl();
		}
	},

	/**
	 * prepare currently used filters to be pushed to setup
	 * runs on page load or new custom color assignment
	 */
	colorCache() {
		if (!!dhmod.hair && this.objIsValid(dhmod.hair)) {
			for (let i in dhmod.hair.colors) {
				setup.dhmod.filter_cache[dhmod.hair.colors[i]] =
					this.filterDecode(dhmod.hair.colors[i]);
			}
		}

		if (!!dhmod.fringe && this.objIsValid(dhmod.fringe)) {
			for (let i in dhmod.fringe.colors) {
				setup.dhmod.filter_cache[dhmod.fringe.colors[i]] =
					this.filterDecode(dhmod.fringe.colors[i]);
			}
		}
		this.colorPush();
	},

	/**
	 * push cached colors to setup
	 * no. the hacky variable routing is not dead. just polished
	 * canvas yelling at me bc mod unloaded rlly aggravates me
	 */
	colorPush() {
		let entries = Object.entries(setup.dhmod.filter_cache);

		for (let i in entries) {
			if (!!entries[i][1]?.blend) {
				let _name = this.colorCompareHsl(
					entries[i][1].blend,
					this.stolenColors,
				);
				setup.colours.hair_map[entries[i][0]] = {
					name: _name, // just for flavor text
					name_cap: _name, // cn compat
					canvasfilter: entries[i][1],
				};
			} else {
				setup.colours.hair_map[entries[i][0]] = {
					name: "color picker slot",
					canvasfilter: this.filterGen(),
				};
			}
		}
	},

	/**
	 * modified version of builtin colorNamer to compare hsl instead of rgb,
	 * prioritizing hue.
	 *
	 * the goal is to get the closest match among the vanilla colors to set a
	 * fallback, so pc's hair won't look too weird if mod fails or is removed.
	 *
	 * was this 100% necessary? no. did i do it anyway? well.
	 *
	 * @param	{string} hex
	 * @returns	{string}
	 */
	colorCompareHsl(hex, color_map = this.defaultColors) {
		const hsl = tinycolor(hex).toHsl();
		let min = Infinity;
		let closest = null;

		for (var color in color_map) {
			let hsl2 = color_map[color];

			let dHue = hsl.h - hsl2.h;
			let dL = hsl.l - hsl2.l;
			let dS = hsl.s - hsl2.s;
			let dist;

			// hue is a circle, so we need... mathematics... to calculate distance
			// distance between 2 points in a circle cannot be > 180
			dHue += Math.abs(dHue) > 180 ? (dHue < 0 ? 360 : -360) : 0;
			dHue /= 180;

			/*	note to self: machines see numbers. eyes see colors. internalize
			 *	that idea. stop adjusting this godforsaken function. */
			/*	forbidden zone
			*	do not touch
			{{{ */
			if (Math.abs(dHue) < 0.06) {
				dist =
					Math.pow(dHue * 0.8, 2) +
					Math.pow(dS * 1.2, 2) +
					Math.pow(dL * 1.6, 2);
			} else if (Math.abs(dHue) < 0.15) {
				dist =
					Math.pow(dHue * 1.5, 2) +
					Math.pow(dS, 2) +
					Math.pow(dL * 1.5, 2);
			} else {
				dist =
					Math.pow(dHue * 2.5, 2) +
					Math.pow(dS, 2) +
					Math.pow(dL * 1.2, 2);
			}
			// }}}
			//console.log(`comparing to ${color}, distance: ${dist}`);

			if (dist <= min) {
				closest = color;
				min = dist;
			}
		}

		return closest;
	},
	// }}}

	/*
	 ** STRINGS STRINGS STRINGS STRINGS
	 **
	 * {{{ */
	/**
	 * @param	{string} filterString
	 * @returns	{[string, number]}
	 */
	stringDecode(filterString) {
		if (this.stringIsValid(filterString)) {
			let arr = filterString.split(";");
			arr[1] = parseFloat(arr[1]);
			return arr;
		}
		return ["#FFFFFF", 0];
	},

	/**
	 ** added 0.20
	 * {{{ */

	/**
	 * check if strign is in correct format
	 *
	 * @param	{string} filterString
	 * @returns	{boolean}
	 */
	stringIsValid(filterString) {
		if (typeof filterString !== "string") {
			return false;
		}

		let arr = filterString.split(";");
		if (arr.length < 2) {
			return false;
		}

		let hex = tinycolor(arr[0]);
		if (hex.getFormat() !== "hex") {
			return false;
		}

		let number = parseFloat(arr[1]);
		if (Number.isNaN(number)) {
			return false;
		}
		return true;
	},

	/**
	 * ...if... and only if... someone wants to import a json dictionary of
	 * 23049823 color names and their hex codes... this makes it compatible...
	 * useful? not quite... just seemed very easy so why not?
	 *
	 * @param {string} hexCode
	 * @returns {string}
	 */
	stringFromHex(hexCode) {
		return `${hexCode.toUpperCase()};0`;
	},
	// }}}
	// }}}

	/*
	 ** FILTERS FILTERS FILTERS FILTERS
	 **
	 * {{{ */

	/**
	 * @param	{string}		blend
	 * @param	{number}		brightness
	 * @returns	{Canvasfilter}
	 */
	filterGen(blend = "#FFFFFF", brightness = 0) {
		return {
			blend: blend,
			blendMode: "hard-light",
			brightness: brightness,
		};
	},

	/**
	 * @param	{string} filterString
	 * @returns	{Canvasfilter}
	 */
	filterDecode(filterString) {
		let colordata = this.stringDecode(filterString);
		return this.filterGen(colordata[0], colordata[1]);
	},

	/**
	 * @param {Canvasfilter} filter
	 */
	filterEncode(filter) {
		return `${filter.blend.toUpperCase()};${filter.brightness.toFixed(1)}`;
	},

	/**
	 * converts filter to mod data
	 * added 0.20
	 *
	 * @param	{Array.<Canvasfilter>} filters
	 * @returns	{DhmObj}
	 */
	filters2Obj(filters) {
		let encoded = [];
		for (let i in filters) {
			encoded.push(this.filterEncode(filters[i]));
		}
		return this.objNew(encoded);
	},
	// }}}

	/*
	 ** HAIR HAIR HAIR HAIR
	 ** added 0.20
	 **
	 * {{{ */

	/**
	 * @param	{Array.<String>}	colors
	 * @param	{boolean}			is_custom
	 * @returns	{DhmObj}
	 */
	objNew(colors = [], is_custom = true) {
		return {
			colors: [...colors],
			is_custom: is_custom,
		};
	},

	/**
	 * @returns {DhmObj}
	 */
	objEmpty() {
		return this.objNew([], false);
	},

	/**
	 * @param	{DhmObj} obj
	 * @returns	{boolean}
	 */
	objIsValid(obj) {
		if (
			!!obj.colors &&
			Object.prototype.toString.call(obj.colors) === "[object Array]" &&
			!!obj.is_custom &&
			typeof obj.is_custom === "boolean"
		) {
			return true;
		}
		return false;
	},

	plainFallback(blend = "#FFFFFF") {
		return this.colorCompareHsl(blend);
	},

	/**
	 * @param	{Array.<Canvasfilter>} filters
	 * @returns	{Array.<string>}
	 */
	gradientFallback(filters) {
		let fallbacks = [];
		for (let i in filters) {
			fallbacks.push(this.plainFallback(filters[i].blend));
		}
		return fallbacks;
	},

	/**
	 * @param {Array.<Canvasfilter>} filters
	 */
	fringePlain(filters) {
		V.hairfringecolour = this.plainFallback(filters[0].blend);
		dhmod.fringe = this.filters2Obj(filters);
	},

	/**
	 * @param {Array.<Canvasfilter>} filters
	 */
	fringeGradient(filters) {
		this.fringePlain(filters);
		V.hairFringeColourGradient.colours = this.gradientFallback(filters);
	},

	/**
	 * @param {Array.<Canvasfilter>} filters
	 */
	hairPlain(filters) {
		V.haircolour = this.plainFallback(filters[0].blend);
		dhmod.hair = this.filters2Obj(filters);
	},

	/**
	 * @param {Array.<Canvasfilter>} filters
	 */
	hairGradient(filters) {
		this.hairPlain(filters);
		V.hairColourGradient.colours = this.gradientFallback(filters);
	},

	// for debug
	resetFallback() {
		let filter = this.getActiveHairFilter();
		let fallback_previous = V.haircolour;
		let fallback_new = this.plainFallback(filter.blend);

		console.log(`color: ${filter.blend}`);
		console.log(
			`previous fallback: ${fallback_previous}, new fallback: ${fallback_new}`,
		);
		console.log(
			`hsl1: ${tinycolor(filter.blend).toHslString()}, hsl2: ${tinycolor(this.defaultColors[fallback_new]).toHslString()}`,
		);

		V.haircolour = fallback_new;
		V.hairfringecolour = fallback_new;

		let _name = this.colorCompareHsl(filter.blend, this.stolenColors);
		console.log(`stolen name: ${_name}`);
	},
	// }}}

	/*
	 ** RENDERER RENDERER RENDERER RENDERER
	 **
	 * {{{ */

	/**
	 * @param	{number} index
	 * @returns	{Canvasfilter}
	 */
	getActiveHairFilter(index = 0) {
		let hairmap = setup.colours.hair_map;
		let filter = this.filterGen();
		if (V.hairColourStyle === "simple") {
			filter =
				dhmod.hair?.is_custom && dhmod.hair?.colors[index]
					? hairmap[dhmod.hair.colors[index]].canvasfilter
					: hairmap[V.haircolour].canvasfilter;
		} else if (V.hairColourStyle === "gradient") {
			filter =
				dhmod.hair?.is_custom && dhmod.hair?.colors[index]
					? hairmap[dhmod.hair.colors[index]].canvasfilter
					: hairmap[V.hairColourGradient.colours[index]].canvasfilter;
		}
		filter.brightness =
			typeof filter.brightness === "number" ? filter.brightness : 0;

		return filter;
	},

	/**
	 *	sends filter info. to canvasmodel
	 *	here. the hacky variable routing is now consolidated here.
	 * {{{ */
	canvasSetup() {
		T.modeloptions.hair_colour = dhmod.hair?.is_custom
			? dhmod.hair.colors[0]
			: V.haircolour.replace(" ", "");
		T.modeloptions.hair_fringe_colour = dhmod.fringe?.is_custom
			? dhmod.fringe.colors[0]
			: V.hairfringecolour.replace(" ", "");

		T.modeloptions.hair_fringe_colour_gradient = {
			style: V.hairFringeColourGradient.style,
			colours: [...V.hairFringeColourGradient.colours],
		};

		T.modeloptions.hair_colour_gradient = {
			style: V.hairColourGradient.style,
			colours: [...V.hairColourGradient.colours],
		};

		if (dhmod.hair?.is_custom && V.hairColourStyle === "gradient") {
			for (let i = 0; i < V.hairColourGradient.colours.length; i++) {
				if (!!dhmod.hair.colors[i]) {
					T.modeloptions.hair_colour_gradient.colours[i] =
						dhmod.hair.colors[i];
				}
			}
		}

		if (dhmod.fringe?.is_custom && V.hairFringeColourStyle === "gradient") {
			for (let i in V.hairFringeColourGradient.colours) {
				if (!!dhmod.fringe.colors[i]) {
					T.modeloptions.hair_fringe_colour_gradient.colours[i] =
						dhmod.fringe.colors[i];
				}
			}
		}
	},
	// }}}
	// }}}

	/*
	 ** PRESETS PRESETS PRESETS PRESETS
	 **
	 * {{{ */

	/**
	 * @param {string} presetName
	 * @param {string} filterString
	 */
	presetAdd(presetName = "Preset", filterString) {
		dhmod.userPresets[presetName] = filterString;
	},

	/**
	 * @param {string} presetName
	 */
	presetDelete(presetName) {
		if (!!dhmod.userPresets[presetName]) {
			delete dhmod.userPresets[presetName];
		}
	},

	/**
	 * @param {string} presetName
	 */
	presetLoad(presetName) {
		if (!!dhmod.userPresets[presetName]) {
			return this.filterDecode(dhmod.userPresets[presetName]);
		}
	},

	/**
	 * @param {string} filterString
	 */
	presetExists(filterString) {
		for (let [key, entry] of Object.entries(dhmod.userPresets)) {
			if (entry == filterString) {
				return key;
			}
		}
		return false;
	},

	/**
	 * checks if colordata is saved in preset db, if exists returns under what
	 * name color was saved as
	 *
	 * @param {string} filterString
	 */
	presetSearchFilterString(filterString) {
		let key = this.presetExists(filterString);
		return key ? key : "custom";
	},

	/**
	 * new in 0.20
	 * preset purge
	 */
	presetPurge() {
		dhmod.userPresets = {};
	},
	//}}}

	/*
	 ** PRESET IMPORTER FUNCTIONS
	 ** added 0.20
	 * {{{ */

	/**
	 * @param {string} presetName
	 * @returns {Canvasfilter}
	 */
	presetLoadTmp(presetName) {
		if (!!T.dhmLoaded.passed[presetName]) {
			return this.filterDecode(T.dhmLoaded.passed[presetName]);
		}
	},

	/**
	 * @param {string} presetName
	 * @param {string} filterString
	 */
	presetAddTmp(presetName, filterString) {
		T.dhmLoaded.passed[presetName] = filterString;
	},

	/**
	 * @param {string} presetName
	 */
	presetDeleteTmp(presetName) {
		if (!!T.dhmLoaded.passed[presetName]) {
			delete T.dhmLoaded.passed[presetName];
		}
	},

	/**
	 * checks for naming conflicts between tmp presets x saved presets
	 *
	 * @returns {boolean}
	 */
	presetDupeHunt() {
		for (let key of Object.keys(T.dhmLoaded.passed)) {
			if (!!dhmod.userPresets[key]) {
				return true;
			}
		}
		return false;
	},

	/**
	 * comb thru each imported entry and ensure they pass all validation cases
	 *
	 * @param {ColorDict} json
	 * @returns {FileLog}
	 */
	presetReadFile(json) {
		let results = { errors: 0, passed: {}, skip: {} };
		for (let [key, entry] of Object.entries(json)) {
			let tinyconvert = tinycolor(entry);

			if (tinyconvert.isValid()) {
				entry = this.stringFromHex(tinyconvert.toHexString());
			}

			if (this.stringIsValid(entry)) {
				if (this.presetExists(entry)) {
					results.skip[key] = entry;
				} else {
					results.passed[key] = entry;
				}
			} else {
				results.errors++;
				console.warn(
					`[dye-harder utils] presetReadFile: error decoding ${key}: ${entry}, entry invalid or not compatible`,
				);
			}
		}
		return results;
	},

	/**
	 * @returns {Object}
	 */
	presetBulkImport() {
		let log = { overwritten: 0, imported: 0, skipped: 0 };
		for (let [key, entry] of Object.entries(T.dhmLoaded.passed)) {
			if (!dhmod.userPresets[key] || dhmod.cfg.overwrite) {
				if (dhmod.userPresets[key] && dhmod.cfg.overwrite) {
					log.overwritten++;
				}
				log.imported++;
				dhmod.userPresets[key] = entry;
			} else {
				log.skipped++;
			}
		}
		return log;
	},
	// }}}
};

Object.defineProperty(window, "dhmUtils", { get: () => dhmUtils });
