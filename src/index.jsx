import React from "react";
import ReactDOM from "react-dom/client";

import { Provider as MenuProvider } from "./Context/Menu";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MenuProvider>
      <App />
    </MenuProvider>
  </React.StrictMode>
);
