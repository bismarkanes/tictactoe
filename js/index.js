// JavaScript Document
$(document).ready(function() {
  var x = "x";
  var o = "o";
  var count = 0;
  var o_win = 0;
  var x_win = 0;
  $('#game li').click(function(){
    var oneClassO = $("#one").hasClass('o');
    var twoClassO = $("#two").hasClass('o');
    var threeClassO = $("#three").hasClass('o');
    var fourClassO = $("#four").hasClass('o');
    var fiveClassO = $("#five").hasClass('o');
    var sixClassO = $("#six").hasClass('o');
    var sevenClassO = $("#seven").hasClass('o');
    var eightClassO = $("#eight").hasClass('o');
    var nineClassO = $("#nine").hasClass('o');

    var oneClassX = $("#one").hasClass('x');
    var twoClassX = $("#two").hasClass('x');
    var threeClassX = $("#three").hasClass('x');
    var fourClassX = $("#four").hasClass('x');
    var fiveClassX = $("#five").hasClass('x');
    var sixClassX = $("#six").hasClass('x');
    var sevenClassX = $("#seven").hasClass('x');
    var eightClassX = $("#eight").hasClass('x');
    var nineClassX = $("#nine").hasClass('x');

    if (oneClassO && twoClassO && threeClassO || fourClassO && fiveClassO && sixClassO || sevenClassO && eightClassO && nineClassO || oneClassO && fourClassO && sevenClassO || twoClassO && fiveClassO && eightClassO || threeClassO && sixClassO && nineClassO || oneClassO && fiveClassO && nineClassO || threeClassO && fiveClassO && sevenClassO)
    {
      alert('O has won the game. Start a new game');
      $("#game li").text("+");
      $("#game li").removeClass('disable');
      $("#game li").removeClass('o');
      $("#game li").removeClass('x');
      $("#game li").removeClass('btn-primary');
      $("#game li").removeClass('btn-info');
    }
    else if (oneClassX && twoClassX && threeClassX || fourClassX && fiveClassX && sixClassX || sevenClassX && eightClassX && nineClassX || oneClassX && fourClassX && sevenClassX || twoClassX && fiveClassX && eightClassX || threeClassX && sixClassX && nineClassX || oneClassX && fiveClassX && nineClassX || threeClassX && fiveClassX && sevenClassX)
    {
      alert('X wins has won the game. Start a new game');
      $("#game li").text("+");
      $("#game li").removeClass('disable');
      $("#game li").removeClass('o');
      $("#game li").removeClass('x');
      $("#game li").removeClass('btn-primary');
      $("#game li").removeClass('btn-info');
    }
    else if (count == 9)
    {
      alert('Its a tie. It will restart.');
      $("#game li").text("+");
      $("#game li").removeClass('disable');
      $("#game li").removeClass('o');
      $("#game li").removeClass('x');
      $("#game li").removeClass('btn-primary');
      $("#game li").removeClass('btn-info');
      count = 0;
    }
    else if ($(this).hasClass('disable'))
    {
      alert('Already selected');
    }
    else if (count%2 == 0)
    {
      count++;
      $(this).text(o);
      $(this).addClass('disable o btn-primary');

      oneClassO = $("#one").hasClass('o');
      twoClassO = $("#two").hasClass('o');
      threeClassO = $("#three").hasClass('o');
      fourClassO = $("#four").hasClass('o');
      fiveClassO = $("#five").hasClass('o');
      sixClassO = $("#six").hasClass('o');
      sevenClassO = $("#seven").hasClass('o');
      eightClassO = $("#eight").hasClass('o');
      nineClassO = $("#nine").hasClass('o');

      if (oneClassO && twoClassO && threeClassO || fourClassO && fiveClassO && sixClassO || sevenClassO && eightClassO && nineClassO || oneClassO && fourClassO && sevenClassO || twoClassO && fiveClassO && eightClassO || threeClassO && sixClassO && nineClassO || oneClassO && fiveClassO && nineClassO || threeClassO && fiveClassO && sevenClassO)
      {
        alert('O wins');
        count = 0;
        o_win++;
        $('#o_win').text(o_win);
      }
    }
    else
    {
      count++;
      $(this).text(x);
      $(this).addClass('disable x btn-info');

      oneClassX = $("#one").hasClass('x');
      twoClassX = $("#two").hasClass('x');
      threeClassX = $("#three").hasClass('x');
      fourClassX = $("#four").hasClass('x');
      fiveClassX = $("#five").hasClass('x');
      sixClassX = $("#six").hasClass('x');
      sevenClassX = $("#seven").hasClass('x');
      eightClassX = $("#eight").hasClass('x');
      nineClassX = $("#nine").hasClass('x');

      if (oneClassX && twoClassX && threeClassX || fourClassX && fiveClassX && sixClassX || sevenClassX && eightClassX && nineClassX || oneClassX && fourClassX && sevenClassX || twoClassX && fiveClassX && eightClassX || threeClassX && sixClassX && nineClassX || oneClassX && fiveClassX && nineClassX || threeClassX && fiveClassX && sevenClassX)
      {
        alert('X wins');
        count = 0;
        x_win++;
        $('#x_win').text(x_win);
      }
    }

  });
  $("#reset").click(function () {
    $("#game li").text("+");
    $("#game li").removeClass('disable');
    $("#game li").removeClass('o');
    $("#game li").removeClass('x');
    $("#game li").removeClass('btn-primary');
    $("#game li").removeClass('btn-info');
    count = 0;
  });
});
