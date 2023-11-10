import { Center, GizmoHelper, GizmoViewport, OrbitControls, PivotControls, PresentationControls, Stage, Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { useContainerStore } from "./store/container-store";
import { Sidebar } from "./components/Sidebar";
import { useState } from "react";

export default function App() {

  const containers = useContainerStore((state) => state.containers);

  const [drageable, setDrageable] = useState<boolean>(false);

  return (
    <>
      <Sidebar />
      <Canvas shadows>
        <color attach={'background'} args={['black']} />

        <GizmoHelper alignment="bottom-center">
          <GizmoViewport labelColor="white" axisHeadScale={1} />
        </GizmoHelper>
        <OrbitControls makeDefault />

        <Stage intensity={2} environment={'city'} adjustCamera={1} shadows={{ type: 'contact', color: '#000000', colorBlend: 2, opacity: 1 }}>
          {containers.length > 0 ? (
            containers.map((c, i) => (
              <group key={i} position={c.position} >
                {c.skeleton}
                <group position={c.longSection?.position}>
                  {c.longSection?.first}
                  {c.longSection?.second}
                </group>
                <group position={c.shortSection?.position}>
                  {c.shortSection?.first}
                  {c.shortSection?.second}
                </group>

              </group>
            ))
          ) : (
            <PivotControls activeAxes={[drageable, false, drageable]} disableRotations={true} disableSliders={true} scale={30} anchor={[0, 1, 0]}>
              <Center>
                <Text3D onDoubleClick={() => setDrageable(false)} onClick={() => setDrageable(true)} animations={[]} font={'./fonts/noto-sans-regular.json'} position={[0, 0, 0]} size={10} height={7} letterSpacing={2} bevelEnabled={true} bevelOffset={0.7} >
                  Merhaba
                  <meshStandardMaterial color={'red'} />
                </Text3D>
              </Center>
            </PivotControls>
          )}
        </Stage>
      </Canvas >
    </>
  )
}