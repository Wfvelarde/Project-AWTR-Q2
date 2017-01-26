$(function(){  //this opens romp-create function

  $("#romp-create").click(function(){
  event.preventDefault();
  if($("#romp-form").html()===""){
  $("#romp-form").append("<form id = 'inputform' action='action_page.php'>"+
  "Romp Name:<br><input type='text' name='romp' id = 'romp' value="+
  "><br>Add Members:<br><input type='text' id ='members' "+
  "name='romp' value=''></form> ");
}else{
  var romp = $('#romp').val();
  console.log(romp);
  var members= $('#members').val();
  $("#romp-select").append("<option value = '"+romp +"' id= '"+romp+
  "'>"+romp+"</option>");


  $.post('/romps', variableForData, function(data) {   ///need to change the variableForData name
    console.log(data);
  })   //this closes post romps


}   //this closes else
});   //this closes click function

});   //this closes function romp-create
