// import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    long_wall: THREE.Mesh
  }
  materials: {
    RAL9002_Paneel: THREE.MeshStandardMaterial
  }
}

// type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function LongWall(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('./models/long-wall.gltf') as GLTFResult;
  return (
    <group {...props} dispose={null} scale={0.1}>
      <mesh geometry={nodes.long_wall.geometry} material={materials.RAL9002_Paneel} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('./models/long-wall.gltf')