$(function(){
  $("#signin").click(function(){
    event.preventDefault();
    if($("#signin-form").html()===""){
    $("#signin-form").html("<form action='action_page.php'>"+
    "Username:<br><input type='text' name='username' id = 'username' value="+
    "><br>Password:<br><input type='text' id ='password' "+
    "name='password' value=''></form> ");
    if($("#signup-form").html()!==""){
    $("#signup-form").html('');
    }
  }else{
    console.log($('#password').val());
    console.log($('#username').val());
  }
  });

  $("#signup").click(function(){
    event.preventDefault();
    if($("#signup-form").html()===""){
    $("#signup-form").html("<form action='action_page.php'>"+
    "Username:<br><input type='text' name='username' id = 'username' value="+
    "><br>Password:<br><input type='text' id ='password' "+
    "name='password' value=''><br>Confirm Password:<br><input type='text' id ='confirmpassword' "+
    "name='confirmpassword' value=''><br>Full Name:<br><input type='text' id ='name' "+
    "name='name' value=''><br>Email:<br><input type='text' id ='email' "+
    "name='email' value=''></form> ");
    if($("#signin-form").html()!==""){
      $("#signin-form").html('');
    }
  }else{
    console.log($('#password').val());
    console.log($('#username').val());
  }
  });


});
