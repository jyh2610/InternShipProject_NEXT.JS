import axios from "axios";
import { baseApi } from "./api";
import { setCookie } from "./cookie";


const api = new baseApi();

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


