import { createSlice } from "@reduxjs/toolkit";

interface isNavState {
  navBottom: number;
  sectionTop: number;
  isContacting: boolean;
  sectionBottom: number;
}

const initialState: isNavState = {
  navBottom: 0,
  sectionTop: 0,
  sectionBottom: 0,
  isContacting: false,
};

const scrollBehaviorSlice = createSlice({
  name: "scrollBehavior",
  initialState,
  reducers: {
    /* { nav: 123 } 또는 { section: 234 }와 같이 payload를 전달 */
    sectionContact: (state, { payload }) => {
      if (payload.nav !== undefined) {
        state.navBottom = payload.nav;
      }
      if (payload.section !== undefined) {
        state.sectionTop = payload.section;
        state.sectionBottom = state.sectionTop + 844; // SECTION_HEIGHT는 섹션의 높이
      }

      // navBottom과 sectionTop이 같으면 isContacting을 true로, 아니면 false로 설정
      state.isContacting = state.navBottom === state.sectionTop;
    },
  },
});

export const { sectionContact } = scrollBehaviorSlice.actions;

export default scrollBehaviorSlice.reducer;
