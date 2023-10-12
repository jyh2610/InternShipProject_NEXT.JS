"use client";
import React from "react";
import SigninTitle from "@/components/signin/SigninTitle";
import SigninForm from "@/components/signin/SigninForm";
import PageImage from "@/components/signin/PageImage";

const SignIn = () => {
  return (
    <div className="flex">
      <div className="w-1/3 flex flex-col justify-center items-center mx-auto">
        <SigninTitle />
        <SigninForm />
      </div>
      <div className="w-2/3">
        <PageImage />
      </div>
    </div>
  );
};

export default SignIn;
