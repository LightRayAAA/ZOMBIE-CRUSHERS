const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var leftwall, rightwall
var bridge
var link
var stones = []
var jointPoint
var jointLink

function setup() {
createCanvas(windowWidth, windowHeight);
engine = Engine.create();
world = engine.world;
frameRate(80);
leftwall = new Base(300,height/2+50,600,100,"#8d6d63",true)
rightwall = new Base(width-300,height/2+50,600,100,"#8d6d63",true)
bridge = new Bridge(22,{x: width/2-400, y: height/2})
jointPoint = new Base(width-600,height/2+10,40,20,"#8d6d63",true)
Matter.Composite.add(bridge.body,jointPoint)
jointLink = new Link(bridge,jointPoint)

for(var i = 0; i <= 8; i++){
var x = random(width/2 - 200, width / 2 + 300)
var y = random(-10, 140)
var stone = new Stone(x, y, 80, 80)
stones.push(stone)
}


}

function draw() {
  background(51);
  Engine.update(engine);
  for(var stone of stones){
  stone.display();
  //jointPoint.display();
  }
  leftwall.display();
  rightwall.display();
  bridge.show();
}
