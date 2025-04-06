varying vec2 vUv;
varying float vPushed;
uniform sampler2D uTexture;
uniform sampler2D uDispTexture;
uniform float uOverlayFactor;

void main() {
    vec2 offset = vec2(vPushed * 0.02);

    float dispFactor = texture2D(uDispTexture, vUv).r;

    vec2 distortedUv = vec2(vUv.x - (uOverlayFactor * 0.5) * dispFactor, vUv.y);

    float r = texture2D(uTexture, distortedUv + vec2(vPushed * 0.062)).r;
    float g = texture2D(uTexture, distortedUv + vec2(vPushed * 0.042)).g;
    float b = texture2D(uTexture, distortedUv + vec2(vPushed * -0.032)).b;
    float a = texture2D(uTexture, distortedUv).a;
    vec4 color = vec4(r, g, b, a);

    vec4 dispColor = texture2D(uDispTexture, vUv);

    gl_FragColor = color;
}