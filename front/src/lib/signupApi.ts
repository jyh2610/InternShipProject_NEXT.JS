import { baseApi } from "@/API/api";

const api = new baseApi();

export const duplicateTest = async (type: string, value: string | number) => {
  try {
    const res =
      type === "hasnickname"
        ? await api.post({ url: `/validate/${type}`, body: { nickname: value } })
        : await api.post({ url: `/validate/${type}`, body: { user_name: value } });
    console.log(res);
    return res.success;
  } catch (error) {
    console.log(error);
  }
};
