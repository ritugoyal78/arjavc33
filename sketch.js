const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var farmer;
var tree;
var bird;
var house;
var stone;
var chain;
var gameState=0
function preload()
{
	tree=loadImage("tree.jpg")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground (600,680,1200,10);
	farmer = new Farmer (0,0,500,250);
	//tree = new Tree (0,0,400,600);
	
	//house = new House(0,0,150,300);
	bird = new Bird (880,200,100,100);
	//stone = new Stone(200,400,30,30);
	
	//chain = new SlingShot(stone.body,{x:160,y:530})
	stone = new Stone(160,530,30,30);
	
	chain = new SlingShot(stone.body,{x:160,y:530})
	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background("white");
  textSize(20);
  fill("black");
  text("help the farmer to scare away the birds from his farm",100,30);
  textSize(20);
  fill("black");
  text("if the stone flies from near the bird it will vanish",100,130);
  image(tree,800,50,400,600)
  ground.display();
  farmer.display();
 // tree.display();
 
 // house.display();
   chain.display();
   stone.display();
  
   //if(gameState===0){
 bird.display()
 //  }
 var collision=Matter.SAT.collides(stone.body,bird.body)
 if(collision.collided){
	 gameState=1
	 //detectCollision()
	 Matter.Body.applyForce(stone.body,{x:stone.body.position.x,y:stone.body.position.y},{x:0.5,y:0})
	 bird.collide()
 }

  
  // detectCollision(bird,stone)			 
			 
  
  drawSprites();
 
}

function mouseDragged(){
	
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})    
	}

function mouseReleased(){
	chain.fly();  
	}

function keyPressed(){
		if(keyCode === 32){
		gameState=0
	   Matter.Body.setPosition(stone.body, {x:160,y:530});
	  chain.attach(stone.body);
		}		
   }

//function detectCollision(){
	/*	birdBodyPosition=b.body.position
  		stoneBodyPosition=s.body.position
 		var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, birdBodyPosition.x, birdBodyPosition.y)
  	
  		if((distance<=b.width+s.width))
	   	{
       	  bird.collide()
			 gameState=1
    	}
*/ 
 	// }
		





		