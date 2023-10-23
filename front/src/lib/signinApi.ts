import { baseApi } from "@/API/api";

interface resType {
  message: string;
  accessToken: string;
  success: boolean;
}

const api = new baseApi();

export const loginHandler = async (user_name: string, password: string) => {
  await api.post({
    url: "/sign/signin",
    body: {
      user_name: user_name,
      password: password,
    },
  });
};

export const logOutHandler = async (accesstoken: string) => {
  await api.post({
    url: "/sign/signout",
    options: {
      headers: {
        Authorization: `Bearer ${accesstoken}`, // yourAccessToken은 실제 엑세스 토큰 값으로 대체해야 합니다.
      },
    },
  });
};

export const refreshTokenHandler = async (refreshToken: string): Promise<resType> => {
  const res: resType = await api.post({
    url: "/validate/reissuancetoken",
    options: { headers: { Authorization: `Bearer ${refreshToken}` } },
  });

  return res;
};
