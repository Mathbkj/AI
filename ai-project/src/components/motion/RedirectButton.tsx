import { useState, type FC } from "react";
import { motion, useTime, useTransform } from "motion/react";
import type { MotionButtonProps } from "../../../types/motion/MotionButtonProps";
import { Icon } from "../Icon";

export const RedirectButton: FC<MotionButtonProps> = ({
  text,
  src,
  hasIcon,
  className,
  href
}) => {
  const [isHover, setHovered] = useState<boolean>(false);
  const time = useTime();
  const rotate = useTransform(time, [0, 3000], [0, 360], { clamp: false });
  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg,#f0f0f0,#000)`;
  });
  const handleHover = () => setHovered(!isHover);
  return (
    <div className="relative my-3">
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        className={`flex flex-nowrap mx-auto relative z-10 ${
          isHover ? "bg-black" : "bg-white"
        } transition-all rounded-md flex px-3 py-2 gap-2 cursor-pointer justify-center dm-sans items-center ${className}`}
      >
        <a 
          href={href}
          rel="noreferrer"
          target="_blank"
          className="cursor-pointer"
        >
          <span
            className={`${
              isHover ? "text-white" : "text-black"
            } transition-all tracking-wide font-light flex justify-center items-center relative`}
          >
            {text}
          </span>
        </a>    {hasIcon && src === "Learn" ? (
          <div>
            <Icon size={15} color={isHover ? "white" : "black"} src="Learn" />
          </div>
        ) : (
          ""
        )}
        {hasIcon && src === "Github" ? (
          <div>
            <Icon size={15} color={isHover ? "white" : "black"} src="Github" />
          </div>
        ) : (
          ""
        )}
      </div>
      <motion.div
        style={{ background: rotatingBg, filter: "blur(20px)" }}
        className={`absolute mx-auto inset-x-1 -inset-y-px p-2 rounded-md ${className}`}
      />
    </div>
  );
};
