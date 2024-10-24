import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { ThemeProvider } from "./providers/ThemeProvider";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <ThemeProvider defaultTheme="light" storeageKey="teams-theme">
    <App />
  </ThemeProvider>
);
