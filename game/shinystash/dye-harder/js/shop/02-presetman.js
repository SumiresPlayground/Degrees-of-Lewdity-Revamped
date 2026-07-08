const _DHMSAVED = "saved";
const _DHMTMP = "tmp";

/**
** ROUTING
**
{{{ */
/**
 * @param {string} selectedPreset
 * @param {string} id
 */
dhmShop.pmanOnChange = function (selectedPreset, id) {
	switch (id) {
		case _DHMSAVED:
			this.pmanAutoload(selectedPreset);
			break;
		case _DHMTMP:
			this.pmanTmpAutoload(selectedPreset);
			break;
	}
};

/**
 * @param {string} preset
 * @param {string} id
 */
dhmShop.pmanBtnDelete = function (preset, id) {
	switch (id) {
		case _DHMSAVED:
			dhmShop.pmanDelete(preset);
			break;
		case _DHMTMP:
			dhmShop.pmanTmpDelete(preset);
			break;
	}
	dhmShop.pmanRefresh(id);
};

/**
 * @param {string} preset
 * @param {string} id
 */
dhmShop.pmanBtnRename = function (preset, id) {
	switch (id) {
		case _DHMSAVED:
			dhmShop.pmanRename(preset);
			break;
		case _DHMTMP:
			dhmShop.pmanTmpRename(preset);
			break;
	}
};
//}}}

/**
** UNIVERSAL
**
{{{*/

/**
 * @param {string} id
 */
dhmShop.pmanHook = function (id = _DHMSAVED) {
	$(`#listbox--presetselected${id}`).on("change", function (e) {
		if (!!T[`presetSelected${id}`] && T[`presetSelected${id}`].length > 0) {
			dhmShop.pmanOnChange(T[`presetSelected${id}`], id);
		}
	});
};

/**
 * @param {string} id
 * @param {Canvasfilter} newFilter
 */
dhmShop.pmanSync = function (id = _DHMSAVED, newFilter) {
	switch (id) {
		case _DHMSAVED:
			setup.colours.hair_map.tmp0.canvasfilter.blend = newFilter.blend;
			setup.colours.hair_map.tmp0.canvasfilter.brightness =
				newFilter.brightness;
			break;
		case _DHMTMP:
			setup.colours.hair_map.tmp1.canvasfilter.blend = newFilter.blend;
			setup.colours.hair_map.tmp1.canvasfilter.brightness =
				newFilter.brightness;
			break;
	}
	let similar = dhmUtils.colorCompareHsl(newFilter.blend);

	$(`#presetman-hex${id}`).text("").append(newFilter.blend);
	$(`#presetman-brightness${id}`).text("").append(newFilter.brightness);
	Wikifier.wikifyEval(`<<dhmReplaceSimilar ${id} ${similar}>>`);

	Wikifier.wikifyEval(`<<dhmCfgDollUpdate ${id}>>`);
};

/**
 * @param {string} id
 */
dhmShop.pmanRefresh = function (id) {
	switch (id) {
		case _DHMSAVED:
			Wikifier.wikifyEval(
				`<<replace "#presetman-saved">><<dhmPresetManager>><</replace>>`,
			);
			if (Object.keys(dhmod.userPresets).length > 0) {
				dhmShop.pmanOnChange(T[`presetSelected${id}`], id);
			}
			break;
		case _DHMTMP:
			if (
				!!T.dhmLoaded?.passed &&
				Object.keys(T.dhmLoaded.passed).length > 0
			) {
				Wikifier.wikifyEval(
					`<<replace "#presetman-loader">><<dhmPresetLoaded>><</replace>>`,
				);
				dhmShop.pmanOnChange(T[`presetSelected${id}`], id);
			} else {
				Wikifier.wikifyEval(
					`<<replace "#presetman-loader">><<dhmPresetLoader>><</replace>>`,
				);
			}
			break;
	}

	dhmShop.pmanHook(id);

	if (
		!!T.dhmLoaded?.passed &&
		Object.keys(T.dhmLoaded.passed).length > 0 &&
		Object.keys(dhmod.userPresets).length > 0
	) {
		dhmShop.pmanCheckDupes();
	}
};
//}}}

/**
*** IMPORT PREVIEWER
***
{{{*/
dhmShop.pmanCheckDupes = function () {
	if (dhmUtils.presetDupeHunt()) {
		$(`#dupe-report`).html(
			"<span class='red'>Name conflicts with saved presets found</span>",
		);
		$(`#on-duplicate`).show();
	} else {
		$(`#dupe-report`).html(
			"<span class='green'>No name conflicts found</span>",
		);
		$(`#on-duplicate`).hide();
	}
};

/**
 * @param {string} selectedPreset
 */
dhmShop.pmanTmpAutoload = function (selectedPreset) {
	let newFilter = dhmUtils.presetLoadTmp(selectedPreset);
	dhmShop.pmanSync(_DHMTMP, newFilter);
};

/**
 * @param {string} presetName
 */
