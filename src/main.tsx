import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

const updateTheme = () => {
  const isDark = localStorage.getItem('darkMode') !== null 
    ? localStorage.getItem('darkMode') === 'true' 
    : darkMediaQuery.matches;

  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

updateTheme();

darkMediaQuery.addEventListener('change', updateTheme);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
