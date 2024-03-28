#ifdef GL_ES
precision mediump float;
#endif

varying vec2 pos;

uniform vec2 cursor;

uniform float millis;

vec3 palette(float t) {
  vec3 a = vec3(0.5, 0.5, 0.5);
  vec3 b = vec3(0.5, 0.5, 0.5);
  vec3 c = vec3(1.0, 1.0, 1.0);
  vec3 d = vec3(0.263,0.416,0.557);

  return a + b*cos( 6.28318*(c*t+d) );
}

void main() {
  // make cursor values match pos values
  vec2 newCursor = vec2(cursor);
  newCursor.y = 1. - newCursor.y;

  // get distance between pixel position and mouse position
  vec2 dv = newCursor - pos;
  float d = length(dv);
  
  // snap to 0 if close and 1 if far
  d = step(0.02, d);

  // define color based on distance
  // red for close and white for far in this case
  vec3 c = vec3(1., d, d);

  // return
  gl_FragColor = vec4(c, 1.); 
}