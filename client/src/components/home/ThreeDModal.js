import { OrbitControls, Environment } from "@react-three/drei";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import CompressedCobra from "./CompressedCobra";
import CompressedTape from "./CompressedTape";

export default function ThreeDModal(props) {
  const { productId } = props;

  return (
    <Canvas style={{ height: "50vh" }} camera={{ zoom: 2 }}>
      <Suspense fallback={null}>
        {productId === "62966e44f8ed2361dda73a11" && <CompressedCobra />}
        {productId === "62966d81f8ed2361dda73a0b" && <CompressedTape />}

        <Environment preset="warehouse" />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Suspense>
    </Canvas>
  );
}
