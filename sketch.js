var fixedRect, movingRect ;

function setup() {
  createCanvas(1200,800);

  movingRect = createSprite(400, 200, 50, 50);
movingRect.shapeColor="red"
  fixedRect = createSprite(200,200,80,50);
fixedRect.shapeColor="blue"

}

function draw() {
  background(0,0,0);  
 

 movingRect.x = World.mouseX;
 movingRect.y= World.mouseY;

if(fixedRect.x-movingRect.x  < fixedRect.width/2+movingRect.width/2

&& movingRect.x-fixedRect.x  < fixedRect.width/2+movingRect.width/2

&& fixedRect.y-movingRect.y  < fixedRect.height/2+movingRect.height/2
&& movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2)

{
  movingRect.shapeColor="yellow";
  fixedRect.shapeColor="yellow";
}
else{
  movingRect.shapeColor="red";
  fixedRect.shapeColor="blue";
}
  drawSprites();

}