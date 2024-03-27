let mainShader;

function preload() {
  mainShader = loadShader("main.vert", "main.frag");
  image = loadImage("./assets/dog.jpg");
}

function setup() {
  createCanvas(600, 600, WEBGL);

  shader(mainShader);

  mainShader.setUniform("image", image);

  noStroke();
}

function draw() {
  rect(0, 0, width, height);
}
