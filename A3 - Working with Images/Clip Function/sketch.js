let img;

function preload(){
  img=loadImage("orchids.jpg")
}

function setup() {
  createCanvas(700, 700);
  background(190,220,250);
  
//clip
  img.resize(200,200);
  let cnv7 = createGraphics(200,200);
  cnv7.circle(100,100,190);
  ctx7 = cnv7.canvas.getContext("2d");
  
  cnv7.canvas.getContext("2d").clip();
  cnv7.image(img,0,0);
  image(cnv7, 350, 225);
}

