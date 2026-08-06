const ONEDAY = 86400;

function rollForExpEventTimestamp(timestamp){
    const deltaT = V.timeStamp - timestamp;
    const dayCount = Math.floor((deltaT / ONEDAY));
    let chance = 1 - (Math.exp(dayCount)/100);

    return Math.random() > chance;
}

function npcIsCurrentlyBanned(NPCname){
    return V.nextdoor.npcBanned[NPCname].status ?? false;
}

DefineMacro("nextdoor-track-event", function (){
    let potentialMessages = setup.nextdoorMessages.filter(msg => msg.passage === V.passage || msg.passage === "NextDoor Random");

    // New messages
    for(let i = 0; i < potentialMessages.length; i++){
        if("condition" in potentialMessages[i] && ! potentialMessages[i].condition()){
            continue;
        }
        if(npcIsCurrentlyBanned(potentialMessages[i].account)){
            continue;
        }
        if("chance" in potentialMessages[i] && (Math.random() > (potentialMessages[i].chance / 100))){
            continue;
        }

        V.nextdoor.messageHistory.push({
            "textContent" : potentialMessages[i].textContent(),
            "account" : potentialMessages[i].account,
            "banned": false,
            "timestamp":  V.timestamp + ("deltatime" in potentialMessages[i] ? potentialMessages[i].deltaTime : 0),
            "bannable": ("bannable" in potentialMessages[i] ? potentialMessages[i].bannable : false),
            "attachment": ("attachment" in potentialMessages[i] ? potentialMessages[i].attachment() : ""),
        });
    }

    //Only do one check per day
    if(Time.days <= V.nextdoor.lastBanCheck){
        return;
    }

    V.nextdoor.lastBanCheck = Time.days;

    // Ban characters
    let bannableMessages = V.nextdoor.messageHistory.filter(msg => msg.bannable === true && !msg.banned);
    for(let i = 0; i < bannableMessages.length; i++){
        // If character has gotten banned off of another message
        if(rollForExpEventTimestamp(bannableMessages[i].timestamp)){
            const NPCName = bannableMessages[i].account;

            bannableMessages[i].banned = true;
            V.nextdoor.npcBanned[NPCName].status = true;
            V.nextdoor.npcBanned[NPCName].timestamp = V.timestamp;
            V.nextdoor.npcBanned[NPCName].count += 1;
        }
    }

    // Unban characters
    for(let i = 0; i < V.NPCNameList.length; i++){
        const NPCName = V.NPCNameList[i];

        if( ! npcIsCurrentlyBanned(NPCName)){
            continue;
        }

        if(! rollForExpEventTimestamp(V.nextdoor.npcBanned[NPCName].timestamp) ){
            continue;
        }

        V.nextdoor.npcBanned[V.NPCNameList[i]].status = false;

        let unbanMessage = setup.nextdoorMessages.find(msg => msg.passage === "Nextdoor Unbanned" && msg.account === NPCName);

        if(unbanMessage){
            V.nextdoor.messageHistory.push({
                "textContent" : unbanMessage.textContent(),
                "account" : NPCName,
                "banned": false,
                "timestamp": V.timestamp + ("deltatime" in potentialMessages[i] ? potentialMessages[i].deltaTime : 0),
                "bannable": ("bannable" in potentialMessages[i] ? potentialMessages[i].bannable : false)
            });
        }
    }
});