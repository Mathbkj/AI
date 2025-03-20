import { motion } from "motion/react";
import type { Dispatch, FC, SetStateAction } from "react";
import { useState, useRef } from "react";
import type { IconType } from "react-icons";
import { FaCode, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Reveal } from "./components/motion/Reveal";
import { Card } from "./components/motion/Card";
import downloader from "./assets/Images/downloader.png";
import ollamaDownloader from "./assets/Images/ollama-downloader.png";
import project from "./assets/Images/project.png";
import { Form } from "./components/Form";
import { AnimatedText } from "./components/motion/AnimatedText";
import { RedirectButton } from "./components/motion/RedirectButton";
import { Line } from "./components/Line";
import { Icon } from "./components/Icon";

type CategProps = {
  text: string;
  Icon?: IconType;
};
const Category: FC<
  CategProps & {
    setPos: Dispatch<SetStateAction<{ l: number; w: number; opacity: number }>>;
  }
> = ({ text, Icon, setPos }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPos({
          w: width - 30,
          l: ref.current.offsetLeft,
          opacity: 1,
        });
      }}
      className="flex inconsolata p-4 cursor-pointer flex-wrap items-center justify-center text-center text-white md:text-[20px] text-base gap-3"
    >
      <button type="button" className=" text-center">
        {text}
      </button>
      {Icon && <Icon color="white" />}
    </motion.div>
  );
};
const Logo: FC<Pick<CategProps, "Icon">> = ({ Icon }) => {
  const L = Icon as IconType;
  return (
    <motion.button
      initial={{ scale: "100%" }}
      whileHover={{ scale: "120%" }}
      className="cursor-pointer overflow-visible"
    >
      <L color="white" />
    </motion.button>
  );
};

