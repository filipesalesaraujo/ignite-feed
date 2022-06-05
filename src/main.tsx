import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";

import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);
