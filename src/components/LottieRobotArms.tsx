
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LOTTIE_URL =
  "https://lottie.host/cd5fbd33-2823-4b79-8f28-868c751ecc67/XDT2ug1rxT.lottie";

const LottieRobotArms = () => (
  <div
    className="flex items-center justify-center w-full max-w-full h-[260px] md:h-[340px] mx-auto"
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
        maxWidth: 600,
        minWidth: 220,
        maxHeight: 360
      }}
      renderer="svg"
      // SVG is vector and always crisp, no pixel blur
    />
  </div>
);

export default LottieRobotArms;

