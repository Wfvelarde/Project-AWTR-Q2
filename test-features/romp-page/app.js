$(function(){   //this opens activity function
  var i = 1;

  $("#activity").click(function(){
  event.preventDefault();
  if($("#activity-form").html()===""|| i===1){
  $("#activity-form").append("<form id = 'inputform' action='action_page.php'>"+
  "Time:<br><input type='time' name='time' id = 'time' value="+
  ">Activity:<br><input type='text' id ='act' "+
  "name='act' value=''></form> ");
  i = 0;
}else{
  i=1;
  var time = $('#time').val();
  var act = $('#act').val();
  $("#inputform").remove();
  $("#activity-form").append("<h5 id= '"+i+
  "' class='waves-effect waves-orange btn-flat'>"+time+"  "+act+"</h5>");

  $.post('/activity', variableForData, function(data) {   ///need to change the variableForData name
    console.log(data);

}   //this closes else
});   //this closes click function

});   //this closes function activity
