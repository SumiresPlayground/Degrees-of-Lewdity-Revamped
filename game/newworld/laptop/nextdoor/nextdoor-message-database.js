DefineMacro("setup-nextdoor-message-db", function(){
    setup.nextdoorMessages = [
        {
            passage: "Whitney Maths Oral",
            account: "Whitney",
            deltaTime : 3600,
            textContent(){
                return `The whore just gave me head in math class lmaoooooooooooo`;
            },
            bannable: true,
        },
        {
            passage: "Whitney Maths Oral",
            account: "Kylar",
            deltaTime : 3600*3,
            condition() {
                return C.npc.Kylar.love > 10;
            },
            textContent(){
                return `Sunset flower: a poem dedicate to my ${C.npc.Kylar.love < 60 ? "muse" : "love"}`;
            },
        },
        {
            passage: "Nextdoor Unbanned",
            account: "Whitney",
            textContent(){
                return `LMAO THEY BANNED ME FOR THIS, anw check this shit out:`;
            },
            attachment(){
                if(C.npc.Whitney.gender === 'm') return "whitney_dickpic_" + C.npc.Whitney.skincolour;
                else return "whitney_vaginapic_" + C.npc.Whitney.skincolour;
            },
            bannable: true,
        },
        {
            passage: "NextDoor Random",
            account: "Kylar",
            chance: "50", // in percent, every passage
            condition() {
                return V.nextdoor.blockList.includes("Kylar");
            },
            textContent(){
                const potentialMessages = [
                    "I'll do anything my love please",
                    "I am nothing without them...",
                    "Don't leave me alone..."
                ];

                return `${potentialMessages[Math.floor(Math.random() * potentialMessages.length)]}`;
            }
        }
    ];
});

DefineMacroS("nextdoor-get-display-name", function(NPCName){
   switch(NPCName){
       case "Whitney":
            return "Whitney6969"
       default:
           return NPCName;
   }
});