//CC workshop
//work 2:- a gradient of shapes
//creates a set of rectangles and then ellipses using a for loop in each frame
//dimensions of shapes determined by the mouse coordinates

function setup() {
   createCanvas(1200, 1200);   //makes a canvas
   background(12,12,250); //three args: red,green,blue 
}

function draw() {
  background(0);
  var x=mouseX;
  var y=mouseY;
  
  //random means it keeps changing inside 
  for(var i=0;i<190;i++){
  if(i<80){
    fill(i*4,12,100); 
    rect(i*5,i*5,x,y); 
	}
  else{
    fill(i*4,12,100); 
    ellipse(i*5,i*5,x,y);
	}	
 
	
  }
  
   
  
}
  

