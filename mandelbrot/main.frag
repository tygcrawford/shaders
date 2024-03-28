#ifdef GL_ES
precision mediump float;
#endif

varying vec2 pos;

float itterations = 10.;

vec3 itterator(vec2 ab) {
  float i = 0.;
  float max_i = itterations;

  float x_temp;

  vec2 p = vec2(0.);

  while(pow(p.x,2.) + pow(p.y,2.) <= pow(2.,2.) && i < max_i) {
    x_temp= pow(p.x,2.) - pow(p.y,2.) + ab.x;
    p.y = 2. * p.x * p.y + ab.y;
    p.x = x_temp;
    i++;
  }

  return vec3(i);
}

void main() {
  vec3 i = itterator(pos);
  gl_FragColor = vec4(i ,1.);
}