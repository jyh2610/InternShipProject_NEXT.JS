import React from "react";
import { ReactNode } from "react";
import Nav from "../nav/Nav";
import MainFooter from "../MainFooter";
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
