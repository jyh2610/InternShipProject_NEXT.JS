import React from "react";

import Nav from "@/components/nav/Nav";
import SignupProvider from "@/components/sigin-up/SignupProvider";

function SignUpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen">
      <div>
        <Nav />
      </div>
      <SignupProvider>{children}</SignupProvider>
    </div>
  );
}

export default SignUpLayout;
