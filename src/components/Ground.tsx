import { MeshReflectorMaterial } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";

export function Ground(props: MeshProps) {
    return (
        <mesh {...props} rotation={[-Math.PI / 2, 0, 0]} position-y={-12.4}>
            <planeGeometry args={[500, 500]} />
            <MeshReflectorMaterial
                mirror={1}
                blur={[300, 100]}
                mixBlur={1}
                mixStrength={1}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#404040"
                metalness={0.5} />
        </mesh>
    )
}