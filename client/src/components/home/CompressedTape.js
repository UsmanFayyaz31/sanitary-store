import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "react-three-fiber";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/compressedTape.glb");

  useFrame((state, delta) => {
    group.current.rotation.y += 0.01;
    group.current.rotation.x += 0.004;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[20, 20, 20]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.pr_blackArtTape}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/compressedTape.glb");
