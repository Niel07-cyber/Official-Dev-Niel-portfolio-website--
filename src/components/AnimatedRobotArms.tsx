import React, { useEffect, useRef, useState } from "react";

const BLOCKS = [
  { x: 90, y: 68, w: 44, h: 16, color: "#FFB027" },
  { x: 148, y: 86, w: 44, h: 16, color: "#A4A1F8" },
  { x: 65, y: 106, w: 38, h: 16, color: "#28282d" },
  { x: 134, y: 122, w: 45, h: 16, color: "#28282d" },
];

const BASE_X = [40, 240];
const BASE_Y = [30, 30];
const ARM_COLOR = "#18181C";
const ARM_SHADOW = "#27282c";
const JOINT_COLOR = "#FFB027";
const TIP_OUTLINE = "#FFB027";

// Given block i, which arm picks/moves it
function getArmIndex(i: number) {
  // Alternate: left, right, left, right
  return i % 2;
}

// Get position between two points with t ∈ [0,1]
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

// Animate the arms and blocks: pick up, move, drop, rest
export default function AnimatedRobotArms() {
  // Which block is currently being moved?
  const [animState, setAnimState] = useState({
    block: 0,
    phase: 0, // 0=rest, 1=move-to, 2=pick, 3=to-dest, 4=drop
    t: 0,
    dir: 1,
  });
  // Animation phases: per-block, arms stretch to block, pick, move, drop

  // Animate
  useEffect(() => {
    let raf: number;
    let t = 0;
    let { block, phase, dir } = animState;

    function tick() {
      if (phase === 0) { // rest
        setTimeout(() => setAnimState(a => ({ ...a, phase: 1, t: 0 })), 420);
      } else if (phase === 1) { // arm approaches block
        t += 0.055;
        if (t < 1) {
          setAnimState(a => ({ ...a, t }));
          raf = requestAnimationFrame(tick);
        } else {
          setAnimState(a => ({ ...a, phase: 2, t: 0 }));
        }
      } else if (phase === 2) { // picking
        setTimeout(() => setAnimState(a => ({ ...a, phase: 3, t: 0 })), 220);
      } else if (phase === 3) { // move to destination
        t += 0.042;
        if (t < 1) {
          setAnimState(a => ({ ...a, t }));
          raf = requestAnimationFrame(tick);
        } else {
          setAnimState(a => ({ ...a, phase: 4, t: 0 }));
        }
      } else if (phase === 4) { // dropping
        setTimeout(() => {
          let nextBlock = (block + 1) % BLOCKS.length;
          setAnimState({
            block: nextBlock,
            phase: 0,
            t: 0,
            dir: nextBlock % 2 === 0 ? 1 : -1,
          });
        }, 350);
      }
    }
    raf = requestAnimationFrame(tick);
    return () => raf && cancelAnimationFrame(raf);
    // eslint-disable-next-line
  }, [animState.block, animState.phase]);

  // For motion: origin to block, block to other spot
  const { block, phase, t, dir } = animState;
  const startArmIndex = getArmIndex(block);
  const nextBlock = (block + 1) % BLOCKS.length;
  const destArmIndex = getArmIndex(nextBlock);

  // Arm base positions (from top to center)
  // (you can tweak xy for more expressive arms)
  const ARM_BASE = [
    { x: 58, y: 17 }, // left
    { x: 230, y: 17 }, // right
  ];

  // Main block: inactive or (actively moved)
  let activeBlocks = BLOCKS.map((blk, i) => {
    if (i === block && (phase === 2 || phase === 3 || phase === 4)) {
      // The block follows the arm tip in motion during pick/move/drop
      let pos = { x: blk.x, y: blk.y };
      if (phase === 3) {
        // anim between src and dest
        const src = { x: blk.x, y: blk.y };
        const dst = { x: BLOCKS[nextBlock].x, y: BLOCKS[nextBlock].y };
        pos = {
          x: lerp(src.x, dst.x, t),
          y: lerp(src.y, dst.y, t),
        };
      }
      return { ...blk, x: pos.x, y: pos.y, moving: true };
    }
    return blk;
  });

  // Arm kinematics: reach to block (when in phase 1,2,3,4)
  function getTip(idx: number) {
    // If arm is active, animate toward block
    if (
      (phase === 1 && idx === startArmIndex) ||
      (phase >= 2 && idx === (phase === 3 ? destArmIndex : startArmIndex))
    ) {
      // Find target pos
      let blockIdx = phase === 3 ? nextBlock : block;
      let blk = BLOCKS[blockIdx];
      let pos = { x: blk.x + blk.w / 2, y: blk.y + blk.h / 2 };
      if (phase === 3 && t > 0) {
        const src = BLOCKS[block];
        const dst = BLOCKS[nextBlock];
        pos = {
          x: lerp(src.x + src.w / 2, dst.x + dst.w / 2, t),
          y: lerp(src.y + src.h / 2, dst.y + dst.h / 2, t),
        };
      }
      // Lerp arm extension during approach
      if (phase === 1) {
        const rest = { x: ARM_BASE[idx].x, y: ARM_BASE[idx].y + 46 };
        pos = {
          x: lerp(rest.x, pos.x, t),
          y: lerp(rest.y, pos.y, t),
        };
      }
      return pos;
    }
    // Default: resting
    return { x: ARM_BASE[idx].x, y: ARM_BASE[idx].y + 46 };
  }

  const tips = [getTip(0), getTip(1)];

  return (
    <div className="flex items-center justify-center min-w-[300px] w-[300px] min-h-[180px] md:mr-2 mx-auto">
      <svg
        width={300}
        height={162}
        viewBox="0 0 300 162"
        fill="none"
        className="block"
        style={{ width: "100%", maxWidth: 340, height: "auto" }}
      >
        {/* Background */}
        <rect x={0} y={0} width={300} height={162} rx={18} fill="#18181c" />

        {/* Main base circle */}
        <circle cx={150} cy={40} r={34} fill="#25252b" stroke="#31313A" strokeWidth={5} />
        <circle cx={150} cy={40} r={16.6} fill="#1b1b1b" />
        <circle cx={150} cy={40} r={9.2} fill={JOINT_COLOR} />

        {/* Arms */}
        {[0, 1].map(ai => (
          <g key={ai}>
            {/* Arm shadow for depth */}
            <polyline
              points={`${ARM_BASE[ai].x},${ARM_BASE[ai].y} ${tips[ai].x},${tips[ai].y}`}
              fill="none"
              stroke={ARM_SHADOW}
              strokeWidth={13}
              strokeLinecap="round"
              style={{ filter: "blur(1.5px)", opacity: 0.45 }}
            />
            {/* Arm core */}
            <polyline
              points={`${ARM_BASE[ai].x},${ARM_BASE[ai].y} ${tips[ai].x},${tips[ai].y}`}
              fill="none"
              stroke={ARM_COLOR}
              strokeWidth={8}
              strokeLinecap="round"
            />
            {/* Joint at base */}
            <circle
              cx={ARM_BASE[ai].x}
              cy={ARM_BASE[ai].y}
              r={11}
              fill="#19191a"
              stroke={JOINT_COLOR}
              strokeWidth={4.5}
            />
            {/* Tip effect */}
            <circle
              cx={tips[ai].x}
              cy={tips[ai].y}
              r={9.3}
              fill="#23232a"
              stroke={TIP_OUTLINE}
              strokeWidth={3}
              opacity={0.98}
            />
            <circle
              cx={tips[ai].x}
              cy={tips[ai].y}
              r={4.1}
              fill={JOINT_COLOR}
              opacity={phase !== 0 && ai === (phase >= 3 ? destArmIndex : startArmIndex) ? 1 : 0.68}
            />
          </g>
        ))}

        {/* Render code blocks */}
        {activeBlocks.map((b, i) => (
          <rect
            key={i}
            x={b.x}
            y={b.y}
            width={b.w}
            height={b.h}
            rx={6}
            fill={b.color}
            opacity={"moving" in b && b.moving ? 0.7 : 1}
            style={{
              filter:
                "moving" in b && b.moving
                  ? "drop-shadow(0 1.5px 2.5px #0005)"
                  : "",
              transition: "x 0.2s, y 0.2s, opacity 0.16s",
            }}
          />
        ))}

        {/* Table/ground for blocks */}
        <rect x={54} y={148} width={192} height={7.5} rx={2.5} fill="#262626" opacity={0.59} />
      </svg>
    </div>
  );
}
