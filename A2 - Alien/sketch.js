function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(20, 30, 50);
  
  // head
  push();
  ellipseMode(CENTER);
  fill("#D64933");
  ellipse(200, 100, 70, 70);
  pop();
  
  // eyes
  push();
  fill("#92DCE5");
  ellipse(190, 100, 10, 20);
  ellipse(210, 100, 10, 20);
  pop();
  
  // arms
  push();
  fill("#3D52D5");
  translate (200, 100);
  beginShape();
  vertex (40, 60);
  bezierVertex(20, 50, 30, 40, 30, 40);
  endShape();
  pop();
  
  push();
  fill("#3D52D5");
  translate (150, 100);
  beginShape();
  vertex (0, 60);
  bezierVertex(30, 60, 30, 30, 30, 40);
  endShape();
  pop();
  
  // body
  push();
  fill("#590925")
  ellipse(201, 175, 70, 80);
  pop();
  
  // feet
  push();
  fill("#515A47");
  ellipse(180, 215, 30, 10);
  ellipse(220, 215, 30, 10);
  pop();
  
  // antenna or headpiece
  push();
  fill("#FDCA40");
  translate (100, 50);
  beginShape();
  vertex (100, 10);
  bezierVertex(30, 60, 30, 30, 30, 40);
  endShape();
  
  translate (120, 0);
  beginShape();
  vertex (0, 20);
  bezierVertex(50, 70, 60, 60, 30, 40);
  endShape();
  pop();
}