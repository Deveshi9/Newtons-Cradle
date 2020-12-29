
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Roof,Bob,bob1,bob2,bob3,bob4;
var engine, world;
function preload()
{
	
}

function setup() {
	createCanvas(500,500)


	engine = Engine.create();
	world = engine.world;

     Roof = new roof(250,100,300,40);
     Bob = new bob(250,350,20);
     bob1 = new bob(210,350,20);
     bob2 = new bob(170,350,20);
     bob3 = new bob(290,350,20);
     bob4 = new bob(330,350,20);
      
     var options = {
       bodyA:Bob.body,
       bodyB:Roof.body,
       stiffness:0.04,
       length:10
     }
      var rope = Constraint.create(options)
      World.add(world,rope);
     
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("mistyrose");
  Roof.display();
  Bob.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
 
  drawSprites();
 
}



