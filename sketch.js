var fixedRect, movingRect;





function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(400, 200, 50, 50);
 fixedRect.shapeColor = "green";
 fixedRect.debug = true;

 movingRect = createSprite(200,200,50,50);
 movingRect.shapeColor = "green";
 movingRect.debug = true;

 fixedRect.velocityX = -5;
 movingRect.velocityX = -5;
 fixedRect.velocityY = 5;
 movingRect.velocityY = -5;
}

function draw() {
  background(0,0,0); 

  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  if((movingRect.x - fixedRect.x === fixedRect.width/2 + movingRect.width/2) 
  || (fixedRect.x - movingRect.x === fixedRect.width/2 + movingRect.width/2)) {
    fixedRect.velocityX = fixedRect.velocityX*(-1);
    movingRect.velocityX = movingRect.velocityX*(-1);
  }

  if((movingRect.y - fixedRect.y === fixedRect.height/2 + movingRect.height/2)
  || (fixedRect.y - movingRect.y === fixedRect.height/2 + movingRect.height/2))  {
    //movingRect.shapeColor = "red";
    //fixedRect.shapeColor = "red";
    fixedRect.velocityY = movingRect.velocityY*(-1);
    movingRect.velocityY = fixedRect.velocityY*(-1);
  }
  


  drawSprites();
}