"use strict";

$( document ).ready(function(){
  console.log("jquery working!");
//nav button listener
  $(".button-collapse").sideNav({
    menuWidth: 750,
    draggable: true
  });//end of Nav listener

$("#otterTitle").click(function(){
  console.log("OTTERS")
  $('.button-collapse').sideNav('show');

})
  rompClick();
  tripClick();
//sign in button event listener
  $("#signin").click(function(){
      if($("#signin-form").html()===""){
        signIn("","");
      }else{
        signIn($("#username").val(),$("#password").val());
      }
  });//End of sign in even listener


//sign in function for the username password
function signIn(username,password){
    event.preventDefault();
      //builds signIN form
      if($("#signin-form").html()===""){
        $("#signin-form").html("<form action='action_page.php' id='form-in'>"+
        "Username:<input type='text' name='username' id = 'username' value="+username+
        "><p>Password:</p><input type='password' id ='password' "+
        "name='password' value="+password+"></form> ");
        }
        //closes sign UP form
      if($("#signup-form").html()!==""){
        $("#signup-form").html('');
      }else{
          var data = $("#form-in").serializeArray().reduce(function(obj,item){
            obj[item.name]=item.value;
            return obj;
          },{});
          if (data.password ===""){
            $("#password").attr("placeholder", "Please provide password");
          }
          if(data.username ===""){
            $("#username").attr("placeholder", "Please provide username");
          }
          if (data.username !==""&&data.password !==""){
            var dataIn = data;

            console.log("this is dataIn ", dataIn);

      //this route sends and compares passwords
          $.post('/verify', dataIn, function(data){
            console.log("this is data post", data);
            window.location = "/page2";  //sometimes have to handle redirect on client side for some reason
          });  //ends route sends and compares passwords

        }//last if statement passing the object


//WRITE CODE TO SEND THE NEW MEMBERID TO LOCAL STORAGE
      }//end of else statments for data object

    //this route puts romp data in table
      $.get('/', romp, function(rompArr){
        console.log(rompArr);
      });  //ends route putting romp data in table

  }//end of Sign In



//signup eventlisenter
  $("#signup").click(function(){
    event.preventDefault();
    //builds signUP form
    if($("#signup-form").html()===""){
      $("#signup-form").html("<form action='action_page.php' id='form-in'>"+
      "Username:<br><input type='text' name='username' id = 'username' value="+
      "><br>Password:<br><input type='password' id ='password' "+
      "name='password' value=''><br>Confirm Password:<br><input type='password' id ='confirmpassword' "+
      "name='confirmpassword' value=''><br>First Name:<br><input type='text' id ='firstname' "+
      "name='firstname' value=''><br>Last Name: <br> <input type = 'text' id = 'lastname'name='lastname' value=''>"+
      "Email:<br><input type='text' id ='email' "+
      "name='email' value=''></form> ");
      }
      //closes signIN form
    if($("#signin-form").html()!==""){
      $("#signin-form").html('');
    }else{
        var data = $("#form-in").serializeArray().reduce(function(obj,item){
          obj[item.name]=item.value;
          return obj;
        },{});
        if (data.password ===""){
          $("#password").attr("placeholder", "Please provide password");
        }
        if(data.username ===""){
          $("#username").attr("placeholder", "Please provide username");
        }
        if (data.confirmpassword !== data.password || data.password ===""){
          $("#confirmpassword").attr("placeholder", "Password does not match");
        }
        if(data.firstname ===""){
          $("#firstname").attr("placeholder", "Please provide first name");
        }
        if(data.lastname ===""){
          $("#lastname").attr("placeholder", "Please provide last name");
        }
        if(data.email ===""){
          $("#email").attr("placeholder", "Please provide email");
        }
        if (data.username !==""&&data.password !==""&&data.confirmpassword===data.password&&
            data.firstname !==""&&data.lastname !==""&&data.email !==""){
            var dataUp = data;
            console.log("this is dataUp");
            console.log(dataUp);
            console.log("this is firstname");
            console.log(dataUp.firstname);

        //this route adds dataUp data to members table
            $.post('/members', dataUp, function(data) {
              console.log(data);
            });  //closes adds dataUp data to members table

        //this area will send data to local storage for use within the app
            localStorage.setItem('lsMemberUsername', dataUp.username);
            // localStorage.setItem('lsMemberAvatar', dataUp.avatar);
            localStorage.setItem('lsMemberFirstName', dataUp.firstname);
        //this closes area where member data is sent to local storage

            signIn(dataUp.username, dataUp.password);
          }//end of last if statement
      }//end of else statement for data object
}); //end of sign up


  var i=$("#romplist")[0].childNodes.length;
    createRomp(i);

//creates a group
function createRomp(i){
    $("#create-romp"+i).click(function(){
        event.preventDefault();
          var romp = $("#rompname").val();
          if (romp!==""){
            //takes in the romp name and create form
            rompForm(romp);
        }
      });
}

//creates a member form for the romp
function rompForm(romp){
      console.log("rompform");
      $("#new-romp").append("<h3 class='newRompName'>"+romp+"</h3>"+
      "<form id='member-form'>"+
      "<ul id='memberlist'></ul>"+"<h3 class='otterNameEntered'>Enter otter name:</h3>"+
      "<input id = 'membername' type='text' name='membername' autofocus='autofocus' value=''><br>"+
      "</form>");
    $("#create-romp"+i).remove();
    $("#form").remove();

    $(".button").append("<a id = 'addmember' class='waves-effect"+
    " waves-light btn'>Add Otter</a>"+"<a id = 'confirmromp' class='waves-effect"+
    " waves-light btn'>Confirm This Romp</a>");

    addOtter(romp);
}  //ends rompForm

  function addOtter(romp){
    var otterArr = [];
    $("#addmember").click(function(){
      event.preventDefault();
        var otter = $("#membername").val();
        $("#memberlist").append(  "<li class='otterLI'>Otter"+ " " +otter+"</li>");
        $("#membername").val("");
        otterArr.push(otter);

    //pushing latest otterArr to localStorage
    localStorage.setItem('lsOtterArray', otterArr);
    //closing pushing latest otterArr to localStorage

  });  //this closes addmember.click

//this is garbage data for following post
      var newMember = {
        rompID: 29,
        memberID: 10
      };
//this is garbage data for following post

  //this route sends FK data to members_romps_join table
      $.post('/mem_romps_join', newMember, function(data) {
        console.log(data);
      }) //this closes post
  //this closes route sends FK data to members_romps_join table

    $("#confirmromp").click(function(){

      confirm(romp, otterArr)
      });

  }   //this closes function addOtter

//WRITE A FUNCTION THAT GETS ROMPARRAY FROM LOCAL STORAGE AND LOOP THROUGH CALLING CONFIRM function
  //confirm romp to the list

  $("#joinRomp").click(function(){

  });  //this closes #joinRomp


  function confirm(romp, otterArr){
//WRITE A CODE THAT GETS ROMPARRAY FROM LOCAL STORAGE
//WRITE A CODE THAT PUSHES ROMPNAME INTO ROMPARRAY
//WRITE A CIDE THAT SETS ROMPARRAY ON LOCAL STORAGE
    var rompName = {
      name:romp
    }

    confirmPost(rompName)

      event.preventDefault();

      //appending romps to the list
        $("#romplist").append("<div class = 'rompBut'><a id = '"+romp+"' style = ' font-size: 300%; width:100%; padding:1%; height: auto;' class='waves-effect"+
        " waves-light   btn'>"+romp+"</a></div><br>");
        $(".romp-content").remove();
        i=$("#romplist")[0].childNodes.length;
        $(".button").append("<div class='romp-content'>"+
          "<form id='form'>"+
            "<h3 class=>Romp Name:</h3>"+
            "<input id = 'rompname' type='text' name='rompname' value= ''><br>"+
          "</form>"+
          "<div id='new-romp'></div>"+
          "<div class='button'>"+
            "<a id = 'create-romp"+i+"' style = ' font-size: 300%; padding:3%; height:auto; width:100%; ' class='waves-effect waves-light btn'>Create Romp</a>"+
          "</div>"+
        "</div>");
        confirmPost(rompName)
        createRomp(i);
        rompClick();
  }//end of function confirm

function confirmPost(rompName){
  $.post('/romps', rompName, function(data) {
    console.log(data);
  })
}  //closes function confirmPost

//listens to the romp being clicked
function rompClick(){
  $(".rompBut").on("click", function(){
    event.preventDefault();
    var romp = $(this).find("a").attr("id");
    $("#rompTitle").html(romp+" Romp")
    .css("border-radius", "0%");
  });
}//end of rompClick


//activity code:
var time;
  var act;
  createActivity();
  addTrip();

//creates an activity to the list
function createActivity(){
  $("#activity").click(function(){
      event.preventDefault();
      time = $('#time').val();
      act = $('#act').val();
//creates a form for the activity
    if($("#activity-form").html()===""||time===undefined || act === undefined){
          $("#activity-form").append("<form id = 'inputform' action='action_page.php'>"+
          "<h3>Time:</h3><br><input autofocus type='time' name='time' id = 'time' value='' "+
          "><h3>Activity:</h3><br><input type='text' id ='act' "+
          "name='act' value='' autofocus></form> ");

           time = $('#time').val();
           act = $('#act').val();
         }else if(time==="" || act === "" ){
          $("#activity-form").append("");
          $("#inputform").remove();
        }else{
          //pass the inputed time and activity into the next function
               time = $('#time').val();
               act = $('#act').val();
               var timeAct = {
                 timeOfAct: time,
                 actName: act
               };

          //this route sends data to activities table
             $.post('/activities', timeAct, function(data) {
               console.log(data);
             });
          //closes route sends data to activities table

          //fake data  fake data  fake data
             var bzsObj = {
              bzTrip: 25,
              bzAct: 14
             }
          //fake data  fake data  fake data

          //this route sends FK to trip_activity_join
             $.post('/trip_activity_join', bzsObj, function(data) {
               console.log(data);
             });
          //closes route sends FK to trip_activity_join

          $("#inputform").remove();
        activityButton(act,time);
        activityEdit(act,time);
      }
    });
  }//end of function createActivity

//this creates the buttons once the activity and time have been sent
function activityButton(act,time){
  var settime = timeSet(time);
  var actID = actionID(act);
  $("#activity-form").append(
    "<div class = 'buttonAct' value="+time+"><h2 value = "+time+" id='"+actID+"' class='waves-effect waves-light btn' >"+
    settime+"  "+act+"</h2><div id= 'actbreak'><br></div><div id = '"+actID+"edit' value = "+1+"></div></div>"
  );

  var $buttons = $(".buttonAct");
  var child = $buttons[0].innerHTML;

  if($buttons.length>1){
    sortButtons($buttons);
  }
}//end of function activityButton

// this sorts the buttons once they have been added or edit
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
        event.preventDefault();
        var act = $(this).find("h2").attr("id");
        var timeVal=$(this).find("h2").attr("value");
        activityEdit(act, timeVal);
      });
  }//end of function sortButtons

