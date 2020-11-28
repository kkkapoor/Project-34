
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;
var engine,world,mConstraint;
var bob1, bob2, bob3, bob4, bob5;
var sling1, sling2, sling3, sling4, sling5;

function setup(){
  canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
  engine = Engine.create();
  world = engine.world;

 let canvasmouse = Mouse.create(canvas.elt);
 canvasmouse.pixelRatio = pixelDensity();

 let options = {
   mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  bob1 = new Pendulum(width-610, height- 150, color("black"));
  bob2 = new Pendulum(width-530, height- 150, color("black"));
  bob3 = new Pendulum(width-450, height- 150, color("black"));
  bob4 = new Pendulum(width-370, height- 150, color("black"));
  bob5 = new Pendulum(width-290, height- 150, color("black"));

  sling1 = new Sling(bob1.body, {x: width-610, y: height-430});
  sling2 = new Sling(bob2.body, {x: width-530, y: height-430});
  sling3 = new Sling(bob3.body, {x: width-450, y: height-430});
  sling4 = new Sling(bob4.body, {x: width-370, y: height-430});
  sling5 = new Sling(bob5.body, {x: width-290, y: height-430});

}

function draw(){
background(0);
Engine.update(engine);
ellipseMode(RADIUS);
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

sling1.display();
sling2.display();
sling3.display();
sling4.display();
sling5.display();

}

function mouseDragged(){
  Matter.Body.setPosition(bob1.body,{x:mouseX, y:mouseY});
}