import React from "react";
import type { ReactNode } from "react";

import MainFooter from "../MainFooter";
import Nav from "../nav/Nav";

const WithNavFooter = (props: { children: ReactNode }) => {
  return (
    <div>
      <Nav />
      {props.children}
      <MainFooter />
    </div>
  );
};

export default WithNavFooter;
