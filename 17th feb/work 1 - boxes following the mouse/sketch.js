//CC workshop
//work 1:- boxes following the mouse
//creates n random sized rectangles at mouse position

function setup() {
   createCanvas(1200, 1200);   //makes a canvas
   background(12,12,250); //three args: red,green,blue 
   //noLoop();
   
   // a noLoop() can be placed here to run the sketch for only one frame and stop
}

function draw() {
 
//the function draw actually is code for a frame. the sketch, when run
//runs for 30 fps.
//so this function is executed 30 times every second, until you close the sketch
  fill(random(255),random(255),random(255)); //random means it keeps changing inside 
  for(var i=0;i<100;i++){
    rect(mouseX,mouseY,random(200),random(200)); //mouseX and Y - object corresponds to mouse position
 
	
  }
  
   
  
}
  

