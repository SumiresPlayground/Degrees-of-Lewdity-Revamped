/* Registers Bailey Expansion custom clothing into DOLP's native clothing
   tables. DOLP exposes setup.moddedClothes.<slot> and pushes it into
   setup.clothes.<slot> during init, so we append there on :storyready (after
   the tables exist), guarded so a reload never double-registers. */
(function () {
	var moddedItems = [{"index": 100, "slot": "neck", "name": "Bailey's collar", "name_cap": "Bailey's collar", "variable": "baileys_collar", "combat": {"reference": "clothchoker"}, "state": 0, "state_base": 0, "integrity": 800, "integrity_max": 800, "fabric_strength": 25, "reveal": 1000, "word": "n", "plural": 1, "colour": 0, "colour_options": [], "colour_combat": 0, "type": ["fetish"], "gender": "n", "warmth": 1, "cost": 0, "description": "A dark leather collar with a lotus flower clasp at the throat. There is no name tag. No bold letters. Just the lotus.", "shop": [], "collared": 1, "accessory": 0, "accessory_colour": 0, "accessory_colour_options": [], "cursed": 1, "location": 0, "iconFile": 0, "accIcon": 0, "mainImage": "full", "modder": "BaileyExpansion"}];
	function registerRBEClothes() {
		if (typeof setup === "undefined" || !setup.clothes) return;
		moddedItems.forEach(function (item) {
			var slot = item.slot;
			if (!slot || !Array.isArray(setup.clothes[slot])) return;
			var exists = setup.clothes[slot].some(function (c) {
				return c && c.variable === item.variable;
			});
			if (exists) return;
			item.index = setup.clothes[slot].length;
			setup.clothes[slot].push(item);
			if (setup.moddedClothes && Array.isArray(setup.moddedClothes[slot])) {
				setup.moddedClothes[slot].push(item);
			}
		});
	}
	if (typeof $ !== "undefined") {
		$(document).one(":storyready", registerRBEClothes);
	}
})();
