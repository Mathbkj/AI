import type { FC } from "react";
import dashboard from "../assets/Images/Dashboard.png";

export const Dashboard:FC=()=>{
    
    return (
        <div className="w-full sticky top-0 h-[150vh] flex justify-center gap-5 mb-10">
          <img 
            alt="" 
            className="object-contain w-full max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%]" 
            src={dashboard} 
          />
        </div>
      );
      
        
    
}