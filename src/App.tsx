import React, { useEffect, useState } from "react";
import { MeshReflectorMaterial, OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';


import { Skeleton } from "./components/Skeleton";
import { LongWall } from "./components/LongWall";
import { ShortDoor } from "./components/ShortDoor";
import { ShortWindow } from "./components/ShortWindow";
import { useContainerStore } from "./store/container-store";

export interface Model {
  name: string;
  key: string;
  model: JSX.Element;
}

export default function App() {

  const containerState = useContainerStore();
  const [selected, select] = useState("skeleton");

  const models: Array<Model> = [
    { name: 'İskelet', key: 'skeleton', model: (<Skeleton castShadow={true} />) },
    { name: 'Duvar', key: 'wall', model: (<LongWall castShadow={true} />) },
    { name: 'Kapı', key: 'door', model: (<ShortDoor castShadow={true} />) },
    { name: 'Pencere', key: 'window', model: (<ShortWindow castShadow={true} />) },
  ]

  const selectModel = (e: DropdownChangeEvent) => {
    select(e.value);
  }

  function generateContainerModel() {
    containerState.add({ skeleton: (<Skeleton castShadow={true} />), position: [Math.random(), 0, 0], rotation: [Math.random(), 0, 0] })
  }

  useEffect(() => {
    console.log(containerState.containers);
  }, [containerState.containers]);

  return (
    <>
      <div className="w-full h-16 bg-white shadow z-50 flex flex-row items-center justify-evenly">
        <Dropdown placeholder="Model Seç" value={selected} onChange={(e) => selectModel(e)} options={models} optionLabel="name" optionValue="key" />
        <button className="bg-green-300 px-2 py-1 font-medium rounded" onClick={generateContainerModel}>
          Ekle
        </button>
      </div>
      <Canvas shadows>
        <OrbitControls makeDefault />
        <Stage intensity={1.5} environment={'city'} adjustCamera={2} shadows={{ type: 'contact', color: '#000000', colorBlend: 2, opacity: 1 }}>
          {/* <Skeleton castShadow={true} /> */}
          {models.find(m => m.key === selected)!.model}
        </Stage>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-125}>
          <planeGeometry args={[2000, 2000]} />
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
      </Canvas>
    </>
  )
}