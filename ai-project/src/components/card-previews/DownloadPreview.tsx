import type { FC } from "react";
import { IoIosCodeDownload as Download } from "react-icons/io";
import { TbZip as Zip } from "react-icons/tb";



export const DownloadPreview: FC = () => {
  return (
    <div
      style={{
        maskImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2))",
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2))",
      }}
      className="relative flex flex-col gap-2 rounded-md overflow-hidden"
    >
        <div className="relative animate-bounce block mx-auto mt-4">
        <Download className="relative rounded-full border border-white/20 bg-white/10" size={60} color="rgba(255,255,255,0.7)"/>
        <Zip className="absolute right-1 top-11" size={20} color="white"/>
        </div>
    </div>
  );
};
