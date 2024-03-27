let mainShader;

function preload() {
  mainShader = loadShader("main.vert", "main.frag");
}

function setup() {
  createCanvas(600, 600, WEBGL);

  shader(mainShader);

  noStroke();
}

function draw() {
  rect(0, 0, width, height);
}
