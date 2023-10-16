export const formData: UserType[] = [
  { name: ["user", "name"], label: "이름", msg: [""], btn: false, btntext: "" },
  { name: ["user", "nickname"], label: "닉네임", msg: [""], btn: true, btntext: "중복확인" },
  { name: ["user", "user_name"], label: "아이디", msg: ["이미 사용하고 있는 아이디입니다."], btn: true, btntext: "중복확인" },
  { name: ["user", "email"], label: "이메일", msg: ["이메일 양식이 틀립니다. 다시 한번 확인 하세요."], btn: true, btntext: "인증하기" },
  {
    name: ["user", "password"],
    label: "비밀번호",
    msg: ["사용불가! 영문대/소문자, 숫자, 특수문자 중 2가지 이상 조합하세요. (영문소문자/숫자, 4~16자)"],
    btn: false,
    btntext: "",
  },
  {
    name: ["user", "password"],
    label: "비밀번호 확인",
    msg: ["사용불가! 영문대/소문자, 숫자, 특수문자 중 2가지 이상 조합하세요. (영문소문자/숫자, 4~16자)"],
    btn: false,
    btntext: "",
  },
  { name: ["user", "birthday"], label: "생일", msg: [""], btn: false, btntext: "" },
  { name: ["user", "nation"], label: "내·외국인", msg: [""], btn: false, btntext: "" },
  { name: ["user", "sex"], label: "성별", msg: [""], btn: false, btntext: "" },
];

export interface UserType {
  name: [string, string];
  label: string;
  msg: string[];
  btn: boolean;
  btntext: string;
}
