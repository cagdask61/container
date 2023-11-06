import { PresentationControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";


export default function App() {

  return (
    <>
      <Canvas>
        <PresentationControls cursor>
          <Stage environment={'city'} adjustCamera={2} shadows={false}>
            <mesh>
              <boxGeometry />
              <meshStandardMaterial />
            </mesh>
          </Stage>
        </PresentationControls>

      </Canvas>
    </>
  )
}