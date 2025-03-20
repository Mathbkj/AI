import type { FC } from "react";
import { cn } from "../lib/utils";
import { SpotlightCore } from "./SpotlightCore";
import type { MotionTextProps } from "../../types/motion/MotionTextProps";
import { Line } from "./Line";
import { AnimatedText } from "./motion/AnimatedText";

export const SpotlightPreview:FC<MotionTextProps>=({text,subText})=> {
  return (
    <div className="relative flex h-[100vh] w-full  rounded-md antialiased md:items-center md:justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
        )}
      />

      <SpotlightCore
        className=" left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <h1 className="bg-opacity-50 lexend py-5 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          {text}
        </h1>
        <Line/>
        <AnimatedText text={subText as string} className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300"/>
      </div>
    </div>
  );
}
