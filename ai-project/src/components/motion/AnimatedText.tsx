import type { FC } from "react";
import type { MotionTextProps } from "../../../types/motion/MotionTextProps";
import { type Variants, motion } from "motion/react";

export const AnimatedText: FC<MotionTextProps> = ({ text, className }) => {
  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.025,
        delayChildren: 0.025 * i,
      },
    }),
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      filter:"blur(10px)",
      y: 20,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    visible: {
      opacity: 1,
      filter:"blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };
  const words = text.split("");
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
    >
      {words.map((word, index) => (
        <motion.span
          className="dm-sans"
          variants={child}
          key={index.toString()}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
