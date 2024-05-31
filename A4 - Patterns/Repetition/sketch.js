var circleSize = 80;
function setup() {
  createCanvas(400, 400);
  background (220);
  translate (circleSize/2, circleSize/2); // width and height of canvas

for(var x = 0; x < width; x += circleSize) {
  
// ellipses, smaller circles with each color 
       for(var y = 0; y < height; y += circleSize) {                

             fill("#2C2A4A");
             ellipse(x, y, circleSize * 2, circleSize * 2); 
         
             fill("#4F518C");
             ellipse(x, y, circleSize * 1.9, circleSize * 1.9);

             fill("#907AD6");
            ellipse(x, y, circleSize * 1.8, circleSize * 1.8);
        
         fill ("#DABFFF");
         ellipse (x, y, circleSize * 1.7, circleSize * 1.7);
         
         fill("#2C2A4A");
             ellipse(x, y, circleSize * 1.6, circleSize * 1.6); 
         
         fill("#4F518C");
             ellipse(x, y, circleSize * 1.5, circleSize * 1.5);
         
         fill("#907AD6");
            ellipse(x, y, circleSize * 1.4, circleSize * 1.4);
         
         fill ("#DABFFF");
         ellipse (x, y, circleSize * 1.3, circleSize * 1.3);
         
         fill("#2C2A4A");
             ellipse(x, y, circleSize * 1.2, circleSize * 1.2); 
         
             fill("#4F518C");
             ellipse(x, y, circleSize * 1.1, circleSize * 1.1);

             fill("#907AD6");
            ellipse(x, y, circleSize * 1, circleSize * 1);
        
         fill ("#DABFFF");
         ellipse (x, y, circleSize * 0.9, circleSize * 0.9);
         
         fill("#2C2A4A");
             ellipse(x, y, circleSize * 0.8, circleSize * 0.8); 
         
             fill("#4F518C");
             ellipse(x, y, circleSize * 0.7, circleSize * 0.7);

             fill("#907AD6");
            ellipse(x, y, circleSize * 0.6, circleSize * 0.6);
        
         fill ("#DABFFF");
         ellipse (x, y, circleSize * 0.5, circleSize * 0.5);
         
         }

 }
}

