import type { FC } from "react";
import { React } from "../../assets/Icons/React";
import { Node } from "../../assets/Icons/Node";
import { Ollama } from "../../assets/Icons/Ollama";
import { Fire } from "../../assets/Icons/Fire";
import { Trending } from "../../assets/Icons/Trending";
import { Timer } from "../../assets/Icons/Timer";

export const SetupPreview: FC = () => {
  return (
    <div style={{
              maskImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
            }} 
      className="relative flex flex-col gap-2 bg-white/5 rounded-md border-t border-l border-r overflow-hidden border-white/5">
      <span className="text-white/60 text-start px-3 py-2">Techs</span>
      <div className="flex flex-wrap gap-2 justify-center mx-2 self-start w-[90%] items-start bg-white/10 rounded-md">
        <section className="flex flex-col items-center py-2">
          <span className="text-white/50 px-3 py-1">JSX</span>
          <React />
        </section>

        <section className="flex flex-col items-center py-2">
          <span className="px-3 text-white/50 py-1 border-x border-x-white/10">
            Node
          </span>
          <Node />
        </section>

        <section className="flex flex-col items-center py-2">
          <span className="px-3 text-white/50 py-1">Ollama</span>
          <Ollama />
        </section>
      </div>
      <span className="text-white/60 text-start px-3 py-2">Insights</span>
      <div className="flex flex-wrap gap-3 justify-center mx-2 items-center rounded-md">
      <section className="flex flex-1 flex-col bg-white/10 px-4 pt-1 pb-2 rounded-md items-center">
      <div className="flex justify-center items-center flex-row-reverse">
      <span className="text-white/50 px-3 py-1">Trending Cash</span>
      <Fire/>
      </div>
          <div className="flex justify-center items-center gap-2">
          <span className="md:text-lg text-white/70">$5004.92</span>
          <Trending/>
          </div>
        </section>
        <section className="flex flex-1 flex-col bg-white/10 px-3 py-2 rounded-md items-center">
      <div className="flex justify-center items-center flex-row-reverse">
      <span className="text-white/50 px-3 py-1">Time</span>
      <Timer/>
      </div>
          <div className="flex justify-center items-center gap-2">
          <span className="md:text-lg text-white/70">26 days</span>
          </div>
        </section>
      </div>
    </div>
  );
};
