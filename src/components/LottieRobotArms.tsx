
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// Updated for Proficiency: replaces the robot arms Lottie with new
const LOTTIE_URL =
  "https://lottie.host/5a0b4595-6f2d-461f-af5d-d1c8e472bb4f/ik5EXm7J2K.lottie";

const LottieRobotArms = () => (
  <div
    className="flex items-center justify-center w-full max-w-full h-[220px] md:h-[280px] mx-auto"
    style={{
      filter: "drop-shadow(0 4px 16px #0003)",
      overflow: "hidden",
    }}
  >
    <DotLottieReact
      src={LOTTIE_URL}
      loop
      autoplay
      style={{
        width: "100%",
        height: "100%",
        maxWidth: 480,
        minWidth: 180,
        maxHeight: 260,
      }}
    />
  </div>
);

export default LottieRobotArms;

