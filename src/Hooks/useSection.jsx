import React from "react";

import { Context } from "../Context/Seciton";

const useSection = () => {
  const ctx = React.useContext(Context);

  return [ctx.state, ctx.setState];
};

export default useSection;
