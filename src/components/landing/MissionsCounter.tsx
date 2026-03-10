import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Counter = ({ target, label }: { target: number; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return () => ctrl.stop();
  }, [inView, target]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-5xl md:text-7xl font-display font-bold text-primary">
        {count.toLocaleString()}+
      </p>
      <p className="font-display text-xs tracking-[0.2em] text-muted-foreground mt-2">{label}</p>
    </div>
  );
};

const counters = [
  { target: 3400, label: "MISSIONS COMPLETED" },
  { target: 850, label: "EXECUTIVE DETAILS" },
  { target: 120, label: "OPERATIVES DEPLOYED" },
  { target: 47, label: "COUNTRIES COVERED" },
];

const MissionsCounter = () => {
  return (
    <section className="section-padding bg-card">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {counters.map((c) => (
          <Counter key={c.label} target={c.target} label={c.label} />
        ))}
      </div>
    </section>
  );
};

export default MissionsCounter;
