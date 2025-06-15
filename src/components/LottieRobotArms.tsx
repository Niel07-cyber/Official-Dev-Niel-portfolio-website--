
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// Full width and suitable height for Proficiency's visual impact
const LOTTIE_URL =
  "https://lottie.host/200d67d2-56cf-42eb-a99e-5912eac0e982/9BsoFolMPt.lottie";

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
