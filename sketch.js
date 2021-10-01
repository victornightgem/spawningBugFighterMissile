
var mainPlane, mainPlaneImg;
var obstacle, obstacleImg;
var planeSound;
var shootSound;
var missile, missileImg;
var background, backgroundImg;
var base, baseImg;
var delay = 8000;

function preload(){

backgroundImg=loadImage("SkyBack.gif");
mainPlaneImg=loadImage("MainAirplane.png");
baseImg=loadImage("base.png");
missileImg = loadImage("missile.gif");

}
    
function setup() {
    alert("Press up and down keys to control the aircraft and protect the base from enemies! Space to shoot missiles.");
 createCanvas(windowWidth, windowHeight);
mainPlane =  createSprite(250, windowHeight/2, 50, 50);
mainPlane.addImage(mainPlaneImg);
mainPlane.scale = 0.4;
mainPlane.setCollider("rectangle", 0, 0, 500, 130);

base = createSprite(100, windowHeight-30);
base.addImage(baseImg);

edges = createEdgeSprites();

mainPlane.debug = true;

}

function missileSpawn(){
    missile = createSprite(mainPlane.x+30, mainPlane.y+20);
    missile.addImage(missileImg);
    missile.velocityX = 9;
    missile.lifetime = 250;
    missile.scale = 0.4;
}

setTimeout(missileSpawn(), 8000);


function draw()
{

if(keyWentUp(32)){
    
}

if(keyDown(UP_ARROW)){
    mainPlane.y = mainPlane.y-5;
}
if(keyDown(DOWN_ARROW)){
    mainPlane.y = mainPlane.y+5;
}
    background(backgroundImg);

    
mainPlane.collide(base);
mainPlane.collide(edges);

 drawSprites();
 
} 