import { baseApi } from "@/API/api";

const api = new baseApi();

export const duplicateTest = async (type: string, value: string | number) => {
  const res =
    type === "hasnickname"
      ? await api.post({ url: `/validate/${type}`, body: { nickname: value } })
      : await api.post({ url: `/validate/${type}`, body: { user_name: value } });
  return res;
};

export const getCompleteData = async (nickname: string) => {
  const res = await api.get({ url: "/validate/reissuancetoken", body: { nickname } });
  return res;
};
