//CC Workshop
//work 3:- coloured rectangles - large or small or inbetween
//creates a number of rectangles, depending on the number of rows and cols set




function setup() {
   createCanvas(1200, 768);   //makes a canvas
   background(0);   //three args: red,green,blue 
   noLoop();   //tells to draw only once
}

function draw() {
  //deciding the dimensions of the rectangles
  var rows=30;
  var cols=30;
  var rowHeight=height/rows;  //height and width are prefixed values - the canvas dimensions
  var colWidth=width/cols;
  
  
  
  for(var i=0;i<cols;i++){
    for(var j=0;j<rows;j++)
	{
      rect(i*colWidth,j*rowHeight,random(100),random(100)); //random means it keeps changing inside 
	  fill(random(250),random(250),random(250),100); //fill can have 4 args: r,g,b,alpha
	}
  }	
 
   
  
}
  

