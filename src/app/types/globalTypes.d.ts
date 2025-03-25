/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ThreeElements } from "@react-three/fiber";
import { HoverShiftMaterialProps } from "../components/AboutMe3D/types";

declare global {
    namespace React {
        namespace JSX {
            interface IntrinsicElements extends ThreeElements {
                hoverShiftMaterial: ReactThreeFiber.MaterialNode<
                    THREE.ShaderMaterial,
                    HoverShiftMaterialProps
                >;
            }
        }
    }
}
