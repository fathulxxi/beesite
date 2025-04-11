
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./i18n"; // Import i18n configuration
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: false,
  mirror: true,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
