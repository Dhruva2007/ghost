var tower, towerImg;
var ghost, ghostImg; 
var window, windowImg;
var climber,climberImg, climberGrp;
                 
function preload (){
   
  towerImg =  loadImage ("tower.png");
  ghostImg = loadImage ("ghost-standing.png");
  windowImg = loadImage ("door.png");
  climberImg = loadImage ("climber.png");
}

function setup (){
  
  createCanvas (600,600);
  
  tower = createSprite (300,300,20,20);
  tower.addImage ('tower', towerImg);
  tower.velocityY = 4;
  
  ghost = createSprite (300,300,20,20);
  ghost.addImage ('ghost', ghostImg);
  ghost.scale = 0.5;

  climberGrp = new Group();
  
}

function draw (){
  
  if (tower.y > 600){
    tower.y = 300;
  }
  
  if (keyDown ("space")) {
     ghost.velocityY = -4;
  }
  
  if (keyDown(LEFT_ARROW)) {
    ghost.x = ghost.x - 2;          
  }
  
  if (keyDown(RIGHT_ARROW)) {
    ghost.x = ghost.x + 2;          
  }
  
 
  
  ghost.velocityY = ghost.velocityY + 1;
  
  spawnWindows();
  
    if (climberGrp.isTouching(ghost)){
      ghost.velocityY = 0;
  
    }
  
  if (ghost.y > 600){
    background ("black");
    textSize (25);
    textFont ("joker");
    stroke ("yellow");
    text ("Game Over", 240,300);   
  
    ghost.destroy();
    tower.destroy();
    window.destroy();
    climber.destroy();
     
  }
      
  drawSprites();

}
  
  function spawnWindows () {
    
    if (frameCount % 200 === 0){ 
     var window = createSprite (200,-20,20,20);
      window.addImage ('window', windowImg);
      window.velocityY = 4;
      
      window.x = random(200,400) 
    window.depth = ghost.depth
      ghost.depth = window.depth + 1;
      
      var climber = createSprite (200,30,20,20);
      climber.addImage ('climber', climberImg);
      climber.x = window.x;
      climber.velocityY = 4;
      climberGrp.add (climber);
      climber.depth = ghost.depth
      ghost.depth = climber.depth + 1;
    }   
    
 
     
  }
  