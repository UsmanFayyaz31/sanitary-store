import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "react-three-fiber";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/compressed.glb");

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[0.01, 0, 0]}
      scale={[0.02, 0.02, 0.02]}
      position={[-3, 0, 0]}
    >
      <group position={[0, -43.89, -82.28]} rotation={[Math.PI / 2, 0, 0]}>
        <group rotation={[-Math.PI, 0, 0]}>
          <group position={[28.65, -33.85, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Line001_INSTALOD_INSTALOD_Sanitary1_0.geometry}
              material={materials.Sanitary1}
            />
          </group>
          <group position={[197.85, -42.45, 39.77]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Box001_INSTALOD_INSTALOD_Sanitary2_0.geometry}
              material={materials.Sanitary2}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/compressed.glb");
