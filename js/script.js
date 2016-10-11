$(document).ready(function() {
  console.log("ready!")

  var characterTotal = 0;
  var backgroundTotal = 0;

  $(document).keydown(function(e) {
    if (e.keyCode == 40) {
      backgroundTotal = backgroundTotal - 20
      characterTotal = characterTotal - 108
      console.log(backgroundTotal)
      $("#background").css('left', backgroundTotal);
      $("#boy").css('background-position-y', "0");
      $("#boy").css('background-position-x', characterTotal);
    }    

    	else if (e.keyCode == 38) {
        characterTotal = characterTotal + 108
        console.log(backgroundTotal)
        $("#fox").css('background-position-y', "140px");
        $("#fox").css('background-position-x', characterTotal);
        if (backgroundTotal < 0 ){
          backgroundTotal = backgroundTotal + 20
        $("#background").css('left', backgroundTotal);
      }
    }




  });




});
