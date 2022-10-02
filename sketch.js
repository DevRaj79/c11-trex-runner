
var trex ,trex_running;
var ground;
function preload(){
  trex_running = loadAnimation("trex.png1","trex.png3","trex.png4");

}

function setup(){
  createCanvas(600,200);
  ground = createSprite(200,180,400,20);
  trex = createSprite(50,160,20,50);
  trex.scale = 0.5;
  edges = createEdgeSprites();
  trex = addAnimation("running",trex_running);
  trex.velocityX = 5;
}

function draw(){
  background("white");
  if (keyDown("space")){
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY+0.5;
  trex.collide(ground);
  drawSprites();
  
}
