let rippleShader;

function preload() {
  rippleShader = loadShader("ripples.vert", "ripples.frag");
}

function setup() {
  createCanvas(400, 400, WEBGL);

  shader(rippleShader);

  noStroke();
}

function draw() {
  rect(0, 0, width, height);
}
