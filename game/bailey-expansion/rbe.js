function baileyRevealed() {
	return V.syndromebailey === true;
}

window.baileyMaxRent = function () {
	const modifier = (V.settings && V.settings.rentCostModifier) || 1;
	return Math.floor(200000 * modifier);
};

window.baileyFlatState = function () {
	const t = Time.hour * 60 + Time.minute;
	if (t >= 330 && t < 390) return "leaving"; // 05:30 to 06:30, heading out
	if (t >= 390 && t < 1140) return "away"; // 06:30 to 19:00, at the orphanage
	if (t >= 120 && t < 330) return "asleep"; // 02:00 to 05:30, there but won't come to the door
	return "home"; // 19:00 to 02:00, active
};

function baileyDayToDate(day) {
	return new DateTime(Time.startDate.timeStamp + day * TimeConstants.secondsPerDay);
}
function baileyDateToDay(date) {
	return Math.floor((date.timeStamp - Time.startDate.timeStamp) / TimeConstants.secondsPerDay);
}
window.baileyWeekendClose = function (day) {
	const date = baileyDayToDate(day);
	if (date.weekDay === 7) return day + 1;
	if (date.weekDay === 1) return day;
	return baileyDateToDay(date.getPreviousWeekdayDate(1));
};

window.baileyWeeksMissed = function () {
	if (!V.bailey_monogamous) return 0;
	if (typeof V.bailey_weekend_closed !== "number" && typeof V.bailey_weekend_lastvisit === "number") {
		V.bailey_weekend_closed = window.baileyWeekendClose(V.bailey_weekend_lastvisit);
		delete V.bailey_weekend_lastvisit;
	}
	if (typeof V.bailey_weekend_closed !== "number") return 0;
	return Math.max(0, (baileyDateToDay(Time.getPreviousWeekdayDate(1)) - V.bailey_weekend_closed) / 7);
};

window.baileyStraying = function () {
	return window.baileyWeeksMissed() >= 2;
};

/* Vanilla has <<gstockholm>>. This one hides the name behind ??? until Bailey is revealed. */
Macro.add("gbaileystock", {
	handler() {
		if (typeof statDisplay === "undefined" || typeof statDisplay.statChange !== "function") return;
		const label = baileyRevealed() ? "Stockholm Syndrome" : "???";
		this.output.append(statDisplay.statChange(label, 1, "bailey-stockholm"));
	},
});

/* Brat Tax feedback, e.g. "+ 50 Brat Tax". */
Macro.add("gbrattax", {
	handler() {
		if (typeof statDisplay === "undefined" || typeof statDisplay.statChange !== "function") return;
		if (typeof window.formatMoney !== "function") return;
		const pennies = Number(this.args[0]);
		if (!pennies || pennies < 0) return;
		this.output.append(statDisplay.statChange(window.formatMoney(pennies) + " Brat Tax", 1, "pink"));
	},
});

/* Halloween gala mood */
Macro.add("gbaileyMood", {
	handler() {
		if (typeof statDisplay === "undefined" || typeof statDisplay.statChange !== "function") return;
		const amount = Number(this.args[0]);
		if (!amount) return;
		this.output.append(statDisplay.statChange("Mood", amount, amount > 0 ? "green" : "red"));
	},
});

