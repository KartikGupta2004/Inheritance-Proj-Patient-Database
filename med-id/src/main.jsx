import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Features from "./Components/Features.jsx";
import RecordForm from "./Components/RecordForm.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Features />
    {/* <RecordForm/> */}
  </React.StrictMode>
);