function App() {
  const [pos, setPos] = useState({
    l: 0,
    w: 36,
    opacity: 1,
  });

  return (
    <motion.div className="flex relative flex-col justify-center items-center min-w-full min-h-full">
      {/*Nav Component*/}
      <nav className="flex bg-neutral-900 shadow-xl rounded-b-lg p-4 justify-center items-center text-center">
        <motion.div className="text-white flex text-center justify-center items-center">
          <motion.div id="logos" className="flex gap-3 me-6 md:text-4xl">
            <Logo Icon={FaGithub} />
            <Logo Icon={FaLinkedin} />
            <Logo Icon={FaInstagram} />
          </motion.div>
          <motion.div
            id="categories"
            className="flex relative flex-wrap text-center"
          >
            <Category text="Home" setPos={setPos} />
            <Category text="About" setPos={setPos} />
            <Category text="Source" Icon={FaCode} setPos={setPos} />
            <motion.div
              animate={{ left: pos.l, width: pos.w, opacity: pos.opacity }}
              transition={{ duration: 0.5 }}
              className="absolute cursor-pointer inset-1 bg-slate-50/20 rounded-3xl p-5"
            />
          </motion.div>
        </motion.div>
      </nav>
      {/*Header Component*/}
      <Reveal x={-100} y={0}>
        <div className="relative">
          <motion.header className="mt-[150px] p-5 flex flex-col gap-4 text-center">
            <motion.h1 className="font-black text-transparent antialiased bg-gradient-to-t bg-clip-text from-white to-white/80 inconsolata md:text-4xl">
              Quickly Build Your Commands
            </motion.h1>
            <motion.h2 className="text-white md:text-xl">
              This AI's prototype's been developed using Ollama Facebook's AI
            </motion.h2>
          </motion.header>
          <motion.div className="absolute bg-slate-50/15 rotate-[30deg] rounded-full inset-1 blur-3xl" />
        </div>
      </Reveal>
      {/*Main Component*/}

      <main className="w-full flex flex-col justify-center items-center relative">
        {/**Main Header**/}
        <motion.section className="md:grid block w-1/2 gap-4 grid-cols-3 grid-rows-2 ">
          <Card
            contentProps={{
              title: "Easy Setup",
              content:
                "It's an easy to fetch tool that you can use in order to start your own AI API Project!",
              btnText: "Learn More",
            }}
          />
          <Card
            contentProps={{
              title: "Explore Your Ideas",
              content:
                "Start exploring your imagination with this easily built API Setup",
              btnText: "Learn More",
            }}
          />
          <Card
            contentProps={{
              title: "Test The Tool",
              content:
                "Test whatever prompts you want to and have your results quickly sent to you",
              btnText: "Learn More",
            }}
          />
          <Card
            contentProps={{
              title: "Don't worry about data stream",
              content:
                "The server-sided part of the code already deals with data streaming and answer you in pieces of the completed data",
              btnText: "Learn More",
            }}
          />
          <Card
            contentProps={{
              title: "Fast Data Delivering",
              content:
                "Once you submit your request Node.js processes your data and parcially deliver it in pieces of data, sending it to your client-side. Therefore, you don't need to worry about its speed",
              btnText: "Learn More",
            }}
          />
          <Card
            contentProps={{
              title: "Friendly Interface",
              content: "Simple and intuitive interface for easing your life",
              btnText: "Learn More",
            }}
          />
        </motion.section>

        <motion.section className="flex flex-col w-full relative justify-center items-center mt-4 p-4">
          <header className="flex w-1/2 mt-12 flex-col gap-4">
            <AnimatedText
              text="How To Use"
              className="md:text-4xl mt-8 text-start font-bold text-white"
            />
            <AnimatedText
              className="font-normal md:text-2xl text-white/40 inconsolata text-start antialised"
              text="Learn how to use the application"
            />
          </header>
          <motion.div className="md:grid block w-1/2 grid-cols-2 gap-4 grid-rows-2 px-8 pt-6 pb-[96px] mb-2">
            <Card
              hasImage={true}
              src={downloader}
              contentProps={{
                title: "Download The Repository ZIP",
                content:
                  "Download the project ZIP and acess it in your content",
              }}
            />
            <Card
              hasImage={true}
              src={ollamaDownloader}
              contentProps={{
                title: "Ollama Setup",
                content:
                  "You must have Ollama downloaded in your machine before proceeding. With it installed, run the following code: 'ollama run llama3' in your terminal.",
              }}
            />
            <Card
              span={2}
              hasImage={true}
              src={project}
              contentProps={{
                title: "Project Startup",
                content:
                  "Now, you should open up your project and run a 'npm start' in your Server folder and 'npm run dev' in your ai-project folder, respectively starting the server and frontend applications.",
              }}
            />
          </motion.div>
          <Reveal x={0} y={0}>
            <Form />
          </Reveal>
          <Line/>
          <motion.div className="flex w-1/2 px-3 text-center pt-10 flex-col gap-3">
            <AnimatedText text="Do you want to learn how does this API work?" className="md:text-2xl text-transparent bg-gradient-to-r from-white to-100% bg-clip-text font-bold"/>
            <AnimatedText text="Check out my github repository here" className="font-normal md:text-xl text-white/40 inconsolata antialised"/>
            <Reveal x={300} y={0}>
            <RedirectButton hasIcon={true} src="Github" text="Guide"/>
            </Reveal>
          </motion.div>
        </motion.section>
        {/**Main About**/}
      </main>
      {/*Footer Component*/}
      <footer className="w-full m-2 px-4 py-2">
        <section className="mx-auto px-2 py-3 w-[75%] border-t border-t-white/10">
           <header className="flex justify-between items-center">
            <div className="flex p-2 gap-4">
            <span className="text-white/70 dm-sans">&copy;2025 Random Project Inc.</span>
            <span className="text-white/70 dm-sans">Privacy Policy</span>
            <span className="text-white/70 dm-sans">Terms Of Use</span>
            </div>
            <div className="flex p-2 gap-5">
              <Icon size={16} src="Twitter" color="white"/>
              <Icon size={16} src="Linkedin" color="white"/>
              <Icon size={16} src="Facebook" color="white"/>
            </div>
           </header>
        </section>
      </footer>
    </motion.div>
  );
}

export default App;
