import React from "react";

import { Context } from "../Context/Menu";

const useMenu = () => {
  const ctx = React.useContext(Context);

  return [ctx.state, ctx.setState];
};

export default useMenu;
