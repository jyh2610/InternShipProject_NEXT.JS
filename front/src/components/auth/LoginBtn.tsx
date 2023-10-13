import { loginObj } from "@/constants/constants";
import { signIn, signOut, useSession } from "next-auth/react";

function LoginBtn() {
  const { data: session } = useSession();
  const jwt = require("jsonwebtoken");

  return (
    <>
      {session ? ( // 세션이 있는 경우 로그아웃 버튼을 렌더링
        <button onClick={() => signOut()}>로그아웃</button>
      ) : (
        // 세션이 없는 경우 소셜 로그인 버튼들을 렌더링
        loginObj.map((data) => <img key={data.name} onClick={() => signIn(data.social)} src={data.icon} alt={data.name} />)
      )}
    </>
  );
}

export default LoginBtn;
