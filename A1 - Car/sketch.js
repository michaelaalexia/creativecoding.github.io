function setup() {
  createCanvas(400, 400);
}
//func setup - sets the canvas
//func draw - adds things to canvas

function draw() {
  background(30, 70, 90);
  
  fill (89, 90, 91);
  rect (150, 150, 100, 50);
  
  fill (255, 0, 0)
  ellipse (170, 200, 30, 30);
  ellipse (230, 200, 30, 30);
  
  fill (89, 90, 91);
  rect (260, 150, 100, 50);
  
  fill (255, 0, 0)
  ellipse (280, 200, 30, 30);
  ellipse (340, 200, 30, 30);
  
  fill (89, 90, 91);
  rect (40, 150, 100, 50);
  
  fill (255, 0, 0)
  ellipse (60, 200, 30, 30);
  ellipse (120, 200, 30, 30);
  
  // TRIANGLE 
  fill (240, 300, 50)
  triangle (270, 150, 280, 140, 250, 130);
  stroke (0);
  strokeWeight (1)
  
}