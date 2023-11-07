import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    kasa_1: THREE.Mesh
    kasa_2: THREE.Mesh
    kasa_3: THREE.Mesh
    kasa_4: THREE.Mesh
    kasa_5: THREE.Mesh
    kasa_6: THREE.Mesh
  }
  materials: {
    Wood_Lumber_ButtJoined: THREE.MeshStandardMaterial
    Wood_OSB: THREE.MeshStandardMaterial
    Wood_Floor_Dark: THREE.MeshStandardMaterial
    FrontColor: THREE.MeshStandardMaterial
    M_0135_DarkGray: THREE.MeshStandardMaterial
    _Metal_Aluminum_Anodized_1: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Skeleton(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/skeleton.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.kasa_1.geometry} material={materials.Wood_Lumber_ButtJoined} />
        <mesh geometry={nodes.kasa_2.geometry} material={materials.Wood_OSB} />
        <mesh geometry={nodes.kasa_3.geometry} material={materials.Wood_Floor_Dark} />
        <mesh geometry={nodes.kasa_4.geometry} material={materials.FrontColor} />
        <mesh geometry={nodes.kasa_5.geometry} material={materials.M_0135_DarkGray} />
        <mesh geometry={nodes.kasa_6.geometry} material={materials._Metal_Aluminum_Anodized_1} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/skeleton.gltf')
