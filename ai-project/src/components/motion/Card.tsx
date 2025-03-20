import type { FC } from "react";
import type { CardProps } from "../../../types/CardProps";
import { motion } from "motion/react";
import { Image } from "../Image";
export const Card: FC<CardProps> = ({ contentProps,size=1,hasImage=false,src='',span=1 }) => {
    const variants = {
        hidden: { opacity: 0,y:100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }
    const btnVariants = {
        active: {
            backgroundColor: "rgba(255,255,255,1)",
            color: "rgba(0,0,0,1)",
        },
        inactive: {
            outline:"1px solid white",
            color:"rgba(255,255,255,1)"
        }
    }
    
    return <motion.div whileHover={{scale:1.1}} style={{scale:size}} variants={variants} initial="hidden" whileInView="visible" className={`bg-neutral-900 text-white max-h-[500px] p-8 flex flex-col justify-center items-center text-center rounded-md col-span-${span}`}>
       {hasImage && <Image width={300} height={300} src={src}/>}
       <h1 className="inconsolata md:text-2xl font-black text-2xl mt-5 text-transparent bg-gradient-to-r from-white to-white/40 bg-clip-text">{contentProps.title}</h1>
       <h2 className="dm-sans my-4 md:text-base text-zinc-300/50 font-semibold text-xl">{contentProps.content}</h2>
       {contentProps.btnText && <motion.button variants={btnVariants} initial="inactive"  whileHover="active" className="font-bold dm-sans cursor-pointer  block mx-auto mt-5 p-2 w-max">{contentProps.btnText}</motion.button> }
    </motion.div>   
    

    
}