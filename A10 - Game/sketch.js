// variables
var snake;
var scle = 20; // this is to measure the spaces the snake moves in
var food; // food for snake
let startScreen = true; // starting screen
 

//setup and drawing

function setup() {
  createCanvas(windowWidth, windowHeight);
  snake = new Snake();
  frameRate(10);
  pickLocation(); // so it shows in random places
}

function draw() {
  background("#393E41");
  // for title screen 	
    if (startScreen) {
    background("#12664F");
    textAlign(CENTER);
    textSize(50);
    fill ("#DBC2CF");
    text ("THE SNAKE GAME", width / 2, height / 2);
    textSize(25);
    fill("#89ABD2");
    text("click to start", width / 2, height / 1.7);
    textSize (17);
    fill("#DBC2CF");
    text("use the arrow keys to control the snake", width / 2, height / 1.5);
    
  }
  
  // for snake
  else {
  snake.update();
  snake.show();
  snake.death();
  fill("#ECE4B7");
  ellipse(food.x, food.y, scle, scle);
  if (snake.eat(food)) {
    pickLocation();
  }}
}

// click to start
function mousePressed() {
  startScreen = false;
}

// arrow functions
function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1);
  } else if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1, 0);
  }
}

// handles the snake
function Snake() {
  this.x = 0; // object has x and y
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 1;
  this.tail = [];

  // direction fucntions

  this.dir = function (x, y) {
    this.xspeed = x;
    this.yspeed = y;
  };
  
  // death of snake
  this.death = function () {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        this.total = 0;
        this.tail = [];
      }
    }
  };
 

  // for object to have functions
  this.update = function () {
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y);

    // snake increases after eating food

    this.x = this.x + this.xspeed * scle;
    this.y = this.y + this.yspeed * scle;
    // x/y changes by x/yspeed

    this.x = constrain(this.x, 0, width - scle);
    this.y = constrain(this.y, 0, height - scle);
  };
  // so it doesn't go off the canvas

  //eat func, handles position and vector of where food is
  this.eat = function (pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++; // if snake eats food, total goes up by 1
      return true;
    } else {
      return false;
    }
  };

  //design of snake
  this.show = function () {
    fill("#B5FFE9");
    for (var i = 0; i < this.tail.length; i++) {
      ellipse(this.tail[i].x, this.tail[i].y, scle, scle);
    }
    ellipse(this.x, this.y, scle, scle);
  };
}

function pickLocation() {
  var colm = floor(width / scle);
  var row = floor(height / scle);
  food = createVector(floor(random(colm)), floor(random(row)));
  food.mult(scle);
  // so it's only among the grid in the window
}
