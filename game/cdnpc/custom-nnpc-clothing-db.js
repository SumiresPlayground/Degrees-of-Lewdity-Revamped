function customNNPCClothingInitDb() {
    // Huge thanks to all the contributors from the dol modding discord
    //For contributors: use the following JavaScript command to access the clothing debug window
    // V.customNNPC.DEBUG = true

    //setup.npcClothesSets
    //Options can be: variable(*), colour1, colour2, pattern, integrity, alt
    // ex: {variable:"polo", colour1:"red", colour2:"green", pattern:"alien", integrity:69, alt:true},
    // * : Only variable is needed
    /*
    Outfit-wide optionals:
        neck_tucked : bool,
        upper_tucked : bool,
        lower_tucked : bool,
        altsleeve: bool,
        contributor: string
    */
    setup.customNNPC.defaultClothes = {
        "naked": {
            "Contributor": "Mother Nature",
        },
        "maleDefault": {
            "upper": [
                {variable: "polo", colour1: "white"},
                {variable: "checkered"},
                {variable: "dress", colour1: "white"},
                {variable: "blazershirt", colour1: "black", colour2: "white"},
                {variable: "blazershirt", colour1: "brown", colour2: "white"},
            ],
            "lower": [
                {variable: "trousers", colour1: "black"},
                {variable: "trousers", colour1: "blue"},
                {variable: "trousers", colour1: "brown"},
            ],
            "feet": [
                // Gender: m
                {variable: "horsebitloafers", colour1: "black"},
                {variable: "cordovanloafers", colour1: "black"},
                {variable: "combat", colour1: "black"},
                {variable: "combat", colour2: "brown"},
                {variable: "canvas loafers", colour1: "black"},

                // Gender : n
                {variable: "trainers", colour2: "white"},
                {variable: "wellies", colour1: "black"},
                {variable: "work", colour1: "black"},
                {variable: "work", colour1: "brown"},
                {variable: "long", colour1: "black"},
                {variable: "long", colour1: "brown"},
                {variable: "lightuptrainers", colour2: "white"},
                {variable: "hightops", colour2: "white"},
            ]
        },
        "femaleDefault": {
            "upper": [
                {variable: "polo", colour1: "white"},
                {variable: "checkered"},
                {variable: "dress", colour1: "white"},
                {variable: "blazershirt", colour1: "white"},
                {variable: "blazershirt", colour1: "brown"},
            ],
            "lower": [
                {variable: "schoolskirt2", colour1: "black"},
                {variable: "schoolskirt", colour1: "black"},
                {variable: "schoolskirt2", colour1: "red"},
                {variable: "schoolskirt", colour1: "red"},
                {variable: "schoolskirt2", colour1: "white"},
                {variable: "schoolskirt", colour1: "white"}
            ],
            "feet": [
                // Gender: f
                {variable: "platformheels", colour1: "black"},
                {variable: "kittenheels"},
                {variable: "bootheels", colour1: "black"},
                {variable: "thighhigh_heels", colour1: "black"},
                {variable: "fur_boots", colour1: "brown", colour2: "white"},
                {variable: "maryjanes", colour1: "black"},
                {variable: "maryjanes", colour1: "red"},
                {variable: "platformmaryjanes", colour1: "black"},
                {variable: "lacedupheels", colour1: "black"},

                // Gender : n
                {variable: "trainers", colour2: "white"},
                {variable: "wellies", colour1: "black"},
                {variable: "work", colour1: "black"},
                {variable: "work", colour1: "brown"},
                {variable: "long", colour1: "black"},
                {variable: "long", colour1: "brown"},
                {variable: "lightuptrainers", colour2: "white"},
                {variable: "hightops", colour2: "white"},
            ]
        },
        "maleSchool": {
            contributor: "Leni",
            "upper": [
                {variable: "schoolvest", colour1: "yellow", colour2: "white"}
            ],
            "lower": [{variable: "schoolshortsplaid", colour1: "black"}],
            "neck": [{variable: "suspenders", colour1: "black", alt: true}],
            "legs": [
                {variable: "mensgarters", colour1: "black"},
                {variable: "boysgymsocks", colour1: "white"}
            ],
            "feet": [
                {variable: "schoolshoes"},
            ],
            "handheld": [
                {variable: "backpack"},
                {variable: "messengerbag"}
            ]
        },
        "femaleSchool": {
            contributor: "Leni",
            "upper": [
                {variable: "schoolcardigan", colour1: "yellow", colour2: "white"}
            ],
            "lower": [
                {variable: "schoolskirt2", colour1: "black"},
                {variable: "schoolskirt", colour1: "black"}
            ],
            "neck": [{variable: "ribbontielarge", colour1: "black"}],
            "legs": [
                {variable: "loosesocks", colour1: "white"},
                {variable: "girlsgymsocks", colour1: "white"},
                {variable: "striped socks long", colour1: "white"}
            ],
            "feet": [
                {variable: "schoolshoes"},
                {variable: "maryjanes"}
            ],
            "handheld": [
                {variable: "backpack"},
                {variable: "messengerbag"}
            ]
        },
        "femaleSchoolShort": {
            contributor: "Leni",
            "upper": [
                {variable: "schoolcardigan", colour1: "yellow", colour2: "white", alt: true}
            ],
            "lower": [
                {variable: "schoolskirtshort2", colour1: "black"},
                {variable: "schoolskirtshort", colour1: "black"}
            ],
            "legs": [
                {variable: "loosesocks", colour1: "white"},
                {variable: "girlsgymsocks", colour1: "white"},
                {variable: "striped socks long", colour1: "white"}
            ],
            "feet": [
                {variable: "schoolshoes"},
                {variable: "maryjanes"}
            ],
            "handheld": [
                {variable: "backpack"},
                {variable: "messengerbag"}
            ]
        },
        "maleSchoolLong": {
            contributor: "Leni",
            "upper": [
                {variable: "schoolvest", colour1: "yellow", colour2: "white"},
            ],
            "lower": [
                {variable: "schooltrousers", colour1: "black"},
                {variable: "schooltrousersplaid", colour1: "black"}
            ],
            "neck": [{variable: "tie", colour1: "black", colour2: "black"}],
            "legs": [{variable: "boysgymsocks", colour1: "white"}],
            "feet": [
                {variable: "schoolshoes"},
            ],
            "handheld": [
                {variable: "backpack"},
                {variable: "messengerbag"}
            ]
        },
        "femaleSchoolLong": {
            contributor: "Leni",
            "upper": [
                {variable: "schoolcardigan", colour1: "yellow", colour2: "white"}
            ],
            "lower": [
                {variable: "schoolskirtlong2", colour1: "black"},
                {variable: "schoolskirtlong", colour1: "black"}
            ],
            "legs": [
                {variable: "girlsgymsocks", colour1: "white"},
                {variable: "striped socks long", colour1: "white"}
            ],
            "feet": [
                {variable: "schoolshoes"},
                {variable: "maryjanes"}
            ],
            "handheld": [
                {variable: "backpack"},
                {variable: "messengerbag"}
            ]
        },
        "maleSchoolDress": {
            "upper": [{variable: "dress", colour1: "white"},],
            "lower": [
                {variable: "schooltrousers", colour1: "black"},
                {variable: "schooltrousersplaid", colour1: "black"}
            ],
            "neck": [{variable: "tie", colour1: "black", colour2: "black"}],
            "legs": [{variable: "boysgymsocks", colour1: "white"}],
            "feet": [
                {variable: "schoolshoes"},
            ],
            "handheld": [
                {variable: "backpack"},
                {variable: "messengerbag"}
            ]
        },
        "femaleSchoolDress": {
            "upper": [{variable: "dress", colour1: "white"}],
            "lower": [
                {variable: "schoolskirt2", colour1: "black"},
                {variable: "schoolskirt", colour1: "black"}
            ],
            "neck": [{variable: "ribbontielarge", colour1: "black"}],
            "legs": [
                {variable: "girlsgymsocks", colour1: "white"},
                {variable: "striped socks long", colour1: "white"}
            ],
            "feet": [
                {variable: "schoolshoes"},
                {variable: "maryjanes"}
            ],
            "handheld": [
                {variable: "backpack"},
                {variable: "messengerbag"}
            ]
        },
        "maleSchoolBlazer": {
            "placeholder": "placeholder",
            "upper": [
                {variable: "schoolcardigan", colour1: "yellow", colour2: "white", alt: true}
            ],
            "lower": [
                {variable: "schooltrousers", colour1: "black"},
                {variable: "schooltrousersplaid", colour1: "black"}
            ],
            "neck": [{variable: "tie", colour1: "black", colour2: "black"}],
            "legs": [{variable: "boysgymsocks", colour1: "white"}],
            "feet": [
                {variable: "schoolshoes"},
            ],
            "handheld": [
                {variable: "backpack"},
                {variable: "messengerbag"}
            ]
        },
        "femaleSchoolBlazer": {
            "placeholder": "placeholder",
            "upper": [
                {variable: "schoolcardigan", colour1: "yellow", colour2: "white", alt: true}
            ],
            "lower": [
                {variable: "schoolskirtlong2", colour1: "black"},
                {variable: "schoolskirtlong", colour1: "black"}
            ],
            "legs": [
                {variable: "girlsgymsocks", colour1: "white"},
                {variable: "striped socks long", colour1: "white"}
            ],
            "feet": [
                {variable: "schoolshoes"},
                {variable: "maryjanes"}
            ],
            "handheld": [
                {variable: "backpack"},
                {variable: "messengerbag"}
            ]
        },
        "teacher": {
            "placeholder": "placeholder",
            "upper": [{variable: "blazershirt", colour1: "tan", colour2: "white"}],
            "neck": [
                {variable: "tie", colour1: "black", colour2: "black"},
                {variable: "tie", colour1: "red", colour2: "red"},
                {variable: "tie", colour1: "white", colour2: "white"},
            ],
            "lower": [{variable: "trousers", colour1: "white"}],
            "feet": [{variable: "wingtips", colour1: "black", colour2: "wine"}],
        },
        "maleSchoolSwim": [
            {"under_lower": [{variable: "schoolswimshorts", colour1: "black"}]},
            {"under_lower": [{variable: "schoolswimshorts", colour1: "blue"}]},
            {"under_lower": [{variable: "schoolswimshorts", colour1: "brown"}]},
            {"under_lower": [{variable: "schoolswimshorts", colour1: "red"}]},
            {"under_lower": [{variable: "schoolswimshorts", colour1: "tangerine"}]},
            {"under_lower": [{variable: "schoolswimshorts", colour1: "teal"}]},
            {"under_lower": [{variable: "schoolswimshorts", colour1: "white"}]},
            {"under_lower": [{variable: "schoolswimshorts", colour1: "yellow"}]},
        ],
        "maleSchoolSwimShirt": [
            {
                "under_lower": [{variable: "schoolswimshorts", colour1: "black"}],
                "under_upper": [{variable: "swimshirt", colour1: "black", colour2: "black"}]
            },
            {
                "under_lower": [{variable: "schoolswimshorts", colour1: "blue"}],
                "under_upper": [{variable: "swimshirt", colour1: "blue", colour2: "black"}]
            },
            {
                "under_lower": [{variable: "schoolswimshorts", colour1: "brown"}],
                "under_upper": [{variable: "swimshirt", colour1: "brown", colour2: "black"}]
            },
            {
                "under_lower": [{variable: "schoolswimshorts", colour1: "red"}],
                "under_upper": [{variable: "swimshirt", colour1: "red", colour2: "black"}]
            },
            {
                "under_lower": [{variable: "schoolswimshorts", colour1: "tangerine"}],
                "under_upper": [{variable: "swimshirt", colour1: "tangerine", colour2: "black"}]
            },
            {
                "under_lower": [{variable: "schoolswimshorts", colour1: "teal"}],
                "under_upper": [{variable: "swimshirt", colour1: "teal", colour2: "black"}]
            },
            {
                "under_lower": [{variable: "schoolswimshorts", colour1: "white"}],
                "under_upper": [{variable: "swimshirt", colour1: "white", colour2: "black"}]
            },
            {
                "under_lower": [{variable: "schoolswimshorts", colour1: "yellow"}],
                "under_upper": [{variable: "swimshirt", colour1: "yellow", colour2: "black"}]
            },
        ],
        "femaleSchoolSwim": [
            {
                "under_upper": [{variable: "schoolswimsuit", colour1: "black"}],
                "under_lower": [{variable: "schoolswimsuit", colour1: "black"}]
            },
            {
                "under_upper": [{variable: "schoolswimsuit", colour1: "blue"}],
                "under_lower": [{variable: "schoolswimsuit", colour1: "blue"}]
            },
            {
                "under_upper": [{variable: "schoolswimsuit", colour1: "green"}],
                "under_lower": [{variable: "schoolswimsuit", colour1: "green"}]
            },
            {
                "under_upper": [{variable: "schoolswimsuit", colour1: "pink"}],
                "under_lower": [{variable: "schoolswimsuit", colour1: "pink"}]
            },
            {
                "under_upper": [{variable: "schoolswimsuit", colour1: "purple"}],
                "under_lower": [{variable: "schoolswimsuit", colour1: "purple"}]
            },
            {
                "under_upper": [{variable: "schoolswimsuit", colour1: "red"}],
                "under_lower": [{variable: "schoolswimsuit", colour1: "red"}]
            },
            {
                "under_upper": [{variable: "schoolswimsuit", colour1: "tangerine"}],
                "under_lower": [{variable: "schoolswimsuit", colour1: "tangerine"}]
            },
            {
                "under_upper": [{variable: "schoolswimsuit", colour1: "teal"}],
                "under_lower": [{variable: "schoolswimsuit", colour1: "teal"}]
            },
            {
                "under_upper": [{variable: "schoolswimsuit", colour1: "white"}],
                "under_lower": [{variable: "schoolswimsuit", colour1: "white"}]
            },
            {
                "under_upper": [{variable: "schoolswimsuit", colour1: "yellow"}],
                "under_lower": [{variable: "schoolswimsuit", colour1: "yellow"}]
            },
        ],
        "maleSwim1": [
            {"under_lower": [{variable: "schoolswimshorts", colour1: "black"}]},
            {"under_lower": [{variable: "schoolswimshorts", colour1: "blue"}]},
            {"under_lower": [{variable: "schoolswimshorts", colour1: "brown"}]},
            {"under_lower": [{variable: "schoolswimshorts", colour1: "red"}]},
            {"under_lower": [{variable: "schoolswimshorts", colour1: "tangerine"}]},
            {"under_lower": [{variable: "schoolswimshorts", colour1: "teal"}]},
            {"under_lower": [{variable: "schoolswimshorts", colour1: "white"}]},
            {"under_lower": [{variable: "schoolswimshorts", colour1: "yellow"}]},
        ],
        "maleSwim2": [
            {"lower": [{variable: "boardshorts", colour1: "black"}]},
            {"lower": [{variable: "boardshorts", colour1: "blue"}]},
            {"lower": [{variable: "boardshorts", colour1: "brown"}]},
            {"lower": [{variable: "boardshorts", colour1: "red"}]},
            {"lower": [{variable: "boardshorts", colour1: "tangerine"}]},
            {"lower": [{variable: "boardshorts", colour1: "teal"}]},
            {"lower": [{variable: "boardshorts", colour1: "white"}]},
            {"lower": [{variable: "boardshorts", colour1: "yellow"}]},
        ],
        "femaleSwim1": [
            // Bikini
            {
                "under_upper": [{variable: "bikini", colour1: "black"}],
                "under_lower": [{variable: "bikini", colour1: "black"}]
            },
            {
                "under_upper": [{variable: "bikini", colour1: "blue"}],
                "under_lower": [{variable: "bikini", colour1: "blue"}]
            },
            {
                "under_upper": [{variable: "bikini", colour1: "green"}],
                "under_lower": [{variable: "bikini", colour1: "green"}]
            },
            {
                "under_upper": [{variable: "bikini", colour1: "pink"}],
                "under_lower": [{variable: "bikini", colour1: "pink"}]
            },
            {
                "under_upper": [{variable: "bikini", colour1: "purple"}],
                "under_lower": [{variable: "bikini", colour1: "purple"}]
            },
            {
                "under_upper": [{variable: "bikini", colour1: "red"}],
                "under_lower": [{variable: "bikini", colour1: "red"}]
            },
            {
                "under_upper": [{variable: "bikini", colour1: "tangerine"}],
                "under_lower": [{variable: "bikini", colour1: "tangerine"}]
            },
            {
                "under_upper": [{variable: "bikini", colour1: "teal"}],
                "under_lower": [{variable: "bikini", colour1: "teal"}]
            },
            {
                "under_upper": [{variable: "bikini", colour1: "white"}],
                "under_lower": [{variable: "bikini", colour1: "white"}]
            },
            {
                "under_upper": [{variable: "bikini", colour1: "yellow"}],
                "under_lower": [{variable: "bikini", colour1: "yellow"}]
            },

            // Classic Bikini
            {
                "under_upper": [{variable: "classicbikini", colour1: "black"}],
                "under_lower": [{variable: "classicbikini", colour1: "black"}]
            },
            {
                "under_upper": [{variable: "classicbikini", colour1: "blue"}],
                "under_lower": [{variable: "classicbikini", colour1: "blue"}]
            },
            {
                "under_upper": [{variable: "classicbikini", colour1: "green"}],
                "under_lower": [{variable: "classicbikini", colour1: "green"}]
            },
            {
                "under_upper": [{variable: "classicbikini", colour1: "pink"}],
                "under_lower": [{variable: "classicbikini", colour1: "pink"}]
            },
            {
                "under_upper": [{variable: "classicbikini", colour1: "purple"}],
                "under_lower": [{variable: "classicbikini", colour1: "purple"}]
            },
            {
                "under_upper": [{variable: "classicbikini", colour1: "red"}],
                "under_lower": [{variable: "classicbikini", colour1: "red"}]
            },
            {
                "under_upper": [{variable: "classicbikini", colour1: "tangerine"}],
                "under_lower": [{variable: "classicbikini", colour1: "tangerine"}]
            },
            {
                "under_upper": [{variable: "classicbikini", colour1: "teal"}],
                "under_lower": [{variable: "classicbikini", colour1: "teal"}]
            },
            {
                "under_upper": [{variable: "classicbikini", colour1: "white"}],
                "under_lower": [{variable: "classicbikini", colour1: "white"}]
            },
            {
                "under_upper": [{variable: "classicbikini", colour1: "yellow"}],
                "under_lower": [{variable: "classicbikini", colour1: "yellow"}]
            },

            // Tie-side Bikini
            {
                "under_upper": [{variable: "tiesidebikini", colour1: "black"}],
                "under_lower": [{variable: "tiesidebikini", colour1: "black"}]
            },
            {
                "under_upper": [{variable: "tiesidebikini", colour1: "blue"}],
                "under_lower": [{variable: "tiesidebikini", colour1: "blue"}]
            },
            {
                "under_upper": [{variable: "tiesidebikini", colour1: "green"}],
                "under_lower": [{variable: "tiesidebikini", colour1: "green"}]
            },
            {
                "under_upper": [{variable: "tiesidebikini", colour1: "pink"}],
                "under_lower": [{variable: "tiesidebikini", colour1: "pink"}]
            },
            {
                "under_upper": [{variable: "tiesidebikini", colour1: "purple"}],
                "under_lower": [{variable: "tiesidebikini", colour1: "purple"}]
            },
            {
                "under_upper": [{variable: "tiesidebikini", colour1: "red"}],
                "under_lower": [{variable: "tiesidebikini", colour1: "red"}]
            },
            {
                "under_upper": [{variable: "tiesidebikini", colour1: "tangerine"}],
                "under_lower": [{variable: "tiesidebikini", colour1: "tangerine"}]
            },
            {
                "under_upper": [{variable: "tiesidebikini", colour1: "teal"}],
                "under_lower": [{variable: "tiesidebikini", colour1: "teal"}]
            },
            {
                "under_upper": [{variable: "tiesidebikini", colour1: "white"}],
                "under_lower": [{variable: "tiesidebikini", colour1: "white"}]
            },
            {
                "under_upper": [{variable: "tiesidebikini", colour1: "yellow"}],
                "under_lower": [{variable: "tiesidebikini", colour1: "yellow"}]
            },
        ],
        "femaleSwim2": [
            {
                "under_upper": [{variable: "microkini", colour1: "black"}],
                "under_lower": [{variable: "microkini", colour1: "black"}, {
                    variable: "highmicrokini",
                    colour1: "black"
                }]
            },
            {
                "under_upper": [{variable: "microkini", colour1: "blue"}],
                "under_lower": [{variable: "microkini", colour1: "blue"}, {variable: "highmicrokini", colour1: "blue"}]
            },
            {
                "under_upper": [{variable: "microkini", colour1: "green"}],
                "under_lower": [{variable: "microkini", colour1: "green"}, {
                    variable: "highmicrokini",
                    colour1: "green"
                }]
            },
            {
                "under_upper": [{variable: "microkini", colour1: "pink"}],
                "under_lower": [{variable: "microkini", colour1: "pink"}, {variable: "highmicrokini", colour1: "pink"}]
            },
            {
                "under_upper": [{variable: "microkini", colour1: "purple"}],
                "under_lower": [{variable: "microkini", colour1: "purple"}, {
                    variable: "highmicrokini",
                    colour1: "purple"
                }]
            },
            {
                "under_upper": [{variable: "microkini", colour1: "red"}],
                "under_lower": [{variable: "microkini", colour1: "red"}, {variable: "highmicrokini", colour1: "red"}]
            },
            {
                "under_upper": [{variable: "microkini", colour1: "tangerine"}],
                "under_lower": [{variable: "microkini", colour1: "tangerine"}, {
                    variable: "highmicrokini",
                    colour1: "tangerine"
                }]
            },
            {
                "under_upper": [{variable: "microkini", colour1: "teal"}],
                "under_lower": [{variable: "microkini", colour1: "teal"}, {variable: "highmicrokini", colour1: "teal"}]
            },
            {
                "under_upper": [{variable: "microkini", colour1: "white"}],
                "under_lower": [{variable: "microkini", colour1: "white"}, {
                    variable: "highmicrokini",
                    colour1: "white"
                }]
            },
            {
                "under_upper": [{variable: "microkini", colour1: "yellow"}],
                "under_lower": [{variable: "microkini", colour1: "yellow"}, {
                    variable: "highmicrokini",
                    colour1: "yellow"
                }]
            },
        ],
        "neutralSwim": [
            {
                "lower": [{variable: "boardshorts", colour1: "black"}],
                "under_upper": [{variable: "swimshirt", colour1: "black", colour2: "black"}]
            },
            {
                "lower": [{variable: "boardshorts", colour1: "blue"}],
                "under_upper": [{variable: "swimshirt", colour1: "blue", colour2: "black"}]
            },
            {
                "lower": [{variable: "boardshorts", colour1: "brown"}],
                "under_upper": [{variable: "swimshirt", colour1: "brown", colour2: "black"}]
            },
            {
                "lower": [{variable: "boardshorts", colour1: "red"}],
                "under_upper": [{variable: "swimshirt", colour1: "red", colour2: "black"}]
            },
            {
                "lower": [{variable: "boardshorts", colour1: "tangerine"}],
                "under_upper": [{variable: "swimshirt", colour1: "tangerine", colour2: "black"}]
            },
            {
                "lower": [{variable: "boardshorts", colour1: "teal"}],
                "under_upper": [{variable: "swimshirt", colour1: "teal", colour2: "black"}]
            },
            {
                "lower": [{variable: "boardshorts", colour1: "white"}],
                "under_upper": [{variable: "swimshirt", colour1: "white", colour2: "black"}]
            },
            {
                "lower": [{variable: "boardshorts", colour1: "yellow"}],
                "under_upper": [{variable: "swimshirt", colour1: "yellow", colour2: "black"}]
            },
        ],
        "divingSuit": [
            {
                "face": [
                    {variable: "swimgoggles", colour1: "black", colour2: "black"},
                    {variable: "swimgoggles", colour1: "black", colour2: "black", alt: true}
                ],
                "feet": [
                    {variable: "flippers", colour1: "black"}
                ],
                "lower": [
                    {variable: "diving", colour1: "black"}
                ],
                "upper": [
                    {variable: "diving", colour1: "black"}
                ]
            },
            {
                "face": [
                    {variable: "swimgoggles", colour1: "red", colour2: "black"},
                    {variable: "swimgoggles", colour1: "red", colour2: "black", alt: true}
                ],
                "feet": [
                    {variable: "flippers", colour1: "red"}
                ],
                "lower": [
                    {variable: "diving", colour1: "red"}
                ],
                "upper": [
                    {variable: "diving", colour1: "red"}
                ]
            },
            {
                "face": [
                    {variable: "swimgoggles", colour1: "green", colour2: "black"},
                    {variable: "swimgoggles", colour1: "green", colour2: "black", alt: true}
                ],
                "feet": [
                    {variable: "flippers", colour1: "green"}
                ],
                "lower": [
                    {variable: "diving", colour1: "green"}
                ],
                "upper": [
                    {variable: "diving", colour1: "green"}
                ]
            },
            {
                "face": [
                    {variable: "swimgoggles", colour1: "black", colour2: "black"},
                    {variable: "swimgoggles", colour1: "black", colour2: "black", alt: true}
                ],
                "feet": [
                    {variable: "flippers", colour1: "black"}
                ],
                "lower": [
                    {variable: "diving", colour1: "black"}
                ],
                "upper": [
                    {variable: "diving", colour1: "black"}
                ]
            },
            {
                "face": [
                    {variable: "swimgoggles", colour1: "tangerine", colour2: "black"},
                    {variable: "swimgoggles", colour1: "tangerine", colour2: "black", alt: true}
                ],
                "feet": [
                    {variable: "flippers", colour1: "tangerine"}
                ],
                "lower": [
                    {variable: "diving", colour1: "tangerine"}
                ],
                "upper": [
                    {variable: "diving", colour1: "tangerine"}
                ]
            },
            {
                "face": [
                    {variable: "swimgoggles", colour1: "teal", colour2: "black"},
                    {variable: "swimgoggles", colour1: "teal", colour2: "black", alt: true}
                ],
                "feet": [
                    {variable: "flippers", colour1: "teal"}
                ],
                "lower": [
                    {variable: "diving", colour1: "teal"}
                ],
                "upper": [
                    {variable: "diving", colour1: "teal"}
                ]
            },
        ],
        "sailor": [
            {
                upper_tucked: true,
                "upper": [
                    {variable: "sailor", colour1: "white", colour2: "blue"},
                    {variable: "sailorshort", colour1: "white", colour2: "blue"}
                ],
                "lower": [{variable: "sailortrousers", colour1: "blue"}],
                "under_upper": [{variable: "chestbinder", colour1: "pale white"}],
                "under_lower": [{variable: "briefs", colour1: "blue"}],
                "head": [
                    {variable: "sailorbig", colour1: "white", colour2: "blue"},
                    {variable: "sailorsmall", colour1: "white", colour2: "blue"}
                ],
                "legs": [{variable: "anklesocks", colour1: "blue"}],
                "feet": [
                    {variable: "trainers", colour1: "white", colour2: "blue"},
                    {variable: "hightops", colour1: "blue"}
                ]
            },
            {
                upper_tucked: true,
                "upper": [
                    {variable: "sailor", colour1: "white", colour2: "blue"},
                    {variable: "sailorshort", colour1: "white", colour2: "blue"}
                ],
                "lower": [{variable: "sailorshorts", colour1: "blue"}],
                "under_upper": [{variable: "chestbinder", colour1: "pale white"}],
                "under_lower": [{variable: "briefs", colour1: "blue"}],
                "head": [
                    {variable: "sailorbig", colour1: "white", colour2: "blue"},
                    {variable: "sailorsmall", colour1: "white", colour2: "blue"}
                ],
                "legs": [{variable: "anklesocks", colour1: "blue"}],
                "feet": [
                    {variable: "trainers", colour1: "white", colour2: "blue"},
                    {variable: "hightops", colour1: "blue"}
                ]
            }
        ],
        "docker1": [
            {
                "contributor": "Numberjack",
                upper_tucked: true,
                "upper": [{variable: "tracksuit", colour1: "tangerine", colour2: "silver"}],
                "lower": [
                    {variable: "cargo", colour1: "black", colour2: "white"},
                    {variable: "cargo", colour1: "grey", colour2: "white"},
                    {variable: "cargo", colour1: "white", colour2: "white"},
                    {variable: "cargo", colour1: "navy", colour2: "white"},
                    {variable: "cargo", colour1: "off-white", colour2: "white"},
                    {variable: "cargoslim", colour1: "black", colour2: "white"},
                    {variable: "cargoslim", colour1: "grey", colour2: "white"},
                    {variable: "cargoslim", colour1: "white", colour2: "white"},
                    {variable: "cargoslim", colour1: "navy", colour2: "white"},
                    {variable: "cargoslim", colour1: "off-white", colour2: "white"}
                ],
                "under_upper": [{variable: "chestbinder", colour1: "black"}],
                "under_lower": [
                    {variable: "boxers", colour1: "black"},
                    {variable: "boyshorts", colour1: "black"}
                ],
                "head": [{variable: "cap", colour1: "tangerine", colour2: "tangerine"}],
                "face": [{variable: "shield", colour1: "black", colour2: "black"}],
                "neck": [{variable: "scarf", colour1: "white"}],
                "legs": [{variable: "anklesocks", colour1: "black"}],
                "feet": [
                    {variable: "trainers", colour1: "white", colour2: "tangerine"},
                    {variable: "hightops", colour1: "tangerine"},
                    {variable: "lightuptrainers", colour1: "tangerine"},
                    {variable: "combat", colour1: "black"},
                    {variable: "wellies", colour1: "black"},
                    {variable: "basketball", colour1: "white", colour2: "tangerine"},
                    {variable: "belted", colour1: "white"}
                ]
            }
        ],
        "docker2": [
            {
                "contributor": "Numberjack",
                upper_tucked: true,
                "upper": [{variable: "dress", colour1: "light blue", alt: true}],
                "lower": [
                    {variable: "jeans", colour1: "black"},
                    {variable: "low rise jeans", colour1: "black", colour2: "white"}
                ],
                "under_upper": [
                    {variable: "chestbinder", colour1: "pale white"},
                    {variable: "chestbinder", colour1: "pale yellow"}
                ],
                "under_lower": [
                    {variable: "boxers", colour1: "black"},
                    {variable: "boyshorts", colour1: "black"}
                ],
                "head": [
                    {variable: "cap", colour1: "white", colour2: "white"},
                    {variable: "cat", colour1: "white", colour2: "black"}
                ],
                "face": [{variable: "round", colour1: "black"}],
                "neck": [{variable: "whistle", colour1: "black"}],
                "legs": [{variable: "anklesocks", colour1: "black"}],
                "feet": [
                    {variable: "trainers", colour1: "white", colour2: "black"},
                    {variable: "hightops", colour1: "black"},
                    {variable: "work"},
                    {variable: "combat", colour1: "black"},
                    {variable: "wellies", colour1: "black"},
                    {variable: "basketball", colour1: "white", colour2: "black"},
                    {variable: "belted", colour1: "white"}
                ]
            }
        ],
        "docker3": [
            {
                "contributor": "Numberjack",
                "upper": [{variable: "hoodie", colour1: "black", colour2: "black"}],
                "lower": [
                    {variable: "cargo", colour1: "olive", colour2: "black"},
                    {variable: "cargo", colour1: "grey", colour2: "black"},
                    {variable: "cargo", colour1: "white", colour2: "black"},
                    {variable: "cargo", colour1: "tan", colour2: "black"},
                    {variable: "cargo", colour1: "off-white", colour2: "black"}
                ],
                "under_upper": [{variable: "chestbinder", colour1: "black"}],
                "under_lower": [
                    {variable: "briefs", colour1: "black"},
                    {variable: "boyshorts", colour1: "black"}
                ],
                "head": [
                    {variable: "hoodie hood", colour1: "black", colour2: "black"},
                    {variable: "cap", colour1: "black", colour2: "black"}
                ],
                "face": [{variable: "shield", colour1: "black", colour2: "black"}, {variable: "naked"}],
                "legs": [{variable: "anklesocks", colour1: "black"}],
                "feet": [
                    {variable: "trainers", colour1: "white", colour2: "black"},
                    {variable: "hightops", colour1: "black"},
                    {variable: "work"},
                    {variable: "combat", colour1: "light brown"},
                    {variable: "wellies", colour1: "black"},
                    {variable: "basketball", colour1: "white", colour2: "black"},
                    {variable: "belted", colour1: "black"}
                ]
            },
            {
                "contributor": "Numberjack",
                "upper": [{variable: "hoodie", colour1: "blue steel", colour2: "blue steel"}],
                "lower": [
                    {variable: "cargo", colour1: "black", colour2: "black"},
                    {variable: "cargo", colour1: "grey", colour2: "black"},
                    {variable: "cargo", colour1: "white", colour2: "black"},
                    {variable: "cargo", colour1: "wine", colour2: "black"},
                    {variable: "cargo", colour1: "navy", colour2: "black"},
                    {variable: "cargo", colour1: "olive", colour2: "black"},
                    {variable: "cargo", colour1: "tan", colour2: "black"},
                    {variable: "cargo", colour1: "sand", colour2: "black"},
                    {variable: "cargo", colour1: "off-white", colour2: "black"}
                ],
                "under_upper": [{variable: "chestbinder", colour1: "black"}],
                "under_lower": [
                    {variable: "briefs", colour1: "black"},
                    {variable: "boyshorts", colour1: "black"}
                ],
                "head": [
                    {variable: "hoodie hood", colour1: "blue steel", colour2: "blue steel"},
                    {variable: "cap", colour1: "black", colour2: "black"},
                    {variable: "cap", colour1: "white", colour2: "white"}
                ],
                "face": [{variable: "shield", colour1: "black", colour2: "black"}, {variable: "naked"}],
                "legs": [{variable: "anklesocks", colour1: "black"}],
                "feet": [
                    {variable: "trainers", colour1: "white", colour2: "black"},
                    {variable: "hightops", colour1: "black"},
                    {variable: "work"},
                    {variable: "combat", colour1: "light brown"},
                    {variable: "wellies", colour1: "black"},
                    {variable: "basketball", colour1: "white", colour2: "black"},
                    {variable: "belted", colour1: "black"}
                ]
            },
            {
                "contributor": "Numberjack",
                "upper": [{variable: "hoodie", colour1: "grey", colour2: "grey"}],
                "lower": [
                    {variable: "cargo", colour1: "black", colour2: "black"},
                    {variable: "cargo", colour1: "white", colour2: "black"},
                    {variable: "cargo", colour1: "wine", colour2: "black"},
                    {variable: "cargo", colour1: "navy", colour2: "black"},
                    {variable: "cargo", colour1: "olive", colour2: "black"},
                    {variable: "cargo", colour1: "tan", colour2: "black"},
                    {variable: "cargo", colour1: "sand", colour2: "black"},
                    {variable: "cargo", colour1: "off-white", colour2: "black"}
                ],
                "under_upper": [{variable: "chestbinder", colour1: "black"}],
                "under_lower": [
                    {variable: "briefs", colour1: "black"},
                    {variable: "boyshorts", colour1: "black"}
                ],
                "head": [
                    {variable: "hoodie hood", colour1: "grey", colour2: "grey"},
                    {variable: "cap", colour1: "black", colour2: "black"}
                ],
                "face": [{variable: "shield", colour1: "black", colour2: "black"}],
                "legs": [{variable: "anklesocks", colour1: "black"}],
                "feet": [
                    {variable: "trainers", colour1: "white", colour2: "black"},
                    {variable: "hightops", colour1: "black"},
                    {variable: "work"},
                    {variable: "combat", colour1: "light brown"},
                    {variable: "wellies", colour1: "black"},
                    {variable: "basketball", colour1: "white", colour2: "black"},
                    {variable: "belted", colour1: "black"}
                ]
            }
        ],
        "docker4": [
            {
                "contributor": "Numberjack",
                "upper": [{variable: "utilityshirt", colour1: "black", colour2: "white"}],
                "lower": [
                    {variable: "jeans", colour1: "denim"},
                    {variable: "jeans", colour1: "light blue"},
                    {variable: "jeans", colour1: "black"},
                    {variable: "jeans", colour1: "blue steel"},
                    {variable: "jeans", colour1: "grey"},
                    {variable: "low rise jeans", colour1: "denim", colour2: "white"},
                    {variable: "low rise jeans", colour1: "light blue", colour2: "white"},
                    {variable: "low rise jeans", colour1: "black", colour2: "white"},
                    {variable: "low rise jeans", colour1: "blue steel", colour2: "white"},
                    {variable: "low rise jeans", colour1: "grey", colour2: "white"}
                ],
                "under_upper": [{variable: "chestbinder", colour1: "black"}],
                "under_lower": [
                    {variable: "boxers", colour1: "black"},
                    {variable: "boyshorts", colour1: "black"}
                ],
                "head": [{variable: "cap", colour1: "black", colour2: "black"}],
                "face": [{variable: "square", colour1: "black", colour2: "black"}],
                "legs": [{variable: "anklesocks", colour1: "black"}],
                "feet": [
                    {variable: "trainers", colour1: "white", colour2: "black"},
                    {variable: "hightops", colour1: "black"},
                    {variable: "work"},
                    {variable: "combat", colour1: "black"},
                    {variable: "wellies", colour1: "black"},
                    {variable: "basketball", colour1: "white", colour2: "black"},
                    {variable: "belted", colour1: "black"}
                ]
            },
            {
                "contributor": "Numberjack",
                "upper": [{variable: "utilityshirt", colour1: "white", colour2: "black"}],
                "lower": [
                    {variable: "jeans", colour1: "denim"},
                    {variable: "jeans", colour1: "light blue"},
                    {variable: "jeans", colour1: "black"},
                    {variable: "jeans", colour1: "blue steel"},
                    {variable: "jeans", colour1: "grey"},
                    {variable: "low rise jeans", colour1: "denim", colour2: "white"},
                    {variable: "low rise jeans", colour1: "light blue", colour2: "white"},
                    {variable: "low rise jeans", colour1: "black", colour2: "white"},
                    {variable: "low rise jeans", colour1: "blue steel", colour2: "white"},
                    {variable: "low rise jeans", colour1: "grey", colour2: "white"}
                ],
                "under_upper": [{variable: "chestbinder", colour1: "black"}],
                "under_lower": [
                    {variable: "boxers", colour1: "black"},
                    {variable: "boyshorts", colour1: "black"}
                ],
                "head": [{variable: "cap", colour1: "black", colour2: "black"}],
                "face": [{variable: "square", colour1: "black", colour2: "black"}],
                "legs": [{variable: "anklesocks", colour1: "black"}],
                "feet": [
                    {variable: "trainers", colour1: "white", colour2: "black"},
                    {variable: "hightops", colour1: "black"},
                    {variable: "work"},
                    {variable: "combat", colour1: "black"},
                    {variable: "wellies", colour1: "black"},
                    {variable: "basketball", colour1: "white", colour2: "black"},
                    {variable: "belted", colour1: "black"}
                ]
            },
            {
                "contributor": "Numberjack",
                "upper": [{variable: "utility", colour1: "white"}],
                "lower": [
                    {variable: "jeans", colour1: "denim"},
                    {variable: "jeans", colour1: "light blue"},
                    {variable: "jeans", colour1: "black"},
                    {variable: "jeans", colour1: "blue steel"},
                    {variable: "jeans", colour1: "grey"},
                    {variable: "low rise jeans", colour1: "denim", colour2: "white"},
                    {variable: "low rise jeans", colour1: "light blue", colour2: "white"},
                    {variable: "low rise jeans", colour1: "black", colour2: "white"},
                    {variable: "low rise jeans", colour1: "blue steel", colour2: "white"},
                    {variable: "low rise jeans", colour1: "grey", colour2: "white"}
                ],
                "under_upper": [{variable: "undershirt", colour1: "black", colour2: "black"}],
                "under_lower": [
                    {variable: "boxers", colour1: "black"},
                    {variable: "boyshorts", colour1: "black"}
                ],
                "head": [{variable: "cap", colour1: "black", colour2: "black"}],
                "face": [{variable: "square", colour1: "black", colour2: "black"}],
                "legs": [{variable: "anklesocks", colour1: "black"}],
                "feet": [
                    {variable: "trainers", colour1: "white", colour2: "black"},
                    {variable: "hightops", colour1: "black"},
                    {variable: "work"},
                    {variable: "combat", colour1: "black"},
                    {variable: "wellies", colour1: "black"},
                    {variable: "basketball", colour1: "white", colour2: "black"},
                    {variable: "belted", colour1: "black"}
                ]
            },
            {
                "contributor": "Numberjack",
                "upper": [{variable: "utility", colour1: "black"}],
                "lower": [
                    {variable: "jeans", colour1: "denim"},
                    {variable: "jeans", colour1: "light blue"},
                    {variable: "jeans", colour1: "black"},
                    {variable: "jeans", colour1: "blue steel"},
                    {variable: "jeans", colour1: "grey"},
                    {variable: "low rise jeans", colour1: "denim", colour2: "white"},
                    {variable: "low rise jeans", colour1: "light blue", colour2: "white"},
                    {variable: "low rise jeans", colour1: "black", colour2: "white"},
                    {variable: "low rise jeans", colour1: "blue steel", colour2: "white"},
                    {variable: "low rise jeans", colour1: "grey", colour2: "white"}
                ],
                "under_upper": [{variable: "undershirt", colour1: "black", colour2: "black"}],
                "under_lower": [
                    {variable: "boxers", colour1: "black"},
                    {variable: "boyshorts", colour1: "black"}
                ],
                "head": [{variable: "cap", colour1: "black", colour2: "black"}],
                "face": [{variable: "square", colour1: "black", colour2: "black"}],
                "legs": [{variable: "anklesocks", colour1: "black"}],
                "feet": [
                    {variable: "trainers", colour1: "white", colour2: "black"},
                    {variable: "hightops", colour1: "black"},
                    {variable: "work"},
                    {variable: "combat", colour1: "black"},
                    {variable: "wellies", colour1: "black"},
                    {variable: "basketball", colour1: "white", colour2: "black"},
                    {variable: "belted", colour1: "black"}
                ]
            },
            {
                "contributor": "Numberjack",
                "upper": [{variable: "belted", colour1: "white"}],
                "lower": [
                    {variable: "jeans", colour1: "denim"},
                    {variable: "jeans", colour1: "light blue"},
                    {variable: "jeans", colour1: "blue steel"},
                    {variable: "low rise jeans", colour1: "denim", colour2: "white"},
                    {variable: "low rise jeans", colour1: "light blue", colour2: "white"},
                    {variable: "low rise jeans", colour1: "blue steel", colour2: "white"}
                ],
                "under_upper": [{variable: "undershirt", colour1: "black", colour2: "black"}],
                "under_lower": [
                    {variable: "boxers", colour1: "black"},
                    {variable: "boyshorts", colour1: "black"}
                ],
                "head": [{variable: "cap", colour1: "white", colour2: "white"}],
                "face": [{variable: "square", colour1: "black", colour2: "black"}],
                "legs": [{variable: "anklesocks", colour1: "black"}],
                "feet": [
                    {variable: "trainers", colour1: "white", colour2: "black"},
                    {variable: "hightops", colour1: "black"},
                    {variable: "work"},
                    {variable: "combat", colour1: "black"},
                    {variable: "wellies", colour1: "black"},
                    {variable: "basketball", colour1: "white", colour2: "black"},
                    {variable: "belted", colour1: "white"}
                ]
            },
            {
                "contributor": "Numberjack",
                "upper": [{variable: "lifevest", colour1: "tangerine", colour2: "white"}],
                "lower": [
                    {variable: "jeans", colour1: "light blue"},
                    {variable: "low rise jeans", colour1: "light blue", colour2: "white"}
                ],
                "under_upper": [{variable: "undershirt", colour1: "black", colour2: "black"}],
                "under_lower": [
                    {variable: "boxers", colour1: "black"},
                    {variable: "boyshorts", colour1: "black"}
                ],
                "head": [{variable: "cap", colour1: "black", colour2: "black"}],
                "face": [{variable: "square", colour1: "black", colour2: "black"}],
                "legs": [{variable: "anklesocks", colour1: "black"}],
                "feet": [
                    {variable: "trainers", colour1: "white", colour2: "black"},
                    {variable: "hightops", colour1: "black"},
                    {variable: "work"},
                    {variable: "combat", colour1: "black"},
                    {variable: "wellies", colour1: "black"},
                    {variable: "basketball", colour1: "white", colour2: "black"},
                    {variable: "belted", colour1: "white"}
                ]
            },
            {
                "contributor": "Numberjack",
                "lower": [
                    {variable: "jeans", colour1: "denim"},
                    {variable: "jeans", colour1: "blue steel"},
                    {variable: "jeans", colour1: "grey"},
                    {variable: "low rise jeans", colour1: "denim", colour2: "white"},
                    {variable: "low rise jeans", colour1: "blue steel", colour2: "white"},
                    {variable: "low rise jeans", colour1: "grey", colour2: "white"}
                ],
                "under_upper": [{variable: "vest", colour1: "black"}],
                "under_lower": [
                    {variable: "boxers", colour1: "black"},
                    {variable: "boyshorts", colour1: "black"}
                ],
                "head": [
                    {variable: "cap", colour1: "white", colour2: "white"},
                    {variable: "cap", colour1: "black", colour2: "black"}
                ],
                "face": [{variable: "square", colour1: "black", colour2: "black"}],
                "legs": [{variable: "anklesocks", colour1: "black"}],
                "feet": [
                    {variable: "trainers", colour1: "white", colour2: "black"},
                    {variable: "hightops", colour1: "black"},
                    {variable: "work"},
                    {variable: "combat", colour1: "black"},
                    {variable: "wellies", colour1: "black"},
                    {variable: "basketball", colour1: "white", colour2: "black"},
                    {variable: "belted", colour1: "white"}
                ]
            }
        ],
        "malePolice": {
            contributor: "Roxas",
            "face": [{variable: "aviator", colour1: "blue steel", colour2: "pale white"}, {variable: "naked"}],
            "head": [{variable: "cap", colour1: "black", colour2: "black"}, {variable: "naked"}],
            "upper": [{variable: "utility", colour1: "black"}],
            "under_upper": [{variable: "undershirt", colour1: "blue", colour2: "blue"}],
            "lower": [{variable: "trousers", colour1: "black"}],
            "legs": [{variable: "anklesocks", colour1: "pale white"}],
            "feet": [{variable: "trainers", colour1: "black", colour2: "white"}],
        },
        "femalePolice": {
            contributor: "Roxas",
            "face": [{variable: "aviator", colour1: "blue steel", colour2: "pale white"}, {variable: "naked"}],
            "head": [{variable: "cap", colour1: "black", colour2: "black"}, {variable: "naked"}],
            "upper": [{variable: "utility", colour1: "black"}],
            "under_upper": [{variable: "undershirt", colour1: "blue", colour2: "blue"}],
            "lower": [
                {variable: "cutskirtshort", colour1: "black"},
                {variable: "cutskirt", colour1: "black"},
                {variable: "cutskirtlong", colour1: "black"},
            ],
            "legs": [{variable: "anklesocks", colour1: "pale white"}],
            "feet": [{variable: "trainers", colour1: "black", colour2: "white"}],
        },
        "neutralPolice": {
            contributor: "Roxas",
            "face": [{variable: "aviator", colour1: "blue steel", colour2: "pale white"}, {variable: "naked"}],
            "head": [{variable: "cap", colour1: "black", colour2: "black"}, {variable: "naked"}],
            "upper": [{variable: "utility", colour1: "black"}],
            "under_upper": [{variable: "undershirt", colour1: "blue", colour2: "blue"}],
            "lower": [{variable: "trousers", colour1: "black"}],
            "legs": [{variable: "anklesocks", colour1: "pale white"}],
            "feet": [{variable: "trainers", colour1: "black", colour2: "white"}],
        },
        "maleRobe": {
            "contributor": "Roxas",
            "upper": [{variable: "monk"}],
            "lower": [{variable: "monk"}],
            "neck": [{variable: "holypendant"}],
            "feet": [{variable: "sandals", colour1: "brown"}]
        },
        "femaleRobe": [
            {
                "contributor": "Roxas",
                "head": [{variable: "nunnovice"}, {variable: "naked"}],
                "upper": [{variable: "nunnovice"}],
                "lower": [{variable: "nunnovice"}],
                "neck": [{variable: "holypendant"}],
                "legs": [{variable: "nunlewd"}, {variable: "naked"}],
                "feet": [{variable: "maryjanes", colour1: "black"}],
            },
            {
                "contributor": "Roxas",
                "head": [{variable: "nunavowed"}, {variable: "naked"}],
                "upper": [{variable: "nunavowed"}],
                "lower": [{variable: "nunavowed"}],
                "neck": [{variable: "holypendant"}],
                "legs": [{variable: "nunlewd"}, {variable: "naked"}],
                "feet": [{variable: "maryjanes", colour1: "black"}],
            },
            {
                "contributor": "Roxas",
                "head": [{variable: "nun"}, {variable: "naked"}],
                "upper": [{variable: "nun"}],
                "lower": [{variable: "nun"}],
                "neck": [{variable: "holypendant"}],
                "legs": [{variable: "nunlewd"}, {variable: "naked"}],
                "feet": [{variable: "maryjanes", colour1: "black"}],
            },
            {
                "contributor": "Roxas",
                "head": [{variable: "nunlong"}, {variable: "naked"}],
                "upper": [{variable: "nunlong"}],
                "lower": [{variable: "nunlong"}],
                "neck": [{variable: "holypendant"}],
                "legs": [{variable: "nunlewd"}, {variable: "naked"}],
                "feet": [{variable: "maryjanes", colour1: "black"}],
            },
        ],
        "neutralRobe": [
            {
                "contributor": "Roxas",
                "upper": [{variable: "initiate"}],
                "lower": [{variable: "initiate"}],
                "neck": [{variable: "holypendant"}, {variable: "holystole"}, {variable: "holystolelong"}],
                "feet": [{variable: "sandals", colour1: "brown"}]
            },
            {
                "contributor": "Roxas",
                "upper": [{variable: "evangelist"}],
                "lower": [{variable: "evangelist"}],
                "neck": [{variable: "holypendant"}, {variable: "holystole"}, {variable: "holystolelong"}],
                "feet": [{variable: "sandals", colour1: "brown"}]
            },
        ],
        "neutralRobeBlack": [
            {
                "contributor": "Roxas",
                "upper": [{variable: "confessorrobe"}],
                "lower": [{variable: "confessorrobe"}],
                "neck": [{variable: "holypendant"}, {variable: "holystole"}, {variable: "holystolelong"}],
                "feet": [{variable: "sandals", colour1: "brown"}]
            },
            {
                "contributor": "Roxas",
                "upper": [{variable: "confessorhabit"}],
                "lower": [{variable: "confessorhabit"}],
                "neck": [{variable: "holypendant"}, {variable: "holystole"}, {variable: "holystolelong"}],
                "feet": [{variable: "sandals", colour1: "brown"}]
            },
            {
                "contributor": "Roxas",
                "upper": [{variable: "exorcistcassock"}],
                "lower": [{variable: "exorcistcassock"}],
                "neck": [{variable: "holypendant"}, {variable: "holystole"}, {variable: "holystolelong"}],
                "feet": [{variable: "sandals", colour1: "brown"}]
            },
        ],
        "prisonJumpsuit": {
            "upper": [{variable: "jumpsuit"}],
            "lower": [{variable: "jumpsuit"}],
            "feet": [{variable: "ballchain"}],
        },
        "maleFormal1": [
            {
                "upper": [{variable: "tuxedo", colour1: "black"}],
                "lower": [{variable: "tuxedo", colour1: "black"}],
                "neck": [{variable: "tie", colour1: "black", colour2: "black"}, {
                    variable: "tie",
                    colour1: "white",
                    colour2: "white"
                }],
                "feet": [{variable: "tuxedoshoes"}],
            },
            {
                "contributor": "Roxas",
                "upper": [
                    {variable: "doublebreasted", colour1: "black"},
                    {variable: "doublebreasted", colour1: "brown"},
                    {variable: "doublebreasted", colour1: "white"},

                    {variable: "singlebreasted", colour1: "black"},
                    {variable: "singlebreasted", colour1: "brown"},
                    {variable: "singlebreasted", colour1: "white"},

                    {variable: "waistcoat", colour1: "black"},
                    {variable: "waistcoat", colour1: "brown"},
                    {variable: "waistcoat", colour1: "white"},

                    {variable: "waistcoatlapel", colour1: "black"},
                    {variable: "waistcoatlapel", colour1: "brown"},
                    {variable: "waistcoatlapel", colour1: "white"},

                    {variable: "waistcoatlong", colour1: "black"},
                    {variable: "waistcoatlong", colour1: "brown"},
                    {variable: "waistcoatlong", colour1: "white"},
                ],
                "lower": [
                    {variable: "3piecesuit", colour1: "wine"},
                    {variable: "3piecesuit", colour1: "black"},
                    {variable: "3piecesuit", colour1: "grey"},
                    {variable: "3piecesuit", colour1: "tan"},
                    {variable: "3piecesuit", colour1: "sand"},
                ],
                "neck": [{variable: "tie", colour1: "black", colour2: "black"}, {
                    variable: "tie",
                    colour1: "white",
                    colour2: "white"
                }],
                "feet": [{variable: "wingtips", colour1: "black", colour2: "wine"}],
            }
        ],
        "femaleFormal1": [
            {
                "contributor": "Roxas",
                "upper": [{variable: "eveninggown", colour1: "black", colour2: "black", pattern: "ombre"}],
                "lower": [{variable: "eveninggown", colour1: "black", colour2: "black", pattern: "ombre"}],
                "neck": [{variable: "naked"}, {variable: "lacechoker", colour1: "black"}],
                "hands": [{variable: "naked"}, {variable: "lacewarmers", colour1: "black"}],
                "feet": [
                    {variable: "dresssandals", colour1: "black"},
                    {variable: "kittenheels", colour1: "black"},
                    {variable: "courtheels", colour1: "black"},
                    {variable: "ribbonplatformheels", colour1: "black"},
                ]
            },
            {
                "contributor": "Roxas",
                "upper": [{variable: "eveninggown", colour1: "black", colour2: "black", pattern: "sparkly"}],
                "lower": [{variable: "eveninggown", colour1: "black", colour2: "black", pattern: "sparkly"}],
                "neck": [{variable: "naked"}, {variable: "lacechoker", colour1: "black"}],
                "hands": [{variable: "naked"}, {variable: "lacewarmers", colour1: "black"}],
                "feet": [
                    {variable: "dresssandals", colour1: "black"},
                    {variable: "kittenheels", colour1: "black"},
                    {variable: "courtheels", colour1: "black"},
                    {variable: "ribbonplatformheels", colour1: "black"},
                ]
            },
            {
                "contributor": "Roxas",
                "upper": [{variable: "eveninggown", colour1: "navy blue", colour2: "black", pattern: "ombre"}],
                "lower": [{variable: "eveninggown", colour1: "navy blue", colour2: "black", pattern: "ombre"}],
                "neck": [{variable: "naked"}, {variable: "lacechoker", colour1: "black"}],
                "hands": [{variable: "naked"}, {variable: "lacewarmers", colour1: "black"}],
                "feet": [
                    {variable: "dresssandals", colour1: "black"},
                    {variable: "kittenheels", colour1: "black"},
                    {variable: "courtheels", colour1: "black"},
                    {variable: "ribbonplatformheels", colour1: "black"},
                ]
            },
            {
                "contributor": "Roxas",
                "upper": [{variable: "eveninggown", colour1: "navy blue", colour2: "black", pattern: "sparkly"}],
                "lower": [{variable: "eveninggown", colour1: "navy blue", colour2: "black", pattern: "sparkly"}],
                "neck": [{variable: "naked"}, {variable: "lacechoker", colour1: "black"}],
                "hands": [{variable: "naked"}, {variable: "lacewarmers", colour1: "black"}],
                "feet": [
                    {variable: "dresssandals", colour1: "black"},
                    {variable: "kittenheels", colour1: "black"},
                    {variable: "courtheels", colour1: "black"},
                    {variable: "ribbonplatformheels", colour1: "black"},
                ]
            },
            {
                "contributor": "Roxas",
                "upper": [{variable: "eveninggown", colour1: "wine", colour2: "wine", pattern: "ombre"}],
                "lower": [{variable: "eveninggown", colour1: "wine", colour2: "wine", pattern: "ombre"}],
                "neck": [{variable: "naked"}, {variable: "lacechoker", colour1: "black"}],
                "hands": [{variable: "naked"}, {variable: "lacewarmers", colour1: "black"}],
                "feet": [
                    {variable: "dresssandals", colour1: "black"},
                    {variable: "kittenheels", colour1: "black"},
                    {variable: "courtheels", colour1: "black"},
                    {variable: "ribbonplatformheels", colour1: "black"},
                ]
            },
            {
                "contributor": "Roxas",
                "upper": [{variable: "eveninggown", colour1: "wine", colour2: "wine", pattern: "sparkly"}],
                "lower": [{variable: "eveninggown", colour1: "wine", colour2: "wine", pattern: "sparkly"}],
                "neck": [{variable: "naked"}, {variable: "lacechoker", colour1: "black"}],
                "hands": [{variable: "naked"}, {variable: "lacewarmers", colour1: "black"}],
                "feet": [
                    {variable: "dresssandals", colour1: "black"},
                    {variable: "kittenheels", colour1: "black"},
                    {variable: "courtheels", colour1: "black"},
                    {variable: "ribbonplatformheels", colour1: "black"},
                ]
            },
            {
                "contributor": "Roxas",
                "upper": [{variable: "eveninggown", colour1: "teal", colour2: "navy blue", pattern: "ombre"}],
                "lower": [{variable: "eveninggown", colour1: "teal", colour2: "navy blue", pattern: "ombre"}],
                "neck": [{variable: "naked"}, {variable: "lacechoker", colour1: "black"}],
                "hands": [{variable: "naked"}, {variable: "lacewarmers", colour1: "black"}],
                "feet": [
                    {variable: "dresssandals", colour1: "black"},
                    {variable: "kittenheels", colour1: "black"},
                    {variable: "courtheels", colour1: "black"},
                    {variable: "ribbonplatformheels", colour1: "black"},
                ]
            },
            {
                "contributor": "Roxas",
                "upper": [{variable: "eveninggown", colour1: "teal", colour2: "navy blue", pattern: "sparkly"}],
                "lower": [{variable: "eveninggown", colour1: "teal", colour2: "navy blue", pattern: "sparkly"}],
                "neck": [{variable: "naked"}, {variable: "lacechoker", colour1: "black"}],
                "hands": [{variable: "naked"}, {variable: "lacewarmers", colour1: "black"}],
                "feet": [
                    {variable: "dresssandals", colour1: "black"},
                    {variable: "kittenheels", colour1: "black"},
                    {variable: "courtheels", colour1: "black"},
                    {variable: "ribbonplatformheels", colour1: "black"},
                ]
            },
            {
                "contributor": "Roxas",
                "upper": [{variable: "eveninggown", colour1: "purple", colour2: "lilac", pattern: "ombre"}],
                "lower": [{variable: "eveninggown", colour1: "purple", colour2: "lilac", pattern: "ombre"}],
                "neck": [{variable: "naked"}, {variable: "lacechoker", colour1: "black"}],
                "hands": [{variable: "naked"}, {variable: "lacewarmers", colour1: "black"}],
                "feet": [
                    {variable: "dresssandals", colour1: "black"},
                    {variable: "kittenheels", colour1: "black"},
                    {variable: "courtheels", colour1: "black"},
                    {variable: "ribbonplatformheels", colour1: "black"},
                ]
            },
            {
                "contributor": "Roxas",
                "upper": [{variable: "eveninggown", colour1: "purple", colour2: "lilac", pattern: "sparkly"}],
                "lower": [{variable: "eveninggown", colour1: "purple", colour2: "lilac", pattern: "sparkly"}],
                "neck": [{variable: "naked"}, {variable: "lacechoker", colour1: "black"}],
                "hands": [{variable: "naked"}, {variable: "lacewarmers", colour1: "black"}],
                "feet": [
                    {variable: "dresssandals", colour1: "black"},
                    {variable: "kittenheels", colour1: "black"},
                    {variable: "courtheels", colour1: "black"},
                    {variable: "ribbonplatformheels", colour1: "black"},
                ]
            },
        ],
        "femaleFormal2": [
            {
                "contributor": "Roxas",
                "upper": [{variable: "ballgown", colour1: "black", colour2: "black", pattern: "ombre"}],
                "lower": [{variable: "ballgown", colour1: "black", colour2: "black", pattern: "ombre"}],
                "neck": [{variable: "naked"}, {variable: "lacechoker", colour1: "black"}],
                "hands": [{variable: "naked"}, {variable: "lacewarmers", colour1: "black"}],
                "feet": [
                    {variable: "dresssandals", colour1: "black"},
                    {variable: "kittenheels", colour1: "black"},
                    {variable: "courtheels", colour1: "black"},
                    {variable: "ribbonplatformheels", colour1: "black"},
                ]
            },
            {
                "contributor": "Roxas",
                "upper": [{variable: "ballgown", colour1: "navy blue", colour2: "black", pattern: "ombre"}],
                "lower": [{variable: "ballgown", colour1: "navy blue", colour2: "black", pattern: "ombre"}],
                "neck": [{variable: "naked"}, {variable: "lacechoker", colour1: "black"}],
                "hands": [{variable: "naked"}, {variable: "lacewarmers", colour1: "black"}],
                "feet": [
                    {variable: "dresssandals", colour1: "black"},
                    {variable: "kittenheels", colour1: "black"},
                    {variable: "courtheels", colour1: "black"},
                    {variable: "ribbonplatformheels", colour1: "black"},
                ]
            },
            {
                "contributor": "Roxas",
                "upper": [{variable: "ballgown", colour1: "wine", colour2: "wine", pattern: "ombre"}],
                "lower": [{variable: "ballgown", colour1: "wine", colour2: "wine", pattern: "ombre"}],
                "neck": [{variable: "naked"}, {variable: "lacechoker", colour1: "black"}],
                "hands": [{variable: "naked"}, {variable: "lacewarmers", colour1: "black"}],
                "feet": [
                    {variable: "dresssandals", colour1: "black"},
                    {variable: "kittenheels", colour1: "black"},
                    {variable: "courtheels", colour1: "black"},
                    {variable: "ribbonplatformheels", colour1: "black"},
                ]
            },
            {
                "contributor": "Roxas",
                "upper": [{variable: "ballgown", colour1: "teal", colour2: "navy blue", pattern: "ombre"}],
                "lower": [{variable: "ballgown", colour1: "teal", colour2: "navy blue", pattern: "ombre"}],
                "neck": [{variable: "naked"}, {variable: "lacechoker", colour1: "black"}],
                "hands": [{variable: "naked"}, {variable: "lacewarmers", colour1: "black"}],
                "feet": [
                    {variable: "dresssandals", colour1: "black"},
                    {variable: "kittenheels", colour1: "black"},
                    {variable: "courtheels", colour1: "black"},
                    {variable: "ribbonplatformheels", colour1: "black"},
                ]
            },
            {
                "contributor": "Roxas",
                "upper": [{variable: "ballgown", colour1: "purple", colour2: "lilac", pattern: "ombre"}],
                "lower": [{variable: "ballgown", colour1: "purple", colour2: "lilac", pattern: "ombre"}],
                "neck": [{variable: "naked"}, {variable: "lacechoker", colour1: "black"}],
                "hands": [{variable: "naked"}, {variable: "lacewarmers", colour1: "black"}],
                "feet": [
                    {variable: "dresssandals", colour1: "black"},
                    {variable: "kittenheels", colour1: "black"},
                    {variable: "courtheels", colour1: "black"},
                    {variable: "ribbonplatformheels", colour1: "black"},
                ]
            },
        ],
        "neutralFormal": {
            "contributor": "Roxas",
            "face": [{variable: "monocle"}, {variable: "naked"}],
            "hands": [
                {variable: "fingerlessgloves", colour1: "black"},
                {variable: "fingerlessgloves", colour1: "brown"},
                {variable: "naked"}
            ],
            "upper": [
                {variable: "peacoat", colour1: "black"},
                {variable: "peacoat", colour1: "navy"},
                {variable: "peacoat", colour1: "olive"},
                {variable: "peacoat", colour1: "wine"},
            ],
            "lower": [
                {variable: "slacks", colour1: "black"},
                {variable: "slacks", colour1: "brown"},
                {variable: "slacks", colour1: "white"},
            ],
            "handheld": [{variable: "cane"}],
            "feet": [{variable: "paddock"}]
        },
        "maleFormalRare": {
            "contributor": "Frankenstein of Numberjack & Roxas",
            "upper": [{variable: "gothicjacket"},],
            "lower": [{variable: "gothictrousers"}],
            "under_upper": [{variable: "undershirt", colour1: "red", colour2: "red"}],
            "under_lower": [{variable: "briefs", colour1: "black"}],
            "neck": [
                {variable: "bowtie", colour1: "red"},
                {variable: "boa", colour1: "white"}
            ],
            "hands": [{variable: "longleathergloves", colour1: "red"}],
            "legs": [{variable: "striped socks long", colour1: "black"}],
            "feet": [
                {variable: "tuxedo"},
                {variable: "wingtips", colour1: "black", colour2: "black"},
                {variable: "wingtips", colour1: "black", colour2: "navy"},
                {variable: "wingtips", colour1: "navy", colour2: "navy"},
                {variable: "wingtips", colour1: "black", colour2: "wine"}
            ]
        },
        "femaleFormalRare": [
            {
                "upper": [
                    {variable: "openshoulderlolita", colour1: "black", colour2: "red"},
                    {variable: "openshoulderlolitaclassic", colour1: "black", colour2: "red"}
                ],
                "lower": [
                    {variable: "ruffled long dress", colour1: "black", colour2: "red"},
                    {variable: "openshoulderlolita", colour1: "black", colour2: "red"},
                    {variable: "openshoulderlolitaclassic", colour1: "black", colour2: "red"}
                ],
                "under_upper": [{variable: "corset", colour1: "black"}],
                "under_lower": [{variable: "lacepanties", colour1: "black"}],
                "head": [
                    {variable: "gothiccrown", colour1: "black", colour2: "red"},
                    {variable: "lolita", colour1: "red", colour2: "black"},
                    {variable: "lolitaold", colour1: "red", colour2: "black"}
                ],
                "neck": [
                    {variable: "lacechoker", colour1: "red"},
                    {variable: "lacechokerold", colour1: "red"},
                ],
                "hands": [{variable: "longleathergloves", colour1: "black"}],
                "handheld": [{variable: "parasolsweet", colour1: "black", colour2: "black"}, {variable: "naked"}],
                "legs": [
                    {variable: "striped socks long", colour1: "black"},
                    {variable: "ribbonstockings", colour1: "black", colour2: "red"}
                ],
                "feet": [
                    {variable: "dresssandals", colour1: "black"}
                ]
            },
            {
                "contributor": "Roxas",
                "upper": [{variable: "cheongsam", colour1: "red"}],
                "lower": [{variable: "cheongsam", colour1: "red"}],
                "neck": [{variable: "naked"}, {variable: "lacechoker", colour1: "black"}],
                "hands": [{variable: "naked"}, {variable: "lacewarmers", colour1: "black"}],
                "feet": [
                    {variable: "dresssandals", colour1: "black"},
                    {variable: "kittenheels", colour1: "black"},
                    {variable: "courtheels", colour1: "black"},
                    {variable: "ribbonplatformheels", colour1: "black"},
                ]
            },
            {
                "contributor": "Roxas",
                "upper": [{variable: "cheongsam", colour1: "white"}],
                "lower": [{variable: "cheongsam", colour1: "white"}],
                "neck": [{variable: "naked"}, {variable: "lacechoker", colour1: "black"}],
                "hands": [{variable: "naked"}, {variable: "lacewarmers", colour1: "black"}],
                "feet": [
                    {variable: "dresssandals", colour1: "black"},
                    {variable: "kittenheels", colour1: "black"},
                    {variable: "courtheels", colour1: "black"},
                    {variable: "ribbonplatformheels", colour1: "black"},
                ]
            }
        ],
        "business": {
            "contributor": "Roxas",
            "upper": [
                {variable: "singlebreasted", colour1: "black"},
                {variable: "singlebreasted", colour1: "brown"},
                {variable: "singlebreasted", colour1: "white"},
            ],
            "lower": [
                {variable: "3piecesuit", colour1: "wine"},
                {variable: "3piecesuit", colour1: "black"},
                {variable: "3piecesuit", colour1: "grey"},
                {variable: "3piecesuit", colour1: "tan"},
                {variable: "3piecesuit", colour1: "sand"},
            ],
            "neck": [{variable: "tie", colour1: "black", colour2: "black"}],
            "feet": [{variable: "wingtips", colour1: "black", colour2: "wine"}],
        },
        "maleTown1": {
            "upper": [
                {variable: "graphictee", colour1: "black"},
                {variable: "graphictee", colour1: "blue"},
                {variable: "graphictee", colour1: "brown"},
                {variable: "graphictee", colour1: "red"},
                {variable: "graphictee", colour1: "teal"},
                {variable: "graphictee", colour1: "white"},
                {variable: "graphictee", colour1: "tangerine"},
                {variable: "graphictee", colour1: "yellow"},

                {variable: "tshirt", colour1: "black"},
                {variable: "tshirt", colour1: "blue"},
                {variable: "tshirt", colour1: "brown"},
                {variable: "tshirt", colour1: "red"},
                {variable: "tshirt", colour1: "teal"},
                {variable: "tshirt", colour1: "white"},
                {variable: "tshirt", colour1: "tangerine"},
                {variable: "tshirt", colour1: "yellow"},

                {variable: "band tee", colour1: "black"},
                {variable: "band tee", colour1: "blue"},
                {variable: "band tee", colour1: "brown"},
                {variable: "band tee", colour1: "red"},
                {variable: "band tee", colour1: "teal"},
                {variable: "band tee", colour1: "white"},
                {variable: "band tee", colour1: "tangerine"},
                {variable: "band tee", colour1: "yellow"},
            ],
            "lower": [
                {variable: "shorts", colour1: "teal"},
                {variable: "baggy", colour1: "neon blue", colour2: "black"},
                {variable: "baseball", colour1: "blue", colour2: "black"},
                {variable: "cargo shorts", colour1: "olive", colour2: "black"},
                {variable: "cycleshorts"},
                {variable: "dolphinshorts", colour1: "green", colour2: "white"},
                {variable: "football", colour1: "black"},
                {variable: "retroshorts", colour1: "teal", colour2: "yellow"},
                {variable: "scout", colour1: "yellow", colour2: "black"}
            ],
            "under_lower": [{variable: "briefs", colour1: "pale white"}],
            "feet": [
                {variable: "hightops", colour1: "black"},
                {variable: "basketball", colour1: "white", colour2: "black"},
                {variable: "basketball", colour1: "yellow", colour2: "teal"}
            ]
        },
        "femaleTown1": [
            {
                "upper": [{variable: "sundress", colour1: "white"},],
                "lower": [{variable: "sundress", colour1: "white"},],
                "feet": [
                    {variable: "maryjanes", colour1: "black"},
                    {variable: "maryjanes", colour1: "red"},
                ]
            },
            {
                "upper": [{variable: "sundress", colour1: "pink"},],
                "lower": [{variable: "sundress", colour1: "pink"},],
                "feet": [{variable: "maryjanes", colour1: "black"},]
            },
            {
                "upper": [{variable: "sundress", colour1: "red"},],
                "lower": [{variable: "sundress", colour1: "red"},],
                "feet": [{variable: "maryjanes", colour1: "red"},]
            },
            {
                "upper": [{variable: "sundress", colour1: "tangerine"},],
                "lower": [{variable: "sundress", colour1: "tangerine"},],
                "feet": [{variable: "maryjanes", colour1: "black"},]
            },
            {
                "upper": [{variable: "sundress", colour1: "teal"},],
                "lower": [{variable: "sundress", colour1: "teal"},],
                "feet": [{variable: "maryjanes", colour1: "black"},]
            },
        ],
        "maleTown2": {
            "upper": [
                {variable: "polo", colour1: "white"},
                {variable: "checkered"},
                {variable: "dress", colour1: "white"},
                {variable: "blazershirt", colour1: "black", colour2: "white"},
                {variable: "blazershirt", colour1: "brown", colour2: "white"},
            ],
            "lower": [
                {variable: "trousers", colour1: "black"},
                {variable: "trousers", colour1: "blue"},
                {variable: "trousers", colour1: "brown"},
            ],
            "feet": [
                // Gender: m
                {variable: "horsebitloafers", colour1: "black"},
                {variable: "cordovanloafers", colour1: "black"},
                {variable: "combat", colour1: "black"},
                {variable: "combat", colour2: "brown"},
                {variable: "canvas loafers", colour1: "black"},

                // Gender : n
                {variable: "trainers", colour2: "white"},
                {variable: "wellies", colour1: "black"},
                {variable: "work", colour1: "black"},
                {variable: "work", colour1: "brown"},
                {variable: "long", colour1: "black"},
                {variable: "long", colour1: "brown"},
                {variable: "lightuptrainers", colour2: "white"},
                {variable: "hightops", colour2: "white"},
            ]
        },
        "femaleTown2": {
            "upper": [
                {variable: "polo", colour1: "white"},
                {variable: "checkered"},
                {variable: "dress", colour1: "white"},
                {variable: "blazershirt", colour1: "white"},
                {variable: "blazershirt", colour1: "brown"},
            ],
            "lower": [
                {variable: "schoolskirt2", colour1: "black"},
                {variable: "schoolskirt", colour1: "black"},
                {variable: "schoolskirt2", colour1: "red"},
                {variable: "schoolskirt", colour1: "red"},
                {variable: "schoolskirt2", colour1: "white"},
                {variable: "schoolskirt", colour1: "white"}
            ],
            "feet": [
                // Gender: f
                {variable: "platformheels", colour1: "black"},
                {variable: "kittenheels"},
                {variable: "bootheels", colour1: "black"},
                {variable: "thighhigh_heels", colour1: "black"},
                {variable: "fur_boots", colour1: "brown", colour2: "white"},
                {variable: "maryjanes", colour1: "black"},
                {variable: "maryjanes", colour1: "red"},
                {variable: "platformmaryjanes", colour1: "black"},
                {variable: "lacedupheels", colour1: "black"},

                // Gender : n
                {variable: "trainers", colour2: "white"},
                {variable: "wellies", colour1: "black"},
                {variable: "work", colour1: "black"},
                {variable: "work", colour1: "brown"},
                {variable: "long", colour1: "black"},
                {variable: "long", colour1: "brown"},
                {variable: "lightuptrainers", colour2: "white"},
                {variable: "hightops", colour2: "white"},
            ]
        },
        "townTrack": [
            {
                "upper": [{variable: "tracksuit", colour1: "black", colour2: "white"}],
                "lower": [{variable: "tracksuit", colour1: "black", colour2: "white"}],
                "feet": [{variable: "trainers", colour1: "black", colour2: "white"}],
            },
            {
                "upper": [{variable: "tracksuit", colour1: "blue steel", colour2: "silver"}],
                "lower": [{variable: "tracksuit", colour1: "blue steel", colour2: "silver"}],
                "feet": [{variable: "trainers", colour1: "black", colour2: "silver"}],
            },
            {
                "upper": [{variable: "tracksuit", colour1: "red", colour2: "white"}],
                "lower": [{variable: "tracksuit", colour1: "red", colour2: "white"}],
                "feet": [{variable: "trainers", colour1: "red", colour2: "white"}],
            },
            {
                "upper": [{variable: "tracksuit", colour1: "tangerine", colour2: "white"}],
                "lower": [{variable: "tracksuit", colour1: "tangerine", colour2: "white"}],
                "feet": [{variable: "trainers", colour1: "tangerine", colour2: "white"}],
            },
        ],
        "townCoat": {
            "handheld": [{variable: "umbrella"}, {variable: "naked"}],
            "upper": [{variable: "peacoat"}],
            "lower": [
                {variable: "slacks", colour1: "black"},
                {variable: "slacks", colour1: "blue"},
                {variable: "slacks", colour1: "brown"},
                {variable: "slacks", colour1: "white"},
            ],
            "feet": [
                {variable: "work", colour1: "black"},
                {variable: "work", colour1: "brown"},
                {variable: "long", colour1: "black"},
                {variable: "long", colour1: "brown"},
            ]
        },
        "townTurtleneck": {
            "upper": [
                {variable: "cable", colour1: "black"},
                {variable: "cable", colour1: "blue"},
                {variable: "cable", colour1: "brown"},
                {variable: "cable", colour1: "green"},
                {variable: "cable", colour1: "red"},
                {variable: "cable", colour1: "tangerine"},
                {variable: "cable", colour1: "teal"},
                {variable: "cable", colour1: "white"},

                {variable: "turtleneck", colour1: "black"},
                {variable: "turtleneck", colour1: "blue"},
                {variable: "turtleneck", colour1: "brown"},
                {variable: "turtleneck", colour1: "green"},
                {variable: "turtleneck", colour1: "red"},
                {variable: "turtleneck", colour1: "tangerine"},
                {variable: "turtleneck", colour1: "teal"},
                {variable: "turtleneck", colour1: "white"},
            ],
            "lower": [{variable: "jeans"}],
            "feet": [
                {variable: "trainers", colour2: "white"},
                {variable: "wellies", colour1: "black"},
                {variable: "work", colour1: "black"},
                {variable: "work", colour1: "brown"},
                {variable: "long", colour1: "black"},
                {variable: "long", colour1: "brown"},
                {variable: "lightuptrainers", colour2: "white"},
                {variable: "hightops", colour2: "white"},
            ]
        },
        "townCollar": {
            upper_tucked: true,
            "upper": [{variable: "buttondown", colour1: "white"}],
            "lower": [{variable: "khakis"}],
            "feet": [
                {variable: "trainers", colour2: "white"},
                {variable: "wellies", colour1: "black"},
                {variable: "work", colour1: "black"},
                {variable: "work", colour1: "brown"},
                {variable: "long", colour1: "black"},
                {variable: "long", colour1: "brown"},
                {variable: "lightuptrainers", colour2: "white"},
                {variable: "hightops", colour2: "white"},
            ]
        },
        "townBlazer": {
            "upper": [
                {variable: "blazershirt", colour1: "black", colour2: "white"},
                {variable: "blazershirt", colour1: "brown", colour2: "white"},
            ],
            "lower": [
                {variable: "trousers", colour1: "black"},
                {variable: "trousers", colour1: "blue"},
                {variable: "trousers", colour1: "brown"},
            ],
            "feet": [
                {variable: "trainers", colour2: "white"},
                {variable: "wellies", colour1: "black"},
                {variable: "work", colour1: "black"},
                {variable: "work", colour1: "brown"},
                {variable: "long", colour1: "black"},
                {variable: "long", colour1: "brown"},
                {variable: "lightuptrainers", colour2: "white"},
                {variable: "hightops", colour2: "white"},
            ]
        },
        "townJersey": {
            "upper": [
                {variable: "football"},
                {variable: "baseball"},
            ],
            "lower": [
                {variable: "trousers", colour1: "black"},
                {variable: "trousers", colour1: "blue"},
                {variable: "trousers", colour1: "brown"},
            ],
            "feet": [
                {variable: "trainers", colour2: "white"},
                {variable: "wellies", colour1: "black"},
                {variable: "work", colour1: "black"},
                {variable: "work", colour1: "brown"},
                {variable: "long", colour1: "black"},
                {variable: "long", colour1: "brown"},
                {variable: "lightuptrainers", colour2: "white"},
                {variable: "hightops", colour2: "white"},
            ]
        },
        "townSweaterVest": {
            "contributor": "Numberjack",
            "upper": [
                {variable: "argyle", colour1: "white", colour2: "brown"},
                {variable: "argyle", colour1: "white", colour2: "white"},
                {variable: "argyle", colour1: "brown", colour2: "brown"}
            ],
            "lower": [{variable: "khakis"}],
            "under_upper": [
                {variable: "undershirt", colour1: "brown", colour2: "brown"},
                {variable: "undershirt", colour1: "black", colour2: "black"}
            ],
            "under_lower": [
                {variable: "briefs", colour1: "pale white"},
                {variable: "plainpanties", colour1: "pale white"}
            ],
            "legs": [{variable: "anklesocks", colour1: "pale white"}],
            "feet": [{variable: "hightops", colour1: "brown"}]
        },
        "townVNeck": {
            "upper": [
                {variable: "vneck", colour1: "black"},
                {variable: "vneck", colour1: "blue"},
                {variable: "vneck", colour1: "brown"},
                {variable: "vneck", colour1: "green"},
                {variable: "vneck", colour1: "red"},
                {variable: "vneck", colour1: "tangerine"},
                {variable: "vneck", colour1: "teal"},
                {variable: "vneck", colour1: "white"},
            ],
            "lower": [{variable: "jeans"}],
            "feet": [
                {variable: "trainers", colour2: "white"},
                {variable: "wellies", colour1: "black"},
                {variable: "work", colour1: "black"},
                {variable: "work", colour1: "brown"},
                {variable: "long", colour1: "black"},
                {variable: "long", colour1: "brown"},
                {variable: "lightuptrainers", colour2: "white"},
                {variable: "hightops", colour2: "white"},
            ]
        },
        "maleWarm1": [
            {
                "contributor": "Numberjack",
                upper_tucked: true,
                "upper": [
                    {variable: "tshirt", colour1: "white"},
                    {variable: "camo", colour1: "white"},
                    {variable: "scout", colour1: "white", colour2: "yellow"},
                    {variable: "soccer", colour1: "black", colour2: "black"},
                    {variable: "baseball", colour1: "blue", colour2: "black"},
                    {variable: "retro", colour1: "pale white", colour2: "pale yellow"},
                    {variable: "polo", colour1: "white", colour2: "teal"},
                    {variable: "colour block crop", colour1: "teal", colour2: "yellow"},
                    {variable: "band tee", colour1: "white", colour2: "black"},
                    {variable: "boxy", colour1: "yellow", colour2: "teal"}
                ],
                "lower": [
                    {variable: "shorts", colour1: "teal"},
                    {variable: "baggy", colour1: "neon blue", colour2: "black"},
                    {variable: "baseball", colour1: "blue", colour2: "black"},
                    {variable: "cargo shorts", colour1: "olive", colour2: "black"},
                    {variable: "cycleshorts"},
                    {variable: "dolphinshorts", colour1: "green", colour2: "white"},
                    {variable: "football", colour1: "black"},
                    {variable: "jorts", colour1: "denim"},
                    {variable: "jorts", colour1: "light blue"},
                    {variable: "jorts", colour1: "blue steel"},
                    {variable: "jorts", colour1: "grey"},
                    {variable: "retroshorts", colour1: "teal", colour2: "yellow"},
                    {variable: "scout", colour1: "yellow", colour2: "black"}
                ],
                "under_lower": [{variable: "briefs", colour1: "pale white"}],
                "head": [{variable: "baseball", colour1: "blue", colour2: "black"}],
                "feet": [
                    {variable: "trainers", colour1: "white", colour2: "black"},
                    {variable: "hightops", colour1: "black"},
                    {variable: "basketball", colour1: "white", colour2: "black"},
                    {variable: "basketball", colour1: "yellow", colour2: "teal"}
                ]
            },
            {
                "contributor": "Numberjack",
                "upper": [
                    {variable: "graphictee", colour1: "white", pattern: "butterfly"},
                    {variable: "graphiccrop", colour1: "white", pattern: "balloon"},
                    {variable: "graphicoversized", colour1: "white", pattern: "banana"},
                    {variable: "graphictee", colour1: "black", pattern: "alien"},
                    {variable: "graphiccrop", colour1: "black", pattern: "angel-heart"},
                    {variable: "graphicoversized", colour1: "black", pattern: "bone"},
                    {variable: "graphictee", colour1: "red", pattern: "bomb"},
                    {variable: "graphiccrop", colour1: "red", pattern: "dino"},
                    {variable: "graphicoversized", colour1: "red", pattern: "crown"}
                ],
                "lower": [
                    {variable: "belted", colour1: "silver"},
                    {variable: "leathershorts", colour1: "black", colour2: "silver"}
                ],
                "under_lower": [{variable: "briefs", colour1: "pale white"}],
                "feet": [
                    {variable: "trainers", colour1: "white", colour2: "black"},
                    {variable: "hightops", colour1: "black"},
                    {variable: "basketball", colour1: "white", colour2: "black"}
                ]
            }
        ],
        "femaleWarm1": [
            {
                "contributor": "Numberjack",
                "upper": [
                    {variable: "sundress", colour1: "white"},
                ],
                "lower": [
                    {variable: "sundress", colour1: "white"},
                ],
                "under_upper": [{variable: "straplessbra", colour1: "pale white"}],
                "under_lower": [{variable: "stripedpanties", colour1: "white", colour2: "teal"}],
                "head": [
                    {variable: "straw", colour1: "brown"},
                    {variable: "straw", colour1: "pink"},
                    {variable: "straw", colour1: "lilac"},
                    {variable: "straw", colour1: "white"},
                    {variable: "strawflower", colour1: "brown"},
                    {variable: "strawflower", colour1: "pink"},
                    {variable: "strawflower", colour1: "lilac"},
                    {variable: "strawflower", colour1: "white"},
                ],
                "feet": [{variable: "sandals", colour1: "brown"}]
            },
            {
                "contributor": "Numberjack",
                "upper": [
                    {variable: "classicsundress", colour1: "white"},
                ],
                "lower": [
                    {variable: "classicsundress", colour1: "white"},
                ],
                "under_upper": [{variable: "straplessbra", colour1: "pale white"}],
                "under_lower": [{variable: "stripedpanties", colour1: "white", colour2: "teal"}],
                "head": [
                    {variable: "straw", colour1: "brown"},
                    {variable: "straw", colour1: "pink"},
                    {variable: "straw", colour1: "lilac"},
                    {variable: "straw", colour1: "white"},
                    {variable: "strawflower", colour1: "brown"},
                    {variable: "strawflower", colour1: "pink"},
                    {variable: "strawflower", colour1: "lilac"},
                    {variable: "strawflower", colour1: "white"},
                ],
                "feet": [{variable: "sandals", colour1: "brown"}]
            },
            {
                "contributor": "Numberjack",
                "upper": [
                    {variable: "haltersundress", colour1: "white"}
                ],
                "lower": [{variable: "haltersundress", colour1: "white"}],
                "under_upper": [{variable: "straplessbra", colour1: "pale white"}],
                "under_lower": [{variable: "stripedpanties", colour1: "white", colour2: "teal"}],
                "head": [
                    {variable: "straw", colour1: "brown"},
                    {variable: "straw", colour1: "pink"},
                    {variable: "straw", colour1: "lilac"},
                    {variable: "straw", colour1: "white"},
                    {variable: "strawflower", colour1: "brown"},
                    {variable: "strawflower", colour1: "pink"},
                    {variable: "strawflower", colour1: "lilac"},
                    {variable: "strawflower", colour1: "white"},
                ],
                "feet": [{variable: "sandals", colour1: "brown"}]
            }
        ],
        "maleWarm2": {
            "contributor": "Numberjack",
            "upper": [
                {variable: "tanktop", colour1: "white"},
                {variable: "droparm", colour1: "white"}
            ],
            "lower": [
                {variable: "shorts", colour1: "teal"},
                {variable: "baggy", colour1: "neon blue", colour2: "black"},
                {variable: "baseball", colour1: "blue", colour2: "black"},
                {variable: "cargo shorts", colour1: "olive", colour2: "black"},
                {variable: "cycleshorts"},
                {variable: "dolphinshorts", colour1: "green", colour2: "white"},
                {variable: "football", colour1: "black"},
                {variable: "jorts", colour1: "denim"},
                {variable: "jorts", colour1: "light blue"},
                {variable: "jorts", colour1: "blue steel"},
                {variable: "jorts", colour1: "grey"},
                {variable: "retroshorts", colour1: "teal", colour2: "yellow"},
                {variable: "scout", colour1: "yellow", colour2: "black"}
            ],
            "under_lower": [{variable: "briefs", colour1: "pale white"}],
            "feet": [
                {variable: "hightops", colour1: "black"},
                {variable: "basketball", colour1: "white", colour2: "black"},
                {variable: "basketball", colour1: "yellow", colour2: "teal"}
            ]
        },
        "femaleWarm2": [
            {
                "contributor": "Numberjack",
                upper_tucked: true,
                "upper": [
                    {variable: "blouse", colour1: "white"},
                    {variable: "ruffled blouse", colour1: "white", colour2: "white"},
                    {variable: "ruffled blouse", colour1: "white", colour2: "pink"},
                    {variable: "ruffled blouse", colour1: "lilac", colour2: "white"},
                    {variable: "ruffled blouse", colour1: "wine", colour2: "yellow"}
                ],
                "lower": [
                    {variable: "highwaistedskirt", colour1: "pink"},
                    {variable: "highwaistedskirt", colour1: "white"},
                    {variable: "highwaistedskirt", colour1: "brown"},
                    {variable: "longskirt", colour1: "pink"},
                    {variable: "ruffled long dress", colour1: "pink", colour2: "white"},
                    {variable: "ruffled long dress", colour1: "lilac", colour2: "white"},
                    {variable: "ruffled long dress", colour1: "white", colour2: "white"},
                    {variable: "ruffled long dress", colour1: "white", colour2: "pink"},
                    {variable: "ruffled long dress", colour1: "white", colour2: "lilac"}
                ],
                "under_upper": [{variable: "straplessbra", colour1: "palewhite"}],
                "under_lower": [{variable: "plainpanties", colour1: "palewhite"}],
                "head": [
                    {variable: "straw", colour1: "brown"},
                    {variable: "straw", colour1: "pink"},
                    {variable: "straw", colour1: "lilac"},
                    {variable: "straw", colour1: "white"},
                    {variable: "strawflower", colour1: "brown"},
                    {variable: "strawflower", colour1: "pink"},
                    {variable: "strawflower", colour1: "lilac"},
                    {variable: "strawflower", colour1: "white"},
                    {variable: "cap", colour1: "pink", colour2: "white"}
                ],
                "face": [
                    {variable: "heartsunglasses", colour1: "pink", colour2: "light pink"},
                    {variable: "heartsunglasses", colour1: "purple", colour2: "lilac"},
                    {variable: "heartsunglasses", colour1: "purple", colour2: "light pink"},
                    {variable: "heartsunglasses", colour1: "brown", colour2: "gold"}
                ],
                "feet": [{variable: "sandals", colour1: "brown"}]
            },
            {
                "contributor": "Numberjack",
                upper_tucked: true,
                "upper": [
                    {variable: "blouse", colour1: "white"},
                    {variable: "ruffled blouse", colour1: "white", colour2: "white"},
                ],
                "lower": [
                    {variable: "longskirt", colour1: "white"},
                    {variable: "longskirt", colour1: "brown"},
                    {variable: "ruffled long dress", colour1: "wine", colour2: "wine"},
                ],
                "under_upper": [{variable: "straplessbra", colour1: "palewhite"}],
                "under_lower": [{variable: "plainpanties", colour1: "palewhite"}],
                "head": [
                    {variable: "straw", colour1: "brown"},
                    {variable: "straw", colour1: "pink"},
                    {variable: "straw", colour1: "white"},
                    {variable: "strawflower", colour1: "brown"},
                    {variable: "strawflower", colour1: "pink"},
                    {variable: "strawflower", colour1: "white"}
                ],
                "face": [
                    {variable: "heartsunglasses", colour1: "pink", colour2: "light pink"},
                    {variable: "heartsunglasses", colour1: "purple", colour2: "lilac"},
                    {variable: "heartsunglasses", colour1: "purple", colour2: "light pink"},
                    {variable: "heartsunglasses", colour1: "brown", colour2: "gold"}
                ],
                "feet": [{variable: "sandals", colour1: "brown"}]
            },
            {
                "contributor": "Numberjack",
                upper_tucked: true,
                "upper": [
                    {variable: "ruffled blouse", colour1: "wine", colour2: "wine"},
                    {variable: "ruffled blouse", colour1: "wine", colour2: "white"},
                    {variable: "ruffled blouse", colour1: "white", colour2: "lilac"},
                    {variable: "ruffled blouse", colour1: "white", colour2: "light pink"},
                    {variable: "ruffled blouse", colour1: "white", colour2: "lilac"},
                    {variable: "ruffled blouse", colour1: "light pink", colour2: "white"},
                    {variable: "ruffled blouse", colour1: "pink", colour2: "pink"},
                    {variable: "blouse", colour1: "pink"}
                ],
                "lower": [
                    {variable: "highwaistedskirt", colour1: "white"},
                    {variable: "highwaistedskirt", colour1: "light pink"},
                    {variable: "highwaistedskirt", colour1: "lilac"},
                    {variable: "ruffled long dress", colour1: "light pink", colour2: "white"}
                ],
                "under_upper": [{variable: "straplessbra", colour1: "palewhite"}],
                "under_lower": [{variable: "plainpanties", colour1: "palewhite"}],
                "head": [
                    {variable: "straw", colour1: "brown"},
                    {variable: "straw", colour1: "lilac"},
                    {variable: "straw", colour1: "white"},
                    {variable: "strawflower", colour1: "brown"},
                    {variable: "strawflower", colour1: "lilac"},
                    {variable: "strawflower", colour1: "white"},
                    {variable: "cap", colour1: "white", colour2: "brown"},
                    {variable: "cap", colour1: "white", colour2: "pink"}
                ],
                "face": [
                    {variable: "heartsunglasses", colour1: "pink", colour2: "light pink"},
                    {variable: "heartsunglasses", colour1: "purple", colour2: "lilac"},
                    {variable: "heartsunglasses", colour1: "purple", colour2: "light pink"},
                    {variable: "heartsunglasses", colour1: "brown", colour2: "gold"}
                ],
                "feet": [{variable: "sandals", colour1: "brown"}]
            },
            {
                "contributor": "Numberjack",
                upper_tucked: true,
                "upper": [
                    {variable: "ruffled blouse", colour1: "white", colour2: "wine"},
                    {variable: "ruffled blouse", colour1: "white", colour2: "brown"},
                ],
                "lower": [{variable: "highwaistedskirt", colour1: "brown"}],
                "under_upper": [{variable: "straplessbra", colour1: "palewhite"}],
                "under_lower": [{variable: "plainpanties", colour1: "palewhite"}],
                "head": [
                    {variable: "straw", colour1: "brown"},
                    {variable: "straw", colour1: "white"},
                    {variable: "strawflower", colour1: "brown"},
                    {variable: "strawflower", colour1: "white"},
                    {variable: "cap", colour1: "brown", colour2: "white"}
                ],
                "face": [
                    {variable: "heartsunglasses", colour1: "pink", colour2: "light pink"},
                    {variable: "heartsunglasses", colour1: "purple", colour2: "lilac"},
                    {variable: "heartsunglasses", colour1: "purple", colour2: "light pink"},
                    {variable: "heartsunglasses", colour1: "brown", colour2: "gold"}
                ],
                "feet": [{variable: "sandals", colour1: "brown"}]
            }
        ],
        "maleWarmShirtless": {
            "contributor": "Numberjack",
            "upper": [{variable: "naked"}],
            "lower": [
                {variable: "shorts", colour1: "teal"},
                {variable: "baggy", colour1: "neon blue", colour2: "black"},
                {variable: "baseball", colour1: "blue", colour2: "black"},
                {variable: "cargo shorts", colour1: "olive", colour2: "black"},
                {variable: "cycleshorts"},
                {variable: "dolphinshorts", colour1: "green", colour2: "white"},
                {variable: "football", colour1: "black"},
                {variable: "jorts", colour1: "denim"},
                {variable: "jorts", colour1: "light blue"},
                {variable: "jorts", colour1: "blue steel"},
                {variable: "jorts", colour1: "grey"},
                {variable: "retroshorts", colour1: "teal", colour2: "yellow"},
                {variable: "scout", colour1: "yellow", colour2: "black"},
                {variable: "belted", colour1: "silver"},
                {variable: "leathershorts", colour1: "black", colour2: "silver"}
            ],
            "under_lower": [{variable: "briefs", colour1: "pale white"}],
            "feet": [
                {variable: "trainers", colour1: "white", colour2: "black"},
                {variable: "hightops", colour1: "black"},
                {variable: "basketball", colour1: "white", colour2: "black"}
            ]
        },
        "femaleWarmCrop": {
            "contributor": "Numberjack",
            "upper": [
                {variable: "croptop", colour1: "white"},
                {variable: "leathercroptop", colour1: "pink"},
                {variable: "leathercroptopzip", colour1: "black", colour2: "silver"},
                {variable: "openshoulderscrop", colour1: "pink"},
                {variable: "colour block crop", colour1: "white", colour2: "black"}
            ],
            "lower": [
                {variable: "miniskirt", colour1: "white"},
                {variable: "leatherminiskirt", colour1: "black", colour2: "silver"},
                {variable: "jean miniskirt", colour1: "light blue"},
                {variable: "leatherminiskirt", colour1: "pink", colour2: "silver"},
                {variable: "pencil", colour1: "pink"},
            ],
            "under_upper": [{variable: "straplessbra", colour1: "palewhite"}],
            "under_lower": [{variable: "plainpanties", colour1: "palewhite"}],
            "head": [
                {variable: "cap", colour1: "pink", colour2: "white"},
                {variable: "cap", colour1: "white", colour2: "pink"}
            ],
            "face": [
                {variable: "heartsunglasses", colour1: "pink", colour2: "light pink"},
                {variable: "heartsunglasses", colour1: "brown", colour2: "gold"}
            ],
            "feet": [{variable: "sandals", colour1: "brown"}]
        },
        "femaleWarmTank": [
            {
                "contributor": "Numberjack",
                "upper": [
                    {variable: "tanktop", colour1: "white"},
                ],
                "under_upper": [{variable: "straplessbra", colour1: "palewhite"}],
                "under_lower": [
                    {variable: "boyshorts", colour1: "black"},
                ],
                "head": [
                    {variable: "cap", colour1: "black", colour2: "white"},
                ],
                "face": [
                    {variable: "heartsunglasses", colour1: "black", colour2: "black"},
                ],
                "feet": [
                    {variable: "sandals", colour1: "black"},
                    {variable: "sandals", colour1: "brown"},
                    {variable: "sandals", colour1: "white"}
                ]
            },
            {
                "contributor": "Numberjack",
                "upper": [
                    {variable: "tanktop", colour1: "pink"},
                ],
                "under_upper": [{variable: "straplessbra", colour1: "palewhite"}],
                "under_lower": [
                    {variable: "boyshorts", colour1: "pale white"},
                ],
                "head": [
                    {variable: "cap", colour1: "white", colour2: "pink"},
                ],
                "face": [
                    {variable: "heartsunglasses", colour1: "pink", colour2: "light pink"},
                ],
                "feet": [
                    {variable: "sandals", colour1: "black"},
                    {variable: "sandals", colour1: "brown"},
                    {variable: "sandals", colour1: "white"}
                ]
            },
            {
                "contributor": "Numberjack",
                "upper": [
                    {variable: "tanktop", colour1: "yellow"},
                ],
                "under_upper": [{variable: "straplessbra", colour1: "palewhite"}],
                "under_lower": [
                    {variable: "boyshorts", colour1: "brown"},
                    {variable: "boyshorts", colour1: "pale yellow"},
                ],
                "head": [
                    {variable: "cap", colour1: "brown", colour2: "yellow"},
                ],
                "face": [
                    {variable: "heartsunglasses", colour1: "brown", colour2: "gold"},
                ],
                "feet": [
                    {variable: "sandals", colour1: "black"},
                    {variable: "sandals", colour1: "brown"},
                    {variable: "sandals", colour1: "white"}
                ]
            },
            {
                "contributor": "Numberjack",
                "upper": [
                    {variable: "tanktop", colour1: "green"},
                ],
                "under_upper": [{variable: "straplessbra", colour1: "palewhite"}],
                "under_lower": [
                    {variable: "boyshorts", colour1: "blue"},
                ],
                "head": [
                    {variable: "cap", colour1: "white", colour2: "green"},
                ],
                "face": [
                    {variable: "heartsunglasses", colour1: "green", colour2: "yellow"},
                ],
                "feet": [
                    {variable: "sandals", colour1: "black"},
                    {variable: "sandals", colour1: "brown"},
                    {variable: "sandals", colour1: "white"}
                ]
            },
            {
                "contributor": "Numberjack",
                "upper": [
                    {variable: "tanktop", colour1: "purple"}
                ],
                "under_upper": [{variable: "straplessbra", colour1: "palewhite"}],
                "under_lower": [
                    {variable: "boyshorts", colour1: "teal"}
                ],
                "head": [
                    {variable: "cap", colour1: "white", colour2: "purple"}
                ],
                "face": [
                    {variable: "heartsunglasses", colour1: "purple", colour2: "lilac"}
                ],
                "feet": [
                    {variable: "sandals", colour1: "black"},
                    {variable: "sandals", colour1: "brown"},
                    {variable: "sandals", colour1: "white"}
                ]
            }
        ],
        "neutralWarmBlazer": [
            {
                "contributor": "Numberjack",
                upper_tucked: true,
                "upper": [{variable: "blazershirt", colour1: "light blue", colour2: "light pink"}],
                "lower": [
                    {variable: "retroshorts", colour1: "white", colour2: "black"},
                    {variable: "retroshorts", colour1: "white", colour2: "white"},
                    {variable: "retroshorts", colour1: "teal", colour2: "teal"}
                ],
                "under_upper": [{variable: "stripedbra", colour1: "black", colour2: "white"}],
                "under_lower": [
                    {variable: "briefs", colour1: "pale white"},
                    {variable: "stripedpanties", colour1: "black", colour2: "white"}
                ],
                "head": [
                    {variable: "cat", colour1: "white", colour2: "white"},
                    {variable: "cattail", colour1: "white", colour2: "white"}
                ],
                "face": [
                    {variable: "cateye", colour1: "black", colour2: "black"},
                    {variable: "cateye", colour1: "teal", colour2: "teal"},
                    {variable: "coolshades", colour1: "black"},
                    {variable: "coolshades", colour1: "teal"}
                ],
                "feet": [
                    {variable: "trainers", colour1: "white", colour2: "black"},
                    {variable: "hightops", colour1: "black"},
                    {variable: "basketball", colour1: "white", colour2: "black"},
                    {variable: "basketball", colour1: "teal", colour2: "neon blue"}
                ]
            },
            {
                "contributor": "Numberjack",
                "upper": [{variable: "blazershirt", colour1: "white", colour2: "black"}],
                "lower": [
                    {variable: "shorts", colour1: "teal"},
                    {variable: "baggy", colour1: "neon blue", colour2: "black"},
                    {variable: "baseball", colour1: "blue", colour2: "black"},
                    {variable: "cargo shorts", colour1: "olive", colour2: "black"},
                    {variable: "cycleshorts"},
                    {variable: "dolphinshorts", colour1: "green", colour2: "white"},
                    {variable: "football", colour1: "black"},
                    {variable: "jorts", colour1: "denim"},
                    {variable: "jorts", colour1: "blue steel"},
                    {variable: "retroshorts", colour1: "teal", colour2: "yellow"},
                    {variable: "scout", colour1: "yellow", colour2: "black"}
                ],
                "under_upper": [{variable: "stripedbra", colour1: "black", colour2: "white"}],
                "under_lower": [
                    {variable: "briefs", colour1: "pale white"},
                    {variable: "stripedpanties", colour1: "black", colour2: "white"}
                ],
                "head": [
                    {variable: "cat", colour1: "white", colour2: "white"},
                    {variable: "cattail", colour1: "white", colour2: "white"}
                ],
                "face": [
                    {variable: "cateye", colour1: "black", colour2: "black"},
                    {variable: "coolshades", colour1: "black"}
                ],
                "feet": [
                    {variable: "trainers", colour1: "white", colour2: "black"},
                    {variable: "hightops", colour1: "black"},
                    {variable: "basketball", colour1: "white", colour2: "black"}
                ]
            }
        ],
        "neutralWarmJersey": [
            {
                "contributor": "Numberjack",
                "upper": [{variable: "soccer", colour1: "black", colour2: "black"}],
                "lower": [
                    {variable: "jorts", colour1: "denim"},
                    {variable: "jorts", colour1: "light blue"},
                    {variable: "jorts", colour1: "blue steel"},
                    {variable: "jorts", colour1: "grey"}
                ],
                "under_upper": [{variable: "plainbra", colour1: "pale white"}],
                "under_lower": [
                    {variable: "briefs", colour1: "pale white"},
                    {variable: "plainpanties", colour1: "pale white"}
                ],
                "head": [{variable: "backwardscap", colour1: "white"}],
                "feet": [
                    {variable: "trainers", colour1: "white", colour2: "black"},
                    {variable: "hightops", colour1: "black"},
                    {variable: "basketball", colour1: "white", colour2: "black"}
                ]
            },
            {
                "contributor": "Numberjack",
                "upper": [{variable: "soccer", colour1: "black", colour2: "black"}],
                "lower": [
                    {variable: "bootyjorts", colour1: "denim"},
                    {variable: "bootyjorts", colour1: "light blue"},
                    {variable: "bootyjorts", colour1: "blue steel"},
                    {variable: "bootyjorts", colour1: "grey"},
                    {variable: "bootyjorts2", colour1: "denim"},
                    {variable: "bootyjorts2", colour1: "light blue"},
                    {variable: "bootyjorts2", colour1: "blue steel"},
                    {variable: "bootyjorts2", colour1: "grey"}
                ],
                "under_upper": [{variable: "plainbra", colour1: "pale white"}],
                "under_lower": [
                    {variable: "briefs", colour1: "pale white"},
                    {variable: "plainpanties", colour1: "pale white"}
                ],
                "head": [{variable: "backwardscap", colour1: "white"}],
                "feet": [
                    {variable: "trainers", colour1: "white", colour2: "black"},
                    {variable: "hightops", colour1: "black"},
                    {variable: "basketball", colour1: "white", colour2: "black"}
                ]
            },
            {
                "contributor": "Numberjack",
                "upper": [{variable: "football", colour1: "green", colour2: "white"}],
                "lower": [
                    {variable: "jorts", colour1: "light blue"},
                    {variable: "jorts", colour1: "black"},
                    {variable: "jorts", colour1: "grey"},
                    {variable: "bootyjorts", colour1: "light blue"},
                    {variable: "bootyjorts", colour1: "black"},
                    {variable: "bootyjorts", colour1: "grey"},
                    {variable: "bootyjorts2", colour1: "light blue"},
                    {variable: "bootyjorts2", colour1: "black"},
                    {variable: "bootyjorts2", colour1: "grey"}
                ],
                "under_upper": [{variable: "plainbra", colour1: "pale white"}],
                "under_lower": [
                    {variable: "briefs", colour1: "pale white"},
                    {variable: "plainpanties", colour1: "pale white"}
                ],
                "head": [{variable: "backwardscap", colour1: "green"}],
                "feet": [
                    {variable: "trainers", colour1: "white", colour2: "black"},
                    {variable: "hightops", colour1: "black"},
                    {variable: "basketball", colour1: "white", colour2: "black"}
                ]
            }
        ],
        "coldPuffer": [
            {
                "head": [
                    {variable: "beanie", colour1: "black"},
                    {variable: "beanie", colour1: "brown"},
                    {variable: "beanie", colour1: "white"},
                    {variable: "beanie", colour1: "yellow"},
                ],
                "neck": [
                    {variable: "scarf"},
                    {variable: "naked"}
                ],
                "upper": [{variable: "puffer"}],
                "lower": [
                    {variable: "slacks", colour1: "black"},
                    {variable: "slacks", colour1: "blue"},
                    {variable: "slacks", colour1: "brown"},
                    {variable: "slacks", colour1: "white"},
                ],
                "feet": [
                    {variable: "fur_boots", colour1: "grey", colour2: "tan"},
                    {variable: "fur_boots", colour1: "brown", colour2: "tan"}
                ]
            },
            {
                "head": [
                    {variable: "furcap f", colour1: "black", colour2: "white"},
                    {variable: "furcap f", colour1: "brown", colour2: "white"},
                    {variable: "furcap f", colour1: "white", colour2: "white"},
                ],
                "neck": [
                    {variable: "scarf"},
                    {variable: "naked"}
                ],
                "upper": [{variable: "puffer"}],
                "lower": [
                    {variable: "slacks", colour1: "black"},
                    {variable: "slacks", colour1: "blue"},
                    {variable: "slacks", colour1: "brown"},
                    {variable: "slacks", colour1: "white"},
                ],
                "feet": [
                    {variable: "fur_boots", colour1: "grey", colour2: "tan"},
                    {variable: "fur_boots", colour1: "brown", colour2: "tan"}
                ]
            },
            {
                "head": [
                    {variable: "naked"},
                ],
                "neck": [
                    {variable: "scarf"},
                    {variable: "naked"}
                ],
                "upper": [{variable: "puffer"}],
                "lower": [
                    {variable: "slacks", colour1: "black"},
                    {variable: "slacks", colour1: "blue"},
                    {variable: "slacks", colour1: "brown"},
                    {variable: "slacks", colour1: "white"},
                ],
                "feet": [
                    {variable: "fur_boots", colour1: "grey", colour2: "tan"},
                    {variable: "fur_boots", colour1: "brown", colour2: "tan"}
                ]
            },
        ],
        "coldTrench": [
            {
                "head": [
                    {variable: "beanie", colour1: "black"},
                    {variable: "beanie", colour1: "brown"},
                    {variable: "beanie", colour1: "white"},
                    {variable: "beanie", colour1: "yellow"},
                ],
                "neck": [
                    {variable: "scarf"},
                    {variable: "naked"}
                ],
                "upper": [{variable: "peacoat"}],
                "lower": [{variable: "jeans"}],
                "feet": [
                    {variable: "fur_boots", colour1: "grey", colour2: "tan"},
                    {variable: "fur_boots", colour1: "brown", colour2: "tan"}
                ]
            },
            {
                "head": [
                    {variable: "furcap f", colour1: "black", colour2: "white"},
                    {variable: "furcap f", colour1: "brown", colour2: "white"},
                    {variable: "furcap f", colour1: "white", colour2: "white"},
                ],
                "neck": [
                    {variable: "scarf"},
                    {variable: "naked"}
                ],
                "upper": [{variable: "peacoat"}],
                "lower": [{variable: "jeans"}],
                "feet": [
                    {variable: "fur_boots", colour1: "grey", colour2: "tan"},
                    {variable: "fur_boots", colour1: "brown", colour2: "tan"}
                ]
            },
            {
                "head": [
                    {variable: "naked"},
                ],
                "neck": [
                    {variable: "scarf"},
                    {variable: "naked"}
                ],
                "upper": [{variable: "peacoat"}],
                "lower": [{variable: "jeans"}],
                "feet": [
                    {variable: "fur_boots", colour1: "grey", colour2: "tan"},
                    {variable: "fur_boots", colour1: "brown", colour2: "tan"}
                ]
            },
        ],
        "coldCoat": [
            {
                "head": [
                    {variable: "beanie", colour1: "black"},
                    {variable: "beanie", colour1: "brown"},
                    {variable: "beanie", colour1: "white"},
                    {variable: "beanie", colour1: "yellow"},
                ],
                "neck": [
                    {variable: "scarf"},
                    {variable: "naked"}
                ],
                "upper": [{variable: "peacoat"}],
                "lower": [{variable: "jeans"}],
                "feet": [
                    {variable: "fur_boots", colour1: "grey", colour2: "tan"},
                    {variable: "fur_boots", colour1: "brown", colour2: "tan"}
                ]
            },
            {
                "head": [
                    {variable: "furcap f", colour1: "black", colour2: "white"},
                    {variable: "furcap f", colour1: "brown", colour2: "white"},
                    {variable: "furcap f", colour1: "white", colour2: "white"},
                ],
                "neck": [
                    {variable: "scarf"},
                    {variable: "naked"}
                ],
                "upper": [{variable: "peacoat"}],
                "lower": [{variable: "jeans"}],
                "feet": [
                    {variable: "fur_boots", colour1: "grey", colour2: "tan"},
                    {variable: "fur_boots", colour1: "brown", colour2: "tan"}
                ]
            },
            {
                "head": [
                    {variable: "naked"},
                ],
                "neck": [
                    {variable: "scarf"},
                    {variable: "naked"}
                ],
                "upper": [{variable: "peacoat"}],
                "lower": [{variable: "jeans"}],
                "feet": [
                    {variable: "fur_boots", colour1: "grey", colour2: "tan"},
                    {variable: "fur_boots", colour1: "brown", colour2: "tan"}
                ]
            },
        ],
        "coldHoodie": [
            // Cat hoodie
            {
                "head": [
                    {variable: "cat hoodie", colour1: "black"},
                    {variable: "naked"}
                ],
                "upper": [{variable: "cat hoodie", colour1: "black"}],
                "lower": [
                    {variable: "sweatpants", colour1: "black"},
                    {variable: "sweatpants", colour1: "blue steel"},
                    {variable: "sweatpants", colour1: "grey"},
                    {variable: "sweatpants", colour1: "white"},
                ],
                "feet": [
                    {variable: "fur_boots", colour1: "grey", colour2: "tan"},
                    {variable: "fur_boots", colour1: "brown", colour2: "tan"}
                ]
            },
            {
                "head": [
                    {variable: "cat hoodie", colour1: "grey"},
                    {variable: "naked"}
                ],
                "upper": [{variable: "cat hoodie", colour1: "grey"}],
                "lower": [
                    {variable: "sweatpants", colour1: "black"},
                    {variable: "sweatpants", colour1: "blue steel"},
                    {variable: "sweatpants", colour1: "grey"},
                    {variable: "sweatpants", colour1: "white"},
                ],
                "feet": [
                    {variable: "fur_boots", colour1: "grey", colour2: "tan"},
                    {variable: "fur_boots", colour1: "brown", colour2: "tan"}
                ]
            },
            {
                "head": [
                    {variable: "cat hoodie", colour1: "white"},
                    {variable: "naked"}
                ],
                "upper": [{variable: "cat hoodie", colour1: "white"}],
                "lower": [
                    {variable: "sweatpants", colour1: "black"},
                    {variable: "sweatpants", colour1: "blue steel"},
                    {variable: "sweatpants", colour1: "grey"},
                    {variable: "sweatpants", colour1: "white"},
                ],
                "feet": [
                    {variable: "fur_boots", colour1: "grey", colour2: "tan"},
                    {variable: "fur_boots", colour1: "brown", colour2: "tan"}
                ]
            },
            {
                "head": [
                    {variable: "cat hoodie", colour1: "red"},
                    {variable: "naked"}
                ],
                "upper": [{variable: "cat hoodie", colour1: "red"}],
                "lower": [
                    {variable: "sweatpants", colour1: "black"},
                    {variable: "sweatpants", colour1: "blue steel"},
                    {variable: "sweatpants", colour1: "grey"},
                    {variable: "sweatpants", colour1: "white"},
                ],
                "feet": [
                    {variable: "fur_boots", colour1: "grey", colour2: "tan"},
                    {variable: "fur_boots", colour1: "brown", colour2: "tan"}
                ]
            },
            {
                "head": [
                    {variable: "cat hoodie", colour1: "blue steel"},
                    {variable: "naked"}
                ],
                "upper": [{variable: "cat hoodie", colour1: "blue steel"}],
                "lower": [
                    {variable: "sweatpants", colour1: "black"},
                    {variable: "sweatpants", colour1: "blue steel"},
                    {variable: "sweatpants", colour1: "grey"},
                    {variable: "sweatpants", colour1: "white"},
                ],
                "feet": [
                    {variable: "fur_boots", colour1: "grey", colour2: "tan"},
                    {variable: "fur_boots", colour1: "brown", colour2: "tan"}
                ]
            },

            // Hoodie
            {
                "head": [
                    {variable: "hoodie", colour1: "black"},
                    {variable: "naked"}
                ],
                "upper": [{variable: "hoodie", colour1: "black"}],
                "lower": [
                    {variable: "sweatpants", colour1: "black"},
                    {variable: "sweatpants", colour1: "blue steel"},
                    {variable: "sweatpants", colour1: "grey"},
                    {variable: "sweatpants", colour1: "white"},
                ],
                "feet": [
                    {variable: "fur_boots", colour1: "grey", colour2: "tan"},
                    {variable: "fur_boots", colour1: "brown", colour2: "tan"}
                ]
            },
            {
                "head": [
                    {variable: "hoodie", colour1: "grey"},
                    {variable: "naked"}
                ],
                "upper": [{variable: "hoodie", colour1: "grey"}],
                "lower": [
                    {variable: "sweatpants", colour1: "black"},
                    {variable: "sweatpants", colour1: "blue steel"},
                    {variable: "sweatpants", colour1: "grey"},
                    {variable: "sweatpants", colour1: "white"},
                ],
                "feet": [
                    {variable: "fur_boots", colour1: "grey", colour2: "tan"},
                    {variable: "fur_boots", colour1: "brown", colour2: "tan"}
                ]
            },
            {
                "head": [
                    {variable: "hoodie", colour1: "white"},
                    {variable: "naked"}
                ],
                "upper": [{variable: "hoodie", colour1: "white"}],
                "lower": [
                    {variable: "sweatpants", colour1: "black"},
                    {variable: "sweatpants", colour1: "blue steel"},
                    {variable: "sweatpants", colour1: "grey"},
                    {variable: "sweatpants", colour1: "white"},
                ],
                "feet": [
                    {variable: "fur_boots", colour1: "grey", colour2: "tan"},
                    {variable: "fur_boots", colour1: "brown", colour2: "tan"}
                ]
            },
            {
                "head": [
                    {variable: "hoodie", colour1: "red"},
                    {variable: "naked"}
                ],
                "upper": [{variable: "hoodie", colour1: "red"}],
                "lower": [
                    {variable: "sweatpants", colour1: "black"},
                    {variable: "sweatpants", colour1: "blue steel"},
                    {variable: "sweatpants", colour1: "grey"},
                    {variable: "sweatpants", colour1: "white"},
                ],
                "feet": [
                    {variable: "fur_boots", colour1: "grey", colour2: "tan"},
                    {variable: "fur_boots", colour1: "brown", colour2: "tan"}
                ]
            },
            {
                "head": [
                    {variable: "hoodie", colour1: "blue steel"},
                    {variable: "naked"}
                ],
                "upper": [{variable: "hoodie", colour1: "blue steel"}],
                "lower": [
                    {variable: "sweatpants", colour1: "black"},
                    {variable: "sweatpants", colour1: "blue steel"},
                    {variable: "sweatpants", colour1: "grey"},
                    {variable: "sweatpants", colour1: "white"},
                ],
                "feet": [
                    {variable: "fur_boots", colour1: "grey", colour2: "tan"},
                    {variable: "fur_boots", colour1: "brown", colour2: "tan"}
                ]
            },
        ],
        "coldSweater": [
            {
                "head": [
                    {variable: "beanie", colour1: "black"},
                    {variable: "beanie", colour1: "brown"},
                    {variable: "beanie", colour1: "white"},
                    {variable: "beanie", colour1: "yellow"},
                ],
                "upper": [{variable: "sweater"}],
                "lower": [
                    {variable: "sweatpants", colour1: "black"},
                    {variable: "sweatpants", colour1: "blue steel"},
                    {variable: "sweatpants", colour1: "grey"},
                    {variable: "sweatpants", colour1: "white"},
                ],
                "feet": [
                    {variable: "fur_boots", colour1: "grey", colour2: "tan"},
                    {variable: "fur_boots", colour1: "brown", colour2: "tan"}
                ]
            },
            {
                "upper": [{variable: "sweater"}],
                "lower": [
                    {variable: "sweatpants", colour1: "black"},
                    {variable: "sweatpants", colour1: "blue steel"},
                    {variable: "sweatpants", colour1: "grey"},
                    {variable: "sweatpants", colour1: "white"},
                ],
                "feet": [
                    {variable: "fur_boots", colour1: "grey", colour2: "tan"},
                    {variable: "fur_boots", colour1: "brown", colour2: "tan"}
                ]
            }
        ],
        "rainCoat": {
            "handheld": [{variable: "umbrella"}, {variable: "naked"}],
            "upper": [{variable: "peacoat"}],
            "lower": [
                {variable: "slacks", colour1: "black"},
                {variable: "slacks", colour1: "blue"},
                {variable: "slacks", colour1: "brown"},
                {variable: "slacks", colour1: "white"},
            ],
            "feet": [
                {variable: "work", colour1: "black"},
                {variable: "work", colour1: "brown"},
                {variable: "long", colour1: "black"},
                {variable: "long", colour1: "brown"},
            ]
        },
        "wildsFlannel": {
            "upper": [{variable: "checkered", colour1: "red"}],
            "lower": [{variable: "jeans", colour1: "blue steel"}],
            "feet": [
                {variable: "combat", colour1: "black"},
                {variable: "combat", colour1: "soft brown"},
                {variable: "combat", colour1: "light brown"},
                {variable: "combat", colour1: "khaki"},
                {variable: "combat", colour1: "sand"},
                {variable: "combat", colour1: "tan"},
            ],
        },
        "wildsWJumper": {
            "upper": [{variable: "jumper", colour1: "white", colour2: "black"}],
            "lower": [{variable: "khakis"}],
            "feet": [
                {variable: "combat", colour1: "black"},
                {variable: "combat", colour1: "soft brown"},
                {variable: "combat", colour1: "light brown"},
                {variable: "combat", colour1: "khaki"},
                {variable: "combat", colour1: "sand"},
                {variable: "combat", colour1: "tan"},
            ],
        },
        "wildsFJumper": {
            "upper": [{variable: "jumper", colour1: "black", colour2: "white"}],
            "lower": [{variable: "khakis"}],
            "feet": [
                {variable: "combat", colour1: "black"},
                {variable: "combat", colour1: "soft brown"},
                {variable: "combat", colour1: "light brown"},
                {variable: "combat", colour1: "khaki"},
                {variable: "combat", colour1: "sand"},
                {variable: "combat", colour1: "tan"},
            ],
        },
        "wildsJacket": {
            "upper": [
                {variable: "winterjacket", colour1: "wine"},
                {variable: "winterjacket", colour1: "olive"}
            ],
            "under_upper": [
                {variable: "undershirt", colour1: "brown", colour2: "brown"},
                {variable: "undershirt", colour1: "tangerine", colour2: "tangerine"},
                {variable: "undershirt", colour1: "red", colour2: "red"},
            ],
            "lower": [{variable: "khakis"}],
            "feet": [
                {variable: "combat", colour1: "black"},
                {variable: "combat", colour1: "soft brown"},
                {variable: "combat", colour1: "light brown"},
                {variable: "combat", colour1: "khaki"},
                {variable: "combat", colour1: "sand"},
                {variable: "combat", colour1: "tan"},
            ],
        },
        "forestCamo": {
            "upper": [
                {variable: "camo", colour1: "black"},
                {variable: "camo", colour1: "brown"},
                {variable: "camo", colour1: "green"},
            ],
            "lower": [{variable: "cargo shorts"}],
            "feet": [
                {variable: "combat", colour1: "black"},
                {variable: "combat", colour1: "soft brown"},
                {variable: "combat", colour1: "light brown"},
                {variable: "combat", colour1: "khaki"},
                {variable: "combat", colour1: "sand"},
                {variable: "combat", colour1: "tan"},
            ],
        },
        "brothelTrench": {
            "upper": [{variable: "blackleather", colour1: "black"}],
            "lower": [{variable: "cowboy"}],
            "feet": [
                {variable: "belted", colour1: "black"},
                {variable: "thighhigh_heels", colour1: "black"}
            ],
        },
        "brothelVest": {
            "upper": [{variable: "leathercropjacket", colour1: "black"}],
            "lower": [{variable: "bootyjorts"}],
            "feet": [
                {variable: "belted", colour1: "black"},
                {variable: "thighhigh_heels", colour1: "black"}
            ],
        },
        "brothelHarness": {
            "neck": [
                {variable: "harness", colour1: "black"},
                {variable: "harnessleash", colour1: "black"}
            ],
            "lower": [{variable: "leatherpants", colour1: "black"}],
            "feet": [{variable: "belted", colour1: "black"}],
            "hands": [{variable: "belted", colour1: "black"}],
            "face": [
                {variable: "muzzlefetish", colour1: "black"},
                {variable: "naked"}
            ],
        },
        "bathrobe": {
            "contributor": "Numberjack",
            "upper": [{variable: "bathrobe"}],
            "lower": [{variable: "bathrobe"}],
        },
        "compoundLab": {
            contributor: "Roxas",
            "face": [{variable: "glasses", colour1: "black"}, {variable: "naked"}],
            "upper": [{variable: "hunt", colour1: "white"}],
            "lower": [
                {variable: "trousers", colour1: "black"},
                {variable: "trousers", colour1: "brown"},
            ],
            "feet": [{variable: "wingtips", colour1: "light brown", colour2: "black"}]
        },
        "security": {
            contributor: "Roxas",
            "face": [{variable: "aviator", colour1: "blue steel", colour2: "pale white"}, {variable: "naked"}],
            "head": [{variable: "cap", colour1: "black", colour2: "black"}, {variable: "naked"}],
            "upper": [{variable: "utility", colour1: "black"}],
            "under_upper": [
                {variable: "undershirt", colour1: "brown", colour2: "brown"},
                {variable: "undershirt", colour1: "tangerine", colour2: "tangerine"},
                {variable: "undershirt", colour1: "red", colour2: "red"},
            ],
            "lower": [{variable: "trousers", colour1: "black"}],
            "legs": [{variable: "anklesocks", colour1: "pale white"}],
            "feet": [{variable: "trainers", colour1: "black", colour2: "white"}],
        },
        "doctor": {
            contributor: "Roxas",
            "face": [{variable: "glasses", colour1: "black"}],
            "upper": [{variable: "hunt", colour1: "white"}],
            "lower": [
                {variable: "trousers", colour1: "black"},
                {variable: "trousers", colour1: "brown"},
            ],
            "feet": [{variable: "wingtips", colour1: "light brown", colour2: "black"}]
        },
        "nurse": [
            {
                "contributor": "Numberjack",
                "upper": [
                    {variable: "pinknurse", colour1: "light blue", colour2: "white"},
                ],
                "lower": [
                    {variable: "pinknurse", colour1: "light blue", colour2: "white"},
                ],
                "under_upper": [{variable: "plainbra", colour1: "pale white"}],
                "under_lower": [{variable: "plainpanties", colour1: "pale white"}],
                "head": [
                    {variable: "pinknurse", colour1: "light blue", colour2: "white"},
                ],
                "face": [{variable: "surgicalmask", colour1: "white"}],
                "legs": [
                    {variable: "nursesocks", colour1: "light blue", colour2: "white"},
                ],
                "feet": [
                    {variable: "kittenheels", colour1: "white"},
                ]
            },
            {
                "contributor": "Numberjack",
                "upper": [
                    {variable: "pinknurse", colour1: "hospital pink", colour2: "white"},
                ],
                "lower": [
                    {variable: "pinknurse", colour1: "hospital pink", colour2: "white"},
                ],
                "under_upper": [{variable: "plainbra", colour1: "pale white"}],
                "under_lower": [{variable: "plainpanties", colour1: "pale white"}],
                "head": [
                    {variable: "pinknurse", colour1: "hospital pink", colour2: "white"},
                ],
                "face": [{variable: "surgicalmask", colour1: "white"}],
                "legs": [
                    {variable: "nursesocks", colour1: "white", colour2: "hospital pink"},
                ],
                "feet": [
                    {variable: "kittenheels", colour1: "white"},
                ]
            },
            {
                "contributor": "Numberjack",
                "upper": [
                    {variable: "pinknurse", colour1: "light green", colour2: "white"},
                ],
                "lower": [
                    {variable: "pinknurse", colour1: "light green", colour2: "white"},
                ],
                "under_upper": [{variable: "plainbra", colour1: "pale white"}],
                "under_lower": [{variable: "plainpanties", colour1: "pale white"}],
                "head": [
                    {variable: "pinknurse", colour1: "light green", colour2: "white"},
                ],
                "face": [{variable: "surgicalmask", colour1: "white"}],
                "legs": [
                    {variable: "nursesocks", colour1: "light green", colour2: "white"},
                ],
                "feet": [
                    {variable: "kittenheels", colour1: "red"}
                ]
            },
            {
                "contributor": "Numberjack",
                "upper": [
                    {variable: "pinknurse", colour1: "white", colour2: "hospital pink"},
                ],
                "lower": [
                    {variable: "pinknurse", colour1: "white", colour2: "hospital pink"},
                ],
                "under_upper": [{variable: "plainbra", colour1: "pale white"}],
                "under_lower": [{variable: "plainpanties", colour1: "pale white"}],
                "head": [
                    {variable: "pinknurse", colour1: "white", colour2: "hospital pink"},
                ],
                "face": [{variable: "surgicalmask", colour1: "white"}],
                "legs": [
                    {variable: "nursesocks", colour1: "hospital pink", colour2: "white"},
                ],
                "feet": [
                    {variable: "kittenheels", colour1: "white"},
                ]
            },
            {
                "contributor": "Numberjack",
                "upper": [
                    {variable: "pinknurse", colour1: "white", colour2: "red"}
                ],
                "lower": [
                    {variable: "pinknurse", colour1: "white", colour2: "red"}
                ],
                "under_upper": [{variable: "plainbra", colour1: "pale white"}],
                "under_lower": [{variable: "plainpanties", colour1: "pale white"}],
                "head": [
                    {variable: "pinknurse", colour1: "white", colour2: "red"}
                ],
                "face": [{variable: "surgicalmask", colour1: "white"}],
                "legs": [
                    {variable: "nursesocks", colour1: "white", colour2: "red"}
                ],
                "feet": [
                    {variable: "kittenheels", colour1: "white"},
                    {variable: "kittenheels", colour1: "red"}
                ]
            },
        ],
        "patient": {
            "contributor": "Numberjack",
            "upper": [{variable: "patient"}],
            "lower": [{variable: "patient"}],
        },
        "jumpsuit": [
            {
                "upper": [{variable: "jumpsuitstylish", colour1: "black"}],
                "lower": [{variable: "jumpsuitstylish", colour1: "black"}],
                "feet": [
                    {variable: "combat", colour1: "black"},
                    {variable: "combat", colour1: "soft brown"},
                    {variable: "combat", colour1: "light brown"},
                    {variable: "combat", colour1: "khaki"},
                    {variable: "combat", colour1: "sand"},
                    {variable: "combat", colour1: "tan"},
                ],
            },
            {
                "upper": [{variable: "jumpsuitstylish", colour1: "brown"}],
                "lower": [{variable: "jumpsuitstylish", colour1: "brown"}],
                "feet": [
                    {variable: "combat", colour1: "black"},
                    {variable: "combat", colour1: "soft brown"},
                    {variable: "combat", colour1: "light brown"},
                    {variable: "combat", colour1: "khaki"},
                    {variable: "combat", colour1: "sand"},
                    {variable: "combat", colour1: "tan"},
                ],
            },
            {
                "upper": [{variable: "jumpsuitstylish", colour1: "green"}],
                "lower": [{variable: "jumpsuitstylish", colour1: "green"}],
                "feet": [
                    {variable: "combat", colour1: "black"},
                    {variable: "combat", colour1: "soft brown"},
                    {variable: "combat", colour1: "light brown"},
                    {variable: "combat", colour1: "khaki"},
                    {variable: "combat", colour1: "sand"},
                    {variable: "combat", colour1: "tan"},
                ],
            },
            {
                "upper": [{variable: "jumpsuitstylish", colour1: "olive"}],
                "lower": [{variable: "jumpsuitstylish", colour1: "olive"}],
                "feet": [
                    {variable: "combat", colour1: "black"},
                    {variable: "combat", colour1: "soft brown"},
                    {variable: "combat", colour1: "light brown"},
                    {variable: "combat", colour1: "khaki"},
                    {variable: "combat", colour1: "sand"},
                    {variable: "combat", colour1: "tan"},
                ],
            },
            {
                "upper": [{variable: "jumpsuitstylish", colour1: "tan"}],
                "lower": [{variable: "jumpsuitstylish", colour1: "tan"}],
                "feet": [
                    {variable: "combat", colour1: "black"},
                    {variable: "combat", colour1: "soft brown"},
                    {variable: "combat", colour1: "light brown"},
                    {variable: "combat", colour1: "khaki"},
                    {variable: "combat", colour1: "sand"},
                    {variable: "combat", colour1: "tan"},
                ],
            },
            {
                "upper": [{variable: "jumpsuitstylish", colour1: "russet"}],
                "lower": [{variable: "jumpsuitstylish", colour1: "russet"}],
                "feet": [
                    {variable: "combat", colour1: "black"},
                    {variable: "combat", colour1: "soft brown"},
                    {variable: "combat", colour1: "light brown"},
                    {variable: "combat", colour1: "khaki"},
                    {variable: "combat", colour1: "sand"},
                    {variable: "combat", colour1: "tan"},
                ],
            },
        ],
        "coveralls": [
            {
                "upper": [{variable: "jumpsuitstylish", colour1: "black"}],
                "lower": [{variable: "jumpsuitstylish", colour1: "black"}],
                "feet": [
                    {variable: "work", colour1: "black"},
                    {variable: "work", colour1: "brown"},
                ],
            },
            {
                "upper": [{variable: "jumpsuitstylish", colour1: "brown"}],
                "lower": [{variable: "jumpsuitstylish", colour1: "brown"}],
                "feet": [
                    {variable: "work", colour1: "black"},
                    {variable: "work", colour1: "brown"},
                ],
            },
            {
                "upper": [{variable: "jumpsuitstylish", colour1: "green"}],
                "lower": [{variable: "jumpsuitstylish", colour1: "green"}],
                "feet": [
                    {variable: "work", colour1: "black"},
                    {variable: "work", colour1: "brown"},
                ],
            },
            {
                "upper": [{variable: "jumpsuitstylish", colour1: "olive"}],
                "lower": [{variable: "jumpsuitstylish", colour1: "olive"}],
                "feet": [
                    {variable: "work", colour1: "black"},
                    {variable: "work", colour1: "brown"},
                ],
            },
            {
                "upper": [{variable: "jumpsuitstylish", colour1: "tan"}],
                "lower": [{variable: "jumpsuitstylish", colour1: "tan"}],
                "feet": [
                    {variable: "work", colour1: "black"},
                    {variable: "work", colour1: "brown"},
                ],
            },
            {
                "upper": [{variable: "jumpsuitstylish", colour1: "russet"}],
                "lower": [{variable: "jumpsuitstylish", colour1: "russet"}],
                "feet": [
                    {variable: "work", colour1: "black"},
                    {variable: "work", colour1: "brown"},
                ],
            },
        ],
        "maleUndies": {
            "under_lower": [
                {variable: "briefs"},
                {variable: "speedo"},
                {variable: "classicbriefs"},
                {variable: "boxers"},
            ]
        },
        "femaleUndies": [
            // Plain
            {
                "under_lower": [{variable: "plainpanties", colour1: "pale white"}],
                "under_upper": [{variable: "plainbra", colour1: "pale white"}],
            },
            {
                "under_lower": [{variable: "plainpanties", colour1: "blue"}],
                "under_upper": [{variable: "plainbra", colour1: "blue"}],
            },
            {
                "under_lower": [{variable: "plainpanties", colour1: "pink"}],
                "under_upper": [{variable: "plainbra", colour1: "pink"}],
            },
            {
                "under_lower": [{variable: "plainpanties", colour1: "purple"}],
                "under_upper": [{variable: "plainbra", colour1: "purple"}],
            },
            {
                "under_lower": [{variable: "plainpanties", colour1: "red"}],
                "under_upper": [{variable: "plainbra", colour1: "red"}],
            },
            {
                "under_lower": [{variable: "plainpanties", colour1: "black"}],
                "under_upper": [{variable: "plainbra", colour1: "black"}],
            },

            // Lace
            {
                "under_lower": [{variable: "lacepanties", colour1: "pale white"}],
                "under_upper": [{variable: "lacebra", colour1: "pale white"}],
            },
            {
                "under_lower": [{variable: "lacepanties", colour1: "blue"}],
                "under_upper": [{variable: "lacebra", colour1: "blue"}],
            },
            {
                "under_lower": [{variable: "lacepanties", colour1: "pink"}],
                "under_upper": [{variable: "lacebra", colour1: "pink"}],
            },
            {
                "under_lower": [{variable: "lacepanties", colour1: "purple"}],
                "under_upper": [{variable: "lacebra", colour1: "purple"}],
            },
            {
                "under_lower": [{variable: "lacepanties", colour1: "red"}],
                "under_upper": [{variable: "lacebra", colour1: "red"}],
            },
            {
                "under_lower": [{variable: "lacepanties", colour1: "black"}],
                "under_upper": [{variable: "lacebra", colour1: "black"}],
            },

            // Striped
            {
                "under_lower": [{variable: "stripedpanties", colour1: "white", colour2: "red"}],
                "under_upper": [{variable: "stripedbra", colour1: "white", colour2: "red"}],
            },
            {
                "under_lower": [{variable: "stripedpanties", colour1: "white", colour2: "pink"}],
                "under_upper": [{variable: "stripedbra", colour1: "white", colour2: "pink"}],
            },
            {
                "under_lower": [{variable: "stripedpanties", colour1: "white", colour2: "blue"}],
                "under_upper": [{variable: "stripedbra", colour1: "white", colour2: "blue"}],
            },
            {
                "under_lower": [{variable: "stripedpanties", colour1: "white", colour2: "purple"}],
                "under_upper": [{variable: "stripedbra", colour1: "white", colour2: "purple"}],
            },
            {
                "under_lower": [{variable: "stripedpanties", colour1: "white", colour2: "tangerine"}],
                "under_upper": [{variable: "stripedbra", colour1: "white", colour2: "tangerine"}],
            },
            {
                "under_lower": [{variable: "stripedpanties", colour1: "white", colour2: "teal"}],
                "under_upper": [{variable: "stripedbra", colour1: "white", colour2: "teal"}],
            },
            {
                "under_lower": [{variable: "stripedpanties", colour1: "white", colour2: "yellow"}],
                "under_upper": [{variable: "stripedbra", colour1: "white", colour2: "yellow"}],
            },
        ],
        "dance": [
            {
                contributor: "Roxas",
                "under_upper": [{variable: "leotard", colour1: "black"}],
                "under_lower": [{variable: "leotard", colour1: "black"}],
            },
            {
                contributor: "Roxas",
                "under_upper": [{variable: "leotard", colour1: "pink"}],
                "under_lower": [{variable: "leotard", colour1: "pink"}],
            },
            {
                contributor: "Roxas",
                "under_upper": [{variable: "leotard", colour1: "purple"}],
                "under_lower": [{variable: "leotard", colour1: "purple"}],
            },
            {
                contributor: "Roxas",
                "under_upper": [{variable: "leotard", colour1: "red"}],
                "under_lower": [{variable: "leotard", colour1: "red"}],
            },
            {
                contributor: "Roxas",
                "under_upper": [{variable: "leotard", colour1: "tangerine"}],
                "under_lower": [{variable: "leotard", colour1: "tangerine"}],
            },
            {
                contributor: "Roxas",
                "under_upper": [{variable: "leotard", colour1: "teal"}],
                "under_lower": [{variable: "leotard", colour1: "teal"}],
            },
            {
                contributor: "Roxas",
                "under_upper": [{variable: "leotard", colour1: "white"}],
                "under_lower": [{variable: "leotard", colour1: "white"}],
            },
            {
                contributor: "Roxas",
                "under_upper": [{variable: "leotard", colour1: "yellow"}],
                "under_lower": [{variable: "leotard", colour1: "yellow"}],
            },
        ],
        "maleBriar": {
            "upper": [{variable: "pimp", colour1: "blue"}],
            "neck": [{variable: "tie", colour1: "black", colour2: "black"}],
            "feet": [{variable: "wingtips", colour1: "black", colour2: "wine"}],
            "lower": [
                {variable: "trousers", colour1: "black"},
                {variable: "trousers", colour1: "brown"},
            ],
        },
        "femaleBriar": [
            {
                "upper": [{variable: "keyhole", colour1: "wine"}],
                "lower": [{variable: "keyhole", colour1: "wine"}],
                "legs": [{variable: "garterstockings", colour1: "black"}],
                "feet": [
                    {variable: "dresssandals", colour1: "black"},
                    {variable: "kittenheels", colour1: "black"},
                    {variable: "courtheels", colour1: "black"},
                    {variable: "ribbonplatformheels", colour1: "black"},
                ]
            },
            {
                "upper": [{variable: "keyhole", colour1: "red"}],
                "lower": [{variable: "keyhole", colour1: "red"}],
                "legs": [{variable: "garterstockings", colour1: "black"}],
                "feet": [
                    {variable: "dresssandals", colour1: "black"},
                    {variable: "kittenheels", colour1: "black"},
                    {variable: "courtheels", colour1: "black"},
                    {variable: "ribbonplatformheels", colour1: "black"},
                ]
            },
        ],
        "riding": {
            "upper": [{variable: "racing"}],
            "lower": [{variable: "chapette"}],
            "head": [
                {variable: "riding", colour1: "white"},
                {variable: "riding", colour1: "black"},
                {variable: "racing", colour1: "white"},
                {variable: "racing", colour1: "black"},
            ],
            "feet": [{variable: "paddock"}]
        },
        "ridingFormal": {
            "upper": [{variable: "shadbelly"}],
            "lower": [{variable: "chapette", colour1: "white"}],
            "hand": [{variable: "workgloves", colour1: "black"}],
            "feet": [{variable: "field"}]
        },
        "Eden": {
            contributor: "Roxas",
            "upper": [{variable: "winterjacket", colour1: "olive", colour2: "tan"}],
            "lower": [{variable: "straight trousers", colour1: "blue steel"}],
            "neck": [{variable: "bolotie", colour1: "tan", colour2: "blue steel"}],
            "feet": [{variable: "combat", colour1: "black"},],
        },
        "Morgan": {
            "upper": [
                {variable: "singlebreasted", colour1: "brown", colour2: "white", integrity: 10},
                {variable: "singlebreasted", colour1: "black", colour2: "white", integrity: 10},
            ],
            "lower": [
                {variable: "3piecesuit", colour1: "wine", integrity: 10},
                {variable: "3piecesuit", colour1: "black", integrity: 10},
                {variable: "3piecesuit", colour1: "grey", integrity: 10},
                {variable: "3piecesuit", colour1: "tan", integrity: 10},
                {variable: "3piecesuit", colour1: "sand", integrity: 10},
            ],
        },
        "maleLandry": {
            contributor: "Roxas",
            "upper": [{variable: "turtleneckjumper", colour1: "black"}],
            "lower": [{variable: "trousers", colour1: "black"},],
            "hands": [
                {variable: "fingerlessgloves", colour1: "black"},
                {variable: "fingerlessgloves", colour1: "brown"},
                {variable: "naked"}
            ],
            "feet": [{variable: "combat", colour1: "black"},],
        },
        "femaleLandry": {
            contributor: "Roxas",
            "upper": [{variable: "cableknitcardigan", colour1: "black"}],
            "lower": [{variable: "trousers", colour1: "black"},],
            "under_upper": [{variable: "undershirt", colour1: "white", colour2: "black"}],
            "hands": [
                {variable: "fingerlessgloves", colour1: "black"},
                {variable: "fingerlessgloves", colour1: "brown"},
                {variable: "naked"}
            ],
            "feet": [{variable: "combat", colour1: "black"},],
        },
        "Whitney": {
            "upper": [{variable: "leathercropjacket", colour1: "black", integrity: 135}],
            "lower": [{variable: "jeans", colour1: "denim", integrity: 175}],
            "under_upper": [{variable: "undershirt", colour1: "black", colour2: "red", integrity: 175}],
            "feet": [{variable: "combat", colour1: "black"},],
        },
        "AlexJorts": {
            "head": [{variable: "straw"}],
            "upper": [{variable: "checkered", colour1: "red"}],
            "feet": [{variable: "cowboy"}],
            "lower": [
                {variable: "jorts", colour1: "denim"},
                {variable: "jorts", colour1: "light blue"},
                {variable: "jorts", colour1: "blue steel"},
                {variable: "jorts", colour1: "grey"}
            ],
        },
        "AlexSkirt": {
            "head": [{variable: "straw"}],
            "upper": [{variable: "checkered", colour1: "red"}],
            "feet": [{variable: "cowboy"}],
            "lower": [{variable: "micropleatedskirt"}]
        },
        "maleAlexSleep": {
            "upper": [{variable: "tshirt", colour1: "white"}],
            "under_lower": [{variable: "boxers", colour1: "white"}],
        },
        "femaleAlexSleep": {
            "upper": [{variable: "tshirt", colour1: "white"}],
            "under_lower": [{variable: "boyshorts", colour1: "pale white"}]
        },
        "malePlantSpring": {
            "upper": [{variable: "frilly rose wedding suit", colour1: "green", colour2: "lilac"}],
            "lower": [{variable: "puffybloomers", colour1: "green"}],
            "head": [{variable: "featheredhairclip", colour1: "green"}],
            "neck": [{variable: "feathernecklace", colour1: "green", colour2: "green"}],
            "legs": [{variable: "fishnettights", colour1: "green"}]
        },
        "femalePlantSpring": [
            {
                "contributor": "Numberjack",
                "upper": [{variable: "openshoulerlolitaclassic", colour1: "green", colour2: "green"}],
                "lower": [{variable: "ballgown", colour1: "white", colour2: "white"}],
                "head": [
                    {variable: "flower"},
                    {variable: "rose", colour1: "red"},
                    {variable: "rose", colour1: "white"},
                    {variable: "rose", colour1: "pink"},
                    {variable: "rose", colour1: "light pink"},
                    {variable: "rose", colour1: "purple"},
                    {variable: "rose", colour1: "yellow"}
                ],
                "neck": [{variable: "lacechokerold", colour1: "green"}],
                "legs": [{variable: "fishnettights", colour1: "green"}]
            },
            {
                "contributor": "Numberjack",
                "upper": [{variable: "witchgothic", colour1: "green", colour2: "green"}],
                "lower": [
                    {variable: "eveninggown", colour1: "white", colour2: "white", pattern: "sparkly"},
                    {variable: "eveninggown", colour1: "lilac", colour2: "white", pattern: "ombre"},
                    {variable: "eveninggown", colour1: "light pink", colour2: "white", pattern: "ombre"},
                    {variable: "eveninggown", colour1: "pink", colour2: "white", pattern: "ombre"},
                    {variable: "eveninggown", colour1: "pink", colour2: "lilac", pattern: "ombre"},
                    {variable: "eveninggown", colour1: "pink", colour2: "purple", pattern: "ombre"},
                    {variable: "eveninggown", colour1: "purple", colour2: "pink", pattern: "ombre"},
                    {variable: "eveninggown", colour1: "purple", colour2: "white", pattern: "ombre"},
                    {variable: "eveninggown", colour1: "purple", colour2: "light pink", pattern: "ombre"},
                    {variable: "eveninggown", colour1: "purple", colour2: "lilac", pattern: "ombre"},
                    {variable: "eveninggown", colour1: "purple", colour2: "teal", pattern: "ombre"}
                ],
                "head": [
                    {variable: "flower"},
                    {variable: "rose", colour1: "white"},
                    {variable: "rose", colour1: "pink"},
                    {variable: "rose", colour1: "light pink"},
                    {variable: "rose", colour1: "purple"},
                    {variable: "butterflyhairpin", colour1: "white"},
                    {variable: "butterflyhairpin", colour1: "pink"},
                    {variable: "butterflyhairpin", colour1: "purple"},
                    {variable: "butterflyhairpin", colour1: "lilac"}
                ],
                "neck": [
                    {variable: "lacechokerold", colour1: "green"},
                    {variable: "lacechoker", colour1: "green"}
                ],
                "handheld": [{variable: "floralparasol", colour1: "white", pattern: "white"}],
                "legs": [{variable: "fishnettights", colour1: "green"}]
            }
        ],
        "plantSummer": {
            "contributor": "Numberjack",
            "upper": [{variable: "swandressfancy", colour1: "green", colour2: "green"}],
            "lower": [{variable: "swandressfancy", colour1: "pink", colour2: "white"}],
            "head": [
                {variable: "daisy"},
                {variable: "butterflybow", colour1: "pink"},
                {variable: "butterflybow", colour1: "white"}
            ],
            "neck": [{variable: "lacechoker", colour1: "green"}],
            "legs": [{variable: "fishnettights", colour1: "green"}]
        },
        "plantAutumn": {
            "contributor": "Numberjack",
            "upper": [{variable: "pumpkin_dress"}],
            "lower": [{variable: "pumpkin_dress"}],
            "under_upper": [{variable: "corset", colour1: "green"}],
            "head": [
                {variable: "pumpkinhat"},
                {variable: "butterflybow", colour1: "tangerine"}
            ],
            "neck": [
                {variable: "lacechoker", colour1: "green"},
                {variable: "lacechokerold", colour1: "green"}
            ],
            "legs": [{variable: "fishnettights", colour1: "green"}]
        },
        "plantWinter": {
            "contributor": "Numberjack",
            "upper": [
                {variable: "gothicold", colour1: "green", colour2: "green"},
                {variable: "openshoulderlolitaclassic", colour1: "green", colour2: "green"}
            ],
            "lower": [
                {variable: "gothicold", colour1: "green", colour2: "green"},
                {variable: "openshoulderlolitaclassic", colour1: "green", colour2: "green"},
                {variable: "rosesuitfrilly", colour1: "green", colour2: "green"}
            ],
            "head": [
                {variable: "featheredhairclip", colour1: "green"},
                {variable: "swanfeather", colour1: "green"}
            ],
            "neck": [
                {variable: "lacechoker", colour1: "green"},
                {variable: "lacechokerold", colour1: "green"}
            ],
            "legs": [{variable: "fishnettights", colour1: "green"}]
        },
        "plantGeneric": [
            {
                "contributor": "Numberjack",
                "upper": [{variable: "plant"}],
                "lower": [{variable: "plant"}]
            },
            {
                "contributor": "Numberjack",
                "upper": [
                    {variable: "plant"},
                    {variable: "seaweed"}
                ],
                "lower": [
                    {variable: "plant"},
                    {variable: "seaweed"}
                ],
                "head": [{variable: "featheredhairclip", colour1: "green"}],
                "neck": [
                    {variable: "lacechoker", colour1: "green"},
                    {variable: "lacechokerold", colour1: "green"}
                ]
            }
        ],
        "robinGiftShirt": {
            "upper": [
                {variable: "polo", colour1: "white"},
                {variable: "checkered"},
                {variable: "dress", colour1: "white"},
                {variable: "blazershirt", colour1: "black", colour2: "white"},
                {variable: "blazershirt", colour1: "brown", colour2: "white"},
            ],
            "lower": [
                // Shorts
                {variable: "shorts", colour1: "white"},
                {variable: "shorts", colour1: "black"},
                {variable: "shorts", colour1: "blue"},

                // Retro Shorts
                {variable: "retroshorts", colour1: "white"},
                {variable: "retroshorts", colour1: "black"},
                {variable: "retroshorts", colour1: "blue"},

                // Dolphin Shorts
                {variable: "dolphinshorts", colour1: "white"},
                {variable: "dolphinshorts", colour1: "black"},
                {variable: "dolphinshorts", colour1: "blue"},
            ],
            "feet": [
                // Gender: m
                {variable: "horsebitloafers", colour1: "black"},
                {variable: "cordovanloafers", colour1: "black"},
                {variable: "combat", colour1: "black"},
                {variable: "combat", colour2: "brown"},
                {variable: "canvas loafers", colour1: "black"},

                // Gender : n
                {variable: "trainers", colour2: "white"},
                {variable: "wellies", colour1: "black"},
                {variable: "work", colour1: "black"},
                {variable: "work", colour1: "brown"},
                {variable: "long", colour1: "black"},
                {variable: "long", colour1: "brown"},
                {variable: "lightuptrainers", colour2: "white"},
                {variable: "hightops", colour2: "white"},
            ]
        },
        "robinGiftSundress": [
            {
                "contributor": "Numberjack",
                "upper": [
                    {variable: "sundress", colour1: "white"},
                ],
                "lower": [
                    {variable: "sundress", colour1: "white"},
                ],
                "under_upper": [{variable: "straplessbra", colour1: "pale white"}],
                "under_lower": [{variable: "stripedpanties", colour1: "white", colour2: "teal"}],
                "head": [
                    {variable: "straw", colour1: "brown"},
                    {variable: "straw", colour1: "pink"},
                    {variable: "straw", colour1: "lilac"},
                    {variable: "straw", colour1: "white"},
                    {variable: "strawflower", colour1: "brown"},
                    {variable: "strawflower", colour1: "pink"},
                    {variable: "strawflower", colour1: "lilac"},
                    {variable: "strawflower", colour1: "white"},
                ],
                "feet": [{variable: "sandals", colour1: "brown"}]
            },
            {
                "contributor": "Numberjack",
                "upper": [
                    {variable: "classicsundress", colour1: "white"},
                ],
                "lower": [
                    {variable: "classicsundress", colour1: "white"},
                ],
                "under_upper": [{variable: "straplessbra", colour1: "pale white"}],
                "under_lower": [{variable: "stripedpanties", colour1: "white", colour2: "teal"}],
                "head": [
                    {variable: "straw", colour1: "brown"},
                    {variable: "straw", colour1: "pink"},
                    {variable: "straw", colour1: "lilac"},
                    {variable: "straw", colour1: "white"},
                    {variable: "strawflower", colour1: "brown"},
                    {variable: "strawflower", colour1: "pink"},
                    {variable: "strawflower", colour1: "lilac"},
                    {variable: "strawflower", colour1: "white"},
                ],
                "feet": [{variable: "sandals", colour1: "brown"}]
            },
            {
                "contributor": "Numberjack",
                "upper": [
                    {variable: "haltersundress", colour1: "white"}
                ],
                "lower": [{variable: "haltersundress", colour1: "white"}],
                "under_upper": [{variable: "straplessbra", colour1: "pale white"}],
                "under_lower": [{variable: "stripedpanties", colour1: "white", colour2: "teal"}],
                "head": [
                    {variable: "straw", colour1: "brown"},
                    {variable: "straw", colour1: "pink"},
                    {variable: "straw", colour1: "lilac"},
                    {variable: "straw", colour1: "white"},
                    {variable: "strawflower", colour1: "brown"},
                    {variable: "strawflower", colour1: "pink"},
                    {variable: "strawflower", colour1: "lilac"},
                    {variable: "strawflower", colour1: "white"},
                ],
                "feet": [{variable: "sandals", colour1: "brown"}]
            }
        ],
        "robinGiftTux": {
            "upper": [{variable: "tuxedo", colour1: "black"}],
            "lower": [{variable: "tuxedo", colour1: "black"}],
            "neck": [{variable: "tie", colour1: "black", colour2: "black"}, {
                variable: "tie",
                colour1: "white",
                colour2: "white"
            }],
            "feet": [{variable: "tuxedoshoes"}],
        },
        "robinGiftGown": {
            "upper": [
                {variable: "openshoulderlolita", colour1: "black", colour2: "red"},
                {variable: "openshoulderlolitaclassic", colour1: "black", colour2: "red"}
            ],
            "lower": [
                {variable: "ruffled long dress", colour1: "black", colour2: "red"},
                {variable: "openshoulderlolita", colour1: "black", colour2: "red"},
                {variable: "openshoulderlolitaclassic", colour1: "black", colour2: "red"}
            ],
            "under_upper": [{variable: "corset", colour1: "black"}],
            "under_lower": [{variable: "lacepanties", colour1: "black"}],
            "head": [
                {variable: "gothiccrown", colour1: "black", colour2: "red"},
                {variable: "lolita", colour1: "red", colour2: "black"},
                {variable: "lolitaold", colour1: "red", colour2: "black"}
            ],
            "neck": [
                {variable: "lacechoker", colour1: "red"},
                {variable: "lacechokerold", colour1: "red"},
            ],
            "hands": [{variable: "longleathergloves", colour1: "black"}],
            "handheld": [{variable: "parasolsweet", colour1: "black", colour2: "black"}, {variable: "naked"}],
            "legs": [
                {variable: "striped socks long", colour1: "black"},
                {variable: "ribbonstockings", colour1: "black", colour2: "red"}
            ],
            "feet": [
                {variable: "dresssandals", colour1: "black"}
            ]
        },
        "robinGiftKimono": [
            {
                "upper": [{variable: "kimono", colour1: "black", colour2: "red"}],
                "lower": [{variable: "kimono", colour1: "black", colour2: "red"}],
                "feet": [{variable: "geta", colour1: "red"}],
                "handheld": [{variable: "parasolpaper", colour1: "red"}],
            },
            {
                "upper": [{variable: "kimono", colour1: "white", colour2: "red"}],
                "lower": [{variable: "kimono", colour1: "white", colour2: "red"}],
                "feet": [{variable: "geta", colour1: "red"}],
                "handheld": [{variable: "parasolpaper", colour1: "red"}],
            },
            {
                "upper": [{variable: "kimono", colour1: "black", colour2: "blue"}],
                "lower": [{variable: "kimono", colour1: "black", colour2: "blue"}],
                "feet": [{variable: "geta", colour1: "blue"}],
                "handheld": [{variable: "parasolpaper", colour1: "blue"}],
            },
            {
                "upper": [{variable: "kimono", colour1: "white", colour2: "blue"}],
                "lower": [{variable: "kimono", colour1: "white", colour2: "blue"}],
                "feet": [{variable: "geta", colour1: "blue"}],
                "handheld": [{variable: "parasolpaper", colour1: "blue"}],
            },
            {
                "upper": [{variable: "kimono", colour1: "black", colour2: "green"}],
                "lower": [{variable: "kimono", colour1: "black", colour2: "green"}],
                "feet": [{variable: "geta", colour1: "green"}],
                "handheld": [{variable: "parasolpaper", colour1: "green"}],
            },
            {
                "upper": [{variable: "kimono", colour1: "white", colour2: "green"}],
                "lower": [{variable: "kimono", colour1: "white", colour2: "green"}],
                "feet": [{variable: "geta", colour1: "green"}],
                "handheld": [{variable: "parasolpaper", colour1: "green"}],
            },
            {
                "upper": [{variable: "kimono", colour1: "black", colour2: "yellow"}],
                "lower": [{variable: "kimono", colour1: "black", colour2: "yellow"}],
                "feet": [{variable: "geta", colour1: "yellow"}],
                "handheld": [{variable: "parasolpaper", colour1: "yellow"}],
            },
            {
                "upper": [{variable: "kimono", colour1: "white", colour2: "yellow"}],
                "lower": [{variable: "kimono", colour1: "white", colour2: "yellow"}],
                "feet": [{variable: "geta", colour1: "yellow"}],
                "handheld": [{variable: "parasolpaper", colour1: "yellow"}],
            },
        ],
        "robinGiftChristmas": {
            "head": [{variable: "christmas"}],
            "upper": [{variable: "christmas"}],
            "lower": [{variable: "christmas"}],
            "feet": [{variable: "christmasboots"}],
        },
        "robinLewdRibbons": {
            "feet": [{variable: "giftwrap", colour1: "red"}],
            "head": [{variable: "giftwrapbow", colour1: "red"}],
            "lower": [{variable: "giftwrap", colour1: "red"}],
            "under_lower": [{variable: "giftwrap", colour1: "red"}],
            "under_upper": [{variable: "giftwrap", colour1: "red"}],
            "upper": [{variable: "giftwrap", colour1: "red"}],
        },
        "pyjamas": [
            {
                "contributor": "Numberjack",
                "upper": [
                    {variable: "pjs", colour1: "teal"},
                ],
                "lower": [
                    {variable: "pjs", colour1: "teal"},
                    {variable: "pjs loose", colour1: "teal"},
                ],
                "feet": [{variable: "bunny"}, {variable: "naked"}]
            },
            {
                "contributor": "Numberjack",
                "upper": [{variable: "pjsstar", colour1: "tangerine"},],
                "lower": [{variable: "pjsstar", colour1: "tangerine"},],
                "feet": [{variable: "bunny"}, {variable: "naked"}]
            },
            {
                "contributor": "Numberjack",
                "upper": [{variable: "pjsmoon", colour1: "blue"}],
                "lower": [{variable: "pjsmoon", colour1: "blue"}],
                "feet": [{variable: "bunny"}, {variable: "naked"}]
            },
        ],
        "ghost": [
            {
                "contributor": "Numberjack",
                "upper": [{variable: "bedsheet", colour1: "white"}],
                "lower": [{variable: "bedsheet", colour1: "white"}],
                "under_upper": [{variable: "plainbra", colour1: "pale white"}],
                "under_lower": [
                    {variable: "briefs", colour1: "pale white"},
                    {variable: "plainpanties", colour1: "pale white"}
                ],
                "head": [{variable: "hoodie", colour1: "white", colour2: "white"}],
                "face": [{variable: "skele"}],
            },
            {
                "contributor": "Numberjack",
                "upper": [{variable: "gothicold", colour1: "white", colour2: "white"}],
                "lower": [{variable: "gothicold", colour1: "white", colour2: "white"}],
                "under_upper": [{variable: "plainbra", colour1: "pale white"}],
                "under_lower": [
                    {variable: "briefs", colour1: "pale white"},
                    {variable: "plainpanties", colour1: "pale white"}
                ],
                "head": [{variable: "hoodie", colour1: "white", colour2: "white"}],
                "face": [{variable: "skele"}]
            }
        ],
        "vampire": {
            "contributor": "Numberjack",
            "upper": [
                {variable: "classyvampire", colour1: "red"},
                {variable: "classyvampire", colour1: "black"},
                {variable: "gothicjacket"},
                {variable: "vampire", colour1: "black"}
            ],
            "lower": [{variable: "gothictrousers"}],
            "under_upper": [{variable: "undershirt", colour1: "red", colour2: "red"}],
            "under_lower": [{variable: "briefs", colour1: "black"}],
            "head": [{variable: "top", colour1: "red"}],
            "neck": [
                {variable: "bowtie", colour1: "red"},
                {variable: "boa", colour1: "white"}
            ],
            "hands": [{variable: "longleathergloves", colour1: "red"}],
            "legs": [{variable: "striped socks long", colour1: "black"}],
            "feet": [
                {variable: "tuxedo"},
                {variable: "wingtips", colour1: "black", colour2: "black"},
                {variable: "wingtips", colour1: "black", colour2: "navy"},
                {variable: "wingtips", colour1: "navy", colour2: "navy"},
                {variable: "wingtips", colour1: "black", colour2: "wine"}
            ]
        },
        "witch": [
            {
                "contributor": "Numberjack",
                "upper": [{variable: "witchgothic", colour1: "black"}],
                "lower": [{variable: "witchgothic", colour1: "purple", colour2: "black"}],
                "under_upper": [{variable: "corset", colour1: "black"}],
                "under_lower": [{variable: "catgirlpanties", colour1: "black"}],
                "head": [{variable: "witchgothic", colour1: "black", colour2: "purple"}],
                "neck": [{variable: "lacechoker", colour1: "black"}],
                "hands": [{variable: "lacewarmers", colour1: "black"}],
                "handheld": [{variable: "witch broom", colour1: "gold"}],
                "legs": [{variable: "ribbonstockings", colour1: "black", colour2: "black"}],
                "feet": [{variable: "witch", colour1: "black"}]
            },
            {
                "contributor": "Numberjack",
                "upper": [
                    {variable: "witchgothic", colour1: "teal", colour2: "black"}
                ],
                "lower": [
                    {variable: "witchgothic", colour1: "teal", colour2: "black"}
                ],
                "under_upper": [{variable: "corset", colour1: "black"}],
                "under_lower": [{variable: "catgirlpanties", colour1: "black"}],
                "head": [
                    {variable: "witchstarry", colour1: "black"}
                ],
                "neck": [
                    {variable: "lacechokerold", colour1: "black"},
                    {variable: "lacechoker", colour1: "blue"}
                ],
                "hands": [
                    {variable: "belted", colour1: "black"},
                    {variable: "armwarmers", colour1: "black", colour2: "blue"}
                ],
                "handheld": [{variable: "witch broom", colour1: "gold"}],
                "legs": [
                    {variable: "ribbonstockings", colour1: "black", colour2: "black"},
                ],
                "feet": [
                    {variable: "witch", colour1: "black"}
                ]
            },
            {
                "contributor": "Numberjack",
                "upper": [
                    {variable: "witch", colour1: "green", colour2: "black"},
                ],
                "lower": [
                    {variable: "witch", colour1: "green"},
                ],
                "under_upper": [{variable: "corset", colour1: "black"}],
                "under_lower": [{variable: "catgirlpanties", colour1: "black"}],
                "head": [
                    {variable: "witch", colour1: "green", colour2: "black"},
                ],
                "neck": [
                    {variable: "lacechokerold", colour1: "black"},
                    {variable: "lacechoker", colour1: "blue"}
                ],
                "hands": [
                    {variable: "belted", colour1: "black"},
                    {variable: "armwarmers", colour1: "black", colour2: "blue"}
                ],
                "handheld": [{variable: "witch broom", colour1: "gold"}],
                "legs": [
                    {variable: "ribbonstockings", colour1: "black", colour2: "black"},
                ],
                "feet": [
                    {variable: "witch", colour1: "green"},
                ]
            }
        ],
        "moonRobe": {
            "upper": [{variable: "drowneddress", integrity: 12}],
            "lower": [{variable: "drowneddress", integrity: 12}],
            "under_upper": [{variable: "chestwrap"}],
            "neck": [{variable: "ivorynecklace"}],
            "hands": [{variable: "goldshackles"}],
            "legs": [{variable: "goldshackles"}]
        },
        "sweater": {
            "contributor": "Numberjack",
            "upper": [
                {variable: "sweater"},
                {variable: "pinksweater"}
            ],
            "lower": [
                {variable: "jeans", colour1: "blue steel"},
                {variable: "low rise jeans", colour1: "blue steel", colour2: "white"}
            ],
            "under_upper": [{variable: "undershirt", colour1: "black", colour2: "black"}],
            "under_lower": [
                {variable: "briefs", colour1: "pale white"},
                {variable: "plainpanties", colour1: "pale white"}
            ],
            "legs": [{variable: "anklesocks", colour1: "pale white"}],
            "feet": [{variable: "hightops", colour1: "black"}]
        },
        "gloomyTunic": [
            {
                "contributor": "Numberjack",
                "upper": [
                    {variable: "croppedhoodie", colour1: "green"},
                ],
                "lower": [
                    {variable: "belted", colour1: "white"},
                ],
                "under_upper": [{variable: "camisole", colour1: "white", colour2: "green"}],
                "under_lower": [{variable: "loincloth", colour1: "brown"}],
                "head": [{variable: "witchsage"}],
                "neck": [{variable: "collarfamiliar"}],
                "hands": [{variable: "workgloves"}],
                "legs": [{variable: "sheerleggings", colour1: "soft brown"}],
                "feet": [{variable: "lacedupheels", colour1: "brown", colour2: "brown"}]
            },
            {
                "contributor": "Numberjack",
                "upper": [
                    {variable: "scarecrow"},
                ],
                "lower": [
                    {variable: "scarecrow"},
                ],
                "under_upper": [{variable: "camisole", colour1: "white", colour2: "green"}],
                "under_lower": [{variable: "loincloth", colour1: "brown"}],
                "head": [{variable: "witchsage"}],
                "neck": [{variable: "collarfamiliar"}],
                "hands": [{variable: "workgloves"}],
                "legs": [{variable: "sheerleggings", colour1: "soft brown"}],
                "feet": [{variable: "lacedupheels", colour1: "brown", colour2: "brown"}]
            },
            {
                "contributor": "Numberjack",
                "upper": [
                    {variable: "chain tunic", colour1: "forest green", colour2: "forest green"}
                ],
                "lower": [
                    {variable: "chain tunic", colour1: "forest green"}
                ],
                "under_upper": [{variable: "camisole", colour1: "white", colour2: "green"}],
                "under_lower": [{variable: "loincloth", colour1: "brown"}],
                "head": [{variable: "witchsage"}],
                "neck": [{variable: "collarfamiliar"}],
                "hands": [{variable: "workgloves"}],
                "legs": [{variable: "sheerleggings", colour1: "soft brown"}],
                "feet": [{variable: "lacedupheels", colour1: "brown", colour2: "brown"}]
            },
            {
                "contributor": "Numberjack",
                "upper": [{variable: "croppedhoodie", colour1: "green"}],
                "lower": [{variable: "straight trousers", colour1: "olive"}],
                "under_upper": [{variable: "camisole", colour1: "white", colour2: "green"}],
                "under_lower": [
                    {variable: "briefs", colour1: "pale white"},
                    {variable: "plainpanties", colour1: "pale white"}
                ],
                "head": [{variable: "witchsage"}],
                "neck": [{variable: "collarfamiliar"}],
                "hands": [{variable: "workgloves"}],
                "handheld": [{variable: "witch broom", colour1: "gold"}],
                "legs": [{variable: "sheerleggings", colour1: "soft brown"}],
                "feet": [{variable: "wingtips", colour1: "soft brown", colour2: "soft brown"}]
            }
        ],
        "gwylanTown": {
            "contributor": "Numberjack",
            lower_tucked: true,
            "upper": [
                {variable: "cable", colour1: "brown"},
                {variable: "turtleneckjumper", colour1: "white"},
                {variable: "turtleneck", colour1: "white"}
            ],
            "lower": [
                {variable: "slacks", colour1: "black"},
                {variable: "slacks", colour1: "yellow"}
            ],
            "under_upper": [{variable: "corset", colour1: "brown"}],
            "under_lower": [
                {variable: "briefs", colour1: "pale white"},
                {variable: "plainpanties", colour1: "pale white"}
            ],
            "legs": [{variable: "anklesocks", colour1: "pale white"}],
            "feet": [{variable: "work"}]
        },
        "gwylanCold": {
            "contributor": "Numberjack",
            "upper": [{variable: "winterjacket", colour1: "olive", colour2: "tan"}],
            "lower": [
                {variable: "trousers", colour1: "black"},
                {variable: "retro", colour1: "black", colour2: "white"},
                {variable: "retro", colour1: "black", colour2: "black"},
                {variable: "straight trousers", colour1: "black"},
                {variable: "wide leg trousers", colour1: "black", colour2: "steel"}
            ],
            "under_upper": [{variable: "undershirt", colour1: "brown", colour2: "brown"}],
            "under_lower": [
                {variable: "boxers", colour1: "white"},
                {variable: "boyshorts", colour1: "pale white"}
            ],
            "head": [
                {variable: "beanie", colour1: "brown"},
                {variable: "beatnik"},
                {variable: "sou", colour1: "black"},
                {variable: "tam", colour1: "brown", colour2: "black"},
                {variable: "tam", colour1: "brown", colour2: "brown"},
                {variable: "tam", colour1: "black", colour2: "black"}
            ],
            "neck": [{variable: "scarf", colour1: "white"}],
            "hands": [
                {variable: "workgloves"},
                {variable: "mittens", colour1: "black"},
                {variable: "mittens", colour1: "brown"}
            ],
            "legs": [{variable: "anklesocks", colour1: "pale white"}],
            "feet": [
                {variable: "fur_boots", colour1: "grey", colour2: "tan"},
                {variable: "fur_boots", colour1: "brown", colour2: "tan"}
            ]
        },
        "vintageMale": [
            {
                "contributor": "Numberjack",
                "upper": [
                    {variable: "doublebreasted", colour1: "brown", colour2: "pale white"},
                    {variable: "singlebreasted", colour1: "brown", colour2: "pale white"},
                    {variable: "waistcoat", colour1: "wine", colour2: "white"},
                    {variable: "waistcoatlong", colour1: "wine", colour2: "white"},
                    {variable: "waistcoatlapel", colour1: "wine", colour2: "white"},
                    {variable: "waistcoatlonglapel", colour1: "wine", colour2: "white"}
                ],
                "lower": [
                    {variable: "3piecesuit", colour1: "brown"},
                    {variable: "3piecesuit", colour1: "olive"},
                    {variable: "straight trousers", colour1: "olive"},
                    {variable: "puffy", colour1: "olive"},
                    {variable: "puffybloomers", colour1: "black"},
                    {variable: "tuxedo"}
                ],
                "under_lower": [{variable: "briefs", colour1: "pale white"}],
                "neck": [
                    {variable: "bolotie", colour1: "olive", colour2: "bronze"},
                    {variable: "bowtie", colour1: "black"},
                    {variable: "shorttie", colour1: "black", colour2: "black"}
                ],
                "handheld": [
                    {variable: "cane", colour1: "black", colour2: "bronze"},
                    {variable: "cane", colour1: "black", colour2: "steel"}
                ],
                "legs": [
                    {variable: "mensgarters", colour1: "olive", colour2: "blue steel"},
                    {variable: "mensgarters", colour1: "black", colour2: "blue steel"}
                ],
                "feet": [
                    {variable: "wingtips", colour1: "black", colour2: "black"},
                    {variable: "horsebitloafers"},
                    {variable: "cordovanloafers"},
                    {variable: "loafers", colour1: "black"}
                ]
            },
            {
                "contributor": "Numberjack",
                "upper": [{variable: "vintagepantsuit", colour1: "forest green", colour2: "grey"}],
                "lower": [{variable: "vintagepantsuit", colour1: "forest green"}],
                "under_lower": [{variable: "briefs", colour1: "pale white"}],
                "head": [
                    {variable: "bowlerhat", colour1: "forest green", colour2: "black"},
                    {variable: "bowlerhat", colour1: "forest green", colour2: "grey"}
                ],
                "handheld": [
                    {variable: "cane", colour1: "black", colour2: "bronze"},
                    {variable: "cane", colour1: "black", colour2: "steel"}
                ],
                "legs": [
                    {variable: "mensgarters", colour1: "olive", colour2: "blue steel"},
                    {variable: "mensgarters", colour1: "black", colour2: "blue steel"}
                ],
                "feet": [
                    {variable: "wingtips", colour1: "black", colour2: "black"},
                    {variable: "wingtips", colour1: "soft brown", colour2: "soft brown"},
                    {variable: "wingtips", colour1: "light brown", colour2: "light brown"},
                    {variable: "horsebitloafers"},
                    {variable: "cordovanloafers"},
                    {variable: "loafers", colour1: "black"},
                    {variable: "loafers", colour1: "soft brown"},
                    {variable: "loafers", colour1: "light brown"}
                ]
            },
            {
                "contributor": "Numberjack",
                upper_tucked: true,
                "upper": [
                    {variable: "waistcoat", colour1: "russet", colour2: "white", alt: true},
                    {variable: "waistcoatlong", colour1: "russet", colour2: "white", alt: true},
                    {variable: "waistcoatlapel", colour1: "russet", colour2: "white", alt: true},
                    {variable: "waistcoatlonglapel", colour1: "russet", colour2: "white", alt: true}
                ],
                "lower": [
                    {variable: "3piecesuit", colour1: "wine"},
                    {variable: "3piecesuit", colour1: "black"},
                    {variable: "straight trousers", colour1: "olive"},
                    {variable: "straight trousers", colour1: "black"},
                    {variable: "straight trousers", colour1: "blue steel"},
                    {variable: "puffy", colour1: "wine"},
                    {variable: "puffy", colour1: "olive"},
                    {variable: "puffy", colour1: "black"},
                    {variable: "puffybloomers", colour1: "black"},
                    {variable: "puffybloomers", colour1: "wine"},
                    {variable: "puffybloomers", colour1: "olive"},
                    {variable: "tuxedo"}
                ],
                "under_lower": [{variable: "briefs", colour1: "pale white"}],
                "head": [{variable: "newsboy", colour1: "wine"}],
                "neck": [
                    {variable: "bolotie", colour1: "olive", colour2: "bronze"},
                    {variable: "bowtie", colour1: "black"},
                    {variable: "shorttie", colour1: "black", colour2: "black"}
                ],
                "handheld": [
                    {variable: "cane", colour1: "black", colour2: "bronze"},
                    {variable: "cane", colour1: "black", colour2: "steel"}
                ],
                "legs": [
                    {variable: "mensgarters", colour1: "olive", colour2: "blue steel"},
                    {variable: "mensgarters", colour1: "black", colour2: "blue steel"}
                ],
                "feet": [
                    {variable: "wingtips", colour1: "black", colour2: "black"},
                    {variable: "wingtips", colour1: "navy", colour2: "navy"},
                    {variable: "horsebitloafers"},
                    {variable: "loafers", colour1: "navy"}
                ]
            }
        ],
        "vintageFemale": [
            {
                "contributor": "Numberjack",
                "upper": [{variable: "vintageskirtsuit", colour1: "forest green", colour2: "grey"}],
                "lower": [{variable: "vintageskirtsuit", colour1: "forest green"}],
                "under_upper": [{variable: "lacebra", colour1: "pale white"}],
                "under_lower": [{variable: "lacepanties", colour1: "pale white"}],
                "head": [
                    {variable: "bowlerhat", colour1: "forest green", colour2: "black"},
                    {variable: "bowlerhat", colour1: "forest green", colour2: "grey"}
                ],
                "neck": [{variable: "ribbontie", colour1: "black"}],
                "handheld": [
                    {variable: "parasol", colour1: "black", colour2: "grey"},
                    {variable: "cane", colour1: "black", colour2: "steel"},
                    {variable: "naked"}
                ],
                "legs": [
                    {variable: "garterstockings", colour1: "black"},
                    {variable: "garterstockings", colour1: "grey"},
                    {variable: "garterstockings", colour1: "pale white"}
                ],
                "feet": [
                    {variable: "dresssandals", colour1: "black"},
                    {variable: "courtheels", colour1: "black"}
                ]
            },
            {
                "contributor": "Numberjack",
                "upper": [{variable: "gothic", colour1: "white"}],
                "lower": [{variable: "gothic", colour1: "white"}],
                "under_upper": [{variable: "lacebra", colour1: "pale white"}],
                "under_lower": [{variable: "lacepanties", colour1: "pale white"}],
                "head": [
                    {variable: "gothiccrown", colour1: "black", colour2: "black"},
                    {variable: "gothiccrown", colour1: "black", colour2: "white"}
                ],
                "neck": [
                    {variable: "ribbontie", colour1: "white"},
                    {variable: "ribbontielarge", colour1: "white"}
                ],
                "handheld": [
                    {variable: "parasol", colour1: "black", colour2: "grey"},
                    {variable: "cane", colour1: "black", colour2: "steel"},
                    {variable: "naked"}
                ],
                "legs": [
                    {variable: "garterstockings", colour1: "black"},
                    {variable: "garterstockings", colour1: "grey"},
                    {variable: "garterstockings", colour1: "pale white"}
                ],
                "feet": [
                    {variable: "dresssandals", colour1: "black"},
                    {variable: "courtheels", colour1: "black"}
                ]
            },
            {
                "contributor": "Numberjack",
                "upper": [{variable: "shadbelly", colour1: "wine", colour2: "white"}],
                "lower": [{variable: "ruffled long dress", colour1: "light pink", colour2: "white"}],
                "under_upper": [{variable: "lacebra", colour1: "pale white"}],
                "under_lower": [{variable: "lacepanties", colour1: "pale white"}],
                "head": [{variable: "strawflower", colour1: "white"}],
                "handheld": [
                    {variable: "parasol", colour1: "light pink", colour2: "white"},
                    {variable: "floralparasol", colour1: "light pink", pattern: "cream"},
                    {variable: "regal parasol", colour1: "light pink", colour2: "white"},
                    {variable: "naked"}
                ],
                "legs": [{variable: "garterstockings", colour1: "pale white"}],
                "feet": [
                    {variable: "dresssandals", colour1: "black"},
                    {variable: "courtheels", colour1: "black"}
                ]
            }
        ],
        "ritualRobes": {
            "rant": "Oh Gwylan, Gwylan, Gwylan... Why does the story text cals you naked here yet you insist on calling it 'ritual robes' in the gamefiles?" +
                "though I do respect the hat staying on during sex part. That is pretty funny I gotta admit."
        },
    };
}

