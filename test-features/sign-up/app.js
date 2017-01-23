
$(function(){
  $("#signin").click(function(){
    event.preventDefault();
    if($("#signin-form").html()===""){
    $("#signin-form").html("<form action='action_page.php' id='form-in'>"+
    "Username:<br><input type='text' name='username' id = 'username' value="+
    "><br>Password:<br><input type='password' id ='password' "+
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
      console.log(dataUp);

    }
  }
  });


});
