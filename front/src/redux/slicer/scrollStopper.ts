import { createSlice } from "@reduxjs/toolkit";

interface isNavState {
  isNav: boolean;
}

const initialState: isNavState = {
  isNav: true,
};

const scrollBehaviorSlice = createSlice({
  name: "scrollBehavior",
  initialState,
  reducers: {
    toggleIsNav: (state, action) => {
      // immer를 사용하여 상태를 변경하므로 타입을 명시적으로 지정해줍니다.
      return (state.isNav = action.payload);
    },
  },
});

export const { toggleIsNav } = scrollBehaviorSlice.actions;

export default scrollBehaviorSlice.reducer;
