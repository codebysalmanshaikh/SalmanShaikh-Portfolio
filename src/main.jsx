// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import './styles/globals.css'
// import ReactDOM from "react-dom/client";
// import useLenis from "./hooks/useLenis";

// function Root() {
//   useLenis();

//   return <App />;
// }

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import './styles/globals.css'

import useLenis from "./hooks/useLenis";

function Root() {
  useLenis();

  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);