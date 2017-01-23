$(function(){
  var i=1;
$("#create-romp"+i).click(function(){
    event.preventDefault();
      var romp = $("#rompname").val();
      if (romp!==""){
      $("#new-romp").append("<h5>"+romp+"</h5>"+
      "<form id='member-form'>"+
      "<ul id='memberlist'></ul>"+"<br>Otter Username:<br>"+
      "<input id = 'membername' type='text' name='membername' value=''><br>"+
      "</form>");
    $("#create-romp"+i).remove();
    $("#form").remove();
    $(".button").append("<a id = 'addmember' class='waves-effect"+
    " waves-teal btn-flat'>Add Otter</a>"+"<a id = 'confirmromp' class='waves-effect"+
    " waves-teal btn-flat'>Confirm Romp</a>");

        $("#addmember").click(function(){
          event.preventDefault();
          console.log("HEY");
            var otter = $("#membername").val();
            $("#memberlist").append(  "<li>"+otter+"</li>");
            $("#membername").val("");
          });
          console.log(romp);
        $("#confirmromp").click(function(){
          i++;
          event.preventDefault();
          console.log("HEY");
          $("#romplist").append("<a id = 'rompname' class='waves-effect"+
          " waves-teal btn-flat'>"+romp+"</a><br>");
          $(".romp-content").remove();
          $("#romp-form").append("<div class='romp-content'>"+
            "<form id='form'>"+
              "Romp Name:<br>"+
              "<input id = 'rompname' type='text' name='rompname' value=''><br>"+
            "</form>"+
            "<div id='new-romp'></div>"+
            "<div class='button'>"+
              "<a id = 'create-romp"+i+"' class='waves-effect waves-teal btn-flat'>Create Romp</a>"+
            "</div>"+
          "</div>");
        });

    }
  });



});
