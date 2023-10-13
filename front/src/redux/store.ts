import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import scrollStopper from "./slicer/scrollStopper";

export const store = configureStore({
  reducer: { scrollStopper },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
