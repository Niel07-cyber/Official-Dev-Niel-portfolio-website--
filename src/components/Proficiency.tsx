
import React from "react";
import { Progress } from "@/components/ui/progress";
import AnimatedRobotArms from "./AnimatedRobotArms";

const skills = [
  { label: "Front-end", value: 95 },
  { label: "Back-end", value: 65 },
  { label: "Quality Assurance Testing", value: 80 },
  { label: "AI & Machine Learning", value: 50 },
];

const Proficiency = () => {
  // Track progress for each skill bar individually
  const [progress, setProgress] = React.useState(skills.map(() => 0));
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [inView, setInView] = React.useState(false);

  // Simple IntersectionObserver to trigger animation
  React.useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Animate progress bars when in view
  React.useEffect(() => {
    if (!inView) return;
    let raf: number;
    let start: number | null = null;
    const target = skills.map(s => s.value);

    function animate(ts: number) {
      if (start === null) start = ts;
      const elapsed = ts - start;
      const duration = 1200; // ms
      setProgress(progress =>
        progress.map((val, i) => {
          const eased = Math.min(target[i], Math.round((elapsed / duration) * target[i]));
          return eased;
        }),
      );
      if (elapsed < duration) {
        raf = requestAnimationFrame(animate);
      } else {
        setProgress(target); // Snap to final value
      }
    }
    raf = requestAnimationFrame(animate);
    return () => raf && cancelAnimationFrame(raf);
    // eslint-disable-next-line
  }, [inView]);

  return (
    <section
      ref={containerRef}
      className="max-w-4xl mx-auto w-full px-4 my-14 lg:my-20"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-wide">
        Proficiency
      </h2>
      <div className="flex flex-col md:flex-row gap-10 md:gap-8 items-center justify-between md:items-start">
        <AnimatedRobotArms />
        <div className="flex-1 w-full flex flex-col gap-7 md:max-w-md">
          {skills.map((skill, i) => (
            <div key={skill.label}>
              <div className="text-base md:text-lg text-white mb-2">
                {skill.label}
              </div>
              <Progress
                value={progress[i]}
                className="h-5 rounded-full bg-[#141625] [&>div]:bg-[#a4a1f8] transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proficiency;

