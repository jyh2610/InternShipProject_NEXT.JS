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
      return (state.isNav = action.payload);
    },
  },
});

export const { toggleIsNav } = scrollBehaviorSlice.actions;

export default scrollBehaviorSlice.reducer;
