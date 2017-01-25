$(function(){
  var time;
  var act;
  createActivity();

function createActivity(){
  $("#activity").click(function(){
      event.preventDefault();
      time = $('#time').val();
      act = $('#act').val();
        if($("#activity-form").html()===""||time===undefined || act === undefined){
          $("#activity-form").append("<form id = 'inputform' action='action_page.php'>"+
          "Time:<br><input type='time' name='time' id = 'time' value=''"+
          ">Activity:<br><input type='text' id ='act' "+
          "name='act' value=''></form> ");
           time = $('#time').val();
           act = $('#act').val();
         }else if(time==="" || act === "" ){
          $("#activity-form").append("");
          $("#inputform").remove();
        }else{
             time = $('#time').val();
             act = $('#act').val();
        $("#inputform").remove();
      activityButton(act,time);
      activityEdit(act,time);
    }
  });
}


function activityButton(act,time){
  var settime = timeSet(time);
  var actID = actionID(act);
  $("#activity-form").append(
    "<div class = 'buttonAct' value="+time+"><h4 value = "+time+" id='"+actID+"' class='waves-effect waves-orange btn-flat'>"+
    settime+"  "+act+"</h4><div id= 'actbreak'><br></div><div id = '"+actID+"edit' value = "+1+"></div></div>"
  );

  var $buttons = $(".buttonAct");
  var child = $buttons[0].innerHTML;

  if($buttons.length>1){
    sortButtons($buttons);

  }


  }

function sortButtons($buttons){
    $(".buttonAct").remove();
    $buttons.sort(function(a,b){
      if(a.innerHTML.substring(11,16) < b.innerHTML.substring(11,16))
        return -1;
      if(a.innerHTML.substring(11,16) > b.innerHTML.substring(11,16))
        return 1;
      return 0;
    });
    console.log($buttons);

    for (var i = 0; i < $buttons.length; i++) {
      $("#activity-form").append($buttons[i].outerHTML);
    }

    $(".buttonAct").on("click", function(){
    var act = $(this).find("h4").attr("id");
    var timeVal=$(this).find("h4").attr("value");
    activityEdit(act, timeVal);
    });

}


function actionID(act){
    for(var i = 0; i < act.length; i++) {
     act = act.replace(" ", "_");
    }
    return act;
}

function timeSet(time){
  var hour = Number(time[0]+time[1]);
  if (hour>=12){
    if (hour !== 12){
      hour -=12;
    }
    var settime = hour+time[2]+time[3]+time[4]+" PM";
  }else{
    if (hour === 0){
      hour = 12;
    }
    settime = hour+time[2]+time[3]+time[4]+" AM";
  }
  return settime;
}




function activityEdit(act, timeVal){
    var actID = actionID(act);
    $("#"+actID).click(function(){
      var edit = $("#"+actID+"edit")[0].childElementCount;
      if (actID!=="inputform" && timeVal!=="inputform" && edit < 1){
        $(".editform").remove();
        $("#"+actID+"edit").append("<form class = 'editform' id = '"+actID+"form' action='action_page.php'>"+
        "Time:<br><input type='time' name='time' id = 'edittime' value="+timeVal+
        ">Activity:<br><input type='text' id ='editact' "+
        "name='act' value='"+act+"'></form> ");
      }else if(edit >= 1){
        var editTime = $("#edittime").val();
        var editAct = $("#editact").val();
          if (editTime !== timeVal ||editAct !== act ) {
            var removeItem=this;
            console.log(this)
            $(this).parent().remove();
            activityButton(editAct,editTime);
            activityEdit(editAct,editTime);
          }
        $("#"+actID+"form").remove();
      }


    });
  }

});
