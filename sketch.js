const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var myEngine,world;
var box1,box2;
var ground;

function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  world = myEngine.world;

 
 ground = new Ground(200,390,400,20);

 box1 = new Box(200,300,50,50);

 box2 = new Box(240,100,50,100);

}

function draw() {
  background(0);
  Engine.update(myEngine); 
  rectMode(CENTER);
  
  box1.display();
  box2.display();
  ground.display();
}