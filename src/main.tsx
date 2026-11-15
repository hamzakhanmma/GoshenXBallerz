import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/base.css";
import "./styles/shell.css";
import "./styles/hero.css";
import "./styles/home.css";
import "./styles/page-hero.css";
import "./styles/about.css";
import "./styles/coaching.css";
import "./styles/development.css";
import "./styles/contact.css";
import "./styles/misc.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
