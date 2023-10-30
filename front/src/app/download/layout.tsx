import React from "react";

import Nav from "@/components/nav/Nav";
import MainFooter from "@/components/MainFooter";

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