DefineMacro("custom-nnpc-init-clothing-db", customNNPCClothingInitDb);

function getDefaultClothingArticle(NPCname, setData, target) {
    let data;
    if (NPCname in setup.customNNPC.defaultClothingOverrides && target in setup.customNNPC.defaultClothingOverrides[NPCname]) {
        data = setup.customNNPC.defaultClothingOverrides[NPCname][target];
    } else {
        if (!(target in setData)) {
            return getClothesDataFromId(target, 0);
        }
        data = setData[target][Math.floor(Math.random() * setData[target].length)];
    }

    if (!"variable" in data) {
        V.customNNPC.errorStack.push("Missing clothes variable name:" + JSON.stringify(data));
        console.error("Missing clothes variable name:", data);
        return getClothesDataFromId(target, 0);
    }

    if (target === "under_upper" && data.variable === "tiesidebikini") {
        data.variable = "buntiebikinitop";
    }

    let clothingData = getClothesDataFromVariable(target, data.variable);

    const hasColourOptions = "colour_options" in clothingData && clothingData.colour_options.length > 0;
    const hasAccColourOptions = "accessory_colour_options" in clothingData && clothingData.accessory_colour_options.length > 0;
    const hasPatternOptions = "pattern_options" in clothingData && clothingData.pattern_options.length > 0;

    if (!("colour1" in data) && hasColourOptions) {
        let offset = 0;
        if (clothingData.colour_options.includes("custom")) {
            offset = -1
        }
        clothingData.colour = clothingData.colour_options[Math.floor(Math.random() * (clothingData.colour_options.length + offset))];
    } else if ("colour1" in data && hasColourOptions) {
        clothingData.colour = data.colour1;
    }

    if (hasColourOptions && clothingData.colour_options.includes("custom")) {
        clothingData.custom_colour = "#000000";
    }

    if (!("colour2" in data) && hasAccColourOptions) {
        let offset = 0;
        if (clothingData.accessory_colour_options.includes("custom")) {
            offset = -1
        }
        clothingData.accessory_colour = clothingData.accessory_colour_options[Math.floor(Math.random() * (clothingData.accessory_colour_options.length + offset))];
    } else if ("colour2" in data && hasAccColourOptions) {
        clothingData.accessory_colour = data.colour2;
    }

    if (hasAccColourOptions && clothingData.accessory_colour_options.includes("custom")) {
        clothingData.custom_colour_acc = "#000000";
    }

    if (!("pattern" in data) && hasPatternOptions) {
        let offset = 0;
        if (clothingData.pattern_options.includes("custom")) {
            offset = -1
        }
        clothingData.pattern = clothingData.pattern_options[Math.floor(Math.random() * (clothingData.pattern_options.length + offset))];
    } else if ("pattern" in data && hasPatternOptions) {
        clothingData.pattern = data.pattern;
    }

    if ("integrity" in data) {
        clothingData.integrity = data.integrity;
    }

    if ("alt" in data && data.alt === true && "altposition" in clothingData) {
        clothingData.altposition = data.alt ? "alt" : "none";
    }

    return clothingData;
}

