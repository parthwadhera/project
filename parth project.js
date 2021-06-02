var car;
var wall;
var speed = 2;
var weight;
var canvas
function preload(){

}
function setUp(){
canvas = createCanvas(1600,400);
 car = createSprite(50,200,50,50);
 wall = createSprite(1500,200,60,200);
 speed = random(55,90);
  weight = random(400,1500);
  car.velocityX = speed = 2; 
  car.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  
  drawSprites();
}