import type { FC } from "react";
import type { ButtonProps } from "../../types/ButtonProps";
import { BsStars } from "react-icons/bs";



export const SubmitButton: FC<ButtonProps> = ({
  onClick,
  type,
  hasIcon = true,
}) => {
  return (
    <div>
      <button onClick={onClick} className="dm-sans flex text-white bg-zinc-800/50 hover:bg-zinc-800 p-2 cursor-pointer" type={type}>
        {hasIcon && <BsStars size={25} />}
      </button>
    </div>
    
  );
};
