"use client";
import React from "react";
import SigninTitle from "@/components/signin/SigninTitle";
import SigninForm from "@/components/signin/SigninForm";
import PageImage from "@/components/signin/PageImage";
const SignIn = () => {
  return (
    <div className="pt-[11rem] flex">
      <div className=" mx-[11.5rem]">
        <SigninTitle />
        <SigninForm />
      </div>
      <div>
        <PageImage />
      </div>
    </div>
  );
};

export default SignIn;
