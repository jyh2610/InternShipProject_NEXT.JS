import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import authSlice from "./slicer/authSlice"; // authSlice 슬라이서를 가져옴
import scrollStopperReducer from "./slicer/scrollStopper";

export const store = configureStore({
  reducer: {
    scrollStopper: scrollStopperReducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
