import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [magneticElement, setMagneticElement] = useState<HTMLElement | null>(null);

  // Raw cursor targets (with magnetic pull applied)
  const targetDotX = useMotionValue(-100);
  const targetDotY = useMotionValue(-100);

  const targetRingX = useMotionValue(-100);
  const targetRingY = useMotionValue(-100);

  // High-precision snappy spring for the center dot (subtle magnetic suction)
  const dotSpringConfig = { damping: 28, stiffness: 500, mass: 0.15 };
  const smoothDotX = useSpring(targetDotX, dotSpringConfig);
  const smoothDotY = useSpring(targetDotY, dotSpringConfig);

  // Fluid trailing spring for the outer magnetic ring
  const ringSpringConfig = { damping: 22, stiffness: 240, mass: 0.45 };
  const smoothRingX = useSpring(targetRingX, ringSpringConfig);
  const smoothRingY = useSpring(targetRingY, ringSpringConfig);

  useEffect(() => {
    // Disable custom cursor on touch/coarse devices for 100% native mobile feel
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

      const clientX = e.clientX;
      const clientY = e.clientY;

      // Detect interactive element beneath or closest to cursor
      const target = e.target as HTMLElement | null;
      const interactive = target
        ? (target.closest(
            'button, a, [role="button"], input, textarea, select, .cursor-pointer, [data-cursor="pointer"]'
          ) as HTMLElement | null)
        : null;

      if (interactive) {
        setIsHovered(true);
        setMagneticElement(interactive);

        const rect = interactive.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Offset from center of the interactive element
        const dx = centerX - clientX;
        const dy = centerY - clientY;

        // Subtle, elegant magnetic pull (snaps smoothly toward center)
        const pullFactorDot = 0.28; // Subtle pull on center dot
        const pullFactorRing = 0.55; // Stronger centering on the outer halo ring

        targetDotX.set(clientX + dx * pullFactorDot);
        targetDotY.set(clientY + dy * pullFactorDot);

        targetRingX.set(clientX + dx * pullFactorRing);
        targetRingY.set(clientY + dy * pullFactorRing);
      } else {
        setIsHovered(false);
        setMagneticElement(null);

        // Follow raw mouse directly with zero offset
        targetDotX.set(clientX);
        targetDotY.set(clientY);
        targetRingX.set(clientX);
        targetRingY.set(clientY);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, targetDotX, targetDotY, targetRingX, targetRingY]);

  // Don't render on touch screens
  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Outer Magnetic Follower Halo */}
      <motion.div
        style={{
          x: smoothRingX,
          y: smoothRingY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 0.85 : isHovered ? 1.45 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        className={`fixed top-0 left-0 rounded-full transition-colors duration-200 pointer-events-none ${
          isHovered
            ? 'w-11 h-11 border border-cyan-400/80 bg-cyan-400/10 shadow-[0_0_20px_rgba(6,182,212,0.35)]'
            : 'w-8 h-8 border border-white/40 bg-white/[0.03] shadow-[0_0_10px_rgba(255,255,255,0.12)]'
        }`}
      />

      {/* Center Precision Magnetic Dot */}
      <motion.div
        style={{
          x: smoothDotX,
          y: smoothDotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 1.5 : isHovered ? 0.75 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.1, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none transition-colors duration-150 ${
          isHovered
            ? 'bg-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.9)]'
            : 'bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]'
        }`}
      />
    </div>
  );
};
