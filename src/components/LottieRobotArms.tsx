
import React from "react";
import Lottie from "lottie-react";

// You can replace this import with your own Lottie JSON animation.
// Example free animation: "Code Development" by lottiefiles
// Download your preferred Lottie JSON and place it in src/assets/
import robotArmsJSON from "../assets/robot-arms-lottie.json"; // <-- You'll need to provide this!

const LottieRobotArms = () => (
  <div
    className="flex items-center justify-center min-w-[250px] max-w-[360px] w-full h-[180px] md:mr-2 mx-auto"
    style={{
      background: "none",
      filter: "drop-shadow(0 4px 16px #0003)"
    }}
  >
    <Lottie
      animationData={robotArmsJSON}
      loop
      autoplay
      style={{ width: "100%", height: "100%", maxWidth: 340, minWidth: 220 }}
      rendererSettings={{
        preserveAspectRatio: "xMidYMid meet",
      }}
    />
  </div>
);

export default LottieRobotArms;
