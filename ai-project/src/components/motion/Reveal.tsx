import type { FC, PropsWithChildren } from "react";
import { useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  type CustomValueType,
} from "motion/react";

type Props = PropsWithChildren & {
  x?: string | number | CustomValueType;
  y?: string | number | CustomValueType;
  className?: string;
};

export const Reveal: FC<Props> = ({ children, x, y, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset:["start start","center start"]
  });
  useMotionValueEvent(scrollYProgress,"change",(curr)=>{
    console.log(curr)
  })
  const scale = useTransform(scrollYProgress, [0,0.5, 1], [1,.5, 0.05]);
  const opacity = useTransform(scrollYProgress, [0,1], [1,0]);

  const springScale = useSpring(scale,{
    stiffness:120,
    damping:20
  })
  const springOpacity = useSpring(opacity,{
    stiffness:120,
    damping:20,
  })

  return (
    <motion.div
      initial={{x,y}}
      ref={ref}
      style={{
        position: "relative",
        marginTop: "5%",
        marginBottom: "10%",
        scale:springScale,
        opacity:springOpacity,
      }}
      className={className}
      transition={{duration:.1}}
    >
      {children}
    </motion.div>
  );
};
