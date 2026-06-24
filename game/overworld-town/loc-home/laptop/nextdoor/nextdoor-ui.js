DefineMacroS("nextdoor-ui-icon", function(NPCname){
    const normalized_name = NPCname.toLowerCase().replace(" ", "_").replace(/[^a-zA-Z0-9_]/g, '');

    return `<img src="img/nextdoor/icons/${normalized_name}.png" class="nextdoor-pfp">`;
});


DefineMacroS("nextdoor-get-display-time", function(timestamp) {
    let time = new DateTime(Time.startDate.timeStamp + timestamp);

    let dayParticle = "th";

    if(time.monthDay === 1){
        dayParticle = "st";
    }else if(time.monthDay === 2){
        dayParticle = "nd";
    }else if(time.monthDay === 3){
        dayParticle = "rd";
    }

    return `${("00" + time.hour).slice(-2)}:${("00" + time.minute).slice(-2)}, ${time.weekDayName.substring(0,3)}. ${time.day}${dayParticle} ${time.monthName.substring(0,3)}. ${time.year}`;
});

DefineMacroS("nextdoor-get-attachment", function(attachment) {
    if(attachment === ""){
        return "";
    }

    return `<img src="img/nextdoor/attachments/${attachment}.png" class="nextdoor-attachment">`;
});