$(document).one(":storyready", function () {
	/* One-time compatibility repair for persistent RBE values that are read as objects or text. */
	if (!V.stockholm_points || typeof V.stockholm_points !== "object" || Array.isArray(V.stockholm_points)) V.stockholm_points = {};
	if (typeof V.bailey_title !== "string") V.bailey_title = "Bailey";
	V.bailey_title = V.bailey_title.replace(/[<>]/g, "").trim().slice(0, 15) || "Bailey";
	if (typeof V.bailey_title_unlocked !== "boolean") V.bailey_title_unlocked = false;

	function syncBaileyDom() {
		if (!C.npc.Bailey) return;

		/* Must stay above the build counter heal, or a migrating save gets rebuilt from
        $stockholm_points instead of keeping its real total. */
		if (V.stockholm_active !== undefined) {
			V.syndromebailey = V.stockholm_active === true;
			console.log("[BaileyExpansion] Migrated $stockholm_active -> $syndromebailey (" + V.syndromebailey + ")");
			delete V.stockholm_active;
		}
		if (V.stockholm_bailey !== undefined) {
			if (typeof V.stockholm_bailey === "number" && !Number.isNaN(V.stockholm_bailey)) {
				V.syndromebaileybuild = V.stockholm_bailey;
				console.log("[BaileyExpansion] Migrated $stockholm_bailey -> $syndromebaileybuild (" + V.syndromebaileybuild + ")");
			}
			delete V.stockholm_bailey;
		}

		["dom", "love"].forEach(function (stat) {
			const old = V["bailey_" + stat];
			if (old === undefined) return;
			if (typeof old === "number" && !Number.isNaN(old) && C.npc.Bailey[stat] !== old) {
				console.log("[BaileyExpansion] Migrated $bailey_" + stat + " " + old + " -> C.npc.Bailey." + stat);
				C.npc.Bailey[stat] = old;
			}
			delete V["bailey_" + stat];
		});

		/* A save made before RBE was added still has the baseNNPC default of 0, which reads as
        low dom forever. Correct it once only, so a player who lowers him to 0 later keeps it. */
		/* Old saves kept these as plain story variables with no ceiling, so they arrive past
        100. relationshipclamp owns the steady state (it runs at the end of every npcincr
        and again daily), but it has not run yet at load, so bring them in range once here. */
		["dom", "love"].forEach(function (stat) {
			if (typeof C.npc.Bailey[stat] === "number" && C.npc.Bailey[stat] > 100) {
				console.log("[BaileyExpansion] Clamped C.npc.Bailey." + stat + " " + C.npc.Bailey[stat] + " -> 100");
				C.npc.Bailey[stat] = 100;
			}
		});

		if (V.bailey_rbe_init !== true) {
			if (C.npc.Bailey.dom === 0) {
				C.npc.Bailey.dom = baileyRevealed() ? 100 : 50;
				console.log("[BaileyExpansion] Initialized C.npc.Bailey.dom -> " + C.npc.Bailey.dom);
			}
			/* initNNPCClothes only rebuilds the pool when outfits is missing, so an existing save
            keeps the vanilla list and never picks up Bailey's. */
			if (Array.isArray(C.npc.Bailey.outfits) && !C.npc.Bailey.outfits.includes("business")) {
				C.npc.Bailey.outfits.pushUnique("business", "maleFormal1", "femaleFormal1", "townBlazer", "townCoat");
				console.log("[BaileyExpansion] Added Bailey outfit pool to an existing save");
			}
			V.bailey_rbe_init = true;
		}

		/* NaN fails gte and lt both, so dom gates stop firing silently. */
		if (typeof C.npc.Bailey.dom !== "number" || Number.isNaN(C.npc.Bailey.dom)) {
			C.npc.Bailey.dom = baileyRevealed() ? 100 : 50;
			console.log("[BaileyExpansion] Healed C.npc.Bailey.dom -> " + C.npc.Bailey.dom);
		}
		if (typeof C.npc.Bailey.love !== "number" || Number.isNaN(C.npc.Bailey.love)) {
			C.npc.Bailey.love = 0;
		}
		if (V.stockholm_points === undefined) V.stockholm_points = {};

		if (typeof V.syndromebaileybuild !== "number" || Number.isNaN(V.syndromebaileybuild)) {
			const _pts = V.stockholm_points || {};
			let _healStock = 0;
			if (_pts.offer_defeat === true) _healStock += 3;
			else if (_pts.offer === true) _healStock += 1;
			["temple", "kylar", "cafe", "whitney", "gwylan", "kick", "avery", "halloween", "eden"].forEach(function (k) {
				if (_pts[k] === true) _healStock += 1;
			});
			console.log("[BaileyExpansion] Healed $syndromebaileybuild (" + V.syndromebaileybuild + ") -> " + _healStock);
			V.syndromebaileybuild = _healStock;
		}

		enforceBaileyState();
	}

	function enforceBaileyState() {
		if (!C.npc.Bailey) return;

		if (baileyRevealed() && typeof C.npc.Bailey.dom === "number" && C.npc.Bailey.dom !== 100) {
			C.npc.Bailey.dom = 100;
		}

		/* Keep monogamous Bailey at 0 so he skips condoms. The game won't re-zero it once it drifts. */
		if (V.bailey_monogamous === true && C.npc.Bailey.pregnancyAvoidance !== 0) {
			console.log("[BaileyExpansion] Monogamous Bailey pregnancyAvoidance " + C.npc.Bailey.pregnancyAvoidance + " -> 0");
			C.npc.Bailey.pregnancyAvoidance = 0;
		}
	}
	$(document).on(":passagestart", syncBaileyDom);
	$(document).on(":passageend", enforceBaileyState);

	/* Stood-up check: date scheduled but not attended by midnight -> missed. */
	$(document).on(":passagestart", function () {
		if (typeof Time === "undefined" || typeof Time.hour === "undefined") return;
		/* Only after a midnight has actually passed, or booking at night marks it missed
            on the very next passage. */
		if (V.bailey_date_sched_day !== undefined && Time.days <= V.bailey_date_sched_day) return;
		if (V.bailey_date_scheduled === 1) {
			if (V.bailey_date_attended !== 1) {
				V.bailey_date_missed = 1;
				V.bailey_brat = V.bailey_brat || { points: 0, reasons: [] };
				V.bailey_brat.points = Math.clamp(V.bailey_brat.points + 2, 0, 20);
				if (!V.bailey_brat.reasons.includes("stoodup")) V.bailey_brat.reasons.push("stoodup");
			}
			V.bailey_date_scheduled = 0;
			V.bailey_date_attended = 0;
		}
		if (V.bailey_date_allnight_scheduled === 1) {
			if (V.bailey_date_attended !== 1) {
				V.bailey_date_missed = 1;
				V.bailey_brat = V.bailey_brat || { points: 0, reasons: [] };
				V.bailey_brat.points = Math.clamp(V.bailey_brat.points + 2, 0, 20);
				if (!V.bailey_brat.reasons.includes("stoodup")) V.bailey_brat.reasons.push("stoodup");
			}
			V.bailey_date_allnight_scheduled = 0;
			V.bailey_date_attended = 0;
		}
	});

	/* +1 lust/day once Stockholm's active, +2 while monogamous. */
	$(document).on(":passagestart", function () {
		if (typeof Time === "undefined" || typeof Time.days === "undefined") return;
		if (V.bailey_lust_lastday === undefined) {
			V.bailey_lust_lastday = Time.days;
			return;
		}
		const delta = Time.days - V.bailey_lust_lastday;
		if (delta <= 0) {
			if (delta < 0) {
				V.bailey_lust_lastday = Time.days;
			}
			return;
		}
		V.bailey_lust_lastday = Time.days;
		if (V.syndromebailey === true && C.npc.Bailey && typeof C.npc.Bailey.lust === "number") {
			const _perDay = V.bailey_monogamous ? 2 : 1;
			C.npc.Bailey.lust = Math.max(0, Math.min(100, C.npc.Bailey.lust + delta * _perDay));
		}
	});

	/* Christmas gift reset. */
	$(document).on(":passagestart", function () {
		if (V.christmas) return;
		if (V.christmas_gift_bailey === undefined && V.christmas_gift_bailey_wrapped === undefined && V.christmas_gift_bailey_given === undefined) return;
		delete V.christmas_gift_bailey;
		delete V.christmas_gift_bailey_wrapped;
		delete V.christmas_gift_bailey_given;
	});

	/* Keeps the Christmas Fishing Lure Gift permanent. */
	$(document).on(":passagestart", function () {
		if (V.bailey_office_gift === "lure" && !V.bailey_lure_received) {
			V.bailey_lure_received = true;
		}
	});

	/* Each key -> img/clothes/neck/baileys_collar_<key>/full.png */
	window.baileyCollarRegistry = [
		{ key: "reiyu_goose", pack: "Goose", label: "Goose by Reiyu" },
		{ key: "en_goose_colored", pack: "Goose", label: "Goose - Colored Lotus by En" },
		{ key: "en_goose_fullcolor", pack: "Goose", label: "Goose - Full Color Lotus by En" },
		{ key: "en_goose_gold", pack: "Goose", label: "Goose - Gold Lotus by En" },
		{ key: "en_goose_steel", pack: "Goose", label: "Goose - Steel Lotus by En" },
		{ key: "mj_goose", pack: "Goose", label: "Goose by MJ" },
		{ key: "snowy_vanilla", pack: "Vanilla", label: "Vanilla by Snowy" },
		{ key: "mj_vanilla", pack: "Vanilla", label: "Vanilla by MJ" },
		{ key: "rasu_mikili", pack: "Mikili", label: "Mikili by Rasu" },
		{ key: "weremane_mikili", pack: "Mikili", label: "Mikili by Weremane" },
		{ key: "anamink_au_masc", pack: "AU", label: "AU Masc by Anamink" },
		{ key: "anamink_au_fem", pack: "AU", label: "AU Fem by Anamink" },
		{ key: "anamink_au_andro", pack: "AU", label: "AU Andro by Anamink" },
		{ key: "mj_au_masc", pack: "AU", label: "AU Masc by MJ" },
		{ key: "mj_au_fem", pack: "AU", label: "AU Fem by MJ" },
		{ key: "mj_au_andro", pack: "AU", label: "AU Andro by MJ" },
		{ key: "reiyu_dmmm", pack: "DMMM", label: "DMMM by Reiyu" },
		{ key: "mj_dmmm", pack: "DMMM", label: "DMMM by MJ" },
		{ key: "mj_hikari", pack: "Hikari", label: "Hikari by MJ" },
		{ key: "mj_rayne", pack: "Rayne", label: "Rayne by MJ" },
		{ key: "dove_rayne", pack: "Rayne", label: "Rayne by Dove" },
		{ key: "mj_beeesss", pack: "Beeesss", label: "Beeesss by MJ" },
		{ key: "mj_rgraphics", pack: "R-Graphics", label: "R-Graphics by MJ" },
		{ key: "mj_goose_fem_pink", pack: "Goose", label: "Goose Fem Pink by MJ" },
		{ key: "mj_goose_fem_pink_alt", pack: "Goose", label: "Goose Fem Pink Alt by MJ" },
		{ key: "mj_goose_fem_pink_lite", pack: "Goose", label: "Goose Fem Pink Lite by MJ" },
		{ key: "mj_goose_fem_silver", pack: "Goose", label: "Goose Fem Silver by MJ" },
		{ key: "mj_goose_masc_pink", pack: "Goose", label: "Goose Masc Pink by MJ" },
		{ key: "mj_goose_masc_pink_alt", pack: "Goose", label: "Goose Masc Pink Alt by MJ" },
		{ key: "mj_goose_masc_pink_lite", pack: "Goose", label: "Goose Masc Pink Lite by MJ" },
		{ key: "mj_goose_masc_silver", pack: "Goose", label: "Goose Masc Silver by MJ" },
		{ key: "mj_vanilla_pink", pack: "Vanilla", label: "Vanilla Pink by MJ" },
		{ key: "mj_vanilla_silver", pack: "Vanilla", label: "Vanilla Silver by MJ" },
		{ key: "mj_mikili_pink", pack: "Mikili", label: "Mikili Pink by MJ" },
		{ key: "mj_mikili_pink_alt", pack: "Mikili", label: "Mikili Pink Alt by MJ" },
		{ key: "mj_mikili_pink_lite", pack: "Mikili", label: "Mikili Pink Lite by MJ" },
		{ key: "mj_mikili_silver", pack: "Mikili", label: "Mikili Silver by MJ" },
		{ key: "mj_au_andro_pink", pack: "AU", label: "AU Andro Pink by MJ" },
		{ key: "mj_au_andro_pink_alt", pack: "AU", label: "AU Andro Pink Alt by MJ" },
		{ key: "mj_au_andro_pink_lite", pack: "AU", label: "AU Andro Pink Lite by MJ" },
		{ key: "mj_au_andro_silver", pack: "AU", label: "AU Andro Silver by MJ" },
		{ key: "mj_au_fem_pink", pack: "AU", label: "AU Fem Pink by MJ" },
		{ key: "mj_au_fem_pink_alt", pack: "AU", label: "AU Fem Pink Alt by MJ" },
		{ key: "mj_au_fem_pink_lite", pack: "AU", label: "AU Fem Pink Lite by MJ" },
		{ key: "mj_au_fem_silver", pack: "AU", label: "AU Fem Silver by MJ" },
		{ key: "mj_au_masc_pink", pack: "AU", label: "AU Masc Pink by MJ" },
		{ key: "mj_au_masc_pink_alt", pack: "AU", label: "AU Masc Pink Alt by MJ" },
		{ key: "mj_au_masc_pink_lite", pack: "AU", label: "AU Masc Pink Lite by MJ" },
		{ key: "mj_au_masc_silver", pack: "AU", label: "AU Masc Silver by MJ" },
		{ key: "mj_dmmm_pink", pack: "DMMM", label: "DMMM Pink by MJ" },
		{ key: "mj_dmmm_pink_alt", pack: "DMMM", label: "DMMM Pink Alt by MJ" },
		{ key: "mj_dmmm_pink_lite", pack: "DMMM", label: "DMMM Pink Lite by MJ" },
		{ key: "mj_dmmm_silver", pack: "DMMM", label: "DMMM Silver by MJ" },
		{ key: "mj_rgraphics_pink", pack: "R-Graphics", label: "R-Graphics Pink by MJ" },
		{ key: "mj_rgraphics_pink_alt", pack: "R-Graphics", label: "R-Graphics Pink Alt by MJ" },
		{ key: "mj_rgraphics_pink_lite", pack: "R-Graphics", label: "R-Graphics Pink Lite by MJ" },
		{ key: "mj_rgraphics_silver", pack: "R-Graphics", label: "R-Graphics Silver by MJ" },
		{ key: "mj_rayne_pink", pack: "Rayne", label: "Rayne Pink by MJ" },
		{ key: "mj_rayne_pink_alt", pack: "Rayne", label: "Rayne Pink Alt by MJ" },
		{ key: "mj_rayne_pink_lite", pack: "Rayne", label: "Rayne Pink Lite by MJ" },
		{ key: "mj_rayne_silver", pack: "Rayne", label: "Rayne Silver by MJ" },
		{ key: "mj_beeesss_pink", pack: "Beeesss", label: "Beeesss Pink by MJ" },
		{ key: "mj_beeesss_silver", pack: "Beeesss", label: "Beeesss Silver by MJ" },
	];

	/* Only the player's uploaded image has no file on disk. */
	window.baileyCollarImages = {};
	window.baileyCollarImages.custom = (function () {
		try {
			return localStorage.getItem("baileyCollarCustom") || null;
		} catch (e) {
			return null;
		}
	})();

	/* Only "custom" needs intercepting. The rest are real files. */
	if (typeof Renderer !== "undefined" && Renderer.ImageLoader) {
		const _origLoader = Renderer.ImageLoader;
		const _customPath = "img/clothes/neck/baileys_collar_custom/";
		Renderer.ImageLoader = {
			loadImage(src, layer, successCallback, errorCallback) {
				if (typeof src === "string" && src.indexOf(_customPath) === 0 && window.baileyCollarImages.custom) {
					const img = new Image();
					img.onload = function () {
						/* Mirrors renderer.js rescaleImageToCanvasHeight, which is private to that
                        module. Vanilla's loader always hands back a smoothing-disabled canvas. */
						const ar = img.width / img.height;
						const w = layer.scale ? layer.model.height * ar : img.width;
						const h = layer.scale ? layer.model.height : img.height;
						const c = document.createElement("canvas");
						c.width = w;
						c.height = h;
						const ctx = c.getContext("2d");
						ctx.imageSmoothingEnabled = false;
						ctx.drawImage(img, 0, 0, w, h);
						successCallback(src, layer, c);
					};
					img.onerror = function (e) {
						errorCallback(src, layer, e);
					};
					img.src = window.baileyCollarImages.custom;
				} else {
					_origLoader.loadImage(src, layer, successCallback, errorCallback);
				}
			},
		};
	}

	window.baileyCollarCacheClear = function () {
		if (typeof Renderer === "undefined") return;
		if (Renderer.ImageCaches) {
			const keys = Object.keys(Renderer.ImageCaches);
			for (let i = 0; i < keys.length; i++) {
				if (keys[i].indexOf("img/clothes/neck/baileys_collar") === 0) {
					delete Renderer.ImageCaches[keys[i]];
				}
			}
		}
		if (Renderer.ImageErrors) {
			const errKeys = Object.keys(Renderer.ImageErrors);
			for (let i = 0; i < errKeys.length; i++) {
				if (errKeys[i].indexOf("img/clothes/neck/baileys_collar") === 0) {
					delete Renderer.ImageErrors[errKeys[i]];
				}
			}
		}
		if (Renderer.locateModel) {
			const model = Renderer.locateModel("main", "sidebar");
			if (model && model.canvas && model.layerList) {
				Renderer.invalidateLayerCaches(model.layerList);
				model.redraw();
			}
		}
	};

	/* options.worn.neck.setup is a snapshot, not a live ref. */
	function syncCollarSnapshot(target) {
		if (typeof Renderer === "undefined" || !Renderer.locateModel) return;
		const model = Renderer.locateModel("main", "sidebar");
		const snap = model && model.options && model.options.worn && model.options.worn.neck ? model.options.worn.neck.setup : null;
		if (snap && snap.name === "Bailey's collar") snap.variable = target;
	}

	window.baileyCollarApply = function (key) {
		if (!key) return;
		if (typeof State !== "undefined" && State.variables) State.variables.bailey_collar_art = key;
		const target = "baileys_collar_" + key;
		if (typeof setup !== "undefined" && setup.clothes && Array.isArray(setup.clothes.neck)) {
			setup.clothes.neck.forEach(function (c) {
				if (c && c.name === "Bailey's collar") c.variable = target;
			});
		}
		if (V && V.worn && V.worn.neck && V.worn.neck.name === "Bailey's collar") {
			V.worn.neck.variable = target;
		}
		syncCollarSnapshot(target);
		if (typeof window.baileyCollarCacheClear === "function") window.baileyCollarCacheClear();
	};

	/* setup rebuilds from the default each page load, so re-apply the saved choice.
    An unknown key falls back to goose and is written back so it heals once. */
	$(document).on(":passagestart", function () {
		if (!V || !V.bailey_collar_art) return;
		let key = V.bailey_collar_art;
		if (key === "custom" && !window.baileyCollarImages.custom) key = "reiyu_goose";
		if (
			key !== "custom" &&
			!window.baileyCollarRegistry.some(function (e) {
				return e.key === key;
			})
		)
			key = "reiyu_goose";
		if (key !== V.bailey_collar_art) V.bailey_collar_art = key;
		const target = "baileys_collar_" + key;
		let stale = false;
		if (typeof setup !== "undefined" && setup.clothes && Array.isArray(setup.clothes.neck)) {
			setup.clothes.neck.forEach(function (c) {
				if (c && c.name === "Bailey's collar" && c.variable !== target) {
					c.variable = target;
					stale = true;
				}
			});
		}
		if (V.worn && V.worn.neck && V.worn.neck.name === "Bailey's collar" && V.worn.neck.variable !== target) {
			V.worn.neck.variable = target;
			stale = true;
		}
		if (stale && typeof window.baileyCollarCacheClear === "function") window.baileyCollarCacheClear();
	});

	/* Custom collar art. File picker -> base64 -> localStorage
    -> $bailey_collar_art = "custom" -> redraw. 2 MB Cap. */
	window.baileyCollarUpload = function () {
		const input = document.createElement("input");
		input.type = "file";
		input.accept = "image/png,image/webp,image/jpeg,image/gif";
		input.style.display = "none";
		input.addEventListener("change", function (ev) {
			const file = ev.target.files && ev.target.files[0];
			if (!file) return;
			if (file.size > 2 * 1024 * 1024) {
				alert("Image too large (max 2MB). Please pick a smaller file.");
				return;
			}
			const reader = new FileReader();
			reader.onload = function (e) {
				const dataUri = e.target.result;
				try {
					localStorage.setItem("baileyCollarCustom", dataUri);
				} catch (err) {
					alert("Couldn't save custom collar - localStorage is full or disabled.");
					return;
				}
				window.baileyCollarImages.custom = dataUri;
				window.baileyCollarApply("custom");
				if (typeof window.baileyCollarRefreshListbox === "function") window.baileyCollarRefreshListbox();
				const label = document.querySelector("#collar-art-current, #collar-art-office, #collar-art-selected");
				if (label) label.textContent = "Custom (your image)";
				console.log("[BaileyExpansion] Custom collar image loaded (" + Math.round(dataUri.length / 1024) + " KB)");
			};
			reader.onerror = function () {
				alert("Couldn't read that file. Try a different image.");
			};
			reader.readAsDataURL(file);
		});
		document.body.appendChild(input);
		input.click();
		setTimeout(function () {
			if (input.parentNode) input.parentNode.removeChild(input);
		}, 1000);
	};

	window.baileyCollarRemoveCustom = function () {
		try {
			localStorage.removeItem("baileyCollarCustom");
		} catch (e) {}
		window.baileyCollarImages.custom = null;
		if (typeof State !== "undefined" && State.variables && State.variables.bailey_collar_art === "custom") {
			window.baileyCollarApply("reiyu_goose");
		}
		if (typeof window.baileyCollarRefreshListbox === "function") window.baileyCollarRefreshListbox();
	};

	/* Re-render any visible #collar-listbox (the listbox widget output)
    so Custom options reflect the current localStorage state.
    Called after upload and after remove-custom. */
	window.baileyCollarRefreshListbox = function () {
		try {
			if (typeof $ !== "undefined" && typeof SugarCube !== "undefined" && SugarCube.Wikifier) {
				if (document.querySelector("#collar-listbox")) {
					$("#collar-listbox").empty();
					// eslint-disable-next-line no-new
					new SugarCube.Wikifier($("#collar-listbox")[0], "<<lotus_listbox>>");
				}
			}
		} catch (e) {
			console.log("[BaileyExpansion] listbox refresh failed:", e);
		}
	};
	/* Collar listbox change handler.
    Document-level so it survives passage transitions without setTimeout/render-timing hacks. */
	$(document).on("change", "#collar-listbox select", function () {
		window.baileyCollarApply(this.value);
	});

	/* Glowing "mod active" line on the Start screen.
    Injected here in :storyready because Start's :passageend fires before a handler would register. */
	const _indicatorContainer = document.getElementById("passage-content") || document.querySelector(".passage");
	if (_indicatorContainer && !_indicatorContainer.querySelector("#bailey-mod-indicator")) {
		const el = document.createElement("div");
		el.id = "bailey-mod-indicator";
		el.className = "bailey-stockholm";
		el.style.textAlign = "center";
		el.style.marginTop = "1em";
		el.style.marginBottom = "1em";
		el.textContent = "Reiyu's Bailey Expansion v0.6.0 for New World \u2014 Active";
		el.style.cursor = "pointer";
		el.title = "Mod credits";
		el.addEventListener("click", function () {
			if (
				typeof Wikifier !== "undefined" &&
				typeof Wikifier.wikifyEval === "function" &&
				typeof Story !== "undefined" &&
				Story.has("Bailey Expansion Credits Display")
			) {
				Wikifier.wikifyEval('<<popup "Bailey Expansion Credits Display" "Reiyu\'s Bailey Expansion">>');
			}
		});
		const firstChild = _indicatorContainer.firstChild;
		if (firstChild) {
			_indicatorContainer.insertBefore(el, firstChild);
		} else {
			_indicatorContainer.appendChild(el);
		}
	}

	if (typeof setup !== "undefined" && setup.loveInterestNpc) {
		if (!setup.loveInterestNpc.includes("Bailey")) {
			setup.loveInterestNpc.unshift("Bailey");
			console.log("[BaileyExpansion] Bailey added to start of loveInterestNpc list");
		}
	}

	console.log("[BaileyExpansion] collar art + title system + love interest registered");
});
