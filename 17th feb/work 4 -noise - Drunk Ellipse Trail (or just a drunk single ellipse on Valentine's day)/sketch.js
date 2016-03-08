//CC Workshop
//Work 4:- Drunk Ellipse Trail (or just a drunk single ellipse on Valentine's day)

//a circle or ellipse that moves around using noise?

//I'm not entirely sure how noise works yet
//I think the noise graph of each sketch is fixed (atleast thats what I understood)
//so using noise() on a particular value in a sketch does not change the value returned for... 
//...that function in each frame. This differs from random, which returns a new value for each frame 

var z1;
var z2;
var z3;
var z4;
var z5;
var z6;


function setup() {
   createCanvas(1200, 1200);   //makes a canvas
   background(12,12,250);   //three args: red,green,blue 
   z1=2;
   z2=3;
   z3=4;
   z4=4;
   z5=12;
   z6=34;
   z7=54;
   //strokeWeight(0);

   
}


//function draw() creates a frame of a 30fps sequence
//when we open the sketch, it is actually running at 30fps
//hence the reason random works the way it does
function draw() {
  
 

  //background(0);  //uncomment this statement to see the shape trails
                    //this comment resets the background in each frame.
					//each frame lays on a new background, hiding previously drawn shape
  z1=z1+0.01;
  z2=z2+0.01;
  z3=z3+0.01;
  z4=z4+0.01;
  z5=z5+0.01;
  z6=z6+0.01;
  z7=z7+0.01;
  var x=noise(z1)*700;  //noise always returns a value b/w 0 and 1
  var y=noise(z2)*700;
  var ht=noise(z3)*300;
  var wd=noise(z4)*300;
  var colRed=noise(z5)*500;
  var colBlue=noise(z6)*300;
  var colGreen=noise(z7)*222;
  //random means it keeps changing inside 
  fill(colRed,colBlue,colGreen);
 
  ellipse(x,y,ht,wd);

	
}

//NOTE:
//noise does not change the value again and again within the sketch
//random does cause change within the sketch  
  

  

