import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

interface CardRevealWrapperProps {
  children: React.ReactNode;
}

const CardRevealWrapper = ({ children }: CardRevealWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollY } = useScroll();
  // Overlap amount pushed down at load so the white card stays hidden until scroll
  const overlap =
    typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches ? 60 : 32;
  // Animate over the first 300px of scroll
  const scaleX = useTransform(scrollY, [0, 300], [reduce ? 1 : 0.88, 1], { clamp: true });
  const borderRadius = useTransform(scrollY, [0, 300], [reduce ? 20 : 32, 0], { clamp: true });
  const y = useTransform(scrollY, [0, 300], [reduce ? 0 : overlap, 0], { clamp: true });

  return (
    <motion.div
      ref={ref}
      className="hero-card-wrapper bg-ivory"
      style={{
        scaleX,
        y,
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
        transformOrigin: "center top",
        willChange: "transform",
      }}
    >
      {children}
    </motion.div>
  );
};

export default CardRevealWrapper;
