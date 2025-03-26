import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import App component
import "./style.css"; // Keep your CSS styles

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
