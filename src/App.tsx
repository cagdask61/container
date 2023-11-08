import { Fragment, useEffect } from "react";
import { OrbitControls, Sky, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";


import { Skeleton } from "./components/Skeleton";
import { Ground } from "./components/Ground";
import { useContainerStore } from "./store/container-store";
import { Sidebar } from "./components/Sidebar";
import { LongWall } from "./components/LongWall";


export default function App() {

  const containers = useContainerStore((state) => state.containers);

  useEffect(() => {
    console.log("container state : ", containers);
  }, [containers]);


  return (
    <>
      <Sidebar />
      <Canvas shadows>
        <Sky />
        <OrbitControls makeDefault />
        <Stage intensity={2} environment={'city'} adjustCamera={2} shadows={{ type: 'contact', color: '#000000', colorBlend: 2, opacity: 1 }}>
          {containers.length > 0 ? (
            containers.map((c, i) => (
              <group key={i} position={c.position} >
                {c.skeleton}
                <group position={c.longSection?.position}>
                  {c.longSection?.first}
                  {c.longSection?.second}
                </group>
              </group>
            ))
          ) : (
            <Skeleton position={[0, 0, 0]} />
          )}
        </Stage>
        <Ground />
      </Canvas >
    </>
  )
}