// api.js
import { baseApi } from "@/API/api";

interface emailres {
  success: boolean;
}

const verifyCode = async (email: string, code: string) => {
  const api = new baseApi();
  try {
    const response = await api.post({
      url: "/validate/verifycode",
      body: {
        email: email,
        code: code,
      },
    });

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
const sendEmail = async (emailformValue: string) => {
  const api = new baseApi();
  const res: emailres = await api.post({
    url: "validate/sendemail",
    body: {
      email: emailformValue,
    },
  });
  return res;
};

export default { sendEmail, verifyCode };
