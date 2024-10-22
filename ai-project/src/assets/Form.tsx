import { Input } from "@mui/material";
import { Search } from "./Icons/Search";
import { LoadingButton } from "@mui/lab";
import { ChangeEvent, FormEvent, useState } from "react";
import { AxiosError } from "axios";
export default function Main() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const [content, setContent] = useState<string>("");
  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    try {
      if (content) setContent("");
      ev.preventDefault();
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
          setContent((prev) => (prev += chunk));
        }
      }
    } catch (err) {
      alert(err);
      if (err instanceof AxiosError) console.log(`Axios Error:${err.message}`);
    } finally {
      console.log("Form submission completed");
      setLoading(false);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className="text-center">AI Project 🤖</h1>
        <p>{content}</p>
        <div className="div-input">
          <Input
            fullWidth
            autoFocus
            autoComplete="off"
            id="text"
            value={input}
            onChange={handleChange}
            required
            placeholder="Type..."
          />
          <Search />
        </div>
        <LoadingButton
          type="submit"
          variant="outlined"
          size={"small"}
          disabled={isLoading}
          loading={isLoading}
          loadingPosition="end"
        >
          {isLoading && "Loading"}
          {!isLoading && "Send"}
        </LoadingButton>
      </form>
    </>
  );
}
