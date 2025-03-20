import { useRef, type FC } from "react";
import type { ImageProps } from "../../types/ImageProps";
import { useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
export const Image: FC<ImageProps> = ({ width, height, src }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center end"],
  });

  const opacity = useTransform(scrollYProgress, [1,0], [0, 1]);
  const scale = useTransform(opacity, [0, 1], [0, 1]);

  const transition = {
      type:"spring",
			duration: 2,
			ease: "easeInOut",
			stiffness: 100,
			damping: 50,
			restDelta: 0.001,
      mass:.1,
      
}

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      animate
      className="max-w-max relative rounded-lg bg-gradient-to-b p-4 h-max"
    >
      <motion.img
        width={width}
        height={height}
        src={src}
        className="h-auto object-cover"
      />  
    <motion.div className="absolute inset-x-[16px] inset-y-3 bg-gradient-to-b z-10 from-black/10 to-black" transition={transition}/>
    </motion.div>
  );
};
