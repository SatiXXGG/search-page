import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import RFooter from "./props/bottom.tsx";
import { ThemeProvider } from "./ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
      <RFooter></RFooter>
    </ThemeProvider>
  </StrictMode>
);
