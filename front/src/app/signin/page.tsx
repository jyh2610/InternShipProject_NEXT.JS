import React from "react";

import PageImage from "@/components/signin/PageImage";
import SigninForm from "@/components/signin/SigninForm";
import SigninTitle from "@/components/signin/SigninTitle";

import "../../components/signin/style.css";

const SignIn = () => {
  return (
    <>
      <div className="relativ overflow-hidden">
        <div className="login absolute left-[50%] top-[50%]">
          <SigninTitle />
          <SigninForm />
        </div>
        <div className="w-full h-screen">
          <PageImage />
        </div>
      </div>
    </>
  );
};

export default SignIn;
