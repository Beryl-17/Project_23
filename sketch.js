const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerBase;
var playerBase;
var player;
var computer;



function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
  
  computerBase = new ComputerBase(300,random(450,height-300),180,150);
  playerBase = new PlayerBase(300,random(450,height-300),180,150);
  player = new Player(300,random(450,height-300),180,150);
  computer = new Computer(300,random(450,height-300),180,150);
  


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   
  computerBase.display();
  playerBase.display();
  
   //display Player and computerplayer
   player.display();
   computer.display();


}
