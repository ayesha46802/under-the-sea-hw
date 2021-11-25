var PLAY = 1;
var END = 0;
var gameState = PLAY;

var jellyfish,jelly_img
var plastic,plastic_img
var turtle,turtle_img
var begin,begin_image
var middle,middle_img
var coral,coral_img



function preload(){

  
  jellyfish_img = loadImage("pics for game/jelly.png");
  
  plastic_img = loadImage("pics for game/plastic.png");
  
  
  coral_img= loadImage("pics for game/coral.png");

  middle_img= loadImage("pics for game/underwater-image.png");

  turtle_img= loadImage("pics for game/turtle.png");


  
}

function setup() {
  createCanvas(1500, 400);
  
  
  
  coral = createSprite(200,180,400,20);
  coral.addImage("corals",coral_img);
  coral.scale = 0.04;
    
  
  
  jellyfish = createSprite(500,140,10,10);
  jellyfish.addImage("jellies",jellyfish_img);
  jellyfish.scale=0.5
  
  middle = createSprite(700,-140,10,10);
  middle.addImage("underwater",middle_img);
  middle.scale=0.9

  
  turtle = createSprite(300,140,10,10);
  turtle.addImage("turtles",turtle_img);
  turtle.scale=0.6
  /*
  
  gameOver.scale = 0.5;
  restart.scale = 0.5;

  gameOver.visible = false;
  restart.visible = false;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  cloudsGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;*/
}

function draw() {
  background(0,0,0);

  turtle.x=200
  turtle.y=mouseY

  spawnPlastics();
  spawnJellies();

  /*text("Score: "+ score, 500,50);
  
  if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    
  
    if(keyDown("space") && trex.y >= 159) {
      jumpSound.play();
      trex.velocityY = -14;
    }
  
    trex.velocityY = trex.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    trex.collide(invisibleGround);
    spawnClouds();
    spawnObstacles();
    
    if (score>0 && score%100 === 0){
      checkPointSound.play();
    }
   */
   // if(plastic.isTouching(turtle)){  
     // gameState = END;
     // background("grey")  
      //display dead turtle
   // }

  //  if (jellyfish.isTouching(turtle)) {
      //get 1 point
       
    //}
    
    drawSprites();
  }
 
  
    //if we get 10 jelly fish background change to coral
    
    //I want a moving background how to do that
    

  
 
  



function spawnPlastics() {
  //write code here to spawn the plastics
  if (frameCount %  80=== 0) {
    plastic = createSprite(1550,100,10,10);
    plastic.addImage("plastics",plastic_img);
    plastic.y = Math.round(random(50,350));
    plastic.scale=0.1
    plastic.velocityX = -10;
    
     //assign lifetime to the variable
    plastic.lifetime = 800;
    
    //adjust the depth
    plastic.depth = turtle.depth+1;
    turtle.depth = turtle.depth;
    
    
  }
  
}


function spawnJellies() {
  //write code here to spawn the plastics
  if (frameCount %  100=== 0) {
    jellyfish = createSprite(1550,140,10,10);
    jellyfish.addImage("jellies",jellyfish_img);
    jellyfish.y = Math.round(random(50,350));
    jellyfish.scale=0.50
    jellyfish.velocityX = -8;
    
     //assign lifetime to the variable
     jellyfish.lifetime = 800;
    
    //adjust the depth
    jellyfish.depth = turtle.depth+1;
    turtle.depth = turtle.depth;
    
    
  }
  
}
    
    

function reset(){
  gameState = PLAY;
  ground.velocityX = -(6 + 3*score/100);
  gameOver.visible = false;
  restart.visible = false;
  
  obstaclesGroup.destroyEach();
  cloudsGroup.destroyEach();
  
  trex.changeAnimation("running",trex_running);
  
  score = 0;
  
}
