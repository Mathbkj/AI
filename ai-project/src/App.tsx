import { motion } from "motion/react";
import { Reveal } from "./components/motion/Reveal";
import { Card } from "./components/motion/Card";

import { Form } from "./components/Form";
import { AnimatedText } from "./components/motion/AnimatedText";
import { RedirectButton } from "./components/motion/RedirectButton";
import { Line } from "./components/Line";
import { Icon } from "./components/Icon";
import { BsFillShieldLockFill } from "react-icons/bs";
import { SpotlightPreview} from "./components/SpotlightPreview";
import { BiMenu } from "react-icons/bi";
import { useEffect, useState } from "react";
import { TextParallax } from "./components/motion/TextParallax";

import futuristic from "./assets/Images/futuristic.jpg";
import interconnected from "./assets/Images/interconnected.jpg";

function App() {
  const containerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  useEffect(() => {
    console.log(isMenuOpen);
  }, [isMenuOpen]);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={{ duration: 1 }}
      variants={containerVariants}
      className="flex relative flex-col justify-center items-center text-center w-full max-w-screen min-h-full"
    >
      {/*Nav Component*/}
      <nav className="w-full backdrop-blur top-0 z-20 sticky bg-black/20 border-b border-b-white/10 text-center text-white py-3 md:py-4 rounded-b-lg">
        <motion.div className="max-w-screen-lg mx-auto rounded-full flex items-center md:justify-between justify-center my-2">
          {/* Logo Section */}
          <motion.div className="flex items-center gap-2">
            <BsFillShieldLockFill size={20} />
            <span className="lexend tracking-wide font-semibold md:text-base text-sm md:border-r md:border-b-0 border-b px-3 py-1">
              RandomI
            </span>
          </motion.div>
          {/*Logo Section End */}

          {/* Navigation Links */}
          <motion.div className="flex justify-center items-center gap-4 md:gap-6 mt-0 me-10">
            <span className="dm-sans hidden md:flex cursor-pointer hover:text-gray-300">
              Blog
            </span>
            <RedirectButton
              className="hidden md:flex"
              hasIcon={true}
              src="Github"
              text="Guide"
            />
            <BiMenu
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              size={25}
              className="md:hidden cursor-pointer flex"
            />
          </motion.div>
          <div
            className={`absolute md:hidden h-max left-0 w-full bg-black/20 flex flex-col items-center gap-6 font-semibold text-lg py-10 transition-all ${
              !isMenuOpen
                ? "opacity-0 pointer-events-none top-0"
                : "opacity-100 pointer-events-auto top-12"
            } `}
          >
            <li className="list-none w-full text-center text-white hover:text-white/30 transition-all cursor-pointer">
              <span className="dm-sans hover:text-gray-300">Blog</span>
            </li>

            <li className="list-none w-full text-center text-white hover:text-white/30 transition-all">
              <RedirectButton
                className="text-white max-w-1/6"
                hasIcon={true}
                src="Github"
                text="Guide"
              />
            </li>
          </div>
        </motion.div>
        {/*Navigations Links End*/}
      </nav>
      {/*Header Component*/}
      <div className="relative space-y-20 min-w-full text-wrap">
        <header className="min-w-full text-wrap mt-[150px] flex flex-col gap-4 text-center">
          {/*<motion.h1 initial={{y:0,opacity:0}} whileInView={{y:-10,opacity:1}} className="font-black dm-sans text-transparent antialiased bg-gradient-to-t bg-clip-text from-white to-white/80 inconsolata md:text-4xl text-2xl">
              Quickly Build Your Commands
            </motion.h1>*/}
          <SpotlightPreview
            className="h-[100vh]"
            text="Quickly Build Your Commands"
            subText="This AI's prototype's been developed using Ollama Facebook's AI"
          />
          {/*<motion.h2 initial={{y:0,opacity:0}} whileInView={{y:-10,opacity:1}} className="text-white inconsolata md:text-xl">
              This AI's prototype's been developed using Ollama Facebook's AI
            </motion.h2>*/}
        </header>

        <div className="bg-white px-12">
            <TextParallax imgUrl={futuristic} subheading="Feel The Wind Blowing" heading="Code With RandomI" title="About The Project" explanation="RandomI is a solo AI-related project I've developed for you to freely implement in your projects. This project has been developed using Express.js integrated with Ollama API and it's easy to setup."/>            
            <TextParallax imgUrl={interconnected} subheading="Start using RandomI" heading="Power up your projects🚀" title="Folder Structure" explanation="There will be two folders in Github, one for the Server and another for the Client. The core of the application is the Server, made with Express, a Node framework, as said before. The client is made with React.js and performatically processes the response received from the backend"/>            
        </div>
      
            
      </div>

      {/*Main Component*/}

      <main className="w-full mt-86 flex flex-col justify-center items-center relative">
        {/**Main Header */}
        <header className="w-full sticky md:w-[60%] min-h-[250px] max-h-[300px] self-center my-16 flex flex-col md:flex-row justify-center items-center md:items-baseline md:text-start py-4 gap-5 md:gap-20 overflow-hidden">
          <h1 className="text-xl sm:text-2xl md:text-3xl flex-1 max-w-[90%] md:max-w-[548px] tracking-wide font-bold text-transparent leading-[1.2] dm-sans pt-2 md:pt-1.5 pb-10 md:pb-36 bg-gradient-to-r from-white to-white/10 bg-clip-text">
            Who said there isn't an easy way to implement AI?
          </h1>
          <h3 className="text-xs sm:text-sm md:text-base text-left flex-1 max-w-[90%] md:max-w-[500px] font-normal pb-10 md:pb-36 text-white/40">
            With RandomI, managing conversations and chatbots is effortless,
            empowering, and anything but boring. Our intuitive code brings
            clarity to your project, simplifies your code implementation, and
            puts the power of advanced QA management right at your fingertips.
            <span className="text-white md:text-">{" "}Boost your apps🚀</span>
          </h3>
        </header>
        

        {/**Main Header End */}
        {/**Main About**/}
        <section className="grid sticky grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-4 gap-x-4 gap-y-8 w-[60%]">
          <Card
            hasPreview
            preview="Setup"
            className="lg:row-span-2 order-1"
            contentProps={{
              title: "Easy Setup",
              content:
                "It's an easy to fetch tool that you can use in order to start your own AI API Project!",
              btnText: "Learn More",
            }}
          />
          <Card
            hasPreview
            preview="Idea"
            className="lg:row-span-2 order-2"
            contentProps={{
              title: "Explore Your Ideas",
              content:
                "Start exploring your imagination with this easily built API Setup",
              btnText: "Learn More",
            }}
          />
          <Card
            hasPreview
            preview="Test"
            className="lg:row-span-2 order-3"
            contentProps={{
              title: "Test The Tool",
              content:
                "Test whatever prompts you want to and have your results quickly sent to you",
              btnText: "Learn More",
            }}
          />
          <Card
            hasPreview
            preview="DontWorry"
            className="lg:col-span-2 lg:row-span-2 lg:row-start-3 order-4"
            contentProps={{
              title: "Don't worry about data stream",
              content:
                "The server-sided part of the code already deals with data streaming and answers you in pieces of the completed data",
              btnText: "Learn More",
            }}
          />
          <Card
            hasPreview
            preview="DataDeliver"
            className="md:col-span-2 lg:row-span-2 lg:row-start-3 order-5"
            contentProps={{
              title: "Fast Data Delivering",
              content:
                "Once you submit your request, Node.js processes your data and partially delivers it in pieces, sending it to your client-side. Therefore, you don't need to worry about its speed",
              btnText: "Learn More",
            }}
          />
        </section>

        <motion.section className="flex flex-col w-full relative justify-center items-center mt-4 px-8 pt-24 pb-36">
          <header className="flex w-1/2 mt-12 flex-col gap-8">
            <AnimatedText
              text="How To Use"
              className="md:text-4xl mt-8 text-start font-bold text-white"
            />
            <AnimatedText
              className="font-normal md:text-2xl text-white/40 inconsolata text-start antialised"
              text="Learn how to use the application"
            />
          </header>
          <motion.div className="md:grid flex flex-col gap-8 w-1/2 grid-cols-2 grid-rows-2 px-8 pt-6 pb-[96px] mb-2">
            <Card
              hasPreview
              preview="Download"
              className="pb-16"
              contentProps={{
                title: "Download The ZIP",
                content:
                  "Download the project ZIP and acess it in your content",
              }}
            />
            <Card
              hasPreview
              preview="SetupOllama"
              className="pb-16"
              contentProps={{
                title: "Ollama Setup",
                content:
                  "You must have Ollama downloaded in your machine before proceeding. With it installed, run the following code: 'ollama run llama3' in your terminal.",
              }}
            />
            <Card
              hasPreview
              preview="Startup"
              className="pb-16 col-span-2"
              contentProps={{
                title: "Project Startup",
                content:
                  "Now, you should open up your project and run a 'npm start' in your Server folder and 'npm run dev' in your ai-project folder, respectively starting the server and frontend applications.",
              }}
            />
          </motion.div>
          <Reveal x={-20} y={0}>
            <Form />
          </Reveal>
          <Line />
          <motion.div className="flex w-1/2 px-3 text-center pt-10 flex-col gap-3">
            <AnimatedText
              text="Do you want to learn how does this API work?"
              className="md:text-2xl text-transparent bg-gradient-to-r from-white dm-sans to-100% bg-clip-text font-bold"
            />
            <AnimatedText
              text="Check out my github repository here"
              className="font-normal md:text-base text-white/40 inconsolata dm-sans antialised"
            />
            <RedirectButton
              className="max-w-1/6"
              hasIcon={true}
              src="Github"
              text="Guide"
            />
          </motion.div>
        </motion.section>
        {/**Main About End**/}
      </main>
      {/*Footer Component*/}
      <footer className="w-full m-2 px-4 py-2">
        <section className="mx-auto px-2 py-3 w-[75%] border-t border-t-white/10">
          <header className="flex justify-between items-center">
            <div className="flex p-2 gap-4">
              <span className="text-white/70 dm-sans">
                &copy;2025 Random Project Inc.
              </span>
              <span className="text-white/70 dm-sans">Privacy Policy</span>
              <span className="text-white/70 dm-sans">Terms Of Use</span>
            </div>
            <div className="flex p-2 gap-5">
              <Icon size={16} src="Twitter" color="white" />
              <Icon size={16} src="Linkedin" color="white" />
              <Icon size={16} src="Facebook" color="white" />
            </div>
          </header>
          <p className="p-2 text-start text-white/50">
            RandomI is not a registered mark or company, therefore there are no
            commercial interestings involved. This website was developed purely
            for showcasing the API I've developed and its usage. Anyone is free
            to use it any time and the wished way.
          </p>
        </section>
      </footer>
      {/**Footer Component End */}
    </motion.div>
  );
}

export default App;
