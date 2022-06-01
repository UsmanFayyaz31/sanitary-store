import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "react-three-fiber";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/compressedSinkTap.glb");

  useFrame((state, delta) => {
    group.current.rotation.y += 0.008;
  });

  return (
    <group ref={group} {...props} dispose={null} position={[0, -1.2, 0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[7.5, 7.5, 7.5]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["G-32917000_Aerator_Grey_0"].geometry}
              material={materials.Aerator_Grey}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["G-32917000_Matt_Black_0"].geometry}
              material={materials.Matt_Black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["G-32917000_Aerator_Chrome_0"].geometry}
              material={materials.Aerator_Chrome}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["G-32917000_Chrome_0"].geometry}
              material={materials.Chrome}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/compressedSinkTap.glb");