dhmShop.pmanTmpRename = function (presetName) {
	const presetValue = T.dhmLoaded.passed[presetName];
	const newName = prompt("Rename preset", presetName);

	if (!!newName) {
		if (T.dhmLoaded.passed[newName]) {
			alert(
				`'${newName}' was not saved because another preset with the same name already exists.`,
			);
			return true;
		}

		dhmUtils.presetAddTmp(newName, presetValue);
		dhmShop.pmanTmpDelete(presetName);
	}
};

/**
 * @param {string} selectedPreset
 */
dhmShop.pmanTmpDelete = function (selectedPreset) {
	dhmUtils.presetDeleteTmp(selectedPreset);
	dhmShop.pmanRefresh(_DHMTMP);
};
//}}}

/**
 *** SAVED PRESETS
 ***
 **{{{*/
dhmShop.pmanBtnPurge = function () {
	let firstWarning = confirm(
		"Are you sure you want to delete all presets? This cannot be reversed.",
	);
	if (firstWarning) {
		let secondWarning = confirm(
			"Are you REALLY, REALLY SURE you want to delete ALL presets?",
		);

		if (secondWarning) {
			dhmUtils.presetPurge();
			dhmShop.pmanRefresh(_DHMSAVED);
		}
	}
};

/**
 * @param {string} preset
 */
dhmShop.pmanDelete = function (preset) {
	dhmUtils.presetDelete(preset);
	dhmShop.pmanRefresh(_DHMSAVED);
};

/**
 * @param {string} preset
 */
dhmShop.pmanRename = function (preset) {
	const presetValue = dhmod.userPresets[preset];
	const presetName = prompt("Rename preset", preset);

	if (!!presetName) {
		if (V.dhmod.userPresets[presetName]) {
			alert(
				`'${presetName}' was not saved because another preset with the same name already exists.`,
			);
			return true;
		}

		dhmUtils.presetAdd(presetName, presetValue);
		dhmUtils.presetDelete(preset);
		this.pmanRefresh(_DHMSAVED);
	}
};

/**
 * @param {string} selectedPreset
 */
dhmShop.pmanAutoload = function (selectedPreset) {
	let newFilter = dhmUtils.presetLoad(selectedPreset);
	dhmShop.pmanSync(_DHMSAVED, newFilter);
};
//}}}

/**
*** EXPORT - IMPORT
***
{{{*/
dhmShop.presetExport = function () {
	if (Object.keys(dhmod.userPresets).length > 1) {
		const serialized = JSON.stringify(dhmod.userPresets);
		const blob = new Blob([serialized], {
			type: "text/plain;charset=utf-8",
		});
		saveAs(blob, "hairPresets.txt");
	} else {
		alert("Nothing to export T_T");
	}
};

/**
 * @param {File} presetsFile
 */
dhmShop.presetImport = function (presetsFile) {
	if (!window.FileReader) {
		alert("Browser not compatible with FileReader T_T");
		return; // Browser is not compatible
	}

	const reader = new FileReader();

	reader.onloadend = function () {
		let serialized;
		try {
			serialized = JSON.parse(this.result);
		} catch (e) {
			alert(`Unable to parse file. T_T\n\nDebug: ${e}`);
			return;
		}
		T.dhmLoaded = dhmUtils.presetReadFile(serialized);

		if (Object.keys(T.dhmLoaded.passed).length > 0) {
			if (
				Object.keys(T.dhmLoaded.skip).length > 0 ||
				T.dhmLoaded.errors > 0
			) {
				alert(
					`Imported: ${Object.keys(T.dhmLoaded.passed).length}\nSkipped (duplicated color data): ${Object.keys(T.dhmLoaded.skip).length}\nErrors: ${T.dhmLoaded.errors}`,
				);
			}
			dhmShop.onFileLoaded();
		} else {
			alert(
				`Nothing to import! (${Object.keys(T.dhmLoaded.skip).length} skipped, ${T.dhmLoaded.errors} errors)`,
			);
		}
	};

	reader.readAsText(presetsFile[0]);
};

dhmShop.onFileLoaded = function () {
	if (Object.keys(T.dhmLoaded).length > 0) {
		let loadedFirst = dhmUtils.presetLoadTmp(
			Object.keys(T.dhmLoaded.passed)[0],
		);
		setup.colours.hair_map.tmp1.canvasfilter.blend = loadedFirst.blend;
		setup.colours.hair_map.tmp1.canvasfilter.brightness =
			loadedFirst.brightness;

		dhmShop.pmanRefresh(_DHMTMP);
	}
};

dhmShop.onImportConfirm = function () {
	let res = dhmUtils.presetBulkImport();
	let text =
		dhmod.cfg.overwrite && res.overwritten > 0
			? `(${res.overwritten} overwritten)`
			: res.skipped > 0
				? `(${res.skipped} skipped)`
				: "";
	alert(`${res.imported} imported ${text}`);

	delete T.dhmLoaded;
	dhmShop.pmanRefresh(_DHMTMP);
	dhmShop.pmanRefresh(_DHMSAVED);
};
// }}}
