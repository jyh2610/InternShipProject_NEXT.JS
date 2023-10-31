"use client";

import SiginupForm from "@/components/sigin-up/SiginupForm";

import "./style.css";
import { useAppSelector } from "@/redux/hooks";

import { useRouter } from "next/navigation";

function Signup() {
  const route = useRouter();
  const checked = useAppSelector((state) => state.auth.checkedthird);

  if (checked) {
    return (
      <>
        <SiginupForm />
      </>
    );
  } else {
    alert(" 필수 동의를 모두 체크해주세요");
    route.push("/signup/provideinfo");
  }
}

export default Signup;
