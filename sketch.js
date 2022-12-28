const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,box1,ground,box2,box3
function setup(){
   createCanvas(400,400);

   engine = Engine.create()
   world = engine.world

    box1 = new Box(100,150,50,50)
    box2 = new Box(200,200,10,100)
    box3 = new Box(120,50,75,80)
   
    ground = new Ground(200,390,400,20)
}

function draw(){
    background("black");
    Engine.update(engine)

    box1.display()
    box2.display()
    box3.display()
   
    ground.display()
}