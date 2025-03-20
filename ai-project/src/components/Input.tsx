import type { FC } from "react";
import type { InputProps } from "../../types/InputProps";

export const Input: FC<InputProps> = ({value,onChange,placeholder}) => {
    return <input value={value} onChange={onChange} className="mx-3 w-full rounded-md outline-none md:text-xl text-white dm-sans" placeholder={placeholder} />   
}