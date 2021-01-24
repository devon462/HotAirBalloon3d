var background, backgroundImage
var ballon, ballonImage
var database


function preload() 
{
  backgroundImage = loadImage("images/Hot Air Ballon-01.png")
  ballonImage = loadImage("images/Hot Air Ballon-02.png")
}
function setup() {
  createCanvas(800,400);
  ballon = createSprite(400, 200, 50, 50);
  ballon.addImage(ballonImage)
  ballon.scale = 0.2
}

function draw() {
  background(backgroundImage);  
  
   if(keyDown(LEFT_ARROW))
   {
     ballon.x = ballon.x - 10

   }

   if(keyDown(RIGHT_ARROW))
   {
     ballon.x = ballon.x + 10
   }

   if(keyDown(UP_ARROW))
   {
     ballon.y = ballon.y - 10
     ballon.scale = scale -0.01
   }

   if(keyDown(DOWN_ARROW))
   {
     ballon.y = ballon.y + 10
   }


  drawSprites();
}