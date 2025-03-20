
export type CardProps = {
    hasPreview?:boolean;
    preview?:"Setup" | "Idea" | "Test" | "DontWorry" | "DataDeliver" | "Download" | "SetupOllama" | "Startup";
    className?:string;
    size?:number;
    contentProps: { title: string; content: string; btnText?:string};
}