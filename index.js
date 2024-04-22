let [millisecond,seconds,minutes,hours]=[0,0,0,0];
let timeRef=document.querySelector(".timer-display");
let hour = document.getElementById("hr");
let minute = document.getElementById("mn");
let second = document.getElementById("sec");
let mili_sec = document.getElementById("ml-sec");
let int=null;

hour.innerHTML = "";
minute.innerHTML = "";
second.innerHTML = "";

document.getElementById("start-timer").addEventListener("click",()=>{
    if(int !==null){
        clearInterval(int)
    }
    int=setInterval(displayTimer,100);
})

document.getElementById("pause-timer").addEventListener("click",()=>{
    clearInterval(int)
})

document.getElementById("reset-timer").addEventListener("click",()=>{
    clearInterval(int);
    [millisecond,seconds,minutes,hours]=[0,0,0,0];
    hour.innerHTML = "00";
    minute.innerHTML = "00";
    second.innerHTML = "00";
    mili_sec.innerHTML = "00";
})
function displayTimer(){
    millisecond+=10;
    if(millisecond==100){
        millisecond=0
        seconds++ 
    if(seconds==60){
        seconds=0;
        minutes++
        if(minutes==60){
            minutes=0;
            hours++
        }
    }
}
    let h=hours<10 ? "0" + hours : hours;
    let m=minutes<10 ? "0" + minutes : minutes;
    let s=seconds<10 ? "0" + seconds : seconds;
    let ms=millisecond<10
    ? "00" + millisecond
    : millisecond;

    if(s >= 1){
        second.innerHTML = `${s}`;
    }
    if( m >= 1){
        minute.innerHTML = `${m}`;
    }
    if(h >= 1){
        hour.innerHTML = `${h}`;
    }
   
    // hour.innerHTML = `${h}`;
    // minute.innerHTML = `${m}`;
    // second.innerHTML = `${s}`;
    mili_sec.innerHTML = `${ms}`;

    
}