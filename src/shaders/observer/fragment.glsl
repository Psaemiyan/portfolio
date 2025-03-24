varying vec2 vUv;

void main() {
    float distanceToCenter = length(vUv - vec2(0.5)); 
    float alpha = 1.0 - smoothstep(0.1, 0.5, distanceToCenter);
    gl_FragColor = vec4(1.0, 1.0, 1.0, alpha); 
}
