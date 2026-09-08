function customNNPCHairInitDb(){
    /*
    hairstyle_name: {
        gender (m, f or n)
        hair_fringe_name
        hair_side_name
        hair_fringe_length
        hair_side_length
        type: normal, formal, wild, original (for stuff that's "outlandish")
    }

    types:
    normal
    formal
    wild (for beasts)
    original (special haircuts

    */

    setup.customNNPC.defaultHairstyles = [
        {
            name: "default",
            gender : "n",
            hair_fringe_name : "default",
            hair_side_name : "default",
            hair_fringe_length : "short",
            hair_side_length : "short",
            type: "normal"
        },
        // Sydney
        {
            contributor: "Numberjack",
            name: "Sydney default",
            gender: "n",
            hair_fringe_name: "trident",
            hair_side_name: ["flat ponytail","ponytail", "jellyfish ponytail"],
            hair_fringe_length: "chest",
            hair_side_length: "navel",
            type: "Sydney",
        },
        {
            contributor: "Numberjack",
            name: "Sydney default f",
            gender: "f",
            hair_fringe_name: "trident",
            hair_side_name: ["ribbon tail", "thick ponytail", "fluffy ponytail"],
            hair_fringe_length: "chest",
            hair_side_length: "navel",
            type: "Sydney"
        },
        {
            contributor: "Numberjack",
            name: "Sydney alt",
            gender: "n",
            hair_fringe_name: "trident",
            hair_side_name: ["all down", "loose", "neat", "straight", "swept right"],
            hair_fringe_length: "chest",
            hair_side_length: "navel",
            type: "Sydney alt",
        },
        {
            contributor: "Numberjack",
            name: "Sydney alt f",
            gender: "f",
            hair_fringe_name: "trident",
            hair_side_name: ["sleek", "princess wave"],
            hair_fringe_length: "chest",
            hair_side_length: "navel",
            type: "Sydney alt",
        },

        // Kylar
        {
            contributor: "Numberjack",
            name: "Kylar n",
            gender: "n",
            hair_fringe_name: "straight tails",
            hair_side_name: "messy",
            hair_fringe_length: "short",
            hair_side_length: "navel",
            type: "Kylar"
        },
        {
            contributor: "Numberjack",
            name: "Kylar n",
            gender: "n",
            hair_fringe_name: "straight tails",
            hair_side_name: "short spiky",
            hair_fringe_length: "short",
            hair_side_length: "neck",
            type: "Kylar"
        },
        {
            contributor: "Numberjack",
            name: "Kylar f",
            gender: "f",
            hair_fringe_name: "straight tails",
            hair_side_name: "messy",
            hair_fringe_length: "short",
            hair_side_length: "thighs",
            type: "Kylar"
        },
        {
            contributor: "Numberjack",
            name: "Kylar f",
            gender: "f",
            hair_fringe_name: "straight tails",
            hair_side_name: "short spiky",
            hair_fringe_length: ["short", "neck"],
            hair_side_length: ["chest", "navel", "thighs", "feet"],
            type: "Kylar"
        },
        {
            contributor: "Numberjack",
            name: "Kylar f",
            gender: "f",
            hair_fringe_name: "straight tails",
            hair_side_name: "defined curl",
            hair_fringe_length: ["short", "neck"],
            hair_side_length: ["short", "neck", "chest", "navel", "thighs", "feet"],
            type: "Kylar"
        },
        {
            contributor: "Numberjack",
            name: "Kylar f",
            gender: "f",
            hair_fringe_name: "straight tails",
            hair_side_name: "defined curl",
            hair_fringe_length: "chest",
            hair_side_length: ["neck", "chest", "navel", "thighs", "feet"],
            type: "Kylar"
        },
        {
            contributor: "Numberjack",
            name: "Kylar f",
            gender: "f",
            hair_fringe_name: "straight tails",
            hair_side_name: "defined curl",
            hair_fringe_length: "navel",
            hair_side_length: ["chest", "navel", "thighs", "feet"],
            type: "Kylar"
        },
        {
            contributor: "Numberjack",
            name: "Kylar f",
            gender: "f",
            hair_fringe_name: "straight tails",
            hair_side_name: "defined curl",
            hair_fringe_length: "thighs",
            hair_side_length: ["navel", "thighs", "feet"],
            type: "Kylar"
        },
        {
            contributor: "Numberjack",
            name: "Kylar f",
            gender: "f",
            hair_fringe_name: "straight tails",
            hair_side_name: "defined curl",
            hair_fringe_length: "feet",
            hair_side_length: ["thighs", "feet"],
            type: "Kylar"
        },
        {
            contributor: "Numberjack",
            name: "Kylar f",
            gender: "f",
            hair_fringe_name: "straight tails",
            hair_side_name: "bedhead",
            hair_fringe_length: ["short", "neck", "chest"],
            hair_side_length: ["neck", "chest", "navel", "thighs", "feet"],
            type: "Kylar"
        },
        {
            contributor: "Numberjack",
            name: "Kylar f",
            gender: "f",
            hair_fringe_name: "straight tails",
            hair_side_name: "bedhead",
            hair_fringe_length: "navel",
            hair_side_length: ["chest", "navel", "thighs", "feet"],
            type: "Kylar"
        },
        {
            contributor: "Numberjack",
            name: "Kylar f",
            gender: "f",
            hair_fringe_name: "straight tails",
            hair_side_name: "bedhead",
            hair_fringe_length: "thighs",
            hair_side_length: ["navel", "thighs", "feet"],
            type: "Kylar"
        },
        {
            contributor: "Numberjack",
            name: "Kylar f",
            gender: "f",
            hair_fringe_name: "straight tails",
            hair_side_name: "bedhead",
            hair_fringe_length: "feet",
            hair_side_length: ["thighs", "feet"],
            type: "Kylar"
        },
        {
            contributor: "Numberjack",
            name: "Kylar m",
            gender: "m",
            hair_fringe_name: "straight tails",
            hair_side_name: "messy",
            hair_fringe_length: "short",
            hair_side_length: "chest",
            type: "Kylar"
        },
        {
            contributor: "Numberjack",
            name: "Kylar m",
            gender: "m",
            hair_fringe_name: "straight tails",
            hair_side_name: "short spiky",
            hair_fringe_length: "short",
            hair_side_length: "short",
            type: "Kylar"
        },
        {
            contributor: "Numberjack",
            name: "Kylar m",
            gender: "m",
            hair_fringe_name: "straight tails",
            hair_side_name: "bedhead",
            hair_fringe_length: "short",
            hair_side_length: "short",
            type: "Kylar"
        },
        {
            contributor: "Numberjack",
            name: "Kylar m",
            gender: "m",
            hair_fringe_name: "straight tails",
            hair_side_name: "ruffled",
            hair_fringe_length: "short",
            hair_side_length: "short",
            type: "Kylar"
        },

        // Robin
        {
            name: "Robin m",
            gender: "m",
            hair_fringe_name: ["bedhead","aerial", "framed"],
            hair_side_name: ["short spiky","short"],
            hair_fringe_length: "short",
            hair_side_length: "chest",
            type: "Robin"
        },
        {
            name: "Robin m",
            gender: "m",
            hair_fringe_name: ["aerial", "framed"],
            hair_side_name: ["short spiky", "french bob", "short"],
            hair_fringe_length: "short",
            hair_side_length: "chest",
            type: "Robin"
        },
        {
            name: "Robin f",
            gender: "f",
            hair_fringe_name: "air vents",
            hair_side_name: "twintails",
            hair_fringe_length: "short",
            hair_side_length: "chest",
            type: "Robin"
        },
        {
            name: "Robin f",
            gender: "f",
            hair_fringe_name: "aerial",
            hair_side_name: "jellyfish twintails",
            hair_fringe_length: "short",
            hair_side_length: "chest",
            type: "Robin"
        },
        {
            name: "Robin f",
            gender: "f",
            hair_fringe_name: "princess wave",
            hair_side_name: "defined curl",
            hair_fringe_length: "short",
            hair_side_length: "navel",
            type: "Robin"
        },

        // Gwylan
        {
            contributor: "Numberjack",
            name: "Gwylan n",
            gender: "n",
            hair_fringe_name: "messy curls",
            hair_side_name: ["braid right", "braid left"],
            hair_fringe_length: "short",
            hair_side_length: ["chest", "navel", "thighs"],
            type: "Gwylan"
        },
        {
            contributor: "Numberjack",
            name: "Gwylan n",
            gender: "n",
            hair_fringe_name: "messy curls",
            hair_side_name: ["fishtail left", "fishtail right"],
            hair_fringe_length: "short",
            hair_side_length: ["short", "neck", "chest", "navel"],
            type: "Gwylan"
        },
        {
            contributor: "Numberjack",
            name: "Gwylan n",
            gender: "n",
            hair_fringe_name: "messy curls",
            hair_side_name: "ruffled",
            hair_fringe_length: "short",
            hair_side_length: ["chest", "navel", "thighs"],
            type: "Gwylan"
        },
        {
            contributor: "Numberjack",
            name: "Gwylan f",
            gender: "f",
            hair_fringe_name: "messy curls",
            hair_side_name: "heart braids",
            hair_fringe_length: "short",
            hair_side_length: ["neck", "chest", "navel", "thighs", "feet"],
            type: "Gwylan"
        },

        // Great Hawk
        {
            contributor: "Numberjack",
            name: "Great Hawk m",
            gender: "m",
            hair_fringe_name: "thin flaps",
            hair_side_name: "fluffy ponytail",
            hair_fringe_length: ["navel", "thighs", "feet"],
            hair_side_length: ["short", "neck"],
            type: "Great Hawk"
        },
        {
            contributor: "Numberjack",
            name: "Great Hawk n",
            gender: "n",
            hair_fringe_name: "aerial",
            hair_side_name: "fluffy ponytail",
            hair_fringe_length: ["neck", "chest", "navel", "thighs", "feet"],
            hair_side_length: ["short", "neck"],
            type: "Great Hawk"
        },
        {
            contributor: "Numberjack",
            name: "Great Hawk n",
            gender: "n",
            hair_fringe_name: "aerial",
            hair_side_name: "ruffled",
            hair_fringe_length: ["short", "neck", "chest"],
            hair_side_length: "neck",
            type: "Great Hawk"
        },
        {
            contributor: "Numberjack",
            name: "Great Hawk n",
            gender: "n",
            hair_fringe_name: "thin flaps",
            hair_side_name: "ruffled",
            hair_fringe_length: ["short", "neck", "chest", "navel"],
            hair_side_length: "neck",
            type: "Great Hawk"
        },
        {
            contributor: "Numberjack",
            name: "Great Hawk n",
            gender: "n",
            hair_fringe_name: "thin flaps",
            hair_side_name: "ruffled",
            hair_fringe_length: ["neck", "chest"],
            hair_side_length: ["short", "neck"],
            type: "Great Hawk"
        },
        {
            contributor: "Numberjack",
            name: "Great Hawk m",
            gender: "m",
            hair_fringe_name: ["loose", "messy"],
            hair_side_name: ["fluffy ponytail", "ruffled"],
            hair_fringe_length: "short",
            hair_side_length: ["short", "neck"],
            type: "Great Hawk"
        },
        {
            contributor: "Numberjack",
            name: "Great Hawk n",
            gender: "n",
            hair_fringe_name: ["loose", "messy"],
            hair_side_name: ["fluffy ponytail", "ruffled"],
            hair_fringe_length: ["neck", "chest", "navel"],
            hair_side_length: ["short", "neck"],
            type: "Great Hawk"
        },

        // Black Wolf
        {
            name: "Black Wolf n",
            gender: "n",
            hair_fringe_name: "bedhead",
            hair_side_name: "bedhead",
            hair_fringe_length: "feet",
            hair_side_length: "feet",
            type: "Black Wolf"
        },
        {
            contributor: "Numberjack",
            name: "Black Wolf n",
            gender: "n",
            hair_fringe_name: "wide flaps",
            hair_side_name: ["bedhead", "ruffled"],
            hair_fringe_length: "feet",
            hair_side_length: "feet",
            type: "Black Wolf"
        },
        {
            contributor: "Numberjack",
            name: "Black Wolf n",
            gender: "n",
            hair_fringe_name: ["emo", "overgrown"],
            hair_side_name: ["bedhead", "ruffled"],
            hair_fringe_length: "feet",
            hair_side_length: "feet",
            type: "Black Wolf"
        },

        // Avery
        {
            name: "Avery f",
            gender: "f",
            hair_fringe_name: ["air vents", "sideswept braid"],
            hair_side_name: ["twin braids", "all down", "neat", "messy bun"],
            hair_fringe_length: "chest",
            hair_side_length: ["navel", "chest"],
            type: "Avery"
        },
        {
            contributor: "Numberjack",
            name: "Avery f",
            gender: "f",
            hair_fringe_name: "split",
            hair_side_name: "neat",
            hair_fringe_length: ["short", "neck", "chest"],
            hair_side_length: ["neck", "chest", "navel"],
            type: "Avery"
        },
        {
            contributor: "Numberjack",
            name: "Avery f",
            gender: "f",
            hair_fringe_name: ["parted", "quiff"],
            hair_side_name: "neat",
            hair_fringe_length: "feet",
            hair_side_length: ["neck", "chest", "navel"],
            type: "Avery"
        },
        {
            name: "Avery m",
            gender: "m",
            hair_fringe_name: ["swept back", "parted"],
            hair_side_name: "neat",
            hair_fringe_length: ["short", "neck"],
            hair_side_length: "short",
            type: "Avery"
        },
        {
            contributor: "Numberjack",
            name: "Avery m",
            gender: "m",
            hair_fringe_name: ["parted", "quiff"],
            hair_side_name: "short",
            hair_fringe_length: ["navel", "thighs", "feet"],
            hair_side_length: "short",
            type: "Avery"
        },
        {
            contributor: "Numberjack",
            name: "Avery m",
            gender: "m",
            hair_fringe_name: "split",
            hair_side_name: "short",
            hair_fringe_length: "short",
            hair_side_length: "short",
            type: "Avery"
        },
        {
            contributor: "Numberjack",
            name: "Avery m",
            gender: "m",
            hair_fringe_name: "swept back",
            hair_side_name: "short",
            hair_fringe_length: ["short", "neck", "chest", "navel", "thighs", "feet"],
            hair_side_length: "short",
            type: "Avery"
        },


        // Alex
        {
            name: "Alex m",
            gender: "m",
            hair_fringe_name: "ruffled",
            hair_side_name: "short spiky",
            hair_fringe_length: ["short", "neck"],
            hair_side_length: ["short","neck"],
            type: "Alex"
        },
        {
            contributor: "Numberjack",
            name: "Alex m",
            gender: "m",
            hair_fringe_name: "messy",
            hair_side_name: ["messy", "short"],
            hair_fringe_length: ["short", "neck", "chest", "navel"],
            hair_side_length: "short",
            type: "Alex"
        },
        {
            name: "Alex f",
            gender: "f",
            hair_fringe_name: "ruffled",
            hair_side_name: ["messy ponytail", "curl", "ponytail"],
            hair_fringe_length: ["chest", "navel"],
            hair_side_length: ["chest","navel"],
            type: "Alex"
        },
        {
            contributor: "Numberjack",
            name: "Alex n",
            gender: "n",
            hair_fringe_name: "ruffled",
            hair_side_name: "ruffled",
            hair_fringe_length: ["neck", "chest"],
            hair_side_length: "short",
            type: "Alex"
        },
        {
            contributor: "Numberjack",
            name: "Alex m",
            gender: "m",
            hair_fringe_name: "ruffled",
            hair_side_name: "ruffled",
            hair_fringe_length: "short",
            hair_side_length: "short",
            type: "Alex"
        },
        {
            contributor: "Numberjack",
            name: "Alex f",
            gender: "f",
            hair_fringe_name: "ruffled",
            hair_side_name: "fluffy ponytail",
            hair_fringe_length: "chest",
            hair_side_length: "chest",
            type: "Alex"
        },
        {
            contributor: "Numberjack",
            name: "Alex n",
            gender: "n",
            hair_fringe_name: "ruffled",
            hair_side_name: "fluffy ponytail",
            hair_fringe_length: "chest",
            hair_side_length: "neck",
            type: "Alex"
        },

        // Bailey
        {
            contributor: "Numberjack",
            name: "Bailey f",
            gender: "f",
            hair_fringe_name: "sidecut",
            hair_side_name: "short",
            hair_fringe_length: "neck",
            hair_side_length: "short",
            type: "Bailey"
        },
        {
            contributor: "Numberjack",
            name: "Bailey n",
            gender: "n",
            hair_fringe_name: "sidecut",
            hair_side_name: "short",
            hair_fringe_length: "short",
            hair_side_length: "short",
            type: "Bailey"
        },
        {
            contributor: "Numberjack",
            name: "Bailey m",
            gender: "m",
            hair_fringe_name: "quiff",
            hair_side_name: "short",
            hair_fringe_length: ["short", "neck", "chest", "navel", "thighs"],
            hair_side_length: "short",
            type: "Bailey"
        },
        {
            contributor: "Numberjack",
            name: "Bailey n",
            gender: "n",
            hair_fringe_name: "quiff",
            hair_side_name: "short",
            hair_fringe_length: "feet",
            hair_side_length: "feet",
            type: "Bailey"
        },

        // Briar
        {
            contributor: "Numberjack",
            name: "Briar f",
            gender: "f",
            hair_fringe_name: "princess wave",
            hair_side_name: ["defined curl", "princess wave"],
            hair_fringe_length: "chest",
            hair_side_length: "chest",
            type: "Briar"
        },
        {
            contributor: "Numberjack",
            name: "Briar n",
            gender: "n",
            hair_fringe_name: "swept right",
            hair_side_name: "defined curl",
            hair_fringe_length: ["neck", "chest"],
            hair_side_length: "chest",
            type: "Briar"
        },
        {
            contributor: "Numberjack",
            name: "Briar n",
            gender: "n",
            hair_fringe_name: "quiff",
            hair_side_name: "defined curl",
            hair_fringe_length: "feet",
            hair_side_length: "chest",
            type: "Briar"
        },
        {
            contributor: "Numberjack",
            name: "Briar n",
            gender: "n",
            hair_fringe_name: "middlepart",
            hair_side_name: "defined curl",
            hair_fringe_length: ["neck", "chest"],
            hair_side_length: "chest",
            type: "Briar"
        },
        {
            contributor: "Numberjack",
            name: "Briar n",
            gender: "n",
            hair_fringe_name: "split",
            hair_side_name: "defined curl",
            hair_fringe_length: "chest",
            hair_side_length: "chest",
            type: "Briar"
        },

        // Remy
        {
            contributor: "Numberjack",
            name: "Remy f",
            gender: "f",
            hair_fringe_name: "sectioned",
            hair_side_name: "messy bun",
            hair_fringe_length: ["short", "neck", "chest"],
            hair_side_length: ["short", "neck"],
            type: "Remy"
        },
        {
            contributor: "Numberjack",
            name: "Remy f",
            gender: "f",
            hair_fringe_name: "drill ringlets",
            hair_side_name: "messy bun",
            hair_fringe_length: ["short", "neck"],
            hair_side_length: ["short", "neck"],
            type: "Remy"
        },
        {
            contributor: "Numberjack",
            name: "Remy m",
            gender: "m",
            hair_fringe_name: "sectioned",
            hair_side_name: "short",
            hair_fringe_length: ["short", "neck", "chest"],
            hair_side_length: ["short", "neck"],
            type: "Remy"
        },
        {
            contributor: "Numberjack",
            name: "Remy m",
            gender: "m",
            hair_fringe_name: "split",
            hair_side_name: "short",
            hair_fringe_length: ["short", "neck", "chest"],
            hair_side_length: ["short", "neck"],
            type: "Remy"
        },

        // Leighton
        {
            contributor: "Numberjack",
            name: "Leighton f",
            gender: "f",
            hair_fringe_name: "ringlet curl",
            hair_side_name: "messy bun",
            hair_fringe_length: "neck",
            hair_side_length: ["short", "neck", "chest", "navel", "thighs", "feet"],
            type: "Leighton"
        },
        {
            contributor: "Numberjack",
            name: "Leighton m",
            gender: "m",
            hair_fringe_name: ["parted", "quiff", "swept back"],
            hair_side_name: "short",
            hair_fringe_length: "short",
            hair_side_length: ["short", "neck"],
            type: "Leighton"
        },

        // Darryl
        {
            contributor: "Numberjack",
            name: "Darryl m",
            gender: "m",
            hair_fringe_name: ["sleek", "curtain"],
            hair_side_name: "short",
            hair_fringe_length: ["short", "neck"],
            hair_side_length: ["short", "neck"],
            type: "Darryl"
        },
        {
            contributor: "Numberjack",
            name: "Darryl f",
            gender: "f",
            hair_fringe_name: "bowl",
            hair_side_name: "messy bun",
            hair_fringe_length: "navel",
            hair_side_length: ["short", "neck"],
            type: "Darryl"
        },
        {
            contributor: "Numberjack",
            name: "Darryl m",
            gender: "m",
            hair_fringe_name: "bowl",
            hair_side_name: "short",
            hair_fringe_length: "navel",
            hair_side_length: ["short", "neck"],
            type: "Darryl"
        },
        {
            contributor: "Numberjack",
            name: "Darryl f",
            gender: "f",
            hair_fringe_name: "default",
            hair_side_name: "messy bun",
            hair_fringe_length: ["short", "neck"],
            hair_side_length: ["short", "neck"],
            type: "Darryl"
        },
        {
            contributor: "Numberjack",
            name: "Darryl m",
            gender: "m",
            hair_fringe_name: "default",
            hair_side_name: "short",
            hair_fringe_length: ["short", "neck"],
            hair_side_length: ["short", "neck"],
            type: "Darryl"
        },
        {
            contributor: "Numberjack",
            name: "Darryl m",
            gender: "m",
            hair_fringe_name: ["framed", "overgrown"],
            hair_side_name: "short",
            hair_fringe_length: "short",
            hair_side_length: ["short", "neck"],
            type: "Darryl"
        },
        {
            contributor: "Numberjack",
            name: "Darryl f",
            gender: "f",
            hair_fringe_name: ["sleek", "framed", "curtain"],
            hair_side_name: "messy bun",
            hair_fringe_length: ["short", "neck"],
            hair_side_length: ["short", "neck"],
            type: "Darryl"
        },
        {
            contributor: "Numberjack",
            name: "Darryl f",
            gender: "f",
            hair_fringe_name: "hime",
            hair_side_name: "messy bun",
            hair_fringe_length: "neck",
            hair_side_length: ["short", "neck"],
            type: "Darryl"
        },
        {
            contributor: "Numberjack",
            name: "Darryl f",
            gender: "f",
            hair_fringe_name: "curtain locks",
            hair_side_name: "dreads",
            hair_fringe_length: ["short", "neck"],
            hair_side_length: "neck",
            type: "Darryl"
        },
        {
            contributor: "Numberjack",
            name: "Darryl f",
            gender: "f",
            hair_fringe_name: "milkmaid",
            hair_side_name: "short",
            hair_fringe_length: "neck",
            hair_side_length: ["short", "neck"],
            type: "Darryl"
        },

        // Mason
        {
            contributor: "Numberjack",
            name: "Mason n",
            gender: "n",
            hair_fringe_name: ["thin flaps", "loose", "ruffled"],
            hair_side_name: "short",
            hair_fringe_length: "short",
            hair_side_length: ["short", "neck"],
            type: "Mason"
        },
        {
            contributor: "Numberjack",
            name: "Mason m",
            gender: "m",
            hair_fringe_name: ["dreadlocks", "messy"],
            hair_side_name: "short",
            hair_fringe_length: "short",
            hair_side_length: ["short", "neck"],
            type: "Mason"
        },
        {
            contributor: "Numberjack",
            name: "Mason n",
            gender: "n",
            hair_fringe_name: "bedhead",
            hair_side_name: "short",
            hair_fringe_length: ["short", "neck", "chest"],
            hair_side_length: ["short", "neck"],
            type: "Mason"
        },
        {
            contributor: "Numberjack",
            name: "Mason m",
            gender: "m",
            hair_fringe_name: "tied back",
            hair_side_name: "short",
            hair_fringe_length: "neck",
            hair_side_length: ["short", "neck"],
            type: "Mason"
        },
        {
            contributor: "Numberjack",
            name: "Mason f",
            gender: "f",
            hair_fringe_name: "ruffled",
            hair_side_name: "short spiky",
            hair_fringe_length: "short",
            hair_side_length: ["short", "neck"],
            type: "Mason"
        },

        // Sam
        {
            contributor: "Numberjack",
            name: "Sam f",
            gender: "f",
            hair_fringe_name: "straight curl",
            hair_side_name: ["curl", "afro pouf"],
            hair_fringe_length: "chest",
            hair_side_length: "neck",
            type: "Sam"
        },
        {
            contributor: "Numberjack",
            name: "Sam f",
            gender: "f",
            hair_fringe_name: ["ringlets", "ringlet curl"],
            hair_side_name: ["curl", "afro pouf"],
            hair_fringe_length: "short",
            hair_side_length: "neck",
            type: "Sam"
        },
        {
            contributor: "Numberjack",
            name: "Sam m",
            gender: "m",
            hair_fringe_name: ["straight curl", "buzzcut"],
            hair_side_name: "short",
            hair_fringe_length: "short",
            hair_side_length: "short",
            type: "Sam"
        },
        {
            contributor: "Numberjack",
            name: "Sam n",
            gender: "n",
            hair_fringe_name: "fro",
            hair_side_name: "fro",
            hair_fringe_length: "chest",
            hair_side_length: ["chest", "navel"],
            type: "Sam"
        },

        // Sirris
        {
            contributor: "Numberjack",
            name: "Sirris n",
            gender: "n",
            hair_fringe_name: ["trident", "middlepart"],
            hair_side_name: "ponytail",
            hair_fringe_length: "neck",
            hair_side_length: "neck",
            type: "Sirris"
        },
        {
            contributor: "Numberjack",
            name: "Sirris f",
            gender: "f",
            hair_fringe_name: ["air vents", "side-pinned"],
            hair_side_name: "ponytail",
            hair_fringe_length: "neck",
            hair_side_length: "neck",
            type: "Sirris"
        },
        {
            contributor: "Numberjack",
            name: "Sirris m",
            gender: "m",
            hair_fringe_name: "split",
            hair_side_name: "ponytail",
            hair_fringe_length: "navel",
            hair_side_length: "neck",
            type: "Sirris"
        },

        // Morgan
        {
            contributor: "Numberjack",
            name: "Morgan n",
            gender: "n",
            hair_fringe_name: ["split", "ruffled", "bedhead"],
            hair_side_name: ["loose", "ruffled", "bedhead"],
            hair_fringe_length: "chest",
            hair_side_length: "neck",
            type: "Morgan"
        },
        {
            contributor: "Numberjack",
            name: "Morgan n",
            gender: "n",
            hair_fringe_name: ["ruffled", "bedhead"],
            hair_side_name: "messy",
            hair_fringe_length: "chest",
            hair_side_length: "feet",
            type: "Morgan"
        },
        {
            contributor: "Numberjack",
            name: "Morgan n",
            gender: "n",
            hair_fringe_name: "messy",
            hair_side_name: "messy",
            hair_fringe_length: ["chest", "navel", "thighs", "feet"],
            hair_side_length: "feet",
            type: "Morgan"
        },
        {
            contributor: "Numberjack",
            name: "Morgan n",
            gender: "n",
            hair_fringe_name: "messy",
            hair_side_name: ["ruffled", "loose", "bedhead"],
            hair_fringe_length: ["chest", "navel", "thighs", "feet"],
            hair_side_length: "neck",
            type: "Morgan"
        },

        // Charlie
        {
            contributor: "Numberjack",
            name: "Charlie f",
            gender: "f",
            hair_fringe_name: ["curtain", "framed", "sectioned"],
            hair_side_name: "french bob",
            hair_fringe_length: "short",
            hair_side_length: ["short", "neck"],
            type: "Charlie"
        },
        {
            contributor: "Numberjack",
            name: "Charlie n",
            gender: "n",
            hair_fringe_name: "framed",
            hair_side_name: "straight bob",
            hair_fringe_length: "short",
            hair_side_length: ["short", "neck"],
            type: "Charlie"
        },
        {
            contributor: "Numberjack",
            name: "Charlie f",
            gender: "f",
            hair_fringe_name: ["curtain", "sectioned"],
            hair_side_name: "straight bob",
            hair_fringe_length: "short",
            hair_side_length: ["short", "neck"],
            type: "Charlie"
        },
        {
            contributor: "Numberjack",
            name: "Charlie f",
            gender: "f",
            hair_fringe_name: ["curtain", "framed", "sectioned"],
            hair_side_name: "straight bob",
            hair_fringe_length: "short",
            hair_side_length: ["chest", "navel"],
            type: "Charlie"
        },
        {
            contributor: "Numberjack",
            name: "Charlie f",
            gender: "f",
            hair_fringe_name: ["curtain", "sectioned"],
            hair_side_name: "layered bob",
            hair_fringe_length: "short",
            hair_side_length: ["short", "neck"],
            type: "Charlie"
        },
        {
            contributor: "Numberjack",
            name: "Charlie f",
            gender: "f",
            hair_fringe_name: "framed",
            hair_side_name: "straight bob",
            hair_fringe_length: "short",
            hair_side_length: "neck",
            type: "Charlie"
        },
        {
            contributor: "Numberjack",
            name: "Charlie n",
            gender: "n",
            hair_fringe_name: "framed",
            hair_side_name: "straight bob",
            hair_fringe_length: "short",
            hair_side_length: "short",
            type: "Charlie"
        },
        {
            contributor: "Numberjack",
            name: "Charlie n",
            gender: "n",
            hair_fringe_name: ["curtain", "framed", "sectioned"],
            hair_side_name: ["ruffled", "sidecut"],
            hair_fringe_length: "short",
            hair_side_length: "short",
            type: "Charlie"
        },

        // Eden
        {
            contributor: "Numberjack",
            name: "Eden n",
            gender: "n",
            hair_fringe_name: ["bedhead", "default"],
            hair_side_name: "bedhead",
            hair_fringe_length: "neck",
            hair_side_length: "short",
            type: "Eden"
        },
        {
            contributor: "Numberjack",
            name: "Eden n",
            gender: "n",
            hair_fringe_name: "thin flaps",
            hair_side_name: "bedhead",
            hair_fringe_length: "short",
            hair_side_length: "short",
            type: "Eden"
        },
        {
            contributor: "Numberjack",
            name: "Eden n",
            gender: "n",
            hair_fringe_name: "bedhead",
            hair_side_name: ["ruffled", "messy"],
            hair_fringe_length: "neck",
            hair_side_length: "neck",
            type: "Eden"
        },

        // Winter
        {
            contributor: "Numberjack",
            name: "Winter m",
            gender: "m",
            hair_fringe_name: ["parted", "swept back"],
            hair_side_name: "short",
            hair_fringe_length: ["short", "neck"],
            hair_side_length: "short",
            type: "Winter"
        },
        {
            contributor: "Numberjack",
            name: "Winter f",
            gender: "f",
            hair_fringe_name: ["parted", "swept back"],
            hair_side_name: "messy bun",
            hair_fringe_length: ["short", "neck"],
            hair_side_length: "short",
            type: "Winter"
        },
        {
            contributor: "Numberjack",
            name: "Winter m",
            gender: "m",
            hair_fringe_name: "quiff",
            hair_side_name: "short",
            hair_fringe_length: "feet",
            hair_side_length: "short",
            type: "Winter"
        },
        {
            contributor: "Numberjack",
            name: "Winter f",
            gender: "f",
            hair_fringe_name: "quiff",
            hair_side_name: "messy bun",
            hair_fringe_length: "feet",
            hair_side_length: "short",
            type: "Winter"
        },

        // IW
        {
            name: "Ivory Wraith",
            gender: "n",
            hair_fringe_name: "sideswept braid",
            hair_side_name: "ruffled",
            hair_fringe_length: "short",
            hair_side_length: "thighs",
            type: "Ivory Wraith"
        },

        // Doren
        {
            contributor: "Numberjack",
            name: "Doren n",
            gender: "n",
            hair_fringe_name: "ruffled",
            hair_side_name: ["defined curl", "ruffled", "layered bob", "curl", "fluffy ponytail"],
            hair_fringe_length: "chest",
            hair_side_length: "neck",
            type: "Doren"
        },
        {
            contributor: "Numberjack",
            name: "Doren m",
            gender: "m",
            hair_fringe_name: "messy",
            hair_side_name: "bedhead",
            hair_fringe_length: ["neck", "chest"],
            hair_side_length: "short",
            type: "Doren"
        },
        {
            contributor: "Numberjack",
            name: "Doren f",
            gender: "f",
            hair_fringe_name: "ruffled",
            hair_side_name: "messy ponytail",
            hair_fringe_length: "chest",
            hair_side_length: ["short", "neck"],
            type: "Doren"
        },

        // Harper
        {
            contributor: "Numberjack",
            name: "Harper f",
            gender: "f",
            hair_fringe_name: ["blunt locks", "curtain", "air vents"],
            hair_side_name: "thick ponytail",
            hair_fringe_length: ["neck", "chest"],
            hair_side_length: "neck",
            type: "Harper"
        },
        {
            contributor: "Numberjack",
            name: "Harper f",
            gender: "f",
            hair_fringe_name: "loose antenna",
            hair_side_name: "thick ponytail",
            hair_fringe_length: "neck",
            hair_side_length: "neck",
            type: "Harper"
        },
        {
            contributor: "Numberjack",
            name: "Harper n",
            gender: "n",
            hair_fringe_name: "loose antenna",
            hair_side_name: "thick ponytail",
            hair_fringe_length: "short",
            hair_side_length: "neck",
            type: "Harper"
        },
        {
            contributor: "Numberjack",
            name: "Harper m",
            gender: "m",
            hair_fringe_name: "loose antenna",
            hair_side_name: "bedhead",
            hair_fringe_length: "short",
            hair_side_length: "short",
            type: "Harper"
        },
        {
            contributor: "Numberjack",
            name: "Harper m",
            gender: "m",
            hair_fringe_name: "curtain",
            hair_side_name: "bedhead",
            hair_fringe_length: ["neck", "chest"],
            hair_side_length: "short",
            type: "Harper"
        },
        {
            contributor: "Numberjack",
            name: "Harper f",
            gender: "f",
            hair_fringe_name: "bowl",
            hair_side_name: "thick ponytail",
            hair_fringe_length: "feet",
            hair_side_length: "neck",
            type: "Harper"
        },

        // Jordan
        {
            contributor: "Numberjack",
            name: "Jordan n",
            gender: "n",
            hair_fringe_name: "milkmaid",
            hair_side_name: ["all down", "neat", "loose", "sleek", "straight", "swept right"],
            hair_fringe_length: "feet",
            hair_side_length: "feet",
            type: "Jordan"
        },
        {
            contributor: "Numberjack",
            name: "Jordan n",
            gender: "n",
            hair_fringe_name: "middlepart",
            hair_side_name: ["all down", "neat", "loose", "sleek", "straight", "swept right"],
            hair_fringe_length: "feet",
            hair_side_length: "feet",
            type: "Jordan"
        },
        {
            contributor: "Numberjack",
            name: "Jordan n",
            gender: "n",
            hair_fringe_name: "split",
            hair_side_name: ["all down", "neat", "loose", "sleek", "straight", "swept right"],
            hair_fringe_length: "feet",
            hair_side_length: "feet",
            type: "Jordan"
        },
        {
            contributor: "Numberjack",
            name: "Jordan n",
            gender: "n",
            hair_fringe_name: "straight",
            hair_side_name: ["all down", "neat", "loose", "sleek", "straight", "swept right"],
            hair_fringe_length: "feet",
            hair_side_length: "feet",
            type: "Jordan"
        },

        // Landry
        {
            contributor: "Numberjack",
            name: "Landry m",
            gender: "m",
            hair_fringe_name: ["buzzcut", "fro", "bedhead", "sleek", "mohawk", "messy", "loose", "default", "flat"],
            hair_side_name: "short",
            hair_fringe_length: "short",
            hair_side_length: "short",
            type: "Landry"
        },
        {
            contributor: "Numberjack",
            name: "Landry f",
            gender: "f",
            hair_fringe_name: ["dreadlocks", "ringlets", "sleek", "default", "flat"],
            hair_side_name: "dreads",
            hair_fringe_length: ["short", "neck"],
            hair_side_length: "neck",
            type: "Landry"
        },
        {
            contributor: "Numberjack",
            name: "Landry f",
            gender: "f",
            hair_fringe_name: ["bedhead", "messy", "loose"],
            hair_side_name: "dreads",
            hair_fringe_length: "neck",
            hair_side_length: "neck",
            type: "Landry"
        },
        {
            contributor: "Numberjack",
            name: "Landry f",
            gender: "f",
            hair_fringe_name: ["dreadlocks", "ringlets", "sleek", "default", "flat", "loose", "buzzcut", "fro"],
            hair_side_name: "afro pouf",
            hair_fringe_length: ["short", "neck"],
            hair_side_length: "neck",
            type: "Landry"
        },
        {
            contributor: "Numberjack",
            name: "Landry f",
            gender: "f",
            hair_fringe_name: ["messy", "bedhead"],
            hair_side_name: "afro pouf",
            hair_fringe_length: "neck",
            hair_side_length: "neck",
            type: "Landry"
        },


        // Night Monster
        {
            contributor: "Chylli",
            name: "Night Monster n",
            gender: "n",
            hair_fringe_name: "bedhead",
            hair_side_name: "bedhead",
            hair_fringe_length: ["short", "neck", "chest"],
            hair_side_length: ["short", "neck", "chest"],
            type: "Night Monster"
        },

        // Niki
        {
            contributor: "Numberjack",
            name: "Niki f",
            gender: "f",
            hair_fringe_name: "sleek",
            hair_side_name: "ribbon tail",
            hair_fringe_length: ["short", "neck"],
            hair_side_length: "neck",
            type: "Niki"
        },
        {
            contributor: "Numberjack",
            name: "Niki n",
            gender: "n",
            hair_fringe_name: "sleek",
            hair_side_name: ["ribbon tail", "half-up"],
            hair_fringe_length: ["short", "neck"],
            hair_side_length: "short",
            type: "Niki"
        },
        {
            contributor: "Numberjack",
            name: "Niki n",
            gender: "n",
            hair_fringe_name: "curtain locks",
            hair_side_name: "dreads",
            hair_fringe_length: ["short", "neck"],
            hair_side_length: "neck",
            type: "Niki"
        },
        {
            contributor: "Numberjack",
            name: "Niki f",
            gender: "f",
            hair_fringe_name: "swept right",
            hair_side_name: "ribbon tail",
            hair_fringe_length: ["neck", "chest", "navel"],
            hair_side_length: "neck",
            type: "Niki"
        },
        {
            contributor: "Numberjack",
            name: "Niki n",
            gender: "n",
            hair_fringe_name: "swept right",
            hair_side_name: "ribbon tail",
            hair_fringe_length: ["neck", "chest", "navel"],
            hair_side_length: "short",
            type: "Niki"
        },
        {
            contributor: "Numberjack",
            name: "Niki n",
            gender: "n",
            hair_fringe_name: "trident",
            hair_side_name: "ribbon tail",
            hair_fringe_length: ["short", "neck", "chest"],
            hair_side_length: ["short", "neck"],
            type: "Niki"
        },

        // Quinn
        {
            contributor: "Numberjack",
            name: "Quinn m",
            gender: "m",
            hair_fringe_name: ["quiff", "swept back", "sleek", "parted"],
            hair_side_name: "short",
            hair_fringe_length: "feet",
            hair_side_length: "short",
            type: "Quinn"
        },
        {
            contributor: "Numberjack",
            name: "Quinn m",
            gender: "m",
            hair_fringe_name: ["split", "quiff", "parted", "swept back"],
            hair_side_name: "short",
            hair_fringe_length: ["short", "neck", "chest"],
            hair_side_length: "short",
            type: "Quinn"
        },
        {
            contributor: "Numberjack",
            name: "Quinn f",
            gender: "f",
            hair_fringe_name: "drill ringlets",
            hair_side_name: ["french bob", "defined curl", "straight bob"],
            hair_fringe_length: ["short", "neck"],
            hair_side_length: ["short", "neck"],
            type: "Quinn"
        },
        {
            contributor: "Numberjack",
            name: "Quinn f",
            gender: "f",
            hair_fringe_name: "sectioned",
            hair_side_name: "layered bob",
            hair_fringe_length: ["short", "neck", "chest", "navel"],
            hair_side_length: "short",
            type: "Quinn"
        },

        // River
        {
            contributor: "Numberjack",
            name: "River m",
            gender: "m",
            hair_fringe_name: ["messy", "split"],
            hair_side_name: "short",
            hair_fringe_length: ["short", "neck"],
            hair_side_length: ["short", "neck"],
            type: "River"
        },
        {
            contributor: "Numberjack",
            name: "River f",
            gender: "f",
            hair_fringe_name: "curtain",
            hair_side_name: "flat ponytail",
            hair_fringe_length: ["short", "neck", "chest"],
            hair_side_length: ["neck", "chest"],
            type: "River"
        },
        {
            contributor: "Numberjack",
            name: "River m",
            gender: "m",
            hair_fringe_name: "curtain",
            hair_side_name: "bedhead",
            hair_fringe_length: ["short", "neck", "chest"],
            hair_side_length: "short",
            type: "River"
        },

        // Zephyr
        {
            contributor: "Numberjack",
            name: "Zephyr n",
            gender: "n",
            hair_fringe_name: "front braids",
            hair_side_name: "messy ponytail",
            hair_fringe_length: ["neck", "chest", "navel"],
            hair_side_length: ["chest", "navel"],
            type: "Zephyr"
        },

        // Whitney
        {
            contributor: "Numberjack",
            gender: "n",
            hair_fringe_name: ["emo left", "emo right", "sectioned", "swept right"],
            hair_side_name: ["half-up", "bedhead", "short spiky"],
            hair_fringe_length: ["thighs", "feet"],
            hair_side_length: "short",
            type: "Whitney"
        },
        {
            contributor: "Numberjack",
            name: "Whitney n",
            gender: "n",
            hair_fringe_name: ["emo left", "emo right", "sectioned", "swept right"],
            hair_side_name: "fluffy ponytail",
            hair_fringe_length: ["thighs", "feet"],
            hair_side_length: ["short", "neck"],
            type: "Whitney"
        },
        {
            contributor: "Numberjack",
            name: "Whitney f",
            gender: "f",
            hair_fringe_name: ["emo left", "emo right", "sectioned", "swept right"],
            hair_side_name: ["fluffy ponytail", "messy ponytail", "curly side up", "ponytail", "ruffled", "thick ponytail"],
            hair_fringe_length: ["thighs", "feet"],
            hair_side_length: ["chest", "navel"],
            type: "Whitney"
        },

        // Wren
        {
            contributor: "Numberjack",
            name: "Wren m",
            gender: "m",
            hair_fringe_name: ["split", "swept right", "messy", "swept back"],
            hair_side_name: "bedhead",
            hair_fringe_length: "chest",
            hair_side_length: "short",
            type: "Wren"
        },
        {
            contributor: "Numberjack",
            name: "Wren f",
            gender: "f",
            hair_fringe_name: ["dreadlocks", "sleek", "split", "swept right", "messy"],
            hair_side_name: "fluffy ponytail",
            hair_fringe_length: "chest",
            hair_side_length: "neck",
            type: "Wren"
        }
    ];
}

