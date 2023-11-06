// api.js
import { baseApi } from "@/API/api";

interface emailres {
  success: boolean;
}

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

export default { sendEmail };
