precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float seed;

varying vec2 vUv;

// The following function has been taken from The Book of Shaders
float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

#define NUM_OCTAVES 5

float rand(vec2 n) { 
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p) {
    vec2 ip = floor(p);
    vec2 u = fract(p);
    u = u * u * (3.0 - 2.0 * u);
    float res = mix(
        mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
        mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x),
        u.y
    );
    return res * res;
}

float fbm(vec2 x) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100);
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
        v += a * noise(x);
        x = rot * x * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}

// Rotation 2d
mat2 rotation2d(float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return mat2(
        c, -s,
        s, c
    );
}

// GLSL Color Conversion
vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx - K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main(void)
{
    vec2 uv = vUv;

    // Normalize mouse coordinates
    vec2 mouse = u_mouse / u_resolution;
    float dist = distance(uv, mouse);
    float strength = smoothstep(0.5, 0.0, dist);

    // Use seed for a random color on each refresh
    float hue = u_time * 0.02 + seed;

    vec3 hsv1 = vec3(hue, 0.9, 0.85);
    vec3 hsv2 = vec3(hue + 0.07, 0.85, 0.75);
    
    vec3 rgb1 = hsv2rgb(hsv1);
    vec3 rgb2 = hsv2rgb(hsv2);
    
    vec4 color1 = vec4(rgb1, 1.0);
    vec4 color2 = vec4(rgb2, 1.0);

    float grain = rand(100.0 * uv) * mix(0.2, 0.01, strength);

    vec2 movement = vec2(u_time * 0.01, u_time * -0.01);
    movement *= rotation2d(u_time * 0.005);
    
    float f = fbm(uv + movement + seed);
    f *= 10.0;
    f += grain;
    f += u_time * 0.2;
    f = fract(f);

    float gap = mix(0.5, 0.01, strength);
    float mixer = smoothstep(0.0, gap, f) - smoothstep(1.0 - gap, 1.0, f);

    vec4 color = mix(color1, color2, mixer);
    gl_FragColor = color;
}