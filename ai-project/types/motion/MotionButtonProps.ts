import type { ButtonProps } from "../ButtonProps";
import type {IconProps} from "../IconProps"
export type MotionButtonProps = Omit<ButtonProps,"type"> & Pick<IconProps,"src">;