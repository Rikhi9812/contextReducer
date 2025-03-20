import React, { useContext } from "react";
import { Themecontext } from "../context/Themecontext";

const Panel = ({ title, children }) => {
  const theme = useContext(Themecontext);
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

export default Panel;
