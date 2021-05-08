
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject, groundObject;
var paperImg, dustbinImg;	
var world;

function preload()
{

}

function setup() 
{
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	dustbinObj=new Dustbin(550,650);
	paperObject=new Paper(100,100,10);
	groundObject=new Ground(width/2,670,width,20);
	//Create a Ground

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: 
	  {
	    width: 800,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw()
 {
  rectMode(CENTER);
  background(255);
 
  paperObject.display();
  groundObject.display();
  dustbinObj.display();

}

function keyPressed()
 {
	  if (keyCode === UP_ARROW)
	{

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}