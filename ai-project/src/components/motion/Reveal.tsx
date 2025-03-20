import type { FC, PropsWithChildren } from "react";
import { useRef } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";

type Props = PropsWithChildren & {
    x: number;
    y: number;
}

export const Reveal: FC<Props> = ({ children, x, y}) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
    });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
    const opacity = useTransform(scrollYProgress,[1,0],[3,0])
    const offsetX = useTransform(scale, [1, 1.15], [x, 200])
    const offsetY = useTransform(scale, [1,1.15], [y, 100])

    useMotionValueEvent(scrollYProgress,"change",(latest)=>{
        console.log(`Page Scroll ${latest}`);
    })
       const transition = {
        duration: 2,
        ease:"easeInOut",
        stiffness: 100,
        damping: 30,
        restDelta: .001,
    }
    return <motion.div initial={{x,y}} ref={ref} style={{position:"relative",marginTop:"5%",marginBottom:"10%",scale,x:offsetX,y:offsetY,opacity}} transition={transition}>
        {children}
    </motion.div>
        
}