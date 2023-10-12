"use client";
import React from "react";
import SigninTitle from "@/components/signin/SigninTitle";
import SigninForm from "@/components/signin/SigninForm";
import PageImage from "@/components/signin/PageImage";
import Logo from "@/components/Logo";
const SignIn = () => {
  return (
    <div className=" flex">
      <div className=" mx-[11.5rem] my-auto">
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