DefineMacro("custom-nnpc-init-hair-db", customNNPCHairInitDb);

function hairstyleChooseVariant(hs){
    // This wouldn't be needed if you made the distinction between copy and reference
    // Fuck you javascript
    let hairstyle =  $.extend( true, {}, hs);

    let names = ["hair_fringe_name", "hair_side_name", "hair_fringe_length", "hair_side_length"];

    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        if(!(name in hairstyle)){
            V.customNNPC.errorStack.push("Missing Parameter: " + name + " in hairstyle " + hairstyle.name);
            console.error("Missing Parameter: " + name + " in hairstyle " + hairstyle.name);
            return setup.customNNPC.defaultHairstyles[0];
        }

        if(Array.isArray(hairstyle[name])){
            hairstyle[name] = hairstyle[name][Math.floor(Math.random() * hairstyle[name].length)];
        }
        if(name === "hair_fringe_length" || name === "hair_side_length" && hairstyle[name] === "ear"){
            hairstyle[name] = "short";
        }else if(name === "hair_fringe_length" || name === "hair_side_length" && hairstyle[name] === "neck"){
            hairstyle[name] = "shoulder";
        }
    }
    return hairstyle;
}

function getDefaultHairstyle(gender, type){
    let hairstyles = [...setup.customNNPC.defaultHairstyles];

    hairstyles = hairstyles.filter((hairstyle)=> hairstyle.type === type);
    hairstyles = hairstyles.filter((hairstyle)=> hairstyle.gender === gender || hairstyle.gender === 'n');

    if(hairstyles.length <= 0){
        V.customNNPC.errorStack.push("No hairstyle matches the search parameters: " + gender + " " + type);
        console.error("No hairstyle matches the search parameters: " + gender + " " + type);
        return setup.customNNPC.defaultHairstyles[0];
    }
    let hairstyle = hairstyles[Math.floor(Math.random() * hairstyles.length)];

    return hairstyleChooseVariant(hairstyle);
}

