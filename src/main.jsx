import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { OptionContextProvider } from "./context/UserContextApi.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <OptionContextProvider>
      <App />
    </OptionContextProvider>
  </React.StrictMode>
);
