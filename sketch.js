const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hexagonImg;
var hexagon1;
var hexagon2;
var hexagon3;
var hexagon4;
var hexagon5;
var gr;
var shelf1;
var shelf2;
var shelf3;

var gameState = "play"

function preload(){
    hexagonImg = loadImage("hex.png")
}

function setup(){
createCanvas(800,800)

engine = Engine.create();
world = engine.world;

hexagon1 = new Hexagon(200,100,80,80);
hexagon2 = new Hexagon(300,100,70,70);
hexagon3 = new Hexagon(400,100,60,60);
hexagon4 = new Hexagon(500,100,50,50);
hexagon5 = new Hexagon(600,100,40,40);
gr = new Ground(400,750,800,10);
shelf1 = new Ground(450,130,650,5);
shelf2 = new Ground(200,540,5,400);
shelf3 = new Ground(350,540,5,400);
}

function draw(){
background(200)
Engine.update(engine);

/*if(hexagon1.isTouching(shelf2)||hexagon1.isTouching(shelf3)){
gameState = "end"
}else{
    gameState = "play"
}*/
if(gameState === "end"){
    textSize(30)
text("game over",500,400);
}
hexagon1.display();
hexagon2.display();
hexagon3.display();
hexagon4.display();
hexagon5.display();
gr.display();
shelf1.display();
shelf2.display();
shelf3.display();

detectcollision(shelf2,hexagon1);
detectcollision(shelf3,hexagon1);
detectcollision(shelf2,hexagon2);
detectcollision(shelf3,hexagon2);
detectcollision(shelf2,hexagon3);
detectcollision(shelf3,hexagon3);
detectcollision(shelf2,hexagon4);
detectcollision(shelf3,hexagon4);
detectcollision(shelf2,hexagon5);
detectcollision(shelf3,hexagon5);
}

function mouseDragged(){
if(keyDown("1")){
Matter.Body.setPosition(hexagon1.body, {x: mouseX , y: mouseY});
}
if(keyDown("2")){
Matter.Body.setPosition(hexagon2.body, {x: mouseX , y: mouseY});
}
if(keyDown("3")){
Matter.Body.setPosition(hexagon3.body, {x: mouseX , y: mouseY});
}
if(keyDown("4")){
Matter.Body.setPosition(hexagon4.body, {x: mouseX , y: mouseY});
}
if(keyDown("5")){
Matter.Body.setPosition(hexagon5.body, {x: mouseX , y: mouseY});
}
}

function detectcollision(lshelf,lhex){

  if(lhex.body.position.x - lshelf.body.position.x < lshelf.width/2 + lhex.width/2 
    && lshelf.body.position.x - lhex.body.position.x < lshelf.width/2 + lhex.width/2
    &&lhex.body.position.y > 450){
        console.log("over")
    }
    }


  /*  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

    if(distance<=lmango.r+lstone.r)
    {

      Matter.Body.setStatic(lmango.body,false);
    }*/