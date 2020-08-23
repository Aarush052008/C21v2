var fixedRect, movingRect;

var gameObject1, gameObject2, gameObject3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(400, 250,50,80);
  gameObject1.shapeColor = "green";

 gameObject2 = createSprite(400,400,50,80);
 gameObject2.shapeColor = "green";

 gameObject3 = createSprite(400,600,50,80);
 gameObject3.shapeColor = "green";


  //movingRect.debug = true;

   movingRect.velocityX = -5;
  fixedRect.velocityX = +5;
}

function draw() {
  background("white");  

  movingRect.x = mouseX;
  movingRect.y = mouseY;
  bounceOff(movingRect,fixedRect);
  

  // if(isTouching(movingRect,gameObject1)){

  //   movingRect.shapeColor = "red";
  //       gameObject1.shapeColor = "red";
    
  // }
  // else{
  //   movingRect.shapeColor = "green";
  //   gameObject1.shapeColor = "green";

  // }



  // if(isTouching(movingRect,gameObject2)){

  //   movingRect.shapeColor = "red";
  //       gameObject2.shapeColor = "red";
    
  // }
  // else if(!isTouching(movingRect,gameObject2)){
  //   movingRect.shapeColor = "green";
  //   gameObject2.shapeColor = "green";

  // }

  drawSprites();
}




function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}


function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  } 
}