function showTime(){
var currentTime = new Date();
var hour = currentTime.getHours();
var min = currentTime.getMinutes();
var sec = currentTime.getSeconds();
var amOrPm = "AM";
if(hour >= 12){
    amOrPm = "PM"; 
}
if(hour > 12){
    hour = hour - 12;
}
if(hour < 10){

    hour = "0" + hour;
}
if(min < 10) {
   min = "0" + min;
}
if(sec < 10) {
    sec = "0" + sec;
}
 

    document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec + " " + amOrPm ;
}
setInterval(showTime, 1000);