//create the activity into a proper ID
function actionID(act){
    for(var i = 0; i < act.length; i++) {
     act = act.replace(" ", "_");
    }
    return act;
}//end of function actionID

//sets the time from military to 12 hour clock
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
}//end of function timeSet



//this will edit the activity
function activityEdit(act, timeVal){
    var actID = actionID(act);
    $("#"+actID).click(function(){
      event.preventDefault();
      var edit = $("#"+actID+"edit")[0].childElementCount;
      if (actID!=="inputform" && timeVal!=="inputform" && edit < 1){
//modify activity table
    var actTime = {
      // oldAct: oldActID
      act: actID,
      time: timeVal
    } //this closes object actTime
    $.post('/modActivity', actTime, function(data) {
      console.log(data);
    });
        $(".editform").remove();
        //creates the edit form
        $("#"+actID+"edit").append("<form class = 'editform' id = '"+actID+"form' action='action_page.php'>"+
        "<h3>Time:</h3><br><input  style = 'font-size:350%;' type='time' name='time' id = 'edittime' value="+timeVal+
        "><h3>Activity:</h3><br><input style = 'font-size:350%;' type='text' id ='editact' "+
        "name='act' value='"+act+"'></form> ");
      }else if(edit >= 1){
        var editTime = $("#edittime").val();
        var editAct = $("#editact").val();
          if (editTime !== timeVal ||editAct !== act ) {
            var removeItem=this;
            $(this).parent().remove();
            activityButton(editAct,editTime);
            activityEdit(editAct,editTime);
          }
        $("#"+actID+"form").remove();
      }
    });
  }//end of function activityEdit

