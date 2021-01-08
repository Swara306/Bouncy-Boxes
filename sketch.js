const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//declared variables 
var engine, world;
var ground;
var box1,box2;

function setup(){
    //to create a base
    var canvas = createCanvas(1200,400);
    //to create game engine from main engine class
    engine = Engine.create();
    //the world of the game and engine's world are same
    world = engine.world;

   
    //created new objects from classes
    ground = new Ground(600,height,width,10);

    box1 = new Box(640,-100,50,100);
    box2 = new Box (600,100,50,50);
    
}

function draw(){
    //to change the background color,
    background(0);
    //to keep updating the engine
    Engine.update(engine);
    
    //to display objects
    box1.display();
    box2.display();
    ground.display();
}