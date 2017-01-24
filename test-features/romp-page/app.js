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
  $("#activity-form").append(
    "<h5 value= "+time+" id='"+act+"' class='waves-effect waves-orange btn-flat'>"+
    settime+"  "+act+"</h5><div id= 'actbreak'><br></div><div id = '"+act+"edit' value = "+1+"></div>"
  );
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
  return settime
}


function activityEdit(actID, timeVal){
    console.log("Edit Function Working");
    $("#"+actID).click(function(){
      console.log("edit button  working");
      var edit = $("#"+actID+"edit")[0].childElementCount;
      if (actID!=="inputform" && timeVal!=="inputform" && edit < 1){
        $("#"+actID+"edit").append("<form id = '"+actID+"form' action='action_page.php'>"+
        "Time:<br><input type='time' name='time' id = 'edittime' value="+timeVal+
        ">Activity:<br><input type='text' id ='editact' "+
        "name='act' value="+actID+"></form> ");
      }else if(edit >= 1){
        var editTime = $("#edittime").val();
        var editAct = $("#editact").val();
          if (editTime !== timeVal ||editAct !== actID ) {
            $("#"+actID).remove();
            $("#"+actID+"edit").remove();
            $("#actbreak").remove();
            activityButton(editAct,editTime);
            activityEdit(editAct,editTime);
          }
        $("#"+actID+"form").remove();
      }


    });
  }


});
