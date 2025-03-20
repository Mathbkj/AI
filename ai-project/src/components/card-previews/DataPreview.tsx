import type { FC } from "react";
import { LuBrainCircuit as Brain } from "react-icons/lu";
import { HiOutlineDocumentReport as Report } from "react-icons/hi";
import { MdOutlineAttachMoney as Money, MdContactSupport as Support } from "react-icons/md";
import { CiSettings as Settings } from "react-icons/ci";

interface OptionProps {
  src: string;
  text: string;
  shortcut:string;
}

const Option: FC<OptionProps> = ({ src, text,shortcut }) => {
  const color = "A1A1A6";
  const size=20
  return (
    <div className="flex justify-between w-full items-center">
      <div className="flex justify-start gap-2  p-2 items-center">
        {src === "Brain" && <Brain color={color} size={size} />}
        {src==="Reports" && <Report color={color} size={size}/> }
        {src==="Money" && <Money color={color} size={size}/>}
        {src==='Settings' && <Settings color={color} size={size}/> }
        {src==='Support' && <Support color={color} size={size}/>}
        <span className="text-sm">{text}</span>
      </div>
      <button className="mx-4 text-[10px] px-2 py-1 border border-white/20 bg-slate-500/50 rounded-md" type='button'>{shortcut}</button>
    </div>
  );
};

export const DataPreview: FC = () => {
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
    
      <section className="relative space-y-2 bg-white/5 border z-10 border-white/10  w-full flex flex-col justify-center items-center rounded-lg">
        <span className="m-3 leading-4 text-sm self-start">
          What would you like to do?
        </span>
        <hr className="w-[90%] border-white/20 self-start mx-1 mt-0" />
        <span className="text-neutral-600 text-xs py-3 mx-3 self-start leading-2">
          Frequently used
        </span>
          <Option src="Brain" text="View recent history" shortcut="C" />
          <Option src="Reports" text="View all reports" shortcut="R"/>
          <Option src="Money" text="Manage costs" shortcut="E"/>
          <span className="text-neutral-600 text-xs py-3 mx-3 self-start leading-2">
            Settings & Help
          </span>
          <Option src="Settings" text="Manage settings" shortcut="S"/>
          <Option src="Support" text="Contact Support" shortcut="H"/>
      </section>
    </div>
  );
};
