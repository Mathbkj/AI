import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router";

const domNode = document.getElementById("root");

if (domNode === null) {
  throw new Error("Cannot get non-existent | null DOM Element as base");
}

createRoot(domNode).render(
  
  
  <StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </StrictMode>
);
