const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var piglet,piglet2;
var loglet,loglet2,log,log2;
var angrybird;

function setup(){
    var canvas = createCanvas(1250,551);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(901,531,50,50);
    box2 = new Box(1101,531,50,50);
    box3 = new Box(901,421,50,50);
    box4 = new Box(1101,421,50,50);
    box5 = new Box(1001,351,50,50);
ground = new Ground(625,541,1250,20);
piglet = new Pig(1001,531);
piglet2 = new Pig(1001,421);
loglet = new Log(1001,471,251,PI/2);
loglet2 = new Log(1001,361,251,PI/2);
log = new Log(951,351,125,PI/7);
log2 = new Log(1041,351,125,-PI/7);
angrybird = new Angrybird(51,201);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   ground.display();
   piglet.display();
   piglet2.display();
   loglet.display();
   loglet2.display();
   log.display();
   log2.display();
   angrybird.display();
}