"use strict";

$( document ).ready(function(){
  console.log("jquery working!");
  $(".button-collapse").sideNav({
    menuWidth: 750,
    draggable: true
  });



  $("#signin").click(function(){
    event.preventDefault();
    if($("#signin-form").html()===""){
    $("#signin-form").html("<form action='action_page.php' id='form-in'>"+
    "Username:<input type='text' name='username' id = 'username' value="+
    "><p>Password:</p><input type='password' id ='password' "+
    "name='password' value=''></form> ");
    if($("#signup-form").html()!==""){
    $("#signup-form").html('');
    }
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
      console.log(dataIn);

    }
  }
  });

  $("#signup").click(function(){
    event.preventDefault();
    if($("#signup-form").html()===""){
    $("#signup-form").html("<form action='action_page.php' id='form-in'>"+
    "Username:<br><input type='text' name='username' id = 'username' value="+
    "><br>Password:<br><input type='password' id ='password' "+
    "name='password' value=''><br>Confirm Password:<br><input type='password' id ='confirmpassword' "+
    "name='confirmpassword' value=''><br>First Name:<br><input type='text' id ='firstname' "+
    "name='firstname' value=''><br>Last Name: <br> <input type = 'text' id = 'lastname'name='lastname' value=''>"+
    "Email:<br><input type='text' id ='email' "+
    "name='email' value=''></form> ");
    if($("#signin-form").html()!==""){
      $("#signin-form").html('');
    }
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

    $.post('/members', dataUp, function(data) {
      console.log(data);
    })



    }
  }
  });

// AUSTINS CODE

var i=$("#romplist")[0].childNodes.length;
createRomp(i);


function createRomp(i){
  $("#create-romp"+i).click(function(){
      event.preventDefault();
        var romp = $("#rompname").val();
        if (romp!==""){
          rompForm(romp);
          addOtter();
          confirm(romp);
      }
    });
}


function rompForm(romp){
  console.log("rompform");
  $("#new-romp").append("<h3>"+romp+"</h3>"+
  "<form id='member-form'>"+
  "<ul id='memberlist'></ul>"+"<h3>Otter name:</h3>"+
  "<input id = 'membername' type='text' name='membername' value='' style='font-size: 350%;'><br>"+
  "</form>");
$("#create-romp"+i).remove();
$("#form").remove();
$(".button").append("<a id = 'addmember' class='waves-effect"+
" waves-teal btn-flat' style='font-size: 300%;'>Add Otter</a>"+"<a id = 'confirmromp' class='waves-effect"+
" waves-teal btn-flat' style='font-size: 300%;'>Confirm Romp</a>");
}

  function addOtter(){
    $("#addmember").click(function(){
      event.preventDefault();
        var otter = $("#membername").val();
        $("#memberlist").append(  "<li style='font-size: 350%;'>Otter"+ " " +otter+"</li>");
        $("#membername").val("");
      });
  }

  function confirm(romp){
    $("#confirmromp").click(function(){
      event.preventDefault();
      $("#romplist").append("<a id = '"+romp+"' class='waves-effect"+
      " waves-teal btn-flat' style='font-size: 300%;'>"+romp+"</a><br>");
      $(".romp-content").remove();
      i=$("#romplist")[0].childNodes.length;
      $("#romp-form").append("<div class='romp-content'>"+
        "<form id='form'>"+
          "<h3>Romp Name:</h3>"+
          "<input id = 'rompname' type='text' name='rompname' value= '' style='font-size: 350%;'><br>"+
        "</form>"+
        "<div id='new-romp'></div>"+
        "<div class='button'>"+
          "<a id = 'create-romp"+i+"' class='waves-effect waves-teal btn-flat' style='font-size: 300%;'>Create Romp</a>"+
        "</div>"+
      "</div>");
      createRomp(i);
    });
  }


})
