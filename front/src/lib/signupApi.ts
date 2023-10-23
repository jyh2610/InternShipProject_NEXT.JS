import { baseApi } from "@/API/api";

export const duplicateTest = async (type: string, value: string | number) => {
  const api = new baseApi();
  const nicknameres = await api.post({ url: `/validate/${type}`, body: { nickname: value } });
  const idres = await api.post({ url: `/validate/${type}`, body: { user_name: value } });
  const res: {
    success: boolean;
    message: string;
  } = type === "hasnickname" ? nicknameres : idres;

  console.log(nicknameres, "DDDDDDDDDDDDDD");
  console.log(idres, "DDDDDDDDDDDDDD");
  return res;
};
