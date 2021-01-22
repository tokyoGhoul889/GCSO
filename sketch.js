var car, wall;

var speed, height;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  car=createSprite(200,200,50,50);
  wall=createSprite(1200,200,60,10);
  car.velocityX=5;
  speed=random(25,31);
  weight=random(400,1500);
}

function draw() {
  background("black");
  
  if(wall.x-car.x <(car.width+wall.width)/2){
    car.velocity=0;
    var deformation=0.5 * weight * speed * speed/22509

   if (deformation>180){
    
    car.shapecolor=("yellow");
    wall.shapecolor=("white");
   }

   if (deformation<180 && deformation>100){

    car.shapecolor=("green");
    wall.shapecolor(255);
   }

   if (deformation<100){

    car.shapecolor=("red");
    wall.shapecolor=("white");
   }

  }
  
  drawSprites();

}