import React from "react";

import Nav from "@/components/nav/Nav";
import SignupProvider from "@/components/sigin-up/SignupProvider";

function SignUpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Nav />
      <SignupProvider>{children}</SignupProvider>
    </div>
  );
}

export default SignUpLayout;
