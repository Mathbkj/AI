export type ButtonProps = {
    onClick?:()=>void;
    hasIcon?:boolean;
    text?:string;
    type:"submit" | "button"
}