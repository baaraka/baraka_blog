import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { WriteContextProvider } from "./context/WriteContext";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WriteContextProvider>
        <App />
      </WriteContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
