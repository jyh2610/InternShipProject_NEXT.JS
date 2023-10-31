import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  username: string | null;
  checkedthird: boolean;
  // 다른 인증 관련 상태도 추가할 수 있음
}

const initialState: AuthState = {
  accessToken: "",
  refreshToken: "",
  username: "",
  checkedthird: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      return { ...state, accessToken: action.payload };
    },
    setRefreshToken: (state, action: PayloadAction<string | null>) => {
      state.refreshToken = action.payload;
    },
    setUserName: (state, action: PayloadAction<string | null>) => {
      state.username = action.payload;
    },
    setCheckedThird: (state, action: PayloadAction<boolean>) => {
      state.checkedthird = action.payload;
    },
  },
});

export const { setAccessToken, setRefreshToken, setUserName, setCheckedThird } = authSlice.actions;
export default authSlice.reducer;
