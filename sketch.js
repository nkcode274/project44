
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mary, maryIMG
var river1, river2, river3, river4;
var ground;

function preload()
{
    
	maryIMG=loadImage("images/dogImg.png");	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	mary=createSprite(400, 650, 30, 30);
	mary.addImage(maryIMG)
	mary.scale=0.15;

	river1 = new River(600,550, 1600,40)
	river2 = new River(600,350, 1600,40)
	river3 = new River(600,150, 1600,40)

	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(245,203,167);
  
  river1.display();
  river2.display();
  river3.display();
  drawSprites();
 
}



