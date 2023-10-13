import React from "react";

import SignupProvider from "@/components/sigin-up/SignupProvider";

function SignUpLayout({ children }: { children: React.ReactNode }) {
  return <SignupProvider>{children}</SignupProvider>;
}

export default SignUpLayout;
