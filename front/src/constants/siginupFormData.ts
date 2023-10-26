export interface UserType {
  name: [string, string];
  label: string;
  msg: string[];
  btn: boolean;
  btntext: string;
}

export const nation = [
  { label: "내국인", value: 0 },
  { label: "외국인", value: 1 },
];

export const sex = [
  { label: "남", value: 0 },
  { label: "여", value: 1 },
  { label: "기타", value: 2 },
];

export const formCondition = {
  name: 50,
  email: new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"),
  nickname: {
    length: 12,
    duplecate: true,
  },
  id: true,
  sex: [0, 1, 2],
};

export interface loginType {
  name: [string, string];
  massage: string[];
  placeholder: string;
  key: number;
}
export const inputdata = [
  { key: 0, name: "user_name", massage: "아이디를 입력해 주세요.", placeholder: "아이디 입력" },
  { key: 1, name: "password", massage: "비밀번호를 입력해주세요", placeholder: "비밀번호 입력" },
];
