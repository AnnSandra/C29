const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7,block8;
var block9,block10,block11,block12,block13,block14,block15,block16;
var block17,block18,block19,block20,block21,block22,block23,block24,block25;

var polygon,polygon_img,sling;
var score=0;
var bgcolor="green";

function preload(){
   getBackgroundImage();
    polygon_img=loadImage("polygon.png");
    
}
function setup(){

    createCanvas(1200,400);
    engine= Engine.create();
    world= engine.world;
    
    ground = new Ground(600,390,1200,20);
    stand1= new Ground(390,300,250,10);
    stand2= new Ground(700,250,250,10);

    block1 = new Box(300,275,30,40);
    block2 = new Box(330,275,30,40);
    block3 = new Box(360,275,30,40);
    block4 = new Box(390,275,30,40);
    block5 = new Box(420,275,30,40);
    block6 = new Box(450,275,30,40);
    block7 = new Box(480,275,30,40);

    block8 = new Box(330,235,30,40);
    block9 = new Box(360,235,30,40);
    block10 = new Box(390,235,30,40);
    block11 = new Box(420,235,30,40);
    block12 = new Box(450,235,30,40);

    block13 = new Box(360,195,30,40);
    block14 = new Box(390,195,30,40);
    block15 = new Box(420,195,30,40);
    
    block16= new Box(390,155,30,40);

    block17= new Box(640,225,30,40);
    block18= new Box(670,225,30,40);
    block19= new Box(700,225,30,40);
    block20= new Box(730,225,30,40);
    block21 = new Box(760,225,30,40);
    block22 = new Box(670,200,30,40);
    block23 = new Box(700,200,30,40);
    block24 = new Box(730,200,30,40);

    block25= new Box(700,160,30,40);

    polygon =Bodies.circle(50,200,20);
    World.add(world,polygon);
    
    sling= new Slingshot(polygon,{x:100,y:200})


}

function draw(){

    Engine.update(engine);  
    if(bgcolor)
        background(bgcolor);
    fill("black")
    text("Drag the hexagon and launch it at the blocks",300,100);
    textSize(20)
    text("SCORE:"+score,750,40);

    ground.display();
    stand1.display();
    stand2.display();

    stroke("black");
    strokeWeight(2)
    fill("pink");

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill("skyblue");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill("lightgreen");
    block13.display();
    block14.display();
    block15.display();

    fill("lightyellow");
    block16.display();

    fill("pink");
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    
    fill("skyblue");
    block22.display();
    block23.display();
    block24.display();

    fill("lightgreen");
    block25.display();

    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);

    sling.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
    

   


}

function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
}
function mouseReleased(){
sling.fly();
}

function keyPressed(){
    if(keyCode===32){
        sling.attach(polygon);
    }
}

async function getBackgroundImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseJson=await response.json();
    
    var datetime=responseJson.datetime;
    var hour=datetime.slice(11,13);
    console.log(hour);
    if(hour>=06 && hour<=18)
        bgcolor="orange";
    else
      bgcolor="blue";

}

