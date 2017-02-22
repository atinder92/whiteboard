var canvasHolder = document.getElementById("canvasHolder");
var board = document.getElementById("boardCanvas");
var ctx = board.getContext("2d");
ctx.strokeStyle = "black";
ctx.lineWidth = 3; 
var currentX;
var currentY;

function drawSomething(x,y)
{
  ctx.beginPath();
     
  ctx.moveTo(currentX,currentY);
  ctx.lineTo(x,y);    
  ctx.stroke();
    
}
var topBoard  = board.offsetTop;
var leftBoard = board.offsetLeft;

var topCoordinate;
var leftCoordinate;
var mouseClicked = false;

board.addEventListener("mousedown",function(e){
    
topCoordinate = e.pageY  - topBoard;
leftCoordinate = e.pageX - leftBoard;

currentX = leftCoordinate;
currentY = topCoordinate; 
   
mouseClicked = true;
    
});

board.addEventListener("mouseup",function(e){
    
 mouseClicked = false;
    
});


board.addEventListener("mousemove", function(e){


    
topCoordinate = e.pageY  - topBoard;
leftCoordinate = e.pageX - leftBoard;

  

if(mouseClicked){    
drawSomething(leftCoordinate,topCoordinate);
}

currentX = leftCoordinate;
currentY  = topCoordinate;    
    
    
});



//=====FUNCTIONS FOR MENU OPTIONS=====
var colorOption = document.getElementById("colorOption");
var backgroundOption = document.getElementById("backgroundOption");

//1. ====== (change background)

function changeBackground(){
    switch (backgroundOption.value) {
            
        case "grid" :
        board.style.backgroundImage = "url(images/grid.gif)";    
            break;
            
        case "black" :
        board.style.backgroundImage = "none";    
        board.style.backgroundColor = "black";   
            break;
            
        case "white" :
         board.style.backgroundImage = "none";     
        board.style.backgroundColor = "white";     
            break;
            
            
    }
    
}






//2. ====== (change color)

function changeColor(){
    
switch (colorOption.value) {
        
    case "black" :
    ctx.strokeStyle = "black";    
        
        break;
        
    case "purple" :
    ctx.strokeStyle = "purple";      
        
        break;
        
    case "orange" :
    ctx.strokeStyle = "orange";      
        
        break;
        
        
}
 

    
    
    
    
}

//3. ====== (clear board) 
    
function clearBoard(){
 ctx.clearRect(0,0,1210,500);   
  
    
}


//====================================