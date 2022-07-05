import { OrbitControls, Environment } from "@react-three/drei";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Cobra from "./Cobra";
// import Tape from "./Tape";
import PipeWrench from "./PipeWrench";
import Shower from "./Shower";
import SinkTap from "./SinkTap";
import BathAndTub from "./BathAndTub";

export default function ThreeDModal(props) {
  const { productId } = props;

  return (
    <Canvas
      style={{ height: "50vh" }}
      camera={{ zoom: 2 }}
      // camera={{ fov: 5, zoom: 1.3, near: 1, far: 1000 }}
    >
      <Suspense fallback={null}>
        {productId === "62c3e49d80f78cc62db2149b" && <Cobra />}
        {/* {productId === "62966d81f8ed2361dda73a0b" && <Tape />} */}
        {productId === "62c2d6de94d6e3a37af84556" && <PipeWrench />}
        {productId === "62c3e4ee80f78cc62db214a4" && <Shower />}
        {productId === "62c3e5b180f78cc62db214ad" && <SinkTap />}
        {productId === "62c3e5ef80f78cc62db214b6" && <BathAndTub />}

        <Environment preset="warehouse" />

        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Suspense>
    </Canvas>
  );
}
