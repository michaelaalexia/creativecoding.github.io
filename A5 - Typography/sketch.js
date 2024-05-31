function preload() {
  font = loadFont("Jersey10Charted-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#373737");
  textAlign(CENTER);
  textSize(120);
  fill("#F6FEAA");
  textFont(font);
  text('print("banana")', windowWidth/3.4, windowHeight/2, 685);
}