import type { ButtonProps } from "../ButtonProps";
import type { IconProps } from "../IconProps";
export type MotionButtonProps = Omit<ButtonProps,"type"> & Partial<Pick<IconProps,"src">> & {className?:string};