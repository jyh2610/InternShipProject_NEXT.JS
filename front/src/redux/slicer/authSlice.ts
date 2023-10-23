import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  username: string | null;
  // 다른 인증 관련 상태도 추가할 수 있음
}

const initialState: AuthState = {
  accessToken: "",
  refreshToken: "",
  username: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string | undefined>) => {
      return { ...state, accessToken: action.payload };
    },
    setRefreshToken: (state, action: PayloadAction<string | undefined>) => {
      state.refreshToken = action.payload;
    },
    setUserName: (state, action: PayloadAction<string | null>) => {
      state.username = action.payload;
    },
  },
});

export const { setAccessToken, setRefreshToken, setUserName } = authSlice.actions;
export default authSlice.reducer;
