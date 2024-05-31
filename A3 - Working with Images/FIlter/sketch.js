var img;

function preload() {

img = loadImage("WIMTUR.jpg");

}



function setup () {

createCanvas (600, 700);

background(0);

}

//filter

function draw() {

background(0);

image(img, 0, 0);

filter(BLUR, 22);

}

