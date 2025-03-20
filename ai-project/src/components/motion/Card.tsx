import type { FC } from "react";
import type { CardProps } from "../../../types/CardProps";
import { motion } from "motion/react";
import { RedirectButton } from "./RedirectButton";
import { SetupPreview } from "../card-previews/SetupPreview";
import { IdeaPreview } from "../card-previews/IdeaPreview";
import {TestPreview} from "../card-previews/TestPreview"
import { DontWorryPreview } from "../card-previews/DontWorryPreview";
import {DataPreview} from "../card-previews/DataPreview";
import { DownloadPreview } from "../card-previews/DownloadPreview";
import { SetupOllamaPreview } from "../card-previews/SetupOllamaPreview";
import { StartupPreview } from "../card-previews/StartupPreview";
export const Card: FC<CardProps> = ({
  contentProps,
  className,
  size = 1,
  hasPreview,
  preview,
}) => {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    whileHover: { scale: 1.1 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const baseClassName =
    "relative bg-neutral-900 px-4 py-2 text-white flex flex-col justify-center items-center text-center outline-1 outline-white/30 min-h-[200px] max-h-[500px] rounded-md";

  return (
    <motion.div
      style={{ scale: size }}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      whileHover="whileHover"
      className={`${baseClassName} ${className}`}
    >
      <div
        className="relative w-full max-h-full my-4 dm-sans md:text-sm text-xs grow overflow-hidden"
      >
        {hasPreview && preview === "Setup" ? <SetupPreview /> : ""}
        {hasPreview && preview==="Idea" ? <IdeaPreview/> : ""}
        {hasPreview && preview==="Test" ? <TestPreview/> : "" }
        {hasPreview && preview === "DontWorry"?<DontWorryPreview/> : ""}
        {hasPreview && preview==="DataDeliver" ? <DataPreview/> : ""}
        {hasPreview && preview==="Download" ? <DownloadPreview/> : ""}
        {hasPreview && preview==="SetupOllama" ? <SetupOllamaPreview/> : ""}
        {hasPreview && preview==="Startup" ? <StartupPreview/> : ""}
      </div>

      <div className="">
        <h1 className="dm-sans md:text-lg text-md font-black mt-5 text-transparent bg-gradient-to-r from-white to-white/40 bg-clip-text">
          {contentProps.title}
        </h1>
        <br />
        <h2 className="dm-sans md:text-base text-zinc-300/50 font-semibold text-xl">
          {contentProps.content}
        </h2>
        {contentProps.btnText && (
          <RedirectButton hasIcon src="Learn" text="Learn More" />
        )}
      </div>
    </motion.div>
  );
};
