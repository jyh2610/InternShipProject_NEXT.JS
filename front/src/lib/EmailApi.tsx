// api.js
import { baseApi } from "@/API/api";

interface emailres {
  success: boolean;
}
const api = new baseApi();
export const verifyCode = async (email: string, code: string) => {
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
export const sendEmail = async (emailformValue: string) => {
  const res: emailres = await api.post({
    url: "validate/sendemail",
    body: {
      email: emailformValue,
    },
  });
  return res;
};
