

var shapeSize= 130; 

function setup(){ 

var origColor= random(180, 360); createCanvas(600, 400);


background("#1E2019"); 

colorMode(HSB, 360, 100, 100);
  
  // first pair of shapes

var shapeSize = 100;

noStroke(); 

fill(origColor, 80, 80);

 ellipse(width/2 -shapeSize/2, height/2, shapeSize, shapeSize); 

fill((origColor+ 180) % 360, 80, 80); 

ellipse(250, 60, shapeSize, shapeSize); 

// second pair of shapes
  
  var size = 100;

noStroke(); 

fill((origColor+ 180) % 360, 80, 80);

 ellipse(90, height/2, size, size); 

fill((origColor+ 180) % 360, 80, 80); 

ellipse(400, height/2, size, size); 
  
    var shape = 100;
  fill((origColor+ 180) % 360, 80, 80);

 ellipse(250, height/2 + 150, shape, shape); 


} 