//add a trip
function addTrip(){
    $("#addtrip").click(function(){
      event.preventDefault();
      console.log($("#tripform")[0].innerText)
      if ($("#tripform")[0].innerText===""){
        console.log("no form")
        //creates the trip form
        $("#tripform").append("<h3>Trip Name:</h3><br><input type='name' name='trip' id = 'tripname' value='' autofocus>"+
        "<br><h3>Trip Location:</h3><br><input type='name' name='location' id = 'location' value=''>"+
        "<br><h3>Trip Date:</h3><br><input type='date' name='date' id = 'date' value=''>");

      }else{
        var tripname = $("#tripname").val();
        var tripLocation = $("#location").val();
        var tripDate = $("#date").val();
        console.log(tripDate);

        var tripObj = {
          name: tripname,
          location: tripLocation,
          date: tripDate
        }

    //this route created row on trips table
        $.post('/trips', tripObj, function(data) {
          console.log(data);
        });
    //closes route created row on romp_trips table

    //fake data  fake data  fake data
        var rmpTrp = {
          rmpName: 29,
          trpName: 25
        };
    //fake data  fake data  fake data

    //this route sends FK on romp_trips table
        $.post('/romp_trips', rmpTrp, function(data) {
          console.log(data);
        });
    //this route sends FK on romps_trips table


        tripList(tripDate, tripname)

        tripMap(tripLocation, tripname, tripDate);
        $("#tripform").html("");
      } //ends else
    });  //end of addTrip.click
  }//end of function addTrip


