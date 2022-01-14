import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import * as serviceWorker from "./serviceWorker";
import reportWebVitals from "./reportWebVitals";

// ---------Monitoring with Atatus --------------
import * as atatus from "atatus-spa";
atatus.config("101bcacb5f3649f3bd98b83e8fb5d278").install();
// ----------------------------------------------

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
