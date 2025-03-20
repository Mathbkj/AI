

import { useRef, type FC } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import type { TextParallaxProps } from "../../../types/motion/TextParalllaxProps";


export const TextParallax:FC<Omit<TextParallaxProps,"children">>=({imgUrl,subheading,heading,title,explanation})=>{
    return <div  className="bg-white px-[12px]">
        <Container imgUrl={imgUrl} subheading={subheading} heading={heading}>
            <TextContent title={title} explanation={explanation}/>
        </Container>
    </div>
}

export const Container:FC<Omit<TextParallaxProps,"title" | "explanation">> = ({imgUrl,subheading,heading,children})=> {
    return <div>
        <div className="relative h-[150vh] py-6">
            <StickyImg imgUrl={imgUrl}/>
            <Overlay subheading={subheading} heading={heading}/>
        </div>
        {children}
    </div>
}
const Overlay:FC<{ subheading:string; heading:string }>=({subheading,heading})=>{
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start end","end start"]
    });
    const y=useTransform(scrollYProgress,[0,1],[250,-250]);
    const opacity = useTransform(scrollYProgress,[.25,.5,.75],[0,1,0]);
    const springY = useSpring(y,{
        stiffness:120,
        damping:20,
    })
    const springOpacity = useSpring(opacity,{
        stiffness:120,
        damping:20,
    })

    return <motion.div style={{y:springY,opacity:springOpacity}} ref={ref} className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white">
        <p className="mb-2 dm-sans text-center text-xl md:mb-4 md:text-3xl">{subheading}</p>
        <p className="text-center lexend text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
}
const StickyImg:FC<Pick<TextParallaxProps,"imgUrl">>=({imgUrl})=>{
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["end end","end start"]
    });
    
    const scale = useTransform(scrollYProgress,[0,1],[1,.85])
    const opacity = useTransform(scrollYProgress,[0,1],[1,0]);
    const springScale = useSpring(scale,{
        stiffness:120,
        damping:20,
    })
    const springOpacity = useSpring(opacity,{
        stiffness:120,
        damping:20,
    })
    return <motion.div ref={ref} style={{
        backgroundImage:`url(${imgUrl})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        top:12,
        scale:springScale,
        opacity:springOpacity
        
    }} className="sticky w-auto h-[calc(100vh-12px)] z-0 overflow-hidden rounded-3xl">

        <motion.div className="absolute inset-0 bg-neutral-950/70"/>
    </motion.div>
}
const TextContent:FC<{title:string;explanation:string}> = ({title,explanation}) => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 lexend text-3xl font-bold md:col-span-4">
       {title}
      </h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-6 text-xl dm-sans text-neutral-600 md:text-2xl">
         {explanation}
        </p>
      </div>
    </div>
  );