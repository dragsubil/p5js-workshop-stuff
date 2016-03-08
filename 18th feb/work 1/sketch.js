//CC Workshop
//day 2 work 1:-using translate
//learning how to adjust the origin reference point of the canvas to our needs
//and also functions and function calls


var z1,z2,z3,z4,z5,z6,z7,z8;


function setup() {
   createCanvas(1200, 1200);   //makes a canvas
   background(12,12,250); //three args: red,green,blue 
   //noFill(); //the inner color is not filled for all the shapes
   

   }


function draw() {
  background(0,255,0);
  translate(mouseX,mouseY); //sets the origin from the top left corner (which is default) to the given pixel location
  translate(50,50); //translate adds upon previous translates
  fill(255,255,0);
  ellipse(-50,-50,100,100);
 /* house();
  translate(300,0);
  house();
  translate(0,310);
  house();
  translate(-300,0);  //remember: translate coordinates add up with all previous translates
  house();
  */
  for(var i=0;i<8;i++){
    for(var j=0;j<10;j++){
		push();  //used to keep the translate within the push() - pop() from adding on to subsequent translates
		translate(70*i,70*j);
		house();
		pop();
		
		}
	}
  
  }
 

//drawing a house function 
function house(){
  fill(34,61,212);
  rect(0,0,50,50);
  fill(0);
  rect(30,20,7,11);
  fill(255,0,0);
  triangle(-5,0,55,0,25,-25);  //-ve coordinates can also be used for x y
  
    
  }

  