function getClothesDataFromId(type, id) {
    return $.extend(true, {}, setup.clothes[type][id]);
}

function getClothesDataFromVariable(type, variable) {
    return $.extend(true, {}, setup.clothes[type].find(hs => hs.variable === variable));
}

function customNNPCDefaultClothes(setName, NPCname) {
    let targets = [];

    for (const type in setup.clothes) {
        if (type !== "all") targets.push(type);
    }
    let worn = {};

    // Main loop
    let setData;
    if (setName in setup.customNNPC.defaultClothes) {
        if (Array.isArray(setup.customNNPC.defaultClothes[setName])) {
            let index = Math.floor(Math.random() * setup.customNNPC.defaultClothes[setName].length);
            setData = setup.customNNPC.defaultClothes[setName][index];
        } else {
            setData = setup.customNNPC.defaultClothes[setName];
        }
    } else {
        setData = setup.customNNPC.defaultClothes[V.NPCName[V.NPCNameList.indexOf(NPCname)].pronoun === "f" ? "femaleDefault" : "maleDefault"];
        V.customNNPC.errorStack.push("Tried to generate clothes for unknown clothes set: " + setName);
        console.error("Tried to generate clothes for unknown clothes set: " + setName);
    }

    // When I get you Vrel
    if(NPCname in setup.customNNPC.defaultOutfitOverrides && setName in setup.customNNPC.defaultOutfitOverrides[NPCname]) {
        setData = setup.customNNPC.defaultOutfitOverrides[NPCname][setName];
    }

    T.CustomNNPCSetContributor = setData["contributor"];

    for (let i = 0; i < targets.length; i++) {
        const target = targets[i];
        worn[target] = getDefaultClothingArticle(NPCname, setData, target);

        if (target === "under_lower" && NPCname === "Sydney" && setName === "maleSwim1") {
            worn[target] = getClothesDataFromVariable("under_lower", "speedo");
        }
        if (NPCname === "Darryl" && (target === "lower" || target === "upper") && "colour_options" in worn[target] && worn[target]["colour_options"].includes("black")) {
            worn[target].colour = "black";
        }
    }

    if ("neck_tucked" in setData) {
        worn.neck_tucked = setData.neck_tucked;
    } else {
        worn.neck_tucked = false;
    }
    if ("upper_tucked" in setData) {
        worn.upper_tucked = setData.upper_tucked;
    } else {
        worn.upper_tucked = false;
    }
    if ("lower_tucked" in setData) {
        worn.lower_tucked = setData.lower_tucked;
    } else {
        worn.lower_tucked = false;
    }
    if ("altsleeve" in setData) {
        worn.altsleeve = setData.altsleeve;
    } else {
        worn.altsleeve = false;
    }

    V.customNNPC.customClothesSets[NPCname][setName] = worn;
}

