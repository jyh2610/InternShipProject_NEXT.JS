import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./slicer/authSlice";
import scrollStopperReducer from "./slicer/scrollStopper";

const middleware: any[] = [];

if (process.env.NODE_ENV === "development") {
  const logger = require("redux-logger");
  middleware.push(logger.createLogger());
}

export const store = configureStore({
  reducer: {
    scrollStopper: scrollStopperReducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
