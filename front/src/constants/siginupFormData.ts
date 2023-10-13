export const formData: UserType[] = [
  { name: ["user", "name"], label: "이름", msg: [""] },
  { name: ["user", "nickname"], label: "닉네임", msg: [""] },
  { name: ["user", "id"], label: "아이디", msg: ["이미 사용하고 있는 아이디입니다."] },
  { name: ["user", "email"], label: "이메일", msg: ["이메일 양식이 틀립니다. 다시 한번 확인 하세요."] },
  { name: ["user", "password"], label: "비밀번호", msg: ["사용불가! 영문대/소문자, 숫자, 특수문자 중 2가지 이상 조합하세요. (영문소문자/숫자, 4~16자)"] },
  { name: ["user", "checkPassword"], label: "비밀번호확인", msg: ["비밀번호가 다릅니다. 다시 한번 확인 하세요."] },
  { name: ["user", "birth"], label: "생일", msg: [""] },
  { name: ["user", "nation"], label: "나라", msg: [""] },
  { name: ["user", "sex"], label: "성별", msg: [""] },
];

export interface UserType {
  name: [string, string];
  label: string;
  msg: string[];
}
