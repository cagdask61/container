// import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    short_pencere_1: THREE.Mesh
    short_pencere_2: THREE.Mesh
    short_pencere_3: THREE.Mesh
    short_pencere_4: THREE.Mesh
    short_pencere_5: THREE.Mesh
  }
  materials: {
    FrontColor: THREE.MeshStandardMaterial
    _White_: THREE.MeshStandardMaterial
    White1: THREE.MeshStandardMaterial
    _31: THREE.MeshStandardMaterial
    RAL9002_Paneel: THREE.MeshStandardMaterial
  }
}

// type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function ShortWindow(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('./models/short-window.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.short_pencere_1.geometry} material={materials.FrontColor} />
        <mesh geometry={nodes.short_pencere_2.geometry} material={materials._White_} />
        <mesh geometry={nodes.short_pencere_3.geometry} material={materials.White1} />
        <mesh geometry={nodes.short_pencere_4.geometry} material={materials._31} />
        <mesh geometry={nodes.short_pencere_5.geometry} material={materials.RAL9002_Paneel} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/short-window.gltf')