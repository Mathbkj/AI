import type { FC } from "react";
import type { IconProps } from "../../types/IconProps";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";

export const Icon: FC<IconProps> = ({ src, color,size }) => {
  return (
    <>
      {src === "Github" && <BsGithub size={size} color={color}/>}
      {src === "Facebook" && <BsFacebook size={size} color={color}/>}
      {src === "Instagram" && <BsInstagram size={size} color={color}/>}
      {src === "Linkedin" && <BsLinkedin size={size} color={color}/>}
      {src === "Twitter" && <BsTwitterX size={size} color={color}/>}
    </>
  );
};
