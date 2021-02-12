const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2,slingshot;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var polygon_img;
var block17,block18,block19,block20,block21,block22,block23,block24,block25;
function preload(){


}

function setup(){
var canvas = createCanvas(1200,400);

engine = Engine.create();
	world = engine.world;

ground1 = new Ground (350,350,200,10);
ground2 = new Ground (700,200,200,10);
polygon_img=loadImage("polygon.png")

//first ground
block1 = new Block (320,345,20,30);
block2 = new Block (330,345,20,30);
block3 = new Block (340,345,20,30);
block4 = new Block (350,345,20,30);
block5 = new Block (360,345,20,30);
block6 = new Block (370,345,20,30);
block7 = new Block (380,345,20,30);
block8 = new Block (325,330,20,30);
block9 = new Block (335,330,20,30);
block10 = new Block (350,330,20,30);
block11 = new Block (360,330,20,30);
block12 = new Block (370,330,20,30);
block13 = new Block (340,315,20,30);
block14 = new Block (350,315,20,30);
block15 = new Block (360,315,20,30);
block16 = new Block (350,300,20,30);

//second ground
block17 = new Block (680,195,20,30);
block18 = new Block (690,195,20,30);
block19 = new Block (700,195,20,30);
block20 = new Block (710,195,20,30);
block21 = new Block (720,180,20,30);
block22 = new Block (685,180,20,30);
block23 = new Block (695,180,20,30);
block24 = new Block (705,180,20,30);
block25 = new Block (695,165,20,30);

polygon = Bodies.circle(50,200,20);
imageMode(CENTER)
image(polygon_img,polygon.position.x,polygon.position.y,40,40)
World.add(world,polygon);

slingshot= new SlingShot (polygon,{x:100,y:200});


Engine.run(engine);
}
 
function draw(){

background(222);

ground1.display();
ground2.display();
ellipse(polygon.position.x,polygon.position.y,20,20)
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();

block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();









}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x:mouseX, y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

