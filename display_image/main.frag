#ifdef GL_ES
precision mediump float;
#endif

varying vec2 pos;

uniform sampler2D image;

void main() {
  vec2 newPos = pos;
  newPos.y = 1. - newPos.y;

  vec4 c = texture2D(image, newPos);
  
  gl_FragColor = c;
}