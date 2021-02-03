const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var cradle1,cradle2,cradle3, cradle4,cradle5, supportObject,cradleDiameter
var chain1,chain2,chain3, chain4,chain5;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	supportObject=new support(width/2,height/4,width/7,20);

	cradleDiameter=40;

	startcradlePositionX=width/2;
	startcradlePositionY=height/4+500;
	cradle1=new cradle(startcradlePositionX-cradleDiameter*2,startcradlePositionY,cradleDiameter);
	cradle2=new cradle(startcradlePositionX-cradleDiameter,startcradlePositionY,cradleDiameter);
	cradle3=new cradle(startcradlePositionX,startcradlePositionY,cradleDiameter);
	cradle4=new cradle(startcradlePositionX+cradleDiameter,startcradlePositionY,cradleDiameter);
	cradle5=new cradle(startcradlePositionX+cradleDiameter*2,startcradlePositionY,cradleDiameter);
	
	
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});


	chain1=new chain(cradle1.body,supportObject.body,-cradleDiameter*2, 0)

	chain2=new chain(cradle2.body,supportObject.body,-cradleDiameter*1, 0)
	chain3=new chain(cradle3.body,supportObject.body,0, 0)
	chain4=new chain(cradle4.body,supportObject.body,cradleDiameter*1, 0)
	chain5=new chain(cradle5.body,supportObject.body,cradleDiameter*2, 0)

	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  supportObject.display();

  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()	
  cradle1.display();
  cradle2.display();
  cradle3.display();
  cradle4.display();
  cradle5.display();
 
  
  
	
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(cradle11.body,cradle1.body.position,{x:-50,y:-45});

  	}
}


function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	supportBodyPosition=constraint.bodyB.position

	supportBodyOffset=constraint.pointB;
	
	supportBodyX=supportBodyPosition.x+supportBodyOffset.x
	supportBodyY=supportBodyPosition.y+supportBodyOffset.y
	line(supportBodyPosition.x, supportBodyPosition.y, supportBodyX,supportBodyY);
}

