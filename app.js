var min = 0;
var sec = 0;
var milli = 0;
var interval;

var minutes = document.getElementById("min");
var seconds = document.getElementById("sec");
var milliseconds = document.getElementById("msec");

function start(){
  interval = setInterval(function(){
    milli ++;
    milliseconds.innerHTML = milli;
    if (milli>=100){
        sec++;
        milli = 0;
        seconds.innerHTML = sec;
    }
    else if(sec>=60){
        min ++;
        sec = 0;
        minutes.innerHTML = min;
    }
} ,10  ) 
document.getElementById("start").disabled = true
}   

function pause(){
    clearInterval(interval);
 document.getElementById("start").disabled = false
    
}

function reset(){

    min = 0;
    sec = 0;
    milli = 0;

    minutes.innerHTML = min;
    seconds.innerHTML= sec;
    milliseconds.innerHTML = milli;

    pause();
   
}