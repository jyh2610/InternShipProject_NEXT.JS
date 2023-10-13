import { baseApi } from "./api";
import { AxiosError } from 'axios';
const api = new baseApi();
export const login = async (values: any) => {
try {
  const res = await api.post({ url: "/sign/signin", body: values });
  if (values.status === 200) {
    
    console.log("로그인 성공:", res);
  }
} catch (error) {
  console.error("로그인 실패:", error);
}
};
export const onSilentRefresh = async () => {
    try {
      const response = await api.post(TOKEN_REFRESH_PATH);
      if (response.status === 200) {
        // AccessToken을 변수로 저장
        onLogInSuccess(response);
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 401) {
        // refresh token 만료 - 로그인 페이지 이동
      }
    }
  
};