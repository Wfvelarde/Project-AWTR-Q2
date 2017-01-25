// $( document ).ready(function(){
//   console.log("jquery working!");
  
// $(".button-collapse").sideNav({
// 	menuWidth: 700, 
// 	draggable: true
// });

// var i=$("#romplist")[0].childNodes.length;

// createRomp(i);


// function createRomp(i){
//   $("#create-romp"+i).click(function(){
//     console.log("Hey");
//       event.preventDefault();
//         var romp = $("#rompname").val();
//         if (romp!==""){
//           rompForm(romp);
//           addOtter();
//           confirm(romp);
//       }
//     });
// }


// function rompForm(romp){
//   $("#new-romp").append("<h5>"+romp+"</h5>"+
//   "<form id='member-form'>"+
//   "<ul id='memberlist'></ul>"+"<br>Otter Username:<br>"+
//   "<input id = 'membername' type='text' name='membername' value=''><br>"+
//   "</form>");
// $("#create-romp"+i).remove();
// $("#form").remove();
// $(".button").append("<a id = 'addmember' class='waves-effect"+
// " waves-teal btn-flat'>Add Otter</a>"+"<a id = 'confirmromp' class='waves-effect"+
// " waves-teal btn-flat'>Confirm Romp</a>");
// }

//   function addOtter(){
//     $("#addmember").click(function(){
//       event.preventDefault();
//         var otter = $("#membername").val();
//         $("#memberlist").append(  "<li>"+otter+"</li>");
//         $("#membername").val("");
//       });
//   }

//   function confirm(romp){
//     $("#confirmromp").click(function(){
//       event.preventDefault();
//       $("#romplist").append("<a id = 'rompname' class='waves-effect"+
//       " waves-teal btn-flat'>"+romp+"</a><br>");
//       $(".romp-content").remove();
//       $("#romp-form").append("<div class='romp-content'>"+
//         "<form id='form'>"+
//           "Romp Name:<br>"+
//           "<input id = 'rompname' type='text' name='rompname' value=''><br>"+
//         "</form>"+
//         "<div id='new-romp'></div>"+
//         "<div class='button'>"+
//           "<a id = 'create-romp"+i+"' class='waves-effect waves-teal btn-flat'>Create Romp</a>"+
//         "</div>"+
//       "</div>");
//     });
//     i=$("#romplist")[0].childNodes.length;
//     createRomp(i);
//   }

// });


// JAVASCRIPT FOR NEW HTML PAGE

 $(document).ready(function(){
  $(".button-collapse").sideNav({
    menuWidth: 700,
    draggable: true
  });
    $('.collapsible').collapsible();

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
}

  function addOtter(){
    $("#addmember").click(function(){
      event.preventDefault();
        var otter = $("#membername").val();
        $("#memberlist").append(  "<li>"+otter+"</li>");
        $("#membername").val("");
      });
  }

  function confirm(romp){
    $("#confirmromp").click(function(){
      event.preventDefault();
      $("#romplist").append("<a id = '"+romp+"' class='waves-effect"+
      " waves-teal btn-flat'>"+romp+"</a><br>");
      $(".romp-content").remove();
      i=$("#romplist")[0].childNodes.length;
      $("#romp-form").append("<div class='romp-content'>"+
        "<form id='form'>"+
          "Romp Name:<br>"+
          "<input id = 'rompname' type='text' name='rompname' value= '' ><br>"+
        "</form>"+
        "<div id='new-romp'></div>"+
        "<div class='button'>"+
          "<a id = 'create-romp"+i+"' class='waves-effect waves-teal btn-flat'>Create Romp</a>"+
        "</div>"+
      "</div>");
      createRomp(i);
    });
  }
  });




































