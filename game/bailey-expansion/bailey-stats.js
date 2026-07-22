function baileyRevealed() {
    return V.stockholm_active === true;
}

window.baileyMaxRent = function () {
    var modifier = (V.settings && V.settings.rentCostModifier) || 1;
    return Math.floor(200000 * modifier);
};

/*   "leaving" 05:30–06:30  heading out
     "away"    06:30–19:00  at the orphanage
     "asleep"  02:00–05:30  there but won't come to the door
     "home"    19:00–02:00  home and reactive */
window.baileyFlatState = function () {
    var t = Time.hour * 60 + Time.minute;       
    if (t >= 330 && t < 390)  return "leaving"; // 05:30–06:30
    if (t >= 390 && t < 1140) return "away";    // 06:30–19:00
    if (t >= 120 && t < 330)  return "asleep";  // 02:00–05:30
    return "home";                              // 19:00–02:00
};

/* Weekend-obligation state. 
   $bailey_weekend_lastvisit (Time.days at the last flat visit)
   baileyWeeksMissed(): whole weeks since that visit
   baileyStraying(): 2+ weeks */
window.baileyWeeksMissed = function () {
    if (!V.bailey_monogamous) return 0;
    var last = (typeof V.bailey_weekend_lastvisit === "number") ? V.bailey_weekend_lastvisit : Time.days;
    return Math.max(0, Math.floor((Time.days - last) / 7));
};
window.baileyStraying = function () { return baileyWeeksMissed() >= 2; };

/* Bailey-specific Stockholm indicator */
Macro.add("gbaileystock", {
    handler: function () {
        if (typeof statDisplay === "undefined" || typeof statDisplay.statChange !== "function") return;
        const label = baileyRevealed() ? "Stockholm Syndrome" : "???";
        this.output.append(statDisplay.statChange(label, 1, "bailey-stockholm"));
    }
});

/* Brat Tax feedback, e.g. "+ £50 Brat Tax". */
Macro.add("gbrattax", {
    handler: function () {
        if (typeof statDisplay === "undefined" || typeof statDisplay.statChange !== "function") return;
        if (typeof formatMoney !== "function") return;
        const pennies = Number(this.args[0]);
        if (!pennies || pennies < 0) return;
        this.output.append(statDisplay.statChange(formatMoney(pennies) + " Brat Tax", 1, "pink"));
    }
});

