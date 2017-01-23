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
    var dataIn = $("#form-in").serializeArray().reduce(function(obj,item){
      obj[item.name]=item.value;
      return obj;
    },{});
    console.log(dataIn);
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
    var dataUp = $("#form-in").serializeArray().reduce(function(obj,item){
      obj[item.name]=item.value;
      return obj;
    },{});
    console.log(dataUp);
  }
  });


});
