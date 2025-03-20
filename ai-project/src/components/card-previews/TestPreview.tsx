import type { FC } from "react";

import { CiCreditCard1 as CreditCard } from "react-icons/ci";
import {BsFillShieldLockFill as TopIcon } from "react-icons/bs"
import { FcStatistics as Statistics } from "react-icons/fc";

export const TestPreview: FC = () => {
  return (
    <div
      style={{
        maskImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
      }}
      className="relative flex flex-col justify-center items-center rounded-md flex-1 overflow-hidden text-white/50"
    >
      <section className="space-y-3">
        <section className="flex gap-2 border border-white/10 px-4 py-3 text-start flex-col bg-white/10 rounded-lg text-white/60">
          <header className="flex gap-2 items-center">
            <TopIcon/>
            <span className="">RandomI</span>
            <div className="bg-white/50 w-1 h-1 rounded-full"/>
            <span className="">2h ago</span>
          </header>
          <div className="flex items-center gap-0.5">
          <CreditCard/>
          <span>Matheus is requesting API Acess</span>
          </div>
          <span>Command Status: Running</span>
        
          <div className="flex mt-2 gap-2 flex-row flex-nowrap">
          <button type="button" className="bg-white/20 text-white px-2 py-2 rounded-md">Approve</button>
          <button type="button" className="bg-white/20 text-white px-2 py-2 rounded-md">Decline</button>
          <button type="button" className="bg-white/20 text-white px-2 py-2 rounded-md">Edit</button>
          </div>
        </section>
        <section className="flex border border-white/10 px-4 py-3 text-start flex-col bg-white/10 rounded-lg text-white/60">
        <header className="relative flex gap-2 items-center">
            <TopIcon/>
            <span className="">RandomI</span>
            <div className="bg-white/50 w-1 h-1 rounded-full"/>
            <span className="">52m ago</span>
          </header>
          <div className="flex items-center gap-0.5">
          <Statistics/>
          <span>Users Increase Alert</span>
          </div>
          <span>30% increase in the last 7 days</span>
        </section>
        <section className="flex border-x border-t  border-white/10 px-4 py-3 text-start flex-col bg-gradient-to-b from-white/10 to-60% rounded-lg text-white/60">
        <header className="relative flex gap-2 items-center">
            <TopIcon/>
            <span className="">RandomI</span>
            <div className="bg-white/50 w-1 h-1 rounded-full"/>
            <span className="">Now</span>
          </header>
        </section>
      </section>
    </div>
  );
};
