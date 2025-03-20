import type { FC } from "react";
import {CiSettings} from "react-icons/ci"
import { CreditCard } from "./CreditCard";

type OverviewProps = {
  title:string;
  price:string;
}

const Overview:FC<OverviewProps>=({title,price})=>{
  return <div className="flex flex-row flex-nowrap gap-4 text-white justify-center items-center text-xs">
    <ul className="flex flex-row flex-nowrap justify-center gap-4">
      <li>{title}</li>
      <li>${price}</li>
    </ul>
  </div>
}

export const Phone:FC=()=>{
    return <div className="overflow-hidden relative rounded-4xl flex flex-col justify-center items-center w-40 h-80 bg-black text-gray-50 border border-white/15">
      <div style={{backgroundColor:"rgba(22,24,30,1)"}} className="overflow-hidden relative rounded-3xl flex flex-col justify-start items-center w-37 h-76">
      <div className="absolute w-11 h-3.5 top-3 bg-black rounded-md"/>
      <section className="w-[90%] px-3 py-2 mt-5">
      <div className="flex px-1 py-2 flex-row flex-nowrap justify-between items-center text-lg text-white/50 z-10">
        <span>Rents</span>
        <CiSettings className="text-white"/>
      </div>
      <div className="flex px-1 py-2 flex-row flex-nowrap justify-center items-center">
        <CreditCard/>
      </div>
      </section>
      <div className="flex flex-row justify-center font-thin items-center text-white/50 text-lg gap-1">  
        <span>Overview</span> 
        <div className="bg-white/30 w-12 h-2 rounded-lg"/>
      </div>
      <section className="rounded-md bg-white/20 mt-0.5 py-1 w-[90%]">
      <Overview title="Supply" price="189.99"/>
      <Overview title="Travel" price="1250.51"/>
      <Overview title="Techs" price="224.78"/>

      </section>
      
      </div>
      
    </div>
}