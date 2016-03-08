//CC Workshop
//day 2 work 2:-using rotate
//nothing else to add to title




function setup() {
   createCanvas(1200, 1200);   //makes a canvas
   background(0,0,0); //three args: red,green,blue 
   noFill(); //doesnt fill the interior of the shape
   stroke(255,100);
   
   rectMode(CENTER); //sets the x and y coords of rect to refer to its center point
   }

   
//KALEIDOSCOPY CIRCLES
//REMOVE THE MULTI LINE COMMENTS TO GET KALEIDOSCOPY CIRCLES

function draw() {
  //background(0,0);
  var angle=0.02*mouseX+0.02*mouseY;
  translate(mouseX,mouseY); 
  rotate(angle);       //rotate objects below this statement around the canvas origin point in radians by rotating the whole canvas. 
                        //increasing the value by n will rotate around the origin of canvas by n radians
  rect(0,0,100,100);   //rect with origin at its center
  
  
  }
 



  
