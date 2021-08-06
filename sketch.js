const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bground;
var Snow2
var snow1

function preload(){
bground = loadImage("snow3.jpg")
}

function setup() {
  createCanvas(999,721);
  engine = Engine.create();
  world = engine.world;

  //Engine.run(engine);

  //createSprite(400, 200, 50, 50);
  snow1 = new Snow1(50,50,50,50)
  for (var k = 0; k <=800; k = k + 80) {
   ;
  }
}

function draw() {
  background(bground);  
  drawSprites();
  snow1.display();
}