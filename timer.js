const M = Bridge.getScopeOf("module");
const AS = Bridge.getScopeOf("autoselfcheck")

var loop=0;
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    if(sender=="나태양"&&msg=="!시작")
    {
      replier.reply("시작합니다");
        var hour;
        var min;
        var sec;
        loop=1;
        while(loop)
        {
          let today = new Date();
            hour = today.getHours();
            min = today.getMinutes();
            if(hour==7&&min==55)
            {
                replier.reply(AS.Autoselfcheck_Function());
                replier.reply(M.Meal_Function(0,0,0));
                replier.reply(M.Timetable_Function(0));
            }
            else if(hour==12&&min==0) replier.reply(M.Meal_Function(0,2,0));
            else if(hour==17&&min==10) replier.reply(M.Meal_Function(0,2,0));
            
            Log.debug(M.numberPad(String(hour),2) + M.numberPad(String(min),2));
            java.lang.Thread.sleep(1000*60);
        }
    }
    else if(sender=="나태양"&&msg=="!정지")
    {
        while(loop) loop=0;
        replier.reply("정지합니다");
    }
}