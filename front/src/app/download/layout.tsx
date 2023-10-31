import React from "react";

import MainFooter from "@/components/MainFooter";
import Nav from "@/components/nav/Nav";

function SignUpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Nav />
      {children}
      <MainFooter />
    </div>
  );
}

export default SignUpLayout;
