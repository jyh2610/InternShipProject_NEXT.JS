import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import scrollStopper from "./slicer/scrollStopper";
import logger from "redux-logger";

export const store = configureStore({
  reducer: { scrollStopper },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
