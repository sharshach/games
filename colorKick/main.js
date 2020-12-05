const scoreDiv=document.getElementById("score");
const timerDiv=document.getElementById("timer");
const speedDiv=document.getElementById("speed");
const accuracyDiv=document.getElementById("accuracy");
const boxDiv=[
    document.getElementById("box0"),
    document.getElementById("box1"),
    document.getElementById("box2"),
    document.getElementById("box3"),
];
var time=0;
var goodBoxNumber;
var totalClicks=0;
var totalGoodClicks=0;
var interval;
function updateSpeed(){
    speedDiv.innerHTML=(totalClicks*1.0/time) + " clicks/sec";
}
function updateAccuracy(){
    accuracyDiv.innerHTML=(totalGoodClicks/totalClicks*100) + " %";
}
function updateTimer(){
    time+=1;
    timerDiv.innerHTML=time + "s";
    updateSpeed();
}
function updateScore(){
    scoreDiv.innerHTML=totalGoodClicks;
}
function createNewInstance(){
    goodBoxNumber=Math.floor(Math.random()*4);
    boxDiv[0].style.backgroundColor= "red";
    boxDiv[1].style.backgroundColor= "red";
    boxDiv[2].style.backgroundColor= "red";
    boxDiv[3].style.backgroundColor= "red";
    boxDiv[goodBoxNumber].style.backgroundColor= "green";
}
function clickedBox(i){
    totalClicks+=1;
    if(i==goodBoxNumber){
        totalGoodClicks+=1;
    }
    updateScore();
    updateAccuracy();
    createNewInstance();
}
function onStart(){
    clearInterval(interval);
    time=0;
    totalClicks=0;
    totalGoodClicks=0;
    updateScore();
    updateTimer();
    updateSpeed();
    updateAccuracy();
    interval=setInterval(updateTimer,1000);
    createNewInstance();    
}

