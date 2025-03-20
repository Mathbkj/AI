import type {PropsWithChildren} from "react";

export type TextParallaxProps=PropsWithChildren & {
    imgUrl:string;
    subheading:string;
    heading:string;
    title:string;
    explanation:string;
}