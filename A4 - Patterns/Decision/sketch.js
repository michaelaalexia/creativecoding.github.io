var maxCol = 5;
var maxRow = 4;
var circleD = 45;

function setup() {
  createCanvas(400, 400);
  noStroke();
  colorMode(HSB, 360, 100, 100); // hue - saturation - brightness
  background (0);
  
  // spacing
  var xSpacing = (width/maxCol);
  var ySpacing = (height/maxRow);
  translate (20, 20);
  rectMode(CORNER);
  
  // for loop
  for (var x = 0; x < maxCol; x++) { 

    for (var y = 0; y < maxRow; y++) { 

         if (x == 2) { 
             fill("#228CDB"); // color of one row
          }

          else { 
             fill(0, 0, 100); 
         } 

rect(x * xSpacing, y * ySpacing, circleD, circleD); 

  }   

}
}

