import type { FC } from "react";
import { CiPower as Power } from "react-icons/ci";



export const StartupPreview:FC=()=>{
    return <div
    style={{
      maskImage:
        "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2))",
      WebkitMaskImage:
        "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2))",
    }}
    className="relative flex flex-col gap-2 rounded-md overflow-hidden"
  >    
     <div className="relative block transition-transform mx-auto mt-4">
        <Power size={50} className="hover:text-green-400 rounded-full border bg-white/10 border-white/20 transition-colors"/> 
     </div>
  </div>
}