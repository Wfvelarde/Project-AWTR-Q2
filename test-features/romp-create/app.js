$(function(){
  var i = 1;
  $('select').material_select();
  // $('.collapsible').collapsible();

  $("#romp-create").click(function(){
  event.preventDefault();
  if($("#romp-form").html()===""){
  $("#romp-form").append("<form id = 'inputform' action='action_page.php'>"+
  "Romp Name:<br><input type='text' name='romp' id = 'romp' value="+
  "></form> ");
}else{
  var romp = $('#romp').val();
  console.log(romp);
  var members= $('#members').val();
  $("#new-romp").append(
    "<ul class='collapsible' data-collapsible='accordion'>"+
    "<li><div class = 'collapsible-header'>"+romp+"</div>"+
    "<div class='collapsible-body'><p>Add Romp Memebers.</p></div>"+
  "</li></ul>");
  $("#romp-form").remove();
  i++;
}
});
});
