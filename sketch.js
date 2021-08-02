var a, b;

function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 30, 50);
  a.velocityY = -3;
  a.shapeColor = "green";
  a.debug = true;
  b = createSprite(200, 200, 50, 30);
  b.velocityX = 3;
  b.shapeColor = "green";
  b.debug = true;
}

function draw() {
  background(255,255,255); 
  


  console.log( a.x - b.y );

  // this is for isTouching
  if(a.x - b.x < b.width / 2 + a.width / 2 
    && b.x - a.x < b.width / 2 + a.width / 2
    && a.y - b.y < b.height / 2 + a.height / 2 
    && b.y - a.y < b.height / 2 + a.height / 2){
    a.shapeColor = "red";
    b.shapeColor = "red";
   }
   else{
     a.shapeColor = "green";
     b.shapeColor = "green";
   }

  //  this is for bounceOff
  if (a.x - b.x < b.width/2 + a.width/2 
    && b.x - a.x < b.width/2 + a.width/2) 
  { 
    a.velocityX = a.velocityX * (-1);
    b.velocityX = b.velocityX * (-1); 
  }

   if (a.y - b.y < b.height/2 + a.height/2 
    && b.y - a.y < b.height/2 + a.height/2)
   { 
     a.velocityY = a.velocityY * (-1);
     b.velocityY = b.velocityY * (-1); 
    }

  drawSprites();
}