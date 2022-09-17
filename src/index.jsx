import React from "react";
import ReactDOM from "react-dom/client";

import { Provider as MenuProvider } from "./Context/Menu";
import { Provider as SectionProvider } from "./Context/Seciton";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SectionProvider>
      <MenuProvider>
        <App />
      </MenuProvider>
    </SectionProvider>
  </React.StrictMode>
);
