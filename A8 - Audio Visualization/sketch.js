var sound, fft;

function preload() {
  sound = loadSound('Christmas-music-box-carol.mp3');
}

function setup() {
  createCanvas(400, 400);
  background(0);
  fft = new p5.FFT();
  sound.setVolume(0.5);
  sound.play();
  sound.loop();
}

function draw() {
  background("#729B79");

  
  var waveform = fft.waveform();
  noFill();
  stroke("#F3E8EE");
  strokeWeight(3);
  beginShape();
  for (var i = 0; i < waveform.length; i++) {
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -1, 1, 0, height);
    vertex(x, y);
  }
  endShape();
}








