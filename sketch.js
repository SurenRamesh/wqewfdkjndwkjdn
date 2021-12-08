
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var ball


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ground_options={
		isStatic: true
	}

	var ball_options={
		restitution:0.95
	}

	ground = Bodies.rectangle(400,700,800,50)
	ball = Bodies.circle(100,100,30,30)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();


  ball.display()
  ground.display()
 
}



