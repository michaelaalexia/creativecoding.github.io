function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  //rectangle
    cnv4 = createGraphics(width, height);
  ctx2 = cnv4.canvas.getContext("2d");
  cnv4.rect(150, 200, 200);
  //rectangle color
  cnv3 = createGraphics(width, height);
  cnv3.fill(30,0,0);  
  cnv3.rect(150,200,200); 
  //text
  cnv3.erase();
  cnv3.textSize(28);
  cnv3.text('print ("banana")', 150, 300);
  cnv3.noErase();
  image(cnv3, 0, 0);
}