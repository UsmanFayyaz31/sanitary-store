import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "react-three-fiber";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/compressedShower.glb");

  useFrame((state, delta) => {
    group.current.rotation.y += 0.006;
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[0, 4.7, 0]}
      scale={[0.018, 0.018, 0.018]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[0, -25.52, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[100, 100, 100]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Grohe_G-26250000_Material_0"].geometry}
              material={materials.Material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Grohe_G-26250000_Chrome001_0"].geometry}
              material={materials["Chrome.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Grohe_G-26250000_Grey_Plastic_0"].geometry}
              material={materials.Grey_Plastic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Grohe_G-26250000_Matt_Black001_0"].geometry}
              material={materials["Matt_Black.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Grohe_G-26250000_Pipe_0"].geometry}
              material={materials.Pipe}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Grohe_G-26250000_Green_plastic_0"].geometry}
              material={materials.Green_plastic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Grohe_G-26250000_Grey_Print_0"].geometry}
              material={materials.Grey_Print}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Grohe_G-26250000_Matt_Black_0"].geometry}
              material={materials.Matt_Black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Grohe_G-26250000_Chrome_0"].geometry}
              material={materials.Chrome}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Grohe_G-26250000_White_Plastic_0"].geometry}
              material={materials.White_Plastic}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/compressedShower.glb");
