const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine,world;
var b1,p1,c1,c2,c3,c4,c5;

function preload()
{

b1=loadImage("images/backg.jpg")
}

function setup()
{
    createCanvas(800,1000);
    engine = Engine.create();
    world = engine.world;

    
}

function draw()
{
    background(b1);
    Engine.update(engine);
   
}


