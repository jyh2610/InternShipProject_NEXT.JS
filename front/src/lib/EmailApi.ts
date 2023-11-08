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
  try {
    const res: emailres = await api.post({
      url: "/validate/sendemail",
      body: {
        email: emailformValue,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const findEmail = async (name: string, email: string) => {
  const res = await api.post({
    url: "/find/idfind",
    body: {
      name,
      email,
    },
  });
  return res;
};

export const resetPw = async (user_name: string, email: string, pw: string) => {
  const res = await api.post({
    url: "/find/resetpassword",
    body: {
      user_name,
      email,
      pw,
    },
  });
  return res;
};

export const sendEmailToFind = async (emailformValue: string) => {
  try {
    const res: emailres = await api.post({
      url: "/validate/sendemail/tofind",
      body: {
        email: emailformValue,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const idfind = async (name: string, email: string, code: string) => {
  const res = await api.post({
    url: "/find/id",
    body: {
      name,
      email,
      code,
    },
  });
  return res;
};
