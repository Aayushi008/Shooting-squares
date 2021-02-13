const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground
var polygon

function preload() {
  
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,5,1200,20);
    polygon=Bodies.circle(50, 200, 20);
   World.add(world, polygon);

    Ground1 = new Ground(600, 280, 200, 20)
    Ground2 = new Ground(1000, 150, 200, 20)

    //bottom 1
    Block1= new Box(600, 245, 50, 50)
    Block2 = new Box(650, 245, 50, 50)
    Block3 = new Box(550, 245, 50, 50)

    //middle 1
    Block4 = new Box(625, 195, 50, 50)
    Block5 = new Box(575, 195, 50, 50)

    //top 1
    Block6 = new Box(600, 145, 50, 50)

    //bottom 2
    Block7 = new Box(1000, 115, 50, 50)
    Block8 = new Box(1050, 115, 50, 50)
   Block9 = new Box(950, 115, 50, 50)

   //middles 2
   Block10 = new Box(1025, 65, 50, 50)
   Block11 = new Box(975, 65, 50, 50)

   //top 2
   Block12 = new Box(1000, 15, 50, 50)
    slingshot = new SlingShot(this.polygon,{x:200, y:60});
}

function draw(){
    background("white");
    Engine.update(engine);

    Ground1.display();
    Ground2.display();

    Block1.display();
    Block2.display();
    Block3.display();
    Block4.display();
    Block5.display();
    Block6.display();

    Block7.display();
    Block8.display();
    Block9.display();
    Block10.display();
    Block11.display();
    Block12.display();


   ellipseMode(RADIUS)
   ellipse(polygon.position.x, polygon.position.y, 20, 20)
  
   
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
