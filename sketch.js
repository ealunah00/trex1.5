var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud;







function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
  
 
  
}

function setup() {

  createCanvas(600,200)
  
  //crear sprite de trex 
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //crear sprite de suelo
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //crear sprite de suelo invisible
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;

  //crear sprite nubes
  ground.addImage("cloud",cloudImage);
  
  var ran = Math.round(random(10,60));
  console.log(ran);

}

function draw() {
  //establecer color de fondo
  background(255);
  
  //console.log(trex.y);
  
  //hacer que el trex salte al presionar la barra espaciadora
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //evitar que el trex salte
  trex.collide(invisibleGround);
  spawnClouds();
  
  drawSprites();
  
}

function spawnClouds() {
  // código para generar las nubes
  if(frameCount % 60 === 0) {
    cloud = createSprite(400,100,40,10);
    cloud.addImage(cloudImage);
    cloud.y = Math.round(random(10,60));
    cloud.scale = 0.4;
    cloud.velocityX = -3;

    cloud.depth = trex.depth;
    trex.depth = cloud.depth + 1;
  }
}

