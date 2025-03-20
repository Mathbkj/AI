import { Input } from "./Input";
import type { ChangeEvent, FC, FormEvent } from "react";
import { useState } from "react";
import { AxiosError } from "axios";
import { SubmitButton } from "./SubmitButton";
import { AnimatedText } from "./motion/AnimatedText";


export const Form: FC = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const [content, setContent] = useState<string>("");

  const handleSubmit = async (ev?: FormEvent<HTMLFormElement>) => {
    try {
      if (content) setContent("");
      ev?.preventDefault();
      setLoading(!isLoading);
      if (input === undefined) {
        throw new Error("Input is empty");
      }
      const response = await fetch("http://localhost:3000/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: input }),
      });
      if (response.ok && response.body) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        while (true) {
          const { value, done } = await reader.read();
          if (done) {
            break;
          }
          const chunk = decoder.decode(value);
          setContent((prev) => {
            const newPrev = prev + chunk;
            return newPrev;
          });
        }
      }
    } catch (err) {
      alert('You must start the server from the Server folder before running this. Remember to also have Llama3 running.')
      if (err instanceof AxiosError) {
        console.log(`Axios Error:${err.message}`);
      }
    } finally {
      console.log("Form submission completed");
      setLoading(false);
    }
  };
  return (
    <div className="w-full flex flex-col gap-5 mt-6">
      <header className="flex flex-col m-2 gap-4">
        <AnimatedText
          text="Test The API"
          className="md:text-4xl mt-2 text-white font-bold pb-2 text-start"
        />
        <AnimatedText
          text="You might test the app right here"
          className="font-normal md:text-2xl text-white/40 inconsolata text-start antialised"
        />
      </header>
      <div className="bg-neutral-900 overflow-x-hidden text-wrap rounded-xl max-w-[500px] h-[300px] p-8 pt-0 text-center">
        <h1 className="md:text-xl mt-8 font-bold text-white break-words">
          {content ? content : "Response Here"}
        </h1>
      </div>
      <br />
      <form
        className="w-full flex shadow rounded-xl shadow-neutral-900 bg-neutral-900 overflow-hidden"
        onSubmit={handleSubmit}
      >
        <Input
          value={input}
          onChange={handleChange}
          placeholder="Type something"
        />
        <SubmitButton text="Submit" type="submit" />
      </form>
    </div>
  );
};
