//패키지 임포트 
import { Cookies } from "react-cookie";

const cookies = new Cookies();
//쿠키에 값을 저장할때 
export const setCookie = (name:any, value:any) => {
  return cookies.set(name, value);
};
//쿠키에 있는 값을 꺼낼때 
export const getCookie = (name:any) => {
  return cookies.get(name);
};
//쿠키를 지울때 
export const removeCookie = (name:any) =>{
    return cookies.remove(name);
}