const REST_API_KEY="	94d94acd040fa0a438f5e14529599c82";
const REST_API_KEY_SECRET="TYFjnMpPqUnW9ltmEqq1lusiRTmpw7HD";
const REDIRECT_URI =  "http://localhost:3000/auth/kakao/callback";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
