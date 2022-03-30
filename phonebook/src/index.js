import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import recordService from './services/record'

recordService.getAll().then(response => {
  const people = response;
  ReactDOM.render(
    <React.StrictMode>
      <App people={people} />
    </React.StrictMode>,
    document.getElementById("root")
  );
});
