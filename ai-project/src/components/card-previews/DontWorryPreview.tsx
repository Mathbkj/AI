import type { FC } from "react";
import { SiOllama as Ollama } from "react-icons/si";
import { FaNodeJs as Node } from "react-icons/fa";
import { FaReact as React } from "react-icons/fa";
import {RiNextjsFill as Next} from "react-icons/ri";
import { BiLogoPostgresql as Postgres } from "react-icons/bi";
import { BiLogoTailwindCss as Tailwind } from "react-icons/bi";
import { BiLogoTypescript as Typescript,BiLogoJavascript as Javascript } from "react-icons/bi";
import { SiCsswizardry as CSS } from "react-icons/si";
import { FaHtml5 as HTML } from "react-icons/fa";
import { FaFlutter as Flutter } from "react-icons/fa6";
import { FaCcStripe as Stripe } from "react-icons/fa";
import { DiAngularSimple as Angular } from "react-icons/di";
import { DiGit as Git } from "react-icons/di";
import { DiBootstrap as Boot } from "react-icons/di"



interface IconProps{
    left:number | string;
    top:number | string;
    src:string;
    size:number
}

export const Icon:FC<IconProps>=({top,left,src,size})=>{
    return <div style={{top,left}} className="absolute bg-black/40 border border-white/10 p-2 rounded-full">
    {src==="Ollama" && <Ollama color="white" size={size}/>}
    {src==="Node" && <Node color="green" size={size}/>}
    {src==="React" && <React color="aqua" size={size}/> }
    {src==="Next" && <Next color="white" size={size}/>}
    {src==="SQL" && <Postgres color="rgb(49,120,193)" size={size}/>}
    {src==="Tailwind" && <Tailwind color="aquamarine" size={size}/>}
    {src==="Typescript" && <Typescript color="rgb(49,120,193)" size={size}/>}
    {src==="Javascript" && <Javascript color="yellow" size={size}/>}
    {src==="CSS" && <CSS className="p-1" color="rgb(103, 47, 155)" size={size}/>}
    {src==="HTML" && <HTML color="rgb(229,75,33)"size={size}/>}
    {src==="Flutter" && <Flutter className="p-2" color="rgb(74,210,253)" size={size}/>}
    {src==="Stripe" && <Stripe color="rgb(99,90,255)"size={size}/>}
    {src==="Angular" && <Angular color="rgb(222,0,45)"size={size}/>}
    {src==="Git" && <Git color="rgb(246,86,37)"size={size}/>}
    {src==="Boot" && <Boot color="rgb(140,9,252)"size={size}/>}

    
    </div>
}

export const DontWorryPreview: FC = () => {
  return (
    <div
      style={{
        maskImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
      }}
      className="relative flex flex-col gap-2 rounded-md overflow-hidden"
    >
        <section className="relative flex flex-col gap-2 justify-start w-full h-72 m-2 px-3 py-2 mx-3 my-2">
          <div className="relative flex flex-wrap">
          <Icon top={0} left={0} src="Ollama" size={50}/>
            <Icon top={20} left={100} src="Node" size={40}/> 
            <Icon top={0} left={200} src="React" size={60}/> 
            <Icon top={40} left={330} src="Next" size={40}/>    
            <Icon top={0} left={400} src="SQL" size={60}/>
          </div>
          <div className="relative my-4 flex flex-wrap">
          <Icon top={90} left={0} src="Tailwind" size={50}/>
          <Icon top={110} left={150} src="Typescript" size={40}/>
          <Icon top={100} left={220} src="Javascript" size={30}/>
          <Icon top={100} left={300} src="CSS" size={50}/>
          <Icon top={80} left={450} src="HTML" size={45}/>
          </div>
          <div className="relative my-2 flex flex-wrap">
            <Icon top={150} left={10} src="Flutter" size={72}/>
            <Icon top={190} left={150} src="Stripe" size={50}/>
            <Icon top={150} left={220} src="Angular" size={50}/>
            <Icon top={180} left={290} src="Git" size={40}/>
            <Icon top={140} left={400} src="Boot" size={60}/>
          </div>
            
            
        </section>
        
    </div>
  );
};
