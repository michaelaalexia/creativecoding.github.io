var img, x, y;

function preload() {

img = loadImage("WIMTUR.jpg");

}



function setup() {

createCanvas (600, 700);

background(0);

noStroke();

}

//pixels (used rectangle for this)

function draw() {

background(0);

x = mouseX;

y = mouseY;

image( img, 0, 0);

var c = get(x, y);

fill(c);

rect (x, y, 100, 100);

}