import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "react-three-fiber";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/compressedCobra.glb");

  useFrame((state, delta) => {
    group.current.rotation.y += 0.006;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[10, 10, 10]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cobra_151_Hot_0.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cobra_151_Cold_0.geometry}
              material={materials.Cold}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cobra_151_Matt_Black_0.geometry}
              material={materials.Matt_Black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cobra_151_Chrome_0.geometry}
              material={materials.Chrome}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/compressedCobra.glb");
