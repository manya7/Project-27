
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var object1,object2,object3,object4,object5,object6,object7,object9;
var roof;
var chain1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
object1=new Bob(200,500,6);
object2=new Bob(250,500,6);
object3=new Bob(300,500,6);
object4=new Bob(350,500,6);
object5=new Bob(400,500,6);
object6=new Bob(450,500,6);
object7=new Bob(500,500,6);

roof=new Roof(350,200,500,50);

chain1=new Chain(object1,roof,x=250,y=140)

}

function draw() {
  rectMode(CENTER);
  background(0);
  
  object1.display();
  object2.display();
  object3.display();
  object4.display();
  object5.display();
  object6.display();
  object7.display();

  roof.display();

 chain1.display();

  drawSprites();
 
}
 //rope2=new Rope({x:250,y:140},bobObject2.body);// rope3=new Rope({x:300,y:140},bobObject3.body); rope4=new Rope({x:350,y:140},bobObject4.body); rope5=new Rope({x:400,y:140},bobObject5.body);


