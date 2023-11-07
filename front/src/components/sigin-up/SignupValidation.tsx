import { FormInstance } from "antd";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { setUserName } from "@/redux/slicer/authSlice";
import { baseApi } from "@/API/api";

import SiginupBtn from "./SiginupBtn";
import { formatDate } from "@/lib/FormatData";

const SignUpValidation = ({ form, resSuccess }: { form: FormInstance; resSuccess: string }) => {
  const dispatch = useAppDispatch();
  const api = new baseApi();
  const route = useRouter();

  const emailId = form.getFieldValue("emailId");
  const emailDomain = form.getFieldValue("emailDomain");
  const fullEmail = `${emailId}@${emailDomain}`;

  const validateForm = async () => {
    if (resSuccess) {
      try {
        const { birthday, name, user_name, nickname, password, nation, sex } = await form.validateFields();
        console.log(formatDate(birthday));
        const sendingData = { birthday: formatDate(birthday), name, user_name, nickname, password, nation, sex, email: fullEmail };
        const res = await api.post({
          url: "/sign/signup",
          body: sendingData,
        });
        if (res.success) {
          dispatch(setUserName(name));
          route.push("/signup/sign-complete");
        }
      } catch (errorInfo) {
        console.log("Validation failed:", errorInfo);
      }
    } else {
      alert("인증 및 중복확인을 완료해야 합니다.");
    }
  };

  return (
    <>
      <SiginupBtn validateForm={validateForm} />
    </>
  );
};

export default SignUpValidation;
