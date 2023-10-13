import React from "react";
import type { ReactNode } from "react";
const BaseLayout = (props: { children: ReactNode }) => {
  return <div> {props.children}</div>;
};

export default BaseLayout;
