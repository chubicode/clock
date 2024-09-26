

// change to double digit format 
function formatTime(number){
if (number < 10){
return '0' + number;
}else{
return number;
}
  

}

// get hours minutes and seconds
function currentTime(){
  let presentTime = new Date()
  let hours =formatTime(presentTime.getHours());
  let mins = formatTime(presentTime.getMinutes());
  let secs = formatTime(presentTime.getSeconds());
  console.log("Current Time: " + hours + ":" + mins + ":" + secs);

//update the HTML elements with current time
document.getElementById("hours").textContent = hours + ":"
document.getElementById("mins").textContent= mins + ":"
document.getElementById('secs').textContent = secs;

}


//call the currentTime function every second to update clock display
setInterval(currentTime, 1000);

// Initial call to display the clock immediately
currentTime();