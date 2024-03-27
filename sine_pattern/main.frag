#ifdef GL_ES
precision mediump float;
#endif

varying vec2 pos;

uniform float millis;

vec3 palette(float t) {
  vec3 a = vec3(0.5, 0.5, 0.5);
  vec3 b = vec3(0.5, 0.5, 0.5);
  vec3 c = vec3(1.0, 1.0, 1.0);
  vec3 d = vec3(0.263,0.416,0.557);

  return a + b*cos( 6.28318*(c*t+d) );
}

void main() {
  // get time in seconds
  float time = millis/1000.;

  // center the position variable (cPos)
  vec2 cPos = pos * 2. - 1.;
  vec2 ocPos = cPos;

  // repeat the pattern and adjust the image to center again
  cPos = fract(cPos * 2.) - 0.5;

  float d = length(cPos);
  
  // color function shifted by time
  vec3 c = palette(length(ocPos) + time/2.);

  // add sin waves shifted by time and remove negatives
  d = sin(d * 8. + time) / 8.;
  d = abs(d);

  // inverse function for glow effect
  // only set to ~1. for values very close to zero
  d = 0.02 / d;

  // apply colors
  c *= d;
  
  gl_FragColor = vec4(c, 1.);
}