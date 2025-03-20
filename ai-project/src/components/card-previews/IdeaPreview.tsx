import type { FC } from "react";
import { Phone } from "../Phone";

export const IdeaPreview: FC = () => {
  return (
    <div
      style={{
        maskImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
      }}
      className="relative flex flex-col gap-2 justify-center items-center rounded-md flex-1 overflow-hidden"
    >
      <div className="absolute rounded-full border border-white/20 w-72 h-72"/>
      <div className="absolute rounded-full border border-white/20 w-60 h-60"/>
      <div className="absolute rounded-full border border-white/20 w-50 h-50"/>
      <Phone />
    </div>
  );
};
