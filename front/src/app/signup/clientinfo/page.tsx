"use client";

import SiginupForm from "@/components/sigin-up/SiginupForm";

import "./style.css";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";

function Signup() {
  const checked = useAppSelector((state) => state.auth.checkedthird);
  //
  const route = useRouter();
  //if (checked) {
  return (
    <>
      <SiginupForm />
    </>
  );
  // } else {
  //   alert("필수 동의 항목을 체크해주세요");
  //   return route.push("/signup/provideinfo");
  // }
  //}
}

export default Signup;
