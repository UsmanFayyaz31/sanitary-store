import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "react-three-fiber";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/compressedPipeWrench.glb");

  useFrame((state, delta) => {
    group.current.rotation.y += 0.006;
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={[0.008, 0.008, 0.008]}
      rotation={[0, 190, 0]}
    >
      <group position={[0, 27.58, -0.55]} rotation={[-Math.PI, 0, 0]}>
        <group position={[-25.65, -81.49, -339.56]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials["Scene_-_Root"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/compressedPipeWrench.glb");
