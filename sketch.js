const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world,bg,snowimage,snowfall;
var fall=[];

function preload(){
bg=loadImage("snow3.jpg");
snowimage=loadImage("snow4.webp");
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  }

function draw() {
    background(bg);  
    Engine.update(engine);

    if(framCount%5==0){
      fall.push(snowfall=new Snowfall());
}
for(var i = 0 ; i<fall.length;i++){
    fall[i].display();
}
  drawSprites();
}