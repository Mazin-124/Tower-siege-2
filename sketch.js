const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var base,stand1,stand2;
var slingshot,box1;
var polygon,polygonImg;

function preload(){
  polygonImg = loadImage("Hexagon_tbc78_fanon.png")
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;

  polygon = Bodies.circle(50,200,20)
  World.add(world,polygon)
 
  slingshot = new Slingshot(this.polygon,{x:100,y:200});

  base = new Ground(400,380,900,30);
  stand1 = new Ground(390,300,250,10);
  stand2 = new Ground(700,200,200,10);

  //level two
  box8 = new Box(330,235,30,40);
  box9 = new Box(360,235,30,40);
  box10 = new Box(390,235,30,40);
  box11 = new Box(420,235,30,40);
  box12 = new Box(450,235,30,40);

  //level three
  box13 = new Box(360,195,30,40);
  box14 = new Box(390,195,30,40);
  box15 = new Box(420,195,30,40);
  
  //top
  box16 = new Box(390,155,30,40);
}

function draw() {
  background("white")
  Engine.update(engine);
  base.display();
  stand1.display();
  stand2.display();
  fill("skyblue")
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill("pink")
  box13.display();
  box14.display();
  box15.display();
  fill("lightgreen")
  box16.display();

  imageMode(CENTER)
  image(polygonImg,polygon.position.x,polygon.position.y,20,20)
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

//when mouse released the polygon
function mouseReleased(){
  console.log("Inside mouse released function")
  slingshot.fly();
}
// To attach
function keyPressed (){
  if(keyCode === 32){
    slingshot.attach(this.polygon);
  }
}