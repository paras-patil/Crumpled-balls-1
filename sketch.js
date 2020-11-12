
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boxPosition=width/2+120
	 boxY=590;
	 
	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
	 World.add(world, boxRightBody);
	 
	
	


	
    //World.add(world,ball);



	Engine.run(engine);
   
	ground = new Ground(400,650,800,20)
	ball = new Ball(50,625,40,80)
  
}

function keyPressed(){
	if (keyCode === UP_ARROW){

      Matter.Body.applyForce(ball.body,ball.body.position,{x:150,y:-500});

	}
}


function draw() {
  rectMode(CENTER);
  background(0,0,0);

  text(mouseX+","+mouseY,mouseX,mouseY);

  //ellipseMode(RADIUS);
  //ellipse(ball.position.x, ball.position.y, 20, 20);
  ground.display()
  ball.display()
  drawSprites();
 
}



