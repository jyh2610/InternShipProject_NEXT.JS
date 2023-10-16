import axios from "axios";
import { baseApi } from "./api";
import { setCookie } from "./cookie";


const api = new baseApi();

export const login = async (values: any) => {
    try {
        const res = await api.post({ url: "/sign/signin", body: values })
            const accessToken =  res.accessToken;
            console.log(accessToken,"로그인버튼 엑세스토큰")                 
            // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            
        // 요청 헤더를 기록하기 위해 Axios 인터셉터를 사용합니다.
        // axios.interceptors.request.use((config) => {
            // console.log('요청 헤더:', config.headers);
            // return config;
        // }
        // );
       }
 catch (error) {
  console.error("로그인 실패:", error);
}}
export const sendrefreshtoken = async (values: any) => {
    try {
        const res = await api.post({ url: "/sign/signin", body: values })
       
            if (res.success) {
                console.log(res, "성공");
                const jwtToken = res.accessToken;
                console.log(jwtToken, "액세스 토큰");
                setCookie("is_login", `${jwtToken}`);
                // 쿠키에 저장
                console.log(document.cookie);              
              }
            // accessToken을 localStorage, cookie 등에 저장하지 않는다!
    
       }
 catch (error) {
  console.error("로그인 실패:", error);
}
}


