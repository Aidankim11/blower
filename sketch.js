const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  box=Bodies.rectangle(400,200,150,100,{isStatic:true})
  World.add(world,box)
  ball=Bodies.circle(400,20,20,{restitution:0.5})
  World.add(world,ball)
  button=createButton("click to blow")
  button.position(350,300)
  button.mouseClicked(function(){
    Matter.Body.applyForce(ball,ball.position,{x:0,y:0.1})
  })
}

function draw() {
  background(0); 
  Engine.update(engine)
  rectMode(CENTER)
  rect(box.position.x,box.position.y,150,100)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)
}