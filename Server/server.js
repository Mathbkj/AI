import express from "express";
import axios from "axios";
import cors from "cors";
const PORT = process.env.PORT || 3000;
const AI_URL = process.env.AI_URL || "http://localhost:11434/api/generate";
const app = express();
app.use(express.json());
app.use(cors());

let counter = 0;
console.log(counter);

app.post("/ai", async (req, res) => {
  const { input } = req.body;
  console.log(input);
  try {
    const poster = await axios.post(
      AI_URL,
      {
        model: "llama3",
        prompt: `${input}`,
        stream: true,
      },
      {
        headers: { "Content-Type": "application/json" },
        responseType: "stream",
      }
    );
    const data = await poster.data;
    data.on("data", (chunk) => {
      const decoder = new TextDecoder();
      const decodedChunk = decoder.decode(chunk);
      const parsed = JSON.parse(decodedChunk);
      if (!parsed.done) {
        const answer = parsed.response;
        res.write(answer, (err) => {
          counter++;
          if (err) console.log(err.message);
        });
        console.log(`${answer}:${counter}`);
      }
    });
    data.on("end", () => {
      res.end();
    });
  } catch (err) {
    console.error(`NodeError:${err.message}`);
  } finally {
    console.log(`POST to ${req.url} DONE. LOG NUM#${counter}`);
  }
});
app.listen(PORT, () => console.log("Server listening on port 3000"));
