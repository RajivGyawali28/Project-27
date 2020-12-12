const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobDi;
var bobobject1,bobobject2,bobobject3,bobobject4,bobobject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bobDi = 90;

	bobobject1 = new Bob(220,500,40,false);
	bobobject2 = new Bob(310,500,40,false);
	bobobject3 = new Bob(400,500,40,false);
	bobobject4 = new Bob(490,500,40,false);
	bobobject5 = new Bob(580,500,40,false);

	roof = new Roof(400,100,600,50);

	rope1 = new Rope(bobobject1,roof,-bobDi*2,0)
	rope2 = new Rope(bobobject2,roof,-bobDi,0)
	rope3 = new Rope(bobobject3,roof,0,0)
	rope4 = new Rope(bobobject4,roof,bobDi,0)
	rope5 = new Rope(bobobject5,roof,bobDi*2,0)

	Engine.run(engine);
}


function draw() {

  background(0);
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();

  keyPressed();
}

function keyPressed(){

	if(keyDown("up")){
		
		Body.applyForce(bobobject1.body,bobobject1.body.position,{x:-150,y:0});
		
	}

}

