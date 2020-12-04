fillCell=(ctx,x,y,cellColor="#eeeeee")=>{
    ctx.beginPath();
    ctx.rect(x*20,y*20,20,20);
    ctx.fillStyle = cellColor;
    ctx.fill();
}

var snakeColor='blue';
var c = document.getElementById("snake");
var ctx = c.getContext("2d");
var snakeList = [[1,1],[1,2],[1,3]];
var gameMatrix=[];
for(var i=0; i<25; i++) {
    gameMatrix[i] = [];
    for(var j=0; j<25; j++) {
        gameMatrix[i][j] = [0,-1,-1];
    }
}
var nextCell=[1,4];
var frontCell=[1,3];
var backCell=[1,1];
var tempCell=[-1,-1];
gameMatrix[1,1]=[1,1,2];
gameMatrix[1,2]=[1,1,3];
gameMatrix[1,3]=[1,-1,-1];
fillCell(ctx,1,1,snakeColor);
fillCell(ctx,1,2,snakeColor);
fillCell(ctx,1,3,snakeColor);
var snakeXinc=0;
var snakeYinc=1;
var snakeLength=3;
runGame=()=>{
    nextCell[0]=frontCell[0]+snakeXinc;
    nextCell[1]=frontCell[1]+snakeYinc;
    fillCell(ctx,nextCell[0],nextCell[1],snakeColor);
    fillCell(ctx,backCell[0],backCell[1]);
    tempCell[0]=backCell[0];
    tempCell[1]=backCell[1];
    backCell[0]=gameMatrix[tempCell[0],tempCell[1]][1];
    backCell[1]=gameMatrix[tempCell[0],tempCell[1]][2];
    gameMatrix[tempCell]=[0,-1,-1];
    gameMatrix[frontCell[0],frontCell[1]]=[1,nextCell[0],nextCell[1]];
    gameMatrix[nextCell[0],nextCell[1]]=[1,-1,-1];
    frontCell=nextCell;
}
setInterval(runGame,1000);