import type { FC } from "react";
import { SiOllama as Ollama } from "react-icons/si";

export const SetupOllamaPreview:FC=()=>{
    return <div
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2))",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2))",
          }}
          className="relative flex flex-col gap-2 rounded-md overflow-hidden"
        >
            <div className="relativ block transition-transform mx-auto mt-4">
            <Ollama size={50} className="hover:-rotate-180 border border-white/20 bg-white/10 rounded-full p-1 transition-transform"/>
            </div>
        </div>
}