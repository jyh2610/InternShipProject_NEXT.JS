import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import scrollStopperReducer from "./slicer/scrollStopper";

import authSlice from "./slicer/authSlice"; // authSlice 슬라이서를 가져옴

export const store = configureStore({
  reducer: {
    scrollStopper: scrollStopperReducer,
    auth: authSlice, // authSlice 슬라이서를 추가
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
