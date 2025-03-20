import { useState, type FC } from "react";
import { motion, useTime, useTransform } from "motion/react";
import type { MotionButtonProps } from "../../../types/motion/MotionButtonProps";
import { Icon } from "../Icon";

export const RedirectButton: FC<MotionButtonProps> = ({
  text,
  src,
  hasIcon,
  onClick,
}) => {
  const [isHover,setHovered] = useState<boolean>(false);
  const time = useTime();
  const rotate = useTransform(time,[0,3000],[0,360],{clamp:false})
  const rotatingBg = useTransform(rotate, (r) => {
			return `conic-gradient(from ${r}deg,#f0f0f0,#000)`;
		})
    const handleHover=()=>setHovered(!isHover);
  return (
    <div className="relative my-3">
    <div onMouseEnter={handleHover} onMouseLeave={handleHover} className={`flex relative z-10 ${isHover ? "bg-white":"bg-neutral-900"} transition-all rounded-md self-center p-2 m-1 gap-4 cursor-pointer max-w-1/6 justify-center inconsolata items-center`}>
      <motion.button onClick={onClick} className="cursor-pointer" type="button">
        <span className={`${isHover ? "text-black" : "text-white"} transition-all tracking-wide font-light h-full w-full block relative`}>
        {text}
        </span>        
      </motion.button>
      {/*hasIcon && src === "Github" ? (
        <BsGithub color={isHover ? "black":"white"} className="transition-all" />
      ) : hasIcon && src === "Facebook" ? (
        <BsFacebook />
      ) : hasIcon && src === "Instagram" ? (
        <BsInstagram />
      ) : (
        ""
      )*/}
      {hasIcon && src==="Github" ? (<Icon size={15} color={isHover ? "black" : "white"} src="Github"/>):""}
    </div>
      <motion.div style={{background:rotatingBg,filter:"blur(2px)"}} className="absolute inset-x-1 -inset-y-[.4px] p-2 rounded-md max-w-1/6"/>
    </div>
    
  );
};

