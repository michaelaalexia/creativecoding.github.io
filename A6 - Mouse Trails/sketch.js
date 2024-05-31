function setup() {
  createCanvas(400, 400);
  background("#2C6E49")
}

function draw() {
  if (mouseIsPressed) {
    fill("#A5C4D4");
    rect(mouseX, mouseY, 50, 50);
  } else {
    fill("#593F62");
    // default color following mouse, changes when you click
  }

  line (mouseX, mouseY, 60, 70)
}