//image

let img;



function preload(){

  img=loadImage("orchids.jpg")

}



function setup() {

  createCanvas(700, 700);

  background(30,50,90);

//mask

  img.resize(200,200);

  let cnv5 = createGraphics(200, 200);

  cnv5.rect(100, 0, 190);

  cnv5.triangle(0, 0, 150, 170, 200, 0);

  img.mask(cnv5);

  image(img,300,25);
}