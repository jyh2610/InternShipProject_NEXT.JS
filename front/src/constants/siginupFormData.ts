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
  { label: "여", value: 0 },
  { label: "남", value: 1 },
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
