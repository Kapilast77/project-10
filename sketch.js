var ship, ship_sailing, edges;
var seaImage;
var sea;

function preload(){
  ship_sailing = loadAnimation("ship1.png","ship2.png","ship3.png","ship4.png");
  seaImage = loadImage("sea.png")
}



function setup(){
  createCanvas(400,400);
  ship = createSprite(50,160,20,50);
  ship.addAnimation("running", ship_sailing);
  edges = createEdgeSprites()

  sea=createSprite(200,180,400,20);
  sea.addImage(seaImage);
  seaImage.x=sea.width/2

  ship.scale = 0.5;
  trex
  ship.x = 50
 
}

function draw() {
  background("blue");
  sea.velocityX=-2;
  if(sea.x<0){
    sea.x=200
  }
  ship.collide(sea);
  drawSprtes();
}