function clothingDBGetSydneySwimsuit() {
    switch (V.sydney.swim) {
        case "school":
            if (V.NPCName[0].pronoun === "m") {
                V.NPCList[0].clothes.set = "maleSchoolSwimShirt";
                V.NPCList[0].clothes.upper.name = "swim shirt";
                V.NPCList[0].clothes.lower.name = "school swim shorts";
            } else {
                V.NPCList[0].clothes.set = "femaleSchoolSwim";
                V.NPCList[0].clothes.upper.name = "school swimsuit top";
                V.NPCList[0].clothes.lower.name = "school swimsuit bottoms";
            }
            break;
        case "normal":
            if (V.NPCName[0].pronoun === "m") {
                V.NPCList[0].clothes.set = "maleSwim2";
                V.NPCList[0].clothes.upper.name = "naked";
                V.NPCList[0].clothes.lower.name = "board shorts";
            } else {
                V.NPCList[0].clothes.set = "femaleSwim1";
                V.NPCList[0].clothes.upper.name = "bikini top";
                V.NPCList[0].clothes.lower.name = "bikini bottoms";
            }
            break;
        case "lewd":
            if (V.NPCName[0].pronoun === "m") {
                V.NPCList[0].clothes.set = "maleSwim1";
                V.NPCList[0].clothes.upper.name = "naked";
                V.NPCList[0].clothes.lower.name = "speedo";
            } else {
                V.NPCList[0].clothes.set = "femaleSwim2";
                V.NPCList[0].clothes.upper.name = "microkini top";
                V.NPCList[0].clothes.lower.name = "microkini bottoms";
            }
            break;
        case "crossdress":
            if (V.NPCName[0].pronoun === "f") {
                V.NPCList[0].clothes.set = "maleSwim2";
                V.NPCList[0].clothes.upper.name = "naked";
                V.NPCList[0].clothes.lower.name = "board shorts";
            } else {
                V.NPCList[0].clothes.set = "femaleSwim1";
                V.NPCList[0].clothes.upper.name = "bikini top";
                V.NPCList[0].clothes.lower.name = "bikini bottoms";
            }
            break;
        default:
            break;
    }
    V.NPCName[V.NPCNameList.indexOf("Sydney")].clothes = V.NPCList[0].clothes;
    V.customNNPC.sydney.beachFit = V.NPCList[0].clothes.set;
}

