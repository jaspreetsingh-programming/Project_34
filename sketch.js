const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;


var frog, frogImg;
var insect, insectImg;

var ground;

var backgroundImage















function preload(){
  frogImg = loadImage("frog.png");
  backgroundImage = loadImage("background1.jpg");

  insectImg = loadImage("insect.png");
}

function setup(){
 var canvas = createCanvas(700, 700);

 engine = Engine.create();
 world = engine.world;

 
 frog = createSprite(350, 600);
 frog.addImage(frogImg);

 insect = createSprite(100, 300);
 insect.addImage(insectImg);
  

 ground = new Ground(350, 650, 100, 100);





}


function draw(){
  background(backgroundImage);
  Engine.update(engine);

  ground.display();


 
  drawSprites();
}