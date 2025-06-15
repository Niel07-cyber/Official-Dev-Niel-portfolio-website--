
import React, { useEffect, useRef, useState } from "react";

// Configuration for the "code blocks" (positions where robot arms move)
const codeBlocks = [
  { x: 48, y: 46, width: 90, height: 16 },
  { x: 48, y: 70, width: 90, height: 16 },
  { x: 48, y: 94, width: 70, height: 16 },
  { x: 175, y: 46, width: 71, height: 16 },
  { x: 175, y: 94, width: 71, height: 16 },
];

const pickedColor = "#a4a1f8";
const armRestColor = "#818181";
const blockDefaultColor = "#a4a1f8";

export default function AnimatedRobotArms() {
  const [picked, setPicked] = useState(-1);
  const [pos, setPos] = useState(0); // Index in codeBlocks

  // Animation loop (pick up code block, move, drop, repeat)
  useEffect(() => {
    let animFrame: number;
    let phase = 0; // 0 = move to, 1 = pick, 2 = move to dest, 3 = drop
    let dir = 1;   // Direction: left->right or right->left

    let nextPos = 0;

    function animate() {
      if (phase === 0) { // Move to a code block
        nextPos = dir > 0 ? (pos + 1) % codeBlocks.length : (pos - 1 + codeBlocks.length) % codeBlocks.length;
        setTimeout(() => {
          setPicked(pos);
          phase = 1;
          animFrame = requestAnimationFrame(animate);
        }, 450);
      } else if (phase === 1) { // Pick block
        setTimeout(() => {
          setPicked(-1);
          setPos(nextPos);
          phase = 2;
          animFrame = requestAnimationFrame(animate);
        }, 550);
      } else if (phase === 2) { // Move with block to destination
        setTimeout(() => {
          setPicked(nextPos);
          phase = 3;
          dir *= -1; // switch direction for variety
          animFrame = requestAnimationFrame(animate);
        }, 450);
      } else { // Drop block
        setTimeout(() => {
          phase = 0;
          animFrame = requestAnimationFrame(animate);
        }, 650);
      }
    }
    animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
    // eslint-disable-next-line
  }, [pos]);

  // Arm endpoint (moves between blocks)
  const active = (picked !== -1 ? picked : pos);
  const endBlock = codeBlocks[active];
  const leftArmBase = { x: 25, y: 138 };
  const rightArmBase = { x: 245, y: 138 };

  // Helper to animate arm endpoint towards code block (lerp for smoothness)
  function armTip(blockIndex: number, t: number = 1) {
    const { x, y, width, height } = codeBlocks[blockIndex];
    return {
      x: x + width / 2,
      y: y + height / 2,
    };
  }

  const leftTip = armTip(active);
  const rightTip = armTip(active);

  return (
    <div
      className="flex items-center justify-center sm:mx-0 mx-auto"
      style={{
        minWidth: 270,
        width: 270,
        minHeight: 180,
        maxWidth: "100%",
      }}
    >
      <svg
        width={270}
        height={180}
        viewBox="0 0 270 160"
        className="block"
        style={{ width: "100%", maxWidth: 270, height: "auto" }}
      >
        <rect width="100%" height="100%" fill="none" />

        {/* Laptop base */}
        <rect x={20} y={140} width={230} height={14} rx={7} fill="#111217" />
        <rect x={36} y={152} width={196} height={10} rx={5} fill="#111217" />

        {/* Screen */}
        <rect x={35} y={30} width={200} height={90} rx={6} fill="#fff" stroke="#191a1b" strokeWidth={2} />

        {/* Code blocks */}
        {codeBlocks.map((b, i) => (
          <rect
            key={i}
            x={b.x}
            y={b.y}
            width={b.width}
            height={b.height}
            rx={8}
            fill={blockDefaultColor}
            opacity={picked === i ? 0.48 : 1}
            style={{ transition: "opacity 0.16s" }}
          />
        ))}

        {/* Left arm */}
        <g>
          {/* Arm body */}
          <polyline
            points={`${leftArmBase.x},${leftArmBase.y} 65,93 ${leftTip.x},${leftTip.y}`}
            fill="none"
            stroke={armRestColor}
            strokeWidth={16}
            strokeLinejoin="round"
          />
          {/* Arm joint */}
          <circle cx={leftArmBase.x} cy={leftArmBase.y} r={13} fill="#191a1b" />
          {/* Arm claw */}
          <circle cx={leftTip.x} cy={leftTip.y} r={12} fill="#191a1b" />
          {/* "Pen" tip */}
          <rect
            x={leftTip.x - 4}
            y={leftTip.y - 8}
            width={8}
            height={18}
            rx={2}
            fill={pickedColor}
            opacity={picked !== -1 ? 1 : 0.7}
            transform={`rotate(-18 ${leftTip.x} ${leftTip.y})`}
          />
        </g>

        {/* Right arm */}
        <g>
          <polyline
            points={`${rightArmBase.x},${rightArmBase.y} 205,95 ${rightTip.x},${rightTip.y}`}
            fill="none"
            stroke={armRestColor}
            strokeWidth={16}
            strokeLinejoin="round"
          />
          {/* Arm joint */}
          <circle cx={rightArmBase.x} cy={rightArmBase.y} r={13} fill="#191a1b" />
          {/* "Claw" */}
          <g>
            {/* Claw fingers */}
            <rect
              x={rightTip.x - 9}
              y={rightTip.y - 12}
              width={8}
              height={23}
              rx={2}
              fill="#191a1b"
              transform={`rotate(-15 ${rightTip.x} ${rightTip.y})`}
            />
            <rect
              x={rightTip.x + 1}
              y={rightTip.y - 12}
              width={8}
              height={23}
              rx={2}
              fill="#191a1b"
              transform={`rotate(18 ${rightTip.x + 4} ${rightTip.y})`}
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
