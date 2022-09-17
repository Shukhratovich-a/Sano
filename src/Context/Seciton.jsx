import React from "react";

const Context = React.createContext(null);

const Provider = ({ children }) => {
  const [state, setState] = React.useState("hero");

  return <Context.Provider value={{ state, setState }}>{children}</Context.Provider>;
};

export { Context, Provider };
