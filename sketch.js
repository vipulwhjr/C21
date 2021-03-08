
var fixedRect, movingRect;
var gameObject1, gameObject2;
var o1;
function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";

  o1 = createSprite(200,200,50,40);
  o1.shapeColor = "green";
  
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else if(isTouching(movingRect,o1)){
    movingRect.shapeColor = "blue";
    o1.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  o1.shapeColor = "green";
    fixedRect.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}




