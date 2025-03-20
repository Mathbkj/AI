
export type CardProps = {
    hasImage?:boolean,
    span?:number,
    src?:string,
    size?:number,
    contentProps: { title: string; content: string; btnText?:string}
}