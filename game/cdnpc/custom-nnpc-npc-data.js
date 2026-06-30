function customNNPCSetupMoodCallbacks() {
    for (let i = 0; i < V.NPCNameList.length; i++) {
        // Mood: blush (0-5), anger (0-2), smile (bool), trauma(bool)

        const NPCName = V.NPCNameList[i];

        switch (NPCName) {
            case "Robin":
                setup.customNNPC.moodCallback[NPCName] = function (data) {
                    return {
                        "blush": customNNPCGetBlush(data.love, 100, data.lust, 100),
                        "anger": false,
                        "smile": true,
                        "trauma": data.trauma > 40,
                    }
                };
                break;
            case "Whitney":
                setup.customNNPC.moodCallback[NPCName] = function (data) {
                    return {
                        "blush": customNNPCGetBlush(data.love, 30, data.lust, 100),
                        "anger": false,
                        "smile": data.love > 20,
                        "trauma": false,
                    }
                };
                break;
            case "Eden":
                setup.customNNPC.moodCallback[NPCName] = function (data) {
                    return {
                        "blush": customNNPCGetBlush(data.love, 200, data.lust, 100),
                        "anger": false,
                        "smile": data.love > 150,
                        "trauma": false,
                    }
                };
                break;
            case "Kylar":
                setup.customNNPC.moodCallback[NPCName] = function (data) {
                    return {
                        "blush": customNNPCGetBlush(data.love, 100, data.lust, 100),
                        "anger": customNNPCGetAnger(data.rage, 100),
                        "smile": data.love > 10,
                        "trauma": false,
                    }
                };
                break;
            case "Avery":
                setup.customNNPC.moodCallback[NPCName] = function (data) {
                    return {
                        "blush": customNNPCGetBlush(data.love, 100, data.lust, 100),
                        "anger": customNNPCGetAnger(data.rage, 100),
                        "smile": data.love > 40,
                        "trauma": false,
                    }
                };
                break;
            case "Sydney":
                setup.customNNPC.moodCallback[NPCName] = function (data) {
                    return {
                        "blush": customNNPCGetBlush(data.love, 150, data.lust, 100),
                        "anger": false,
                        "smile": data.love > 30,
                        "trauma": false,
                    }
                };
                break;
            case "Great Hawk":
                setup.customNNPC.moodCallback[NPCName] = function (data) {
                    return {
                        "blush": customNNPCGetBlush(data.love, 100, data.lust, 100),
                        "anger": false,
                        "smile": data.love > 20,
                        "trauma": false,
                    }
                };
                break;
            case "Black Wolf":
                setup.customNNPC.moodCallback[NPCName] = function (data) {
                    return {
                        "blush": customNNPCGetBlush(data.love, 150, data.lust, 100),
                        "anger": false,
                        "smile": data.love > 80,
                        "trauma": false,
                    }
                };
                break;
            case "Gwylan":
                setup.customNNPC.moodCallback[NPCName] = function (data) {
                    return {
                        "blush": customNNPCGetBlush(data.love,
                            getSpecialSets(sets => sets.shop.includes("forest")).length * 2,
                            data.lust, 100),
                        "anger": false,
                        "smile": data.love > 60,
                        "trauma": false,
                    }
                };
                break;
            case "Darryl":
            case "River":
            case "Mason":
            case "Sam":
            case "Wren":
            case "Charlie":
                setup.customNNPC.moodCallback[NPCName] = function (data) {
                    return {
                        "blush": data.love >= 40 ? 1 : 0 + (data.lust >= 20 ? 1 : 0),
                        "anger": data.love <= -10 ? 1 : 0,
                        "smile": data.love >= 20 ? 1 : 0,
                        "trauma": false,
                    }
                };
                break;
            case "Sirris":
            case "Zephyr":
            case "Remy":
            case "Quinn":
            case "Niki":
            case "Winter":
            case "Morgan":
            case "Leighton":
            case "Landry":
            case "Jordan":
            case "Harper":
            case "Doren":
            case "Briar":
            case "Bailey":
                setup.customNNPC.moodCallback[NPCName] = function (data) {
                    return {
                        "blush": data.love >= 80 ? 1 : 0 + (data.lust >= 40 ? 1 : 0),
                        "anger": data.love <= -20 ? 1 : 0 + (data.love <= -40 ? 1 : 0),
                        "smile": data.love >= 20 ? 1 : 0,
                        "trauma": false,
                    }
                };
                break;
            case "Ivory Wraith":
                setup.customNNPC.moodCallback[NPCName] = function (data) {
                    return {
                        "blush": false,
                        "anger": false,
                        "smile": false,
                        "trauma": true,
                    }
                };
                break;
            default:
                setup.customNNPC.moodCallback[NPCName] = function (data) {
                    return {
                        "blush": customNNPCGetBlush(data.love, 100, data.lust, 100),
                        "anger": customNNPCGetAnger(data.rage, 100),
                        "smile": data.love > 40,
                        "trauma": data.trauma > 40,
                    }
                };
                break;
        }

        setup.customNNPC.expressionOverrides["Ivory Wraith"] = function (mood) {
            if(V.wraith.state === "haunt"){
                T.modeloptions.left_eye = "red possessed";
                T.modeloptions.right_eye = "red possessed";
            }else{
                T.modeloptions.left_eye = "blue possessed";
                T.modeloptions.right_eye = "blue possessed";
            }

            T.modeloptions.mouth = "neutral";
            T.modeloptions.brows = "top";

            T.modeloptions.blush = 0;
            T.modeloptions.tears = 0;
        };

        setup.customNNPC.expressionOverrides["Kylar"] = function (mood) {
            if(mood.anger >= 1){
                T.modeloptions.brows = "top";
                T.modeloptions.mouth = "smile";
                T.modeloptions.trauma = true;

                if(!V.combat){
                    T.modeloptions.blush = 0;
                }
            }
        };

        setup.customNNPC.expressionOverrides["Gwylan"] = function (mood) {
            if(C.npc.Gwylan.state === "scorned"){
                T.modeloptions.brows = "low";
                T.modeloptions.mouth = "cry";
                T.modeloptions.trauma = false;
                T.modeloptions.tears = 2;
                T.modeloptions.blush = 0;
            }
        }
    }
}

DefineMacro("custom-nnpc-init-npc-mood-callbacks", customNNPCSetupMoodCallbacks);


function getBlush(love, loveMax, lust, lustMax) {
    let loveLevel = ((love / loveMax) * 100) / 30;
    let lustLevel = ((lust / lustMax) * 100) / 30;

    return Math.min(5, Math.floor(loveLevel + lustLevel));
}

window.customNNPCGetBlush = getBlush;

function getAnger(anger, angerMax) {
    if (anger >= angerMax * 0.75) {
        return 2;
    } else if (anger >= angerMax * 0.5) {
        return 1;
    } else {
        return 0;
    }
}

window.customNNPCGetAnger = getAnger;
