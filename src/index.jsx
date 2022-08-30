import React from "react";
import ReactDOM from "react-dom/client";

import { Provider as BurgerProvider } from "./Context/Burger";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BurgerProvider>
      <App />
    </BurgerProvider>
  </React.StrictMode>
);
