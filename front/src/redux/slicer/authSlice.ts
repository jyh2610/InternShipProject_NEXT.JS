// authSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  accessToken: string | null;
  // 다른 인증 관련 상태도 추가할 수 있음
}

const initialState: AuthState = {
  accessToken: null,
  // 다른 인증 관련 상태 초기값도 여기에 추가
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    },
    // 다른 인증 관련 액션을 추가할 수 있음
  },
});

export const { setAccessToken } = authSlice.actions;
export default authSlice.reducer;

