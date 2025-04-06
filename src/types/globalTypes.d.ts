/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ThreeElements } from "@react-three/fiber";

declare global {
    namespace React {
        namespace JSX {
            interface IntrinsicElements extends ThreeElements {
                hoverShiftMaterial: ReactThreeFiber.MaterialNode<THREE.ShaderMaterial>;
                earthMaterial: ReactThreeFiber.MaterialNode<
                    THREE.ShaderMaterial,
                    {}
                >;
                atmosphereMaterial: ReactThreeFiber.MaterialNode<
                    THREE.ShaderMaterial,
                    {}
                >;
            }
        }
    }
}
