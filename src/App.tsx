import { PresentationControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Skeleton } from "./components/Skeleton";

export default function App() {

  return (
    <>
      <Canvas>
        <PresentationControls cursor>
          <Stage environment={'city'} adjustCamera={2} shadows={false}>
            <Skeleton />
          </Stage>
          <planeGeometry args={[20, 20]} />
        </PresentationControls>
      </Canvas>
    </>
  )
}