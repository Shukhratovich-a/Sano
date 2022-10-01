import React from "react";

import useSection from "./useSection";

const useScroll = (section, ref) => {
  const [, setSection] = useSection();

  return React.useEffect(() => {
    if (typeof window !== "undefined" && ref !== null) {
      window.addEventListener("scroll", () => {
        if (
          window.scrollY >= ref.current.offsetTop - 28 &&
          window.scrollY < ref.current.offsetTop + ref.current.offsetHeight - 28
        ) {
          setSection(section);
        }
      });
    }
  });
};

export default useScroll;
