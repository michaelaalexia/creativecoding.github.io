let colorData;
let width = 1000;

function setup (){
  createCanvas (1300, 800);
  background ("#232436");
}

function preload (){
  colorData = loadTable
  ("Data Vis - Sheet1 (1).csv", "csv", "header");
}

function getSum (total, num){
  return total + num;
}

function draw (){
  strokeWeight(10);
  
  // get data from csv
  // load data into multidimensional
  let colorArray = colorData.getArray();
  
  // convert count column into int 
  // get sum of colors
  let count = int(colorData.getColumn("plays"));
  let colorTotal;
  
  // reduces array number
  colorTotal = count.reduce(getSum);
  
  // stop p5 after completing for loop
  noLoop();
  
  for (let i = 0; i < colorArray.length; i++){
    let colorName = colorArray[i][0];
    let colorCount = colorArray[i][1];
    
    stroke(colorName); // rectangle color from data
    fill(colorName);
    rect(width, 400, 50, -colorCount*2.5); // x,y,w,h
    
     width = width - 70
    
    fill(255);
    noStroke();
    textFont("Helvetica");
    textSize(50);
    text ("Preferred Reading Forms", 170, 350); // text, x, y
    fill('white');
	noStroke();
	textFont ('Bungee');
	textSize (20);
	text ("both", 870, 440);
	text ("physical", 920, 440);
	text ("digital", 1000, 440);
  }
}