
import React from "react";
import { Progress } from "@/components/ui/progress";
import LottieRobotArms from "./LottieRobotArms";

const skills = [
  { label: "Front-end", value: 95 },
  { label: "Back-end", value: 65 },
  { label: "Quality Assurance Testing", value: 80 },
  { label: "AI & Machine Learning", value: 50 },
];

const Proficiency = () => {
  const [progress, setProgress] = React.useState(skills.map(() => 0));
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [inView, setInView] = React.useState(false);

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

  // Sequential animation: one bar loads after the previous is filled
  React.useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    const target = skills.map(s => s.value);
    const duration = 1200;

    function animateOne(i: number) {
      if (i >= skills.length || cancelled) return;
      let start: number | null = null;

      function animate(ts: number) {
        if (start === null) start = ts;
        const elapsed = ts - start;
        const eased = Math.min(target[i], Math.round((elapsed / duration) * target[i]));
        setProgress(prev => {
          const arr = [...prev];
          arr[i] = eased;
          return arr;
        });
        if (elapsed < duration) {
          requestAnimationFrame(animate);
        } else {
          setProgress(prev => {
            const arr = [...prev];
            arr[i] = target[i];
            return arr;
          });
          animateOne(i + 1);
        }
      }
      requestAnimationFrame(animate);
    }

    setProgress(skills.map(() => 0));
    animateOne(0);

    return () => { cancelled = true; }
    // eslint-disable-next-line
  }, [inView]);

  return (
    <section
      ref={containerRef}
      className="max-w-6xl mx-auto w-full px-4 my-14 lg:my-20"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-wide">
        Proficiency
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-8 w-full">
        {/* Lottie visual */}
        <div className="flex justify-center w-full md:w-1/2">
          <LottieRobotArms />
        </div>
        <div className="flex-1 w-full max-w-sm flex flex-col gap-7 md:w-1/2">
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