$(document).one(":storyready", function () {

    /* One-time compatibility repair for persistent RBE values that are read as objects or text. */
    if (!V.stockholm_points || typeof V.stockholm_points !== "object" || Array.isArray(V.stockholm_points)) V.stockholm_points = {};
    if (typeof V.bailey_title !== "string") V.bailey_title = "Bailey";
    V.bailey_title = V.bailey_title.replace(/[<>]/g, "").trim().slice(0, 15) || "Bailey";
    if (typeof V.bailey_title_unlocked !== "boolean") V.bailey_title_unlocked = false;

    /* Car icon as a base64 data URI in JS (not a shipped image file), so there's no path
       for ModLoader/the build to fail to resolve. It's injected via a <<script>> block at
       the date event — pasted into passage text, SugarCube's // italic parser eats it. */
    window.baileyCarIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAilJREFUSIntlb9rE2EYxz9Xrp5YmgbTxB8IVqKXwR8U3CwmOBnELIbiUJw6Bjq5dMs/0N09uLiJSybFQrcKVeOQK6FR0Eh+aJJaJdPrEN7zzfW9s6lNlvqFkLvn3vf5PM/3ebmDYyvbnhe2PS/GDtVdj1ITEjTubg2Ab+2f4nT4lCELuJ5Y4H15AwDH2TJGQq58bN2WP4BsJifGYb1Zrn7/6g3KLtUxHHXnJtDxe+g4W4Y6hpEqm8m51nrHcJQygx7qxjAWsDqG1cX0wCH78asHwNvtT4EJ1ssV7ZgCwfdSl+trK8sCYHPyAgDdVoNQJAqT/TW9uRAAVrVE7O5DOs06vTevsG7eodtqkAShK2AiCLy2siyKTYNn5eYAdGY25t4DnGntuFAZm5mNEYpE6c1dAyCZiA845guWUIBQJDoAVQFWtcSJW/fpNOsD+9U1KlwWsM//bCYn7JMVXnatIDNcWdWSm1iNSau9cSlDdicDzdpnNt5tHwj6LzJWF9Piw86XQ21u7+4NvSc8PUV7d69/qq9eOj90AulKeHpKW5AaV+9lsYb3tI1LhtjMi9RSAYCFG1f2LVDn/frpo/5FLU/qcfzAkKidpuEUPeAXCM7lSS0VtLZJPX/yAGp5ABeqJvSzXK6R/3Kd2U9S0Hardt135U+X3oQXz0a0YF1svVwxTFlt0Mn2dqNL+Ld3Np7XpumXaFj5fQySFIV2xocFJRNxN6Ef9L+Ot34DE0wbOE6jz3IAAAAASUVORK5CYII=";

    /* Bailey carries two dom values that must agree: $bailey_dom and C.npc.Bailey.dom.
    This runs every passage and mirrors $bailey_dom onto the NPC stat.
    NaN/undefined self-heals below, and the Stockholm floor of 100. */
    function syncBaileyDom() {
        if (!C.npc.Bailey) return;

        /* NaN fails gte and lt both, so dom gates stop firing silently. */
        if (Number.isNaN(V.bailey_dom)) {
            var _npcDom = C.npc.Bailey.dom;
            var _hasNpcDom = typeof _npcDom === "number" && !Number.isNaN(_npcDom);
            var _healDom = _hasNpcDom ? _npcDom : (baileyRevealed() ? 100 : 50);
            console.log("[BaileyExpansion] Healed $bailey_dom NaN \u2192 " + _healDom);
            V.bailey_dom = _healDom;
        }
        if (Number.isNaN(V.bailey_love)) {
            var _npcLove = C.npc.Bailey.love;
            var _hasNpcLove = typeof _npcLove === "number" && !Number.isNaN(_npcLove);
            var _healLove = _hasNpcLove ? _npcLove : 25;
            console.log("[BaileyExpansion] Healed $bailey_love NaN \u2192 " + _healLove);
            V.bailey_love = _healLove;
        }

        /* If the mod is added mid-save: Orphanage Intro never ran,
        so $bailey_dom is undefined and dom checks fail silently. */
        if (V.bailey_dom === undefined) {
            V.bailey_dom = baileyRevealed() ? 100 : 50;
            console.log("[BaileyExpansion] Initialized missing $bailey_dom -> " + V.bailey_dom);
        }
        if (V.bailey_love === undefined) V.bailey_love = 0;

        /* Rebuild $stockholm_bailey from $stockholm_points */
        if (typeof V.stockholm_bailey !== "number" || Number.isNaN(V.stockholm_bailey)) {
            var _pts = V.stockholm_points || {};
            var _healStock = 0;
            if (_pts.offer_defeat === true) _healStock += 3;
            else if (_pts.offer === true) _healStock += 1;
            ["temple", "kylar", "cafe", "whitney", "gwylan", "kick"].forEach(function (k) {
                if (_pts[k] === true) _healStock += 1;
            });
            console.log("[BaileyExpansion] Healed $stockholm_bailey (" + V.stockholm_bailey + ") → " + _healStock);
            V.stockholm_bailey = _healStock;
        }

        mirrorBaileyDom();
    }

    /* Lightweight mirror for :passageend, so mid-passage changes show without redoing the healing. */
    function mirrorBaileyDom() {
        if (!C.npc.Bailey) return;
        if (typeof V.bailey_dom === "number" && !Number.isNaN(V.bailey_dom)) {
            if (baileyRevealed() && V.bailey_dom < 100) V.bailey_dom = 100;
            if (C.npc.Bailey.dom !== V.bailey_dom) C.npc.Bailey.dom = V.bailey_dom;
        }
        if (typeof V.bailey_love === "number" && !Number.isNaN(V.bailey_love) && C.npc.Bailey.love !== V.bailey_love) {
            C.npc.Bailey.love = V.bailey_love;
        }

        /* Keep monogamous Bailey at 0 so he skips condoms; the game won't re-zero it once it drifts. */
        if (V.bailey_monogamous === true && C.npc.Bailey.pregnancyAvoidance !== 0) {
            console.log("[BaileyExpansion] Monogamous Bailey pregnancyAvoidance " + C.npc.Bailey.pregnancyAvoidance + " -> 0");
            C.npc.Bailey.pregnancyAvoidance = 0;
        }
    }
    $(document).on(":passagestart", syncBaileyDom);
    $(document).on(":passageend", mirrorBaileyDom);

    /* Stood-up check: date scheduled but not attended by midnight -> missed. Medium + All Night. */
    $(document).on(":passagestart", function () {
        if (typeof Time === "undefined" || typeof Time.hour === "undefined") return;
        if (Time.hour < 0 || Time.hour >= 7) return;
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
        if (V.bailey_lust_lastday === undefined) { V.bailey_lust_lastday = Time.days; return; }
        var delta = Time.days - V.bailey_lust_lastday;
        if (delta <= 0) { if (delta < 0) { V.bailey_lust_lastday = Time.days; } return; }
        V.bailey_lust_lastday = Time.days;
        if (V.stockholm_active === true && C.npc.Bailey && typeof C.npc.Bailey.lust === "number") {
            var _perDay = V.bailey_monogamous ? 2 : 1;
            C.npc.Bailey.lust = Math.max(0, Math.min(100, C.npc.Bailey.lust + delta * _perDay));
        }
    });

    /* Christmas gift reset. Lotus + office display stay permanent — leave them. */
    $(document).on(":passagestart", function () {
        if (V.christmas) return;
        if (V.christmas_gift_bailey === undefined &&
            V.christmas_gift_bailey_wrapped === undefined &&
            V.christmas_gift_bailey_given === undefined) return;
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

    /* Bailey Collar Art Registry - base64 */
    window.baileyCollarRegistry = [
        { key: "goose", pack: "Goose", label: "Goose by Reiyu", image: "data:image/webp;base64,UklGRg4CAABXRUJQVlA4TAECAAAv/8E/EF+hJpKt5v9PDh2DAIzgBOtooExd1KCobSQn2b0G4I4/hYPXPmoCAGnYEICbEmSlhHms4GcEjvn/gUNcVQ+neqBAKEERiigIigCEgkd78BGAKAhLls/lCgkzrT0Gq7Pq/0ptHpM4Go8Bsm1bbRvbKeoF49i4dxAJ//+BWimaZb3Ruzei/4zctg3DfKBQ222nPSCJf9R/6j/1n/pP/af+07a8zL6ZUe7deQHAueC7O4MBBnLvDrrnAPeS5N4d5vq8Mv3/3cU/6j/1n/pP/adH6ab/2E/K3btmMjoZd89ezPQVva5k3L18myzPShF3r16ZTX3svlsZd2/eq8XUDbHIRNx9SRbvk/DVohZx93fbmtdlMeFj/N0CmYi75xZwZVv2v+KpzqtRL+Lu2Qhmk+U0ZUJI2JoVYb9NJuLuuYWzcB92V5tziFh1vT0f3DeliLu3I8DujTsdQxwi3P7gAGBUibh7/Q2A4PEcSHiE79WBQsTdkTXbEdd+4PPr8+tJ+h+yJOPu2Fcbh/D90n0+yegRnF3aMkm5Oxo7ivQD+S37EIMDPpKcu+O8t7sQ+Yj05GOIYb3p10nS3YHDDsEH+DsCfDi5TYKwuwM4bG93gsSeCZB4dwC3e+ItAf99d/GP+k/9p/5T/6n/1H/qP/Wf+k/9p/5T/6n/1H/qP/WfMg0A" },
        { key: "goosecolored", pack: "Goose", label: "Goose - Colored Lotus by En", image: "data:image/png;base64,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EEgvoACkj9iCBAgQIEAgCigA0cSEAAECBAikF1AA0kdsQQIECBAgEAUUgGhiQoAAAQIE0gsoAOkjtiABAgQIEIgCCkA0MSFAgAABAukFFID0EVuQAAECBAhEAQUgmpgQIECAAIH0AgpA+ogtSIAAAQIEooACEE1MCBAgQIBAegEFIH3EFiRAgAABAlFAAYgmJgQIECBAIL2AApA+YgsSIECAAIEooABEExMCBAgQIJBeQAFIH7EFCRAgQIBAFFAAookJAQIECBBIL6AApI/YggQIECBAIAooANHEhAABAgQIpBdQANJHbEECBAgQIBAFFIBoYkKAAAECBNILKADpI7YgAQIECBCIAgpANDEhQIAAAQLpBRSA9BFbkAABAgQIRAEFIJqYECBAgACB9AIKQPqILUiAAAECBKKAAhBNTAgQIECAQHoBBSB9xBYkQIAAAQJRQAGIJiYECBAgQCC9gAKQPmILEiBAgACBKKAARBMTAgQIECCQXkABSB+xBQkQIECAQBRQAKKJCQECBAgQSC+gAKSP2IIECBAgQCAKKADRxIQAAQIECKQXUADSR2xBAgQIECAQBRSAaGJCgAABAgTSCygA6SO2IAECBAgQiAIKQDQxIUCAAAEC6QUUgPQRW5AAAQIECEQBBSCamBAgQIAAgfQCCkD6iC1IgAABAgSigAIQTUwIECBAgEB6AQUgfcQWJECAAAECUUABiCYmBAgQIEAgvYACkD5iCxIgQIAAgSigAEQTEwIECBAgkF5AAUgfsQUJECBAgEAUUACiiQkBAgQIEEgvoACkj9iCBAgQIEAgCigA0cSEAAECBAikF/gPm/3uo5vglE0AAAAASUVORK5CYII=" },
        { key: "goosefullcolor", pack: "Goose", label: "Goose - Full Color Lotus by En", image: "data:image/png;base64,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" },
        { key: "goosegold", pack: "Goose", label: "Goose - Gold Lotus by En", image: "data:image/png;base64,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" },
        { key: "goosesteel", pack: "Goose", label: "Goose - Steel Lotus by En", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAEACAYAAADFkM5nAAAACXBIWXMAADXUAAA11AFeZeUIAAAeYUlEQVR4Ae2cXahl5XnH13zIcWZURi/mQkX8oPFyJuBcFLwwkrYxkEqdREGDSUpLIi1Eq9JJ0cbSgAY7JKEFCQ3UfgQ6IZqE0Aw1aeuFEC8UZi4snRR0HHQG5sKq4AyjM3O63zVnHffaZ++9Pt6v53mf34Zh7bXW+/E8v+f5r/U/Z0Y3ra6uVpY+t912m7p0r7322jrmS7btWo/9ozOn6u9vvfXW+jUtX1588UUtoRJnYQTQf/6Cov/8NWgi2Nx8sXDUKP4S60IdSqyq/JzoOxk1og4y6uCiMGMAaDo5TecioR6y6lF6NPSbrApTDxn1MGEAaDYZzTYbBXWZJcJ5DAL0WQyq/mtSF3+GvisUbwBoMt8WiTuf+sTla311+kt2B1CfvPXZmnf7uLvTXHH5Tq+e+x/23HHHHXU4Z8+erXbu3Fl/f/7556dDXP++e/fu+vuB732/evjrX62/HzlyZP3+9Je77rqrPn333XerlZWV+vuhQ4emh/BdKAH0n64wKvX/3Yn+H7St/2INAOJPJ36pO+3bt6/atm1btWXLlmr79u3VM8880xnqAw88UJ0+fbo6f/58debMmc7xDJBJAP3LrEvKqNB/N+0i/woA8XcXvqQRzU//XTnt3bu32rNnz9xh7rq73+fTd78+azEmPAH0H56p5BX76hH9b6xicQYA8W8scslX+oo/NINc+4bOo7T10H9pFV2eTy4d5tp3OY3hd4syAIh/eANonpFbhLn311y7GLGj/xhU5a6ZW3+59w9RmWIMAOIP0Q561pAiPilx6KlcnEjRfxyuUleVojspcYytUxEGAPGPLb/OedJEJy0enVUdHzX6H89O40xpepMWz5CaqjcAiH9IufWPlSo2qXHpr/jyDND/cj6l3ZWqM6lxddVftQFA/F3lLeu+dJFJj6+sbuB/J11aPbvyka4v6fHN46vWAPDyn1fOcq9pEZeWOLV3CvrXXsFh8WvRlZY4G/oqDQDib8pn46hNVNri1dZF6F9bxfzi1aYnTfGqMwCI309M2mZrEtM0W61xT+cg8Tv6l1iVeDFp1ZGWuFUZAMQfT2gSV9YiokXstMe/KK9c19F/LvJ59tWuHw3xqzEAiD+PCHPtqkE8fdiUkkefXGOOQf8x6cpbuxTdSM9DhQFA/PIEGjMi6aIZmntp+QzN33c8+vclqGt+aXqRnI94A4D4dYnXN1rJYvHJrdS8fJj0mYv++1AqZ0ypOpGal2gDgPjLEXafTKSKpE/sfcaUnl8fBkPGoP8htPSPLV0fEvMTawAQv35BD8lAojiGxN93rJU8+/JYNA79LyJT5nUrupCWp0gDgPjLFPmirKSJYlGcoa5by3coN/Q/lJju8db0IClfcQYA8esW89DoJYlhaOw+463m3cUM/XcRKuu+VR1IyVuUAUD8ZYm7KxspIuiKM9Z96/nPckX/s0TKPrfe/xLyF2MAEH/ZYp/NTkLzz8aU4xwOF6mj/xzdl29P+v4i+9wcRBgAxJ9PiDl2zt30OXJetqd1Huh/WXeUd896v89WNCeP7AYA8c+2Q9nnOZtdMlmrXNC/5K4MH5vVPu8imYtLVgOA+Lvaoqz7uZpcC0VrfNC/ls4ME6e1/h5KLQefbAYA8Q9tD93jczS3RmJWOKF/jd05PmYrfT2e0MWZqTllMQCI37dNdM1P3dS66GyMtnRe6H9jzUu+Uno/h65dSl7JDQDiD90ustdL2cyySQyLrlRu6H9YH2gfXWofx65LKm5JDQDij902stZP1cSysg4XTWn80H+43tCwUmn9m5p5Cn7JDADiT90+efdL0bx5M0yzeykc0X+afpGySyl9m5tnbI5JDADiz91GafeP3bRps8m/Gzzz14AI+hOgX/uz6jMyJs/oBoCXf58SlzMmZrOWQ2l4JnAdzowZ6QnQp3GYx+Ia1QDw8o/TDFJXjdWkUvNNHRd8UxNnvyEE6M8htIaPjcE3mgHg5T+8wJpnxGhOzTxixQ7nWGRZ14cAfelDr//c0JyjGABe/v0LykgIDCUQ+iEwdH/GQwAC+QiE1H9wA8DLP19jsLMdAiEfAnaokSkEyiAQSv9BDQAv/zKaiyx0EAj1ENCRLVFCAALTBELoP5gB4OU/XRq+QyANgRAPgTSRsgsEIBCagK/+gxgAXv6hy8p6EOhPwPch0H8nRkIAAtII+Ojf2wDw8pfWDsRjkYDPQ8AiL3KGQEkExurfywDw8i+phchFO4GxDwHteRM/BCBQVWP0P9oA8PKn5SAgj8CYh4C8LIgIAhAYQ2Co/kcZAF7+Y0rDHAikITD0IZAmKnaBAARSEBii/8EGgJd/ihKyBwT8CAx5CPjtxGwIQEAagb76H2QAePlLKzPxQGAxgb4PgcUrcAcCENBKoI/+exsAXv5a24C4LRPo8xCwzIfcIVAygS799zIAvPxLbhFyK51A10Og9PzJDwKWCSzTf6cB4OVvuXXIvRQCyx4CpeRIHhCAwHwCi/S/1ADw8p8Pk6sQ0Ehg0UNAYy7EDAEIDCMwT/8LDQAv/2FwGQ0BDQTmPQQ0xE2MEICAP4FZ/c81ALz8/UGzAgSkEph9CEiNk7ggAIHwBKb1v8EA8PIPD9xzxdXJfPdn3mfZvXnjuQaBmsD0QwAkogks0/iye6KTIri8BBr9b50N4+TJk7OXOM9M4NixY9Wtt97qxL5p8mf9+NJLL1UrKyuZo7u4/Y033igiDoLoT8A9BA4dOtR/gsdInivj4aH/8eyYuZiA0/+G3wAsHs6dnAReffVVt/3q0ddero9r5zlDYu8CCDQ/CRSQStEpoP+iy5stuQ0G4OjRo9mCYeO5BNxP/dXX/nR/9fJLh6rbf29ffXTna5/6fnOS48hP/zmoh9sTExCOZYSV0H8EqCx5kcAGA+AuYwLEtcem7zz9zdoEPPevP6iP7nzyyf7yF0eKgEYRiG0CeKaMKkszCf03JDgGJTDXALgdEGxQziEWcy/72T8h1mUNCNQEYpsAMHsRmNU+5t8LJ5MdgYUGwN3EBDgKfCBghwAmwE6tyRQCSw2Aw4MJoEkgYIsAJsBWvcnWLoFOA+DQYALsNgiZ2ySACbBZd7K2RaCXAXBIMAG2GoNsIYAJoAcgUDaB3gbAYcAElN0MZAeBWQKYgFkinEOgHAKDDIBLGxNQTvHJBAJ9CGAC+lBiDAT0ERhsAFyKmAB9hSZiCPgQwAT40GMuBGQSGGUAXCqYAJkFJSoIxCKACYhFlnUhkIfAaAPgwsUE5Ckau0IgFwFMQC7y7AuB8AS8DIALBxMQviisCAHJBDABkqtDbBDoT8DbALitMAH9gTMSAiUQwASUUEVysE4giAFwEDEB1luJ/K0RwARYqzj5lkYgmAFwYDABpbUH+UBgOQFMwHI+3IWAZAJBDYBLFBMgudzEBoHwBDAB4ZmyIgRSEAhuAFzQmIAUpWMPCMghgAmQUwsigUBfAlEMgNscE9C3BIyDQBkEMAFl1JEs7BCIZgAcQkyAnUYiUwg4ApgA+gACeghENQAOAyZATzMQKQRCEMAEhKDIGhCITyC6AXApYALiF5IdICCJACZAUjWIBQLzCSQxAG5rTMD8AnAVAqUSwASUWlnyKoVAMgPggGECSmkb8oBAPwLTJgD992PGKAikIpDUALikeAikKi37QEAGAUyAjDoQBQRmCSQ3AC4ATMBsGTiHQNkEMAFl15fsdBLIYgAcKkyAzoYhagiEIID+Q1BkDQj4EchmAFzYPAT8isdsCGgmgP41V4/YSyCQ1QA4gDwESmgjcoDAOALofxw3ZkEgBIHsBsAlwUMgRClZAwI6CaB/nXUjav0ERBgAh5GHgP5mIgMIjCWA/seSYx4ExhMQYwBcCjwExheSmRDQTgD9a68g8WsjIMoAOHg8BLS1EPFCIBwB9B+OJStBoIuAOAPgAuYh0FU27kOgXALov9zakpksAiINgEPEQ0BWoxANBFISQP8pabOXVQJiDYArCA8Bq21J3hBA//QABGITEG0AXPKYgNgtwPoQkEsA/cutDZHpJyDeADjEPAT0NxoZQGAsAfQ/lhzzILCcgAoD4FLgIbC8kNyFQMkE0H/J1SW3XATUGAAHiIdArjZhXwjkJ4D+89eACMoioMoAOPQ8BMpqQLKBwBAC6H8ILcZCYDkBdQbApcNDYHlRuQuBkgmg/5KrS24pCag0AA4QD4GUbcJeEJBFAP3LqgfR6CSg1gA43DwEdDYdUUMgBAH0H4Iia1gmoNoAuMLxELDcvuRunQD6t94B5O9DQL0BcMnzEPBpAeZCQDcB9K+7fkSfj0ARBsDh4yGQr4kE7bw6iaX50xVWM84duz5Dxnatxf0IBNB/BKj6lhyi01hjVVHbqirajmDdQ+Dmm2/uGMXt0AQOHz4cesnR623ZsqXavHlzdcstt8x7sW9aW3j1wPe+X/3Op377iV/+16+fePjrX3Vj1+/Nbv7KK69UFy5cqM6fPz97i3NBBNB/nmKo1P93J/q/faL//5zo/0G7+i/KALj25yGQ/iGwffv29Jsu2NG9pF087qV9ySWX1C/tc+fOVadPn65uuumm2hS4l//j33iouueee55wR3f+yINfq+8dPHiwnr9169bKmYmPPvqouuyyy+r5KysrC3blshQC6D99JdTpf/Lyf/wv1vQ/OR6YnD/ykE39F2cAXPvzEEj7EJD0k7F7absXvntpr66uVu5FfurUqcq9vJ868HfVv/zzweq1145Wx44dq15//fX6twXu/JN7b6/uu+/u6tGHHqhOnDhRXXnllfU6bp5bz60rKc+0Fda1G/pPWy9Julim/yef/tvqhz/8UfXaf8/of3L+yb2fqu67957q0T+zpf8iDYBrfx4C6R4CTnRSPu5h1Ly0m6P7K4Fv/NXT1Ve++IX1l7gzBo/s/1b1N089Vh0+fKR64RcHq//49x9XD//5X1dPfWt//dJ3Y86ePVubiA8//LA2AVLyJI7lBND/cj4h72rQ//7Hnqr+8P671/R/8QeDj/V/eKL/H030/5w5/RdrAFyD8xAIKfPFa0n6FaD7tb/7uOP7779fv7ydEXjym49W+//y29XR//lN9fPn/7H63F1fql/87ujO7/z8V6qbP/Fb9cvfjXcvf/eTv/tNgPtrgEsvvbQ+LqbAHWkE0H+aimjQvzP1zgQc/c3/XtT/H9w/0f/h6nOT489/8k/Vnfu+PPn3Y58wp/+iDYBrfx4C8R8C7733XvxNeu7Q/AbAHa+55prK/eS+c+fO+q8BDjz5WP0TwO9+9p76IfDpz3xh/fizH/9D/RP+FVdcUe3atas6c+ZMdfnll1dvv/12fd39JkDSTzo9cZgfhv7jt4Aa/X/78TX9312/9D/9mc+vH3/23LMm9V/Mfwa4rM3dQ4BPPALbtm2r3B8BH/cv+df/nDx5snIPJ/d3+u7j/irg3i/9SfXir35S/0S/Z8/u+ujO3XV3333ceDfPzZ981tdb++6u8RlA4Pjx45X7k+uD/uOSV6X/+53+f7qm/z1r+v9pde/kukX9F/8bgKb1+UmgIRHv2JgA99OzkE/zn/Y14aw++/ffqb78xw9V77zzf/Wv+z575xerq666snLXd+zY4cbNzmnmchxIIOdLfzZU9D9LJPy5Cv3/YKL/P3L6f+ei/n//von+r6qenVy3qH8zBsC1Ow+B8KKft6J7EAgyAdMh1i/3F/7tYPP/CNj0yq9fWP8+PZDvfgQkvfybTNB/QyLuUbz+fzGl/5d/aVr/Jv4KYLrd3UOAj3kCza/1HYjp7+bBlA4A/Zde4V75TWt++nuvySUNMmcAXPF4CJTUwuQCgWEE0P8wXowul4BJA+DKyUOg3KYmMwh0EUD/XYS4b4GAWQPgistDwEKLkyME5hNA//O5cNUOAdMGwJWZh4CdZidTCMwSQP+zRDi3RMC8AXDF5iFgqeXJFQJtAui/zYMzOwQwAGu15iFgp+nJFAKzBND/LBHOLRDAAExVmYfAFAyPr3D0gMfUbATo2zDo4RiGY4pVMAAzlGneGSADT+E3EBjDRRGgf/3KAT8/fqlnYwDmEKeJ50DpcQluPSAxRDwB+nhcieA2jlvOWRiABfRp5gVgFlyG1wIwXFZJgH4eVjZ4DeMlZTQGYEklaOolcKZuwWkKBl+LIUBf9yslnPpxkjgKA9BRFZp7OSD4LOfDXd0E6O/l9YPPcj7S72IAelSIJp8PCS7zuXC1LAL0+fx6wmU+F01XMQA9q0Wzt0HBo82Ds7IJ0O/t+sKjzUPrGQZgQOVo+ouw4DCgaRhaDAH6Hv0X08xriWAABlbU+kPAev4D28Xk8OPHjxebt/X+t55/aY2NARhRUasisJr3iBYxO6Xkl39TVKs6sJp3U/cSjxiAkVW1JgZr+Y5sC9PTLLz8mwJb04O1fJs6l37EAHhU2IoorOTp0Qrmp1p6+TfFtqILK3k2dbV0xAB4Vrt0cZSen2f5mT4hYPHl3xS+dH2Unl9TR6tHDECAypcqklLzClByllgjYPnl3zRBqTopNa+mbhyrCgMQqAtKE0tp+QQqM8tMEeDl/zGM0vRSWj4fV4pv0wQwANM0PL+XIppS8vAsJ9OXEODlvxFOKbopJY+NFeLKLAEMwCwRz3Pt4tEev2f5mN6DAC//xZC060d7/Isrw515BDAA86h4XtMqIq1xe5aL6QMI8PLvhqVVR1rj7q4IIxYRwAAsIuN5XZuYtMXrWR6mjyDAy78/NG160hZv/0owchkBDMAyOp73tIhKS5ye5WC6BwFe/sPhadGVljiHV4AZXQQwAF2EPO9LF5f0+DzxMz0AAV7+4yFK15f0+MaTZ2YfAhiAPpQ8x0gVmdS4PHEzPSABXv7+MKXqTGpc/sRZoS8BDEBfUp7jpIlNWjyeeJkegQAv/3BQpelNWjzhSLPSEAIYgCG0PMdKEZ2UODxxMj0iAV7+4eFK0Z2UOMITZsWhBDAAQ4l5js8tvtz7e+JjegICvPzjQc6tv9z7xyPLymMIYADGUPOck0uEufb1xMX0hAR4+ceHnUuHufaNT5QdxhLAAIwl5zkvtRhT7+eJh+kZCPDyTwc9tR5T75eOJDv5EMAA+NDznJtKlKn28cTB9IwEePmnh59Kl6n2SU+QHX0JYAB8CXrOjy3O2Ot7ps90AQR4+ecrQmx9xl4/Hzl2DkEAAxCCoucasUQaa13PdJkuiAAv//zFiKXTWOvmJ0YEoQhgAEKR9FwntFhDr+eZHtMFEuDlL6coofUaej05pIgkFAGnfwxAKJoB1gkl2lDrBEiJJYQS4OUvrzChdBtqHXmEiCgUgUb/GIBQRAOt4yte3/mB0mAZwQQa8QsO0Wxovvr1nW8WvKHEp/WPARBY+LEiHjtPIAJCikRgWvyRtmBZTwJjdTx2nme4TFdEYFb/GAChxRsq5qHjhaZNWBEJzIo/4lYs7UlgqJ6HjvcMj+kKCczTPwZAcCH7irrvOMGpElpkAvPEH3lLlvck0FfXfcd5hsN0xQQW6R8DILyoXeLuui88PcJLQGCR+BNszRaeBLr03XXfc3umF0Bgmf4xAAUUmBQgsIjAMvEvmsN1CECgDAJd+t+0urpaRqZkEYXAddddF2XdWIueP3++WllZqdxx8+bN1datW6sLFy7Ux7Nnz1YffPBBdfXVV9fbnzp1qtq1a1f9/cSJE9WOHTvquefOnavnuqObu2XLlsrNdUdNny7xa8qFWPMQQP9l65/fAOTRlZpdeYmoKVUrUOrWwsHJSAL00Uhwmaf1rRsGIHOhNGzft5k05GIhRuplocrpcqSf0rEOsdOQemEAQhA3sMaQpjKAQ2yK1ElsaVQHRl/pKN/QOmEAdNRVRJRDm0tE0IaCoD6Gip0hVforA/QBW46pDwZgAGCGVtWYJoNbfALUJT5jdkD/UntgrP4xAFIrKjiusc0mOCXVoVEP1eVTFzz9JqtkPvXAAMiqpZpofJpOTZIKAqUOCopUYIj0nYyi+tYBAyCjjiqj8G0+lUkLChr+gophMBT6L2/RQ/DHAOStofrdQzSheggZEoB7BuhsuYEAfbgBSZILobhjAJKUq+xNQjVj2ZTCZQfvcCxZyZ8A/ejPcMgKIXljAIaQZ+xCAiGbcuEm3OC/wqAHRBJA/2nKEpozBiBN3UzsEro5TUAbkCR8B8BiaHIC9Gdc5DH4YgDi1szc6jGa1BzEOQnDdQ4ULokjQJ/GKUksrhiAOPUyvWqsZrUKFZ5WK68zb/o1bN1i8sQAhK0Vq60RiNm0liDD0VK1y8mVvg1Ty9gcMQBh6sQqcwjEbt45WxZ1CX5FldNcMvSvX8lT8MMA+NWI2R0EUjRxRwgqb8NNZdkIeoYAfTwDpOdpKm4YgJ4FYdh4AqmaeXyEsmbCS1Y9iMaPAP08jF9KXhiAYbVh9EgCKZt6ZIgipsFJRBkIIjAB+rof0NScMAD96sKoAARSN3eAkJMuAZ+kuNksMQH6eznwHHwwAMtrwt3ABHI0eeAUoiwHlyhYWVQYAfp8fkFyccEAzK8HVyMSyNXsEVPyWhoeXviYrIwA/d4uWE4eGIB2LThLRCBn0ydKsdc2cOiFiUGFEaDvLxY0NwcMQGHC0pRO7ubPzcp6/rn5s39eAtb7X0L+GIC8GjC/uwQR5CiC1bxzsGZPuQSs6kBK3hgAudowE5kUMaQCbi3fVFzZRycBa3qQlC8GQKdmiotakihiwrWSZ0yGrF0eASu6kJYnBqA8LanNSJo4QoMsPb/QvFjPFoHS9SExPwyALY2Jz1aiSEJAKzWvEGxYAwINgVJ1IjUvDEDTeRzFEJAqlrGASstnLAfmQaAPgdL0IjkfDECfjmRMcgKSRTMERil5DMmZsRDwJVCKbqTngQHw7VTmRyMgXTxdiWuPvys/7kMgJgHt+tEQPwYgZgeztjcBDSKal6TWuOflwjUI5CKgVUda4sYA5Ops9u1NQIuYmoS0xdvEzRECEglo05OmeDEAEjuemDYQ0CIqLXFuAMwFCAgmoEVXWuJsSo0BaEhwFE9Aurikxye+wAQIgSUEpOtLenzz0GIA5lHhmlgCUkUmNS6xhSQwCIwgIFVnUuPqQowB6CLEfXEEpIlNWjziCkZAEAhIQJrepMUzBDUGYAgtxoohIEV0UuIQUxgCgUACAlJ0JyWOscgxAGPJMS87gdziy71/9gIQAAQyEsitv9z7h0CPAQhBkTWyEcglwlz7ZgPNxhAQSCCXDnPtG7oEGIDQRFkvOYHUYky9X3KgbAgBRQRS6zH1fjFLgQGISZe1kxFIJcpU+yQDx0YQKIBAKl2m2idVSTAAqUizDwQgAAEIQEAQAQyAoGIQCgQgAAEIQCAVAQxAKtLsAwEIQAACEBBEAAMgqBiEAgEIQAACEEhFAAOQijT7QAACEIAABAQRwAAIKgahQAACEIAABFIRwACkIs0+EIAABCAAAUEEtgqKhVAg4EVg9r/RveGGG7zWc5PffPNN7zVYAAIQiE8A/Q9njAEYzowZSgi88cYbrUivv/761vm8k6NHj867zDUIQEAZAfTfXbBNq6ur3aMYAYFCCOzevXthJkeOHFl4jxsQgIB+Aui/XUMMQJsHZxCAAAQgAAETBPhHgCbKTJIQgAAEIACBNgEMQJsHZxCAAAQgAAETBDAAJspMkhCAAAQgAIE2AQxAmwdnEIAABCAAARMEMAAmykySEIAABCAAgTYBDECbB2cQgAAEIAABEwQwACbKTJIQgAAEIACBNgEMQJsHZxCAAAQgAAETBDAAJspMkhCAAAQgAIE2AQxAmwdnEIAABCAAARMEMAAmykySEIAABCAAgTYBDECbB2cQgAAEIAABEwQwACbKTJIQgAAEIACBNgEMQJsHZxCAAAQgAAETBDAAJspMkhCAAAQgAIE2AQxAmwdnEIAABCAAARMEMAAmykySEIAABCAAgTYBDECbB2cQgAAEIAABEwQwACbKTJIQgAAEIACBNgEMQJsHZxCAAAQgAAETBDAAJspMkhCAAAQgAIE2AQxAmwdnEIAABCAAARMEMAAmykySEIAABCAAgTYBDECbB2cQgAAEIAABEwQwACbKTJIQgAAEIACBNgEMQJsHZxCAAAQgAAETBDAAJspMkhCAAAQgAIE2AQxAmwdnEIAABCAAARMEMAAmykySEIAABCAAgTYBDECbB2cQgAAEIAABEwQwACbKTJIQgAAEIACBNgEMQJsHZxCAAAQgAAETBDAAJspMkhCAAAQgAIE2AQxAmwdnEIAABCAAARMEMAAmykySEIAABCAAgTYBDECbB2cQgAAEIAABEwQwACbKTJIQgAAEIACBNgEMQJsHZxCAAAQgAAETBDAAJspMkhCAAAQgAIE2AQxAmwdnEIAABCAAARME/h9UgtuwH/uOjQAAAABJRU5ErkJggg==" },
        { key: "vanilla", pack: "Vanilla", label: "Vanilla by Snowy", image: "data:image/png;base64,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" },
        { key: "mikili", pack: "Mikili", label: "Mikili by Rasu", image: "data:image/webp;base64,UklGRqgBAABXRUJQVlA4TJwBAAAv/cE/EM/AJgDAJPPLnSBkIDUt7ON3t5MabAIASINfbhUIQkiyUcHm26VMI9tqRQ4qaxxtUDktUEK2yB/cm5n/CCGlVOFcoVQghEGIYEwoQPcdQMUo+zmRG/xXJwDbD/D968GjvbvfYEs5hvkqk9PdWW6Nqhbm0gwQHElypKw9fwvnzf9fuprDQ+GrMqL/jNxIcmJyhnoB5+sXf7D/7D/7z/6z/yyRCoCor65cgER8dekmq8tqEvHVpWu2hzTVF706kOmWSn71L/5g/9l/9p/9Z//Zf/af/Wf/fbDsP5z/78A/543UV1cpefr7iK8uU8uTCictEV9dKEieUH0kvbpYUAOF8h0Kwqvr1U2AFmACpKS7umqwoxz6gvDqiu0C2WRCAl1BeHXBu3cbEu43CWRS7hZeXbIhLE/HzZAHiK4u2n50ZslwN2z2N2RXl2xzZp1hnGcTbnZ/gasDSamsXpTvRlU+AdWVrnSb4WaA9hNRXeoJs0UmZP71rg6QJC1A8gmo/sUf7D/7z/6z/+w/+8/+s//sP/vP/rP/vusA" },
        { key: "mikiliweremane", pack: "Mikili", label: "Mikili by Weremane", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAEACAYAAADFkM5nAAAAAXNSR0IArs4c6QAAEBpJREFUeAHt3G1sVeUdAPALKOLLgi/ntNCWviii1paWQCsYNUu2oTOLZF9cTIR9ZBr4Kgl94dpSLHRWqFKoYFvAaCqJSdtAjIniG2r8smXLMhdc4pxuy+LbxBeotM/y3NiFDyQyLe3F/po09+aec57n//ye87/nOc8592Qy/ggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwHQXuPxbAGZ8y3KLCRA4fwXk//nbdyIn8P0E5lx00duZTOZoJpMpW1FTU1xdXX3FNyVeOHv27JNXXH754PerwdYECOSrQMz/uXPnvllTU7Po9PyvrKycXV5ePiL/87XnxEVgAgQunjPn6Lp160YPHDjwed3SpSdvXr78xE11dSPDw8NhzZo14ZKLL/79BFSjCAIE8lAg5n9LS8vo/v37j4/nf/2yZSNPPvlkaGpqkv952GdCIjBhAvELoK6ubuz+++//av369eGpp54aW79+/VjP7t1fX7twYYjLJ6wyBREgkFcCMb+rqqrGWlpaTo7n/9q1a8d+vWbNyZLiYvmfV70lGALnQGDGjBlfXXXVVceXL19+fMOGDWNLamtPFKTp1xdccMGpTCbjHoBzYK5IAvkiIP/zpSfEQWDq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N7uwZMmSUFNTEy8BxJsAz/jLgslvvRoJTG8B+T+9+1/rp7lA/FlenPJfXF0d4pfBvHnz4s8AcwOArq6uP27btm1eJOrr6yvv7e39ePfu3V9ks9mR559/fqS1tXWkt7f3r/v27fvLOGN7e/vcnTt3/i7OIMRy4tR/HGAsXrw4VFVVxc9OZjKZWePreyVAYOoE5P/U2auZwJQLFCTJC/Haf7zzP96wd/vtt4cVK1aEW2+5ZeSnP/nJqZaWlk/if0dHx5/37NnzRnwuwGuvvfbB0aNHR1999dV4MM/s37//rY6Ojtfieq2trR/96u67/3Tbrbd+VF9X99XtK1fmbgKMg4vSkpKxNElOTXmjBUCAQE5A/tsRCExjgfgo0DRJPsk9pjdJQn19fbz2fzybzW7btGlTa01NTfHpPLt27So+dOjQaAhh5tDQ0Gh/f3/D4cOH08OHD1fG9R544IEfdXV1vZTNZl9vbm5+Z9WqVeO/KhhNk+Sz08vyngCBqRWQ/1Prr3YC+SAwo+DKK1emSZJ7gM9tt932WXNzc3b16tWXnh5cR0fHpc8999zfX3nlldyB/OWXX/70xRdf/LCnp+eS09fr7Oy8uLGx8e1f3Hnne2mSjCZJ8tbpy70nQCCvBOR/XnWHYAhMscCGDRvmtre3H+vs7PzDnj173j148OAHhw4dev/gwYMnstns7PHwnn766S+GhobeGRwc/Ne+ffve27lz57tbt279Z1NT09LxdbwSIHB+Ccj/86u/REvgnAmEEM7qpr2zXe+cBapgAgQmXOBs8/ps15vwABVIgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAIN8F/gtNLgWPayny9QAAAABJRU5ErkJggg==" },
        { key: "aumasc", pack: "AU", label: "AU Masc by Anamink", image: "data:image/png;base64,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" },
        { key: "aufem", pack: "AU", label: "AU Fem by Anamink", image: "data:image/png;base64,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" },
        { key: "dmmm", pack: "DMMM", label: "DMMM by Reiyu", image: "data:image/png;base64,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" }
    ];

    /* Backward-compat alias - all existing code reads window.baileyCollarImages. */
    window.baileyCollarImages = {};
    window.baileyCollarRegistry.forEach(function (e) {
        window.baileyCollarImages[e.key] = e.image;
    });
    /* Custom slot - separate from registry, loaded from localStorage on boot. */
    window.baileyCollarImages.custom = (function () {
        try { return localStorage.getItem("baileyCollarCustom") || null; }
        catch (e) { return null; }
    })();

    if (typeof Renderer !== "undefined" && Renderer.ImageLoader) {
        var _origLoader = Renderer.ImageLoader;
        var _collarPath = "img/clothes/neck/baileys_collar/";
        Renderer.ImageLoader = {
            loadImage: function (src, layer, successCallback, errorCallback) {
                /* Only intercept our collar path - everything else passes through */
                var _art = (V && V.bailey_collar_art) ? V.bailey_collar_art : "goose";
                /* Fallback if custom was selected but never uploaded (or was cleared) */
                if (_art === "custom" && !window.baileyCollarImages.custom) _art = "goose";
                if (typeof src === "string" && src.indexOf(_collarPath) === 0 && window.baileyCollarImages[_art]) {
                    var img = new Image();
                    img.onload = function () { successCallback(src, layer, img); };
                    img.onerror = function (e) { errorCallback(src, layer, e); };
                    img.src = window.baileyCollarImages[_art];
                } else {
                    _origLoader.loadImage(src, layer, successCallback, errorCallback);
                }
            }
        };
        /* Our handler fires after DOL+'s :storyready handler which renders the sidebar.
           That first render fails (no PNG), sets Renderer.ImageErrors, and permanently
           blocks retries. Clear any pre-hook error flags and force a fresh redraw. */
        if (Renderer.ImageErrors) {
            var _errKeys = Object.keys(Renderer.ImageErrors);
            for (var i = 0; i < _errKeys.length; i++) {
                if (_errKeys[i].indexOf(_collarPath) === 0) delete Renderer.ImageErrors[_errKeys[i]];
            }
        }
        if (Renderer.locateModel) {
            var _sbModel = Renderer.locateModel("main", "sidebar");
            if (_sbModel && _sbModel.canvas && _sbModel.layerList) {
                Renderer.invalidateLayerCaches(_sbModel.layerList);
                _sbModel.redraw();
            }
        }
        console.log("[BaileyExpansion] Canvas renderer hooked for collar images");
    }

    /* Clear collar image cache and force the sidebar model to redraw with the new art style.
       Works on the same page - no passage transition needed. */
    window.baileyCollarCacheClear = function () {
        if (typeof Renderer === "undefined") return;
        /* Clear image-level cache for collar paths */
        if (Renderer.ImageCaches) {
            var keys = Object.keys(Renderer.ImageCaches);
            for (var i = 0; i < keys.length; i++) {
                if (keys[i].indexOf("img/clothes/neck/baileys_collar/") === 0) {
                    delete Renderer.ImageCaches[keys[i]];
                }
            }
        }
        if (Renderer.ImageErrors) {
            var errKeys = Object.keys(Renderer.ImageErrors);
            for (var i = 0; i < errKeys.length; i++) {
                if (errKeys[i].indexOf("img/clothes/neck/baileys_collar/") === 0) {
                    delete Renderer.ImageErrors[errKeys[i]];
                }
            }
        }
        /* Locate the sidebar model, invalidate its layer caches, and redraw in-place */
        if (Renderer.locateModel) {
            var model = Renderer.locateModel("main", "sidebar");
            if (model && model.canvas && model.layerList) {
                Renderer.invalidateLayerCaches(model.layerList);
                model.redraw();
            }
        }
    };

    /* Custom collar art. File picker -> base64 -> localStorage
    -> $bailey_collar_art = "custom" -> redraw. 2 MB Cap. */
    window.baileyCollarUpload = function () {
        var input = document.createElement("input");
        input.type = "file";
        input.accept = "image/png,image/webp,image/jpeg,image/gif";
        input.style.display = "none";
        input.addEventListener("change", function (ev) {
            var file = ev.target.files && ev.target.files[0];
            if (!file) return;
            if (file.size > 2 * 1024 * 1024) {
                alert("Image too large (max 2MB). Please pick a smaller file.");
                return;
            }
            var reader = new FileReader();
            reader.onload = function (e) {
                var dataUri = e.target.result;
                try {
                    localStorage.setItem("baileyCollarCustom", dataUri);
                } catch (err) {
                    alert("Couldn't save custom collar - localStorage is full or disabled.");
                    return;
                }
                window.baileyCollarImages.custom = dataUri;
                if (typeof State !== "undefined" && State.variables) {
                    State.variables.bailey_collar_art = "custom";
                }
                window.baileyCollarCacheClear();
                if (typeof window.baileyCollarRefreshListbox === "function") window.baileyCollarRefreshListbox();
                var label = document.querySelector("#collar-art-current, #collar-art-office, #collar-art-selected");
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
        setTimeout(function () { if (input.parentNode) input.parentNode.removeChild(input); }, 1000);
    };

    /* Clear a previously-uploaded custom image and revert to default */
    window.baileyCollarRemoveCustom = function () {
        try { localStorage.removeItem("baileyCollarCustom"); } catch (e) {}
        window.baileyCollarImages.custom = null;
        if (typeof State !== "undefined" && State.variables && State.variables.bailey_collar_art === "custom") {
            State.variables.bailey_collar_art = "goose";
        }
        window.baileyCollarCacheClear();
        if (typeof window.baileyCollarRefreshListbox === "function") window.baileyCollarRefreshListbox();
    };

    /* Re-render any visible #collar-listbox (the listbox widget output)
       so Custom options reflect the current localStorage state.
       Called after upload and after remove-custom. */
    window.baileyCollarRefreshListbox = function () {
        try {
            if (typeof $ !== "undefined" && typeof SugarCube !== "undefined" && SugarCube.Wikifier) {
                /* Only re-render if a listbox is actually in the DOM right now */
                if (document.querySelector("#collar-listbox")) {
                    $("#collar-listbox").empty();
                    new SugarCube.Wikifier($("#collar-listbox")[0], "<<lotus_listbox>>");
                }
            }
        } catch (e) {
            console.log("[BaileyExpansion] listbox refresh failed:", e);
        }
    };
    /* Collar-listbox change handler. Document-level so it survives passage transitions
       without setTimeout/render-timing hacks. */
    $(document).on("change", "#collar-listbox select", function () {
        if (typeof State !== "undefined" && State.variables) {
            State.variables.bailey_collar_art = this.value;
        }
        if (typeof window.baileyCollarCacheClear === "function") {
            window.baileyCollarCacheClear();
        }
    });

    /* Title swap: "It's Bailey." -> "It's Daddy." (or whatever it's set to).
        Only while Stockholm's active, the title's unlocked, and it's not still "Bailey".
        Deactivating Stockholm resets it back to "Bailey". */
    $(document).on(":passageend", function () {
        if (!V.stockholm_active) return;
        if (!V.bailey_title_unlocked || !V.bailey_title || V.bailey_title === "Bailey") return;

        var title = V.bailey_title;
        var passage = document.getElementById("passage-content") || document.querySelector(".passage");
        if (!passage) return;

        /* Find all elements with bailey-red class that contain "It's Bailey." */
        var spans = passage.querySelectorAll(".bailey-red");
        for (var i = 0; i < spans.length; i++) {
            var span = spans[i];
            if (span.textContent.trim() === "It's Bailey.") {
                span.textContent = "It's " + title + ".";
            }
        }
    });

    /* Glowing "mod active" line on the Start screen. Injected here in :storyready because
       Start's :passageend fires before a handler would register. */
    var _indicatorContainer = document.getElementById("passage-content") || document.querySelector(".passage");
    if (_indicatorContainer && !_indicatorContainer.querySelector("#bailey-mod-indicator")) {
        var el = document.createElement("div");
        el.id = "bailey-mod-indicator";
        el.className = "bailey-stockholm";
        el.style.textAlign = "center";
        el.style.marginTop = "1em";
        el.style.marginBottom = "1em";
        el.textContent = "Reiyu's Bailey Expansion v0.5.3 for New World \u2014 Active";
        var firstChild = _indicatorContainer.firstChild;
        if (firstChild) {
            _indicatorContainer.insertBefore(el, firstChild);
        } else {
            _indicatorContainer.appendChild(el);
        }
    }


    /* Add Bailey to the love-interest roster (selectable only while Stockholm's active). */
    if (typeof setup !== "undefined" && setup.loveInterestNpc) {
        if (!setup.loveInterestNpc.includes("Bailey")) {
            setup.loveInterestNpc.unshift("Bailey");
            console.log("[BaileyExpansion] Bailey added to start of loveInterestNpc list");
        }
    }

    var _origIsPossibleLoveInterest = window.isPossibleLoveInterest;
    window.isPossibleLoveInterest = function (name) {
        if (name === "Bailey") {
            return V.stockholm_active === true;
        }
        return _origIsPossibleLoveInterest(name);
    };

    /* Make Bailey's virginities read pink (love interest), not green. */
    if (typeof window.isPossibleLoveInterestVirginity === "function") {
        var _origLoveInterestVirginity = window.isPossibleLoveInterestVirginity;
        window.isPossibleLoveInterestVirginity = function (taker) {
            if (typeof taker === "string") {
                if (taker === "Bailey") return V.stockholm_active === true;
                if (taker.includes(" and ")) {
                    return taker.split(" and ").some(function (n) {
                        return window.isPossibleLoveInterest(n.trim());
                    });
                }
            }
            return _origLoveInterestVirginity(taker);
        };
    }

    /* Bailey as a sex-shop gift recipient. */
    if (typeof window.determineRecipient === "function") {
        var _origDetermineRecipient = window.determineRecipient;
        window.determineRecipient = function (index) {
            var html = _origDetermineRecipient(index);
            /* Only offer Bailey once he's an unlocked love interest. */
            if (typeof isPossibleLoveInterest !== "function" || !isPossibleLoveInterest("Bailey")) return html;
            if (typeof setup === "undefined" || !setup.sextoys || !setup.sextoys[index]) return html;
            if (html && html.indexOf('value="Bailey"') !== -1) return html; /* already present */
            var item = setup.sextoys[index];
            var baileyOption = '<option value="Bailey">Bailey</option>';
            if (html && html.indexOf('id="recipientList"') !== -1) {
                /* Vanilla built the dropdown - slot Bailey in as the first option. */
                return html.replace('id="recipientList">', 'id="recipientList">' + baileyOption);
            }
            if (V.money < item.cost + 15 * 100) return html;
            return '<br id="giftBr"><a id="ssmGiftButton" onclick="window.sexShopOnGiftClick(' + item.index + ')" class="ssm_gift_button">\nMake a gift for :  </a><select name="recipient" id="recipientList">' + baileyOption + '</select>\n<div id="spanGift">(<span class="gold">£' + (item.cost / 100 + 15) + '</span>)</div>';
        };
    }

    /* Register mod feats with setup.feats so earnFeat can show the popup and record them. */
    if (typeof setup !== "undefined" && setup.feats) {
        if (!setup.feats["Caring for the Caretaker"]) {
            setup.feats["Caring for the Caretaker"] = {
                title: "Caring for the Caretaker",
                desc: "You brought Bailey a meal.",
                difficulty: 2,
                series: "",
                filter: ["All", "Social"],
            };
        }
    }

    console.log("[BaileyExpansion] stat display overrides + title system + love interest registered");
});
