import React from "react";

const Context = React.createContext(null);

const Provider = ({ children }) => {
  const [state, setState] = React.useState("hero");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.scrollY < 100) {
          setState("hero");
        }
      });
    }
  });

  return <Context.Provider value={{ state, setState }}>{children}</Context.Provider>;
};

export { Context, Provider };
