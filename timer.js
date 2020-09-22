// 未使用時間計測
var unused_one = 0;
var used_one = 0;
var unused_two = 0;
var used_two = 0;
var unused_three = 0;
var used_three = 0;
var unused_four = 0;
var used_four = 0;
var unused_five = 0;
var used_five = 0;

function display(time) {
  var number = "";
  if (time >= 86400) number += Math.floor(time/86400) + "日"
  if (time >= 3600) number += Math.floor((time/3600)%24) + "時間"
  if (time >= 60) number += Math.floor(time%3600/60) + "分";
  number += time%60 + "秒"
  return number; 
}
function timer(bool1,bool2,bool3,bool4,bool5) {
  // センサー1
  if (bool1) {
    unused_one++;
    $("#timer1").text(display(unused_one) + " 使ってません");
    if (unused_one > 2) used_one = 0;
  }
  if (!bool1) {
    used_one++;
    $("#timer1").text(display(used_one) + " 使っています");
    if (used_one > 2) unused_one = 0;
  }
  // センサー2
  if (bool2) {
    unused_two++;
    $("#timer2").text(display(unused_two) + " 使ってません");
    if (unused_two > 2) used_two = 0;
  }
  if (!bool2) {
    used_two++;
    $("#timer2").text(display(used_two) + " 使っています");
    if (used_two > 2) unused_two = 0;
  }
  // センサー3
  if (bool3) {
    unused_three++;
    $("#timer3").text(display(unused_three) + " 使ってません");
    if (unused_three > 2) used_three = 0;
  }
  if (!bool3) {
    used_three++;
    $("#timer3").text(display(used_three) + " 使っています");
    if (used_three > 2) unused_three = 0;
  }
  // センサー4
  if (bool4) {
    unused_four++;
    $("#timer4").text(display(unused_four) + " 使ってません");
    if (unused_four > 2) used_four = 0;
  }
  if (!bool4) {
    used_four++;
    $("#timer4").text(display(used_four) + " 使っています");
    if (used_four > 2) unused_four = 0;
  }
  // センサー5
  if (bool5) {
    unused_five++;
    $("#timer5").text(display(unused_five) + " 使ってません");
    if (unused_five > 2) used_five = 0;
  }
  if (!bool5) {
    used_five++;
    $("#timer5").text(display(used_five) + " 使っています");
    if (used_five > 2) unused_five = 0;
  }
}
setInterval('timer(bool1,bool2,bool3,bool4,bool5)',1000);