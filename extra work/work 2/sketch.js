//CC Workshop
//extra work 2:- Lazy Bezier and his reliable buddy, Timmy the Triangle
//same as bezier with rectangle. anchor points fixed to 2 vertices of a triangle

var z1,z2,z3,z4,z5,z6,z7,z8;


function setup() {
   createCanvas(1200, 1200);   //makes a canvas
   background(12,12,250); //three args: red,green,blue 
   noFill(); //so draws only the bezier curve. the inner color is transparent
   
   stroke(255,250); //two args: grayscale and opacity
   //strokeWeight(12); //thickness of stroke 

   frameRate(600); //determines the fps
   z1=random(1200);
   z2=random(1200);   //Just so you know dumbass, dont put the same numbers 
   z3=random(1200);   //for the coordinates of the 4 points needed for bezier
   z4=random(1200);  //you wont get anything
   z5=random(1200);
   z6=random(1200);
   z7=random(1200);
   z8=random(1200);
   }

function draw() {

  background(0);
  z1=z1+0.001;
  z2=z2+0.001;
  z3=z3+0.001;
  z4=z4+0.001;
  z5=z5+0.001;
  z6=z6+0.001;
  z7=z7+0.001;
  z8=z8+0.001;
  
  var x1=1200*noise(z1);
  var y1=400*noise(z2);
  var x2=789*noise(z3);
  var y2=919*noise(z4);
  var x3=899*noise(z5);
  var y3=509*noise(z6);
  var x4=542*noise(z5);
  var y4=212*noise(z6);
  
  triangle(x4,y4,x1,y1,x2,y2); //args: x,y,width,height
     
  bezier(x4,y4,x2,y2,x3,y3,x1,y1); //the anchor points are fixed to top left and bottom right of rect
  
  
  
  //bezier takes 8 args:  first two args - x y of first anchor point
  //                      last two args - x y of second anchor point
  //              middle args - control points to determine shape of curve          
  

	
  }


  
   
  
