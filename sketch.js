var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudImage;
function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");

  groundImage = loadImage("ground2.png");
  cloudImage=loadImage("cloud.png");
}

function setup() {
  createCanvas(600, 200);

  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
    
  //create a ground sprite
  ground = createSprite(300,180,600,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
    invisibleGround=createSprite(300,187,600,15);
invisibleGround.visible=false;
}

function draw() {
  background(250);

  //jump when the space button is pressed
  if (keyDown("space") && trex.y>=155) {
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.8

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  spawnClouds();
  trex.collide(invisibleGround);
  console.log(trex.y);
  drawSprites();
}
function spawnClouds(){
  if(frameCount%60==0){
    var cloud=createSprite (600,100,40,10);
    cloud.velocityX=-3; 
    cloud.addImage(cloudImage);
    cloud.scale=0.08;
    cloud.y=Math.round(random(60,120));
    cloud.depth=trex.depth;
    trex.depth+=1;

  }
 
 // console.log(frameCount);
}