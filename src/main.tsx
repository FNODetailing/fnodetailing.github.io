import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HelmetProvider } from "@dr.pogodin/react-helmet";
import { BrowserRouter } from "react-router-dom";

const redirect = sessionStorage.getItem("redirect");
if (redirect) {
  sessionStorage.removeItem("redirect");
  window.history.replaceState(null, "", redirect);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);