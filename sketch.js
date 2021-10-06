  
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);
}


function draw() {
  background(255);
  
  if (gameState === "play") {
    
    if(keyDown("left_arrow")){
  
      ghost.x = ghost.x + -4;
    }
    if(keyDown("rigth_arrkw")){
  
    ghost.x = ghost.x + 4;
      
      
    }
    if(keyDown("space")){
  
   ghost.y = ghost.velocityY + -10;
      // write a code to move up when space arrow is pressed
      
    }
  
  ghost.velocityY = ghost.velocityY + 0.8;
   if (tower.y >400) {
     tower.y = 300;
   }
   
      //write a condition for infinte scrolling tower
    
      spawnDoors();

  if(climbersGroup.istouching(ghost))
  ghost.velocity = 0;
  drawSprites();
}
if (invisibleBlockGroup.istouching(ghost) ||ghost.y > 600) {
  ghost.velocityY = 0;
  gameState = end ;
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250);
  }
}

function spawnDoors()
 {
  //write code here to spawn the clouds
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    //add the random function
    //
    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;
    obstacle.lifetime = 300; 
    
    ghost.depth = door.depth
    ghost.depth =+1;

    door.lifetime = 800;
    climber.lifetime =800;
    invisibleBlockGroup.lifetime = 800;

    
  }
}
