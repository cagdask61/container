import { Fragment, useEffect } from "react";
import { OrbitControls, Sky, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";


import { Skeleton } from "./components/Skeleton";
import { Ground } from "./components/Ground";
import { useContainerStore } from "./store/container-store";
import { Sidebar } from "./components/Sidebar";
import { LongWall } from "./components/LongWall";
import { ShortDoor } from "./components/ShortDoor";
import { ShortWindow } from "./components/ShortWindow";


export default function App() {

  const containers = useContainerStore((state) => state.containers);

  useEffect(() => {
    console.log("container state : ", containers);
  }, [containers]);


  return (
    <>
      <Sidebar />
      <Canvas shadows>
        <Sky sunPosition={[0.1, 0.5, 1]} />
        <OrbitControls makeDefault />
        <Stage intensity={2} environment={'city'} adjustCamera={3} shadows={{ type: 'contact', color: '#000000', colorBlend: 2, opacity: 1 }}>
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
            <Skeleton position={[0, 0, 0]} />
          )}
        </Stage>
        <Ground />
      </Canvas >
    </>
  )
}