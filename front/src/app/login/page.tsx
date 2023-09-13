import { KAKAO_AUTH_URL } from "../../constants/OAuth";
function Login() {
  return (
    <div>
      <button>
        <a href={KAKAO_AUTH_URL}>카카오 로그인 하기</a>
      </button>
    </div>
  );
}

export default Login;
