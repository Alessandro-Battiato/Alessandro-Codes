import * as THREE from "three";

export interface HoverShiftMaterialProps {
    uTexture: THREE.Texture | null;
    uDispTexture: THREE.Texture | null;
    uMousePosition: [number, number];
    uPushForce: number;
    uOverlayFactor: number;
}