function tripList(tripDate, tripname){
          $("#triplist").append("<li id = '"+tripDate+tripname+"' class = 'rowlist'><div class ='tripButt'><div class = 'tripdButt'><h3 value = 0 id= '"+tripname+
        "' class='waves-effect waves-teal btn-flat'>"+tripname+" "+ tripDate + "</h3></div></div></li>");
}//end of function tripList


//inputs the trip map
    function tripMap(place, tripID, dateID){
        $.get("https://maps.googleapis.com/maps/api/geocode/json?address="+place+"&key=AIzaSyAFSPs5znb5ggZ7ZyajBCJMdBiKEXV6UG0", function(town){
          var googleTown = town.results[0].formatted_address;
          $("#"+dateID+tripID).append("<a href='https://www.google.com/maps/place/"+googleTown+"' target='_blank'><img src = 'images/gps.png' style = 'width:60px;'></a>");
        });
        tripClick();
    }//end of function tripMap

      //listens to the trip
      function tripClick(){
      $(".tripButt").click(function(){
        event.preventDefault();
        var tripID = $(this).find("h3").attr("id");
        $("#selectTripHeading").html(tripID+" Trip");

      });//end of .tripButt.click


      // $(".tripdButt").on("dblclick",function(){
      //   event.preventDefault();
      //   var buttonClick = $(this).find("h3")
      //   var tripID = buttonClick.attr("id");
      //   var valueT = $("#"+tripID).attr("value");
      //   if (valueT==="0"){
      //     $("#"+tripID).append("<button class = 'delete' type='button'>Delete "+tripID+"</button>");
      //     $("#"+tripID).attr("value",1);
      //     deleteButton(tripID);
      //   }else{
      //     $(".delete").remove();
      //     $("#"+tripID).attr("value",0);
      //   }
      //
      // });

    }//end of function tripClick

    // function deleteButton(trip){
    //   $(".delete").click(function(){
    //     console.log($(this).parent("li"));
    //   });
    // }



}); //end of document
