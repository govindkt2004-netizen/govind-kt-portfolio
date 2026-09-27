import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none h-[3px] bg-slate-900/30 backdrop-blur-xs">
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-400 via-sky-500 to-[#de1b1c] origin-left shadow-[0_0_10px_rgba(6,182,212,0.8),0_0_20px_rgba(222,27,28,0.5)]"
        style={{ scaleX }}
      />
    </div>
  );
};
