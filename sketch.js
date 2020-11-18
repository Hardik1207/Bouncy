var fixedRect, movingRect;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 400, 20, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = 5;
  fixedRect.velocityY =  -5;


}

function draw() 
{
  background(255,255,255);  

  if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 )
  {
  
   fixedRect.velocityX = fixedRect.velocityX * (-1);
   movingRect.velocityX = fixedRect.velocityX * (-1);

  }

 if(fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2)
  {
    
    fixedRect.velocityY = fixedRect.velocityY * (-1);
    movingRect.velocityY = fixedRect.velocityY * (-1);

  }


  drawSprites();
  
}