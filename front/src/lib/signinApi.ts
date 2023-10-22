import { baseApi } from "@/API/api";

const api = new baseApi();

export const logOutHandler = async (accesstoken: string) => {
  try {
    await api.post({
      url: "/sign/signout",
      options: {
        headers: {
          Authorization: `Bearer ${accesstoken}`, // yourAccessToken은 실제 엑세스 토큰 값으로 대체해야 합니다.
        },
      },
    });
  } catch (error) {
    console.error("에러 발생:", error);
  }
};

interface resType {
  accessToken: string;
  message: string;
  success: boolean;
}

export const refreshTokenHandler = async (refreshToken: string): Promise<resType> => {
  const res: resType = await api.post({
    url: "/validate/reissuancetoken",
    options: { headers: { Authorization: `Bearer ${refreshToken}` } },
  });

  return res;
};
