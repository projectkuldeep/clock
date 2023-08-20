var second = 0;
var minute = 0;
var hour = 0;

setInterval(function (){
  d = new Date();
  second = d.getSeconds()*6;
  minute = d.getMinutes()*6;
  hour = d.getHours()*30 + Math.round(minute/12);
  document.getElementById("second-hand").style.transform = "rotate("+second+"deg)";
  document.getElementById("minute-hand").style.transform = "rotate("+minute+"deg)";
  document.getElementById("hour-hand").style.transform = "rotate("+hour+"deg)";
  displayTime();
},1000);


function displayTime(){
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();
  var sec = dateTime.getSeconds();
  var session = document.getElementById('session');
  if(hrs >= 12){
    session.innerHTML = 'PM';
  }
  else{
    session.innerHTML = 'AM';
  }
  if(hrs>12){
    hrs = hrs - 12;
  }
  document.getElementById('dighour').innerHTML = hrs;
  document.getElementById('digminute').innerHTML = min;
  document.getElementById('digsecond').innerHTML = sec;
}