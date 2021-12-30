import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import Indexstyle from './styles/indexstyle'
import Modalstyle from "./styles/modalstyle";

ReactDOM.render(
  <React.StrictMode>
    <App />    <Indexstyle/>      <Modalstyle />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
