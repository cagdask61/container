import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    short_door_1: THREE.Mesh
    short_door_2: THREE.Mesh
    short_door_3: THREE.Mesh
    short_door_4: THREE.Mesh
    short_door_5: THREE.Mesh
    short_door_6: THREE.Mesh
  }
  materials: {
    White1: THREE.MeshStandardMaterial
    _31: THREE.MeshStandardMaterial
    M_0135_DarkGray: THREE.MeshStandardMaterial
    RAL9002_Paneel: THREE.MeshStandardMaterial
    Color_M08: THREE.MeshStandardMaterial
    FrontColor: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function ShortDoor(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/short-door.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.short_door_1.geometry} material={materials.White1} />
        <mesh geometry={nodes.short_door_2.geometry} material={materials._31} />
        <mesh geometry={nodes.short_door_3.geometry} material={materials.M_0135_DarkGray} />
        <mesh geometry={nodes.short_door_4.geometry} material={materials.RAL9002_Paneel} />
        <mesh geometry={nodes.short_door_5.geometry} material={materials.Color_M08} />
        <mesh geometry={nodes.short_door_6.geometry} material={materials.FrontColor} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/short-door.gltf')