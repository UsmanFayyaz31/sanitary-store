import { OrbitControls, Environment } from "@react-three/drei";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Cobra from "./Cobra";
import Tape from "./Tape";
import PipeWrench from "./PipeWrench";
import Shower from "./Shower";
import SinkTap from "./SinkTap";

export default function ThreeDModal(props) {
  const { productId } = props;

  return (
    <Canvas
      style={{ height: "50vh" }}
      camera={{ zoom: 2 }}
      // camera={{ fov: 5, zoom: 1.3, near: 1, far: 1000 }}
    >
      <Suspense fallback={null}>
        {productId === "62966e44f8ed2361dda73a11" && <Cobra />}
        {productId === "62966d81f8ed2361dda73a0b" && <Tape />}
        {productId === "62971fd6c5e62d5587f604d1" && <PipeWrench />}
        {productId === "629747fdc5e62d5587f60558" && <Shower />}
        {productId === "62974af1c5e62d5587f60570" && <SinkTap />}

        <Environment preset="warehouse" />

        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Suspense>
    </Canvas>
  );
}