DefineMacro("custom-nnpc-sync-sydney-swimsuit", clothingDBGetSydneySwimsuit);

DefineMacro("custom-nnpc-setup-default-outfit-overrides", function () {
    setup.customNNPC.defaultOutfitOverrides["Jordan"] = {
        "maleRobe": {
            "contributor": "Numberjack",
            "upper": [{variable: "initiate"}],
            "lower": [{variable: "initiate"}],
            "under_lower": [{variable: "chastitybelt"}],
            "head": [{variable: "hoodie", colour1: "white", colour2: "white"}],
            "neck": [
                {variable: "holypendant"},
                {variable: "stonependant"},
                {variable: "holystole", colour1: "white"},
                {variable: "holystole", colour1: "yellow"},
                {variable: "holystolelong", colour1: "white"},
                {variable: "holystolelong", colour1: "yellow"}
            ],
            "feet": [{variable: "sandals", colour1: "brown"}]
        },
        "femaleRobe": {
            "contributor": "Numberjack",
            "upper": [{variable: "initiate"}],
            "lower": [{variable: "initiate"}],
            "under_lower": [{variable: "chastitybelt"}],
            "head": [{variable: "hoodie", colour1: "white", colour2: "white"}],
            "neck": [
                {variable: "holypendant"},
                {variable: "stonependant"},
                {variable: "holystole", colour1: "white"},
                {variable: "holystole", colour1: "yellow"},
                {variable: "holystolelong", colour1: "white"},
                {variable: "holystolelong", colour1: "yellow"}
            ],
            "feet": [{variable: "sandals", colour1: "brown"}]
        },
    };

    setup.customNNPC.defaultOutfitOverrides["Zephyr"] = {
        "maleDefault": {
            "contributor": "Numberjack",
            "upper": [{variable: "gothicjacket"}],
            lower_tucked: true,
            "lower": [{variable: "straight trousers", colour1: "olive"}],
            "under_upper": [{variable: "chestwrap"}],
            "under_lower": [{variable: "bloomers", colour1: "white"}],
            "head": [
                {variable: "wide brim sun hat", colour1: "black", colour2: "white"},
                {variable: "fur beret", colour1: "black"},
                {variable: "large beret", colour1: "black"}
            ],
            "hands": [{variable: "longleathergloves", colour1: "black"}],
            "legs": [{variable: "elegantkneehigh", colour1: "white"}],
            "handheld": [{variable: "cane", colour1: "black", colour2: "steel"}],
            "feet": [{variable: "kneefurboots", colour1: "black", colour2: "black"}],
        },
        "femaleDefault": {
            "contributor": "Numberjack",
            "upper": [{variable: "gothicjacket"}],
            lower_tucked: true,
            "lower": [{variable: "straight trousers", colour1: "olive"}],
            "under_upper": [{variable: "chestwrap"}],
            "under_lower": [{variable: "bloomers", colour1: "white"}],
            "head": [
                {variable: "wide brim sun hat", colour1: "black", colour2: "white"},
                {variable: "fur beret", colour1: "black"},
                {variable: "large beret", colour1: "black"}
            ],
            "hands": [{variable: "longleathergloves", colour1: "black"}],
            "legs": [{variable: "elegantkneehigh", colour1: "white"}],
            "handheld": [{variable: "cane", colour1: "black", colour2: "steel"}],
            "feet": [{variable: "kneefurboots", colour1: "black", colour2: "black"}],
        }
    }
});

DefineMacro("custom-nnpc-setup-scene-tweaks", function(){
    setup.customNNPC.sceneTweaks["Robin"] = [
        {
            passage: "Garden Robin Crown",
            exact: true,
            callback(worn){
                worn["head"] = $.extend(true, {}, setup.clothes["head"].find(hs => hs.variable === "flower"));
            }
        },
        {
            passage: "Garden Robin Help" ,
            exact: true,
            callback(worn){
                T.modeloptions.prop = customNNPC_compileProp("watering can");
            }
        }
    ];

    setup.customNNPC.sceneTweaks["Gwylan"] = [
        {
            passage: "Brown Fox",
            exact: false,
            callback(worn){
                worn["face"] = $.extend(true, {}, setup.clothes["face"].find(hs => hs.variable === "foxmask"));
            }
        }
    ];

    setup.customNNPC.sceneTweaks["Avery"] = [
        {
            passage: "Avery Cards",
            exact: false,
            callback(worn){
                if(V.location === "estate"){
                    worn["face"] = $.extend(true, {}, setup.clothes["face"].find(hs => hs.variable === "islandermask"));
                }
            }
        }
    ];
});