var isGreen = false;
var isRed = false;
function greenClicked() {

var audio = new Audio('sounds/bell.mp3');
alert("اخضر!");

audio.play();
  if (!isRed) {
    $('#box').css('background-color','green');
    $('#box').fadeTo(100, 0.3, function() {
      isGreen = true;

      $(this).fadeTo(4000, 1.0);
      setTimeout(function() {
        $('#box').css('background-color','red');
        isGreen = false;
      }, 4000);
    });

  }


}

function redClicked() {

var audio = new Audio('sounds/bell.mp3');
alert("احمر!");
audio.play();
  if (!isGreen)  {
    $('#box1').css('background-color','red');

    $('#box1').fadeTo(100, 0.3, function() {
      isRed = true;

      $(this).fadeTo(4000, 1.0);
      setTimeout(function() {
        $('#box1').css('background-color','green');
        isRed = false;
      }, 4000);
    });

  }
}
