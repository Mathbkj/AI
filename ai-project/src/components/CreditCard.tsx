"use client"

import type { FC } from "react"
import { BsWifi as WifiIcon,BsFillShieldLockFill as TopIcon } from "react-icons/bs"
import { SiVisa as Visa } from "react-icons/si"
import { FcSimCardChip as Chip } from "react-icons/fc";

export const CreditCard:FC=()=> {
  return (
    <section style={{backgroundColor:"rgba(10,10,13,1)"}} className="relative overflow-hidden px-3 py-1 rounded-md w-40 h-23">
            <div className="relative m-2 flex justify-between items-center flex-nowrap">
        <TopIcon size={15}/>
        <Visa size={30}/>
    </div>
    <div className="relative mx-2 my-1 flex justify-between items-center flex-nowrap">
        <Chip size={20}/>
        <WifiIcon/>
    </div>
    <div className="relative text-sm mx-2 my-1 flex justify-start items-center flex-nowrap">
        <span>....</span>
        <span>6793</span>
    </div>
    </section>
    
  )
}

