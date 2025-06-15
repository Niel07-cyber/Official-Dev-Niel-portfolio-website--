
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// Use the .lottie animation hosted from LottieFiles
const LOTTIE_URL = "https://lottie.host/aa140d4c-5789-4c04-ad90-fc79a4b5b8b5/WK9EPCu7NF.lottie";

const LottieRobotArms = () => (
  <div
    className="flex items-center justify-center min-w-[280px] max-w-[500px] w-full h-[230px] md:h-[280px] md:mr-2 mx-auto transition-colors"
    style={{
      filter: "drop-shadow(0 4px 16px #0003)",
      overflow: "hidden"
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
        minWidth: 220,
        maxHeight: 300
      }}
    />
  </div>
);

export default LottieRobotArms;