function getDefaultHairstyleByName(name){
    if(! (name in setup.customNNPC.defaultHairstyles)){
        V.customNNPC.errorStack.push("Unknown hairstyle name: " + name);
        console.error("Unknown hairstyle name: " + name);
        return setup.customNNPC.defaultHairstyles[0];
    }

    return hairstyleChooseVariant(setup.customNNPC.defaultHairstyles.find(h => h.name === name));
}

function npcResetDefaultHairstyle(NPCname, reset_length = false){
    let gender = V.NPCName[V.NPCNameList.indexOf(NPCname)].pronoun;
    let type = NPCname;
    if(NPCname === "Sydney" && V.sydney?.hair === "loose"){
        type = "Sydney alt"
    }

    let hairstyle = getDefaultHairstyle(gender, type);

    V.customNNPC.customData[NPCname].hairstyle_fringe = hairstyle.hair_fringe_name;
    V.customNNPC.customData[NPCname].hairstyle_side = hairstyle.hair_side_name;
    if(reset_length){
        V.customNNPC.customData[NPCname].hair_length_fringe = hairstyle.hair_fringe_length;
        V.customNNPC.customData[NPCname].hair_length_side = hairstyle.hair_side_length;
    }

    T.CustomNNPCHairContributor = hairstyle["contributor"] ?? "";

    getDefaultCDHairstyle(NPCname);
}

DefineMacro("custom-nnpc-reset-hairstyle", npcResetDefaultHairstyle);

function getDefaultCDHairstyle(NPCname){
    let gender = V.NPCName[V.NPCNameList.indexOf(NPCname)].pronoun === "m" ? "f" : "m";
    let hairstyle = getDefaultHairstyle(gender, NPCname);

    V.customNNPC.cd[NPCname].fringe_style = hairstyle.hair_fringe_name;
    V.customNNPC.cd[NPCname].side_style = hairstyle.hair_side_name;
}

DefineMacro("custom-nnpc-reset-hairstyle-cd", getDefaultCDHairstyle);
