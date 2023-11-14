import { GizmoHelper, GizmoViewport, OrbitControls, Stage, Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { useContainerStore } from "./store/container-store";
import { Sidebar } from "./components/Sidebar";
import { useContainerSelectionStore } from "./store/container-selection-store";
import { useSkeletons } from "./hooks/use-skeletons";
import { useLongSections } from "./hooks/use-long-sections";
import { useShortSections } from "./hooks/use-short-sections";

export default function App() {

  const containers = useContainerStore((state) => state.containers);
  const containerSelectionState = useContainerSelectionStore();
  const skeletons = useSkeletons();
  const longSections = useLongSections();
  const shortSections = useShortSections();

  return (
    <>
      <Sidebar />
      <Canvas>
        <color attach={'background'} args={['black']} />
        <OrbitControls makeDefault />

        <GizmoHelper alignment="bottom-center">
          <GizmoViewport labelColor="white" axisHeadScale={1} />
        </GizmoHelper>

        <Stage intensity={2} environment={'city'} adjustCamera={1}>
          {containers.length > 0 ? (
            containers.map((c) => (
              <group key={c.key} position={c.position} onClick={() => containerSelectionState.select(c.key)}>
                {skeletons.find(s => s.key === c.skeleton.key)?.value}
                <group position={c.longSection?.position}>
                  {longSections.firstSections.find((fls => fls.key === c.longSection?.first?.key))?.value}
                  {longSections.secondSections.find((sls => sls.key === c.longSection?.second?.key))?.value}
                </group>
                <group position={c.shortSection?.position}>
                  {shortSections.firstSections.find(fss => fss.key === c.shortSection?.first?.key)?.value}
                  {shortSections.secondSections.find(sss => sss.key === c.shortSection?.second?.key)?.value}
                </group>
                <group visible={containerSelectionState.selectedKey === c.key} position={[10, 30, -12]}>
                  <mesh>
                    <coneGeometry args={[3, 3, 3]} />
                    <meshNormalMaterial />
                  </mesh>
                </group>
              </group>
            ))
          ) : (
            <Text3D font={'./fonts/noto-sans-regular.json'} position={[0, 0, 0]} size={10} height={7} letterSpacing={2} bevelEnabled={true} bevelOffset={0.7} >
              Merhaba
              <meshNormalMaterial />
            </Text3D>
          )}
        </Stage>
      </Canvas >
    </>
  )
}