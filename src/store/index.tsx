import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import reportsReducer from "./slices/reports/ReportSlice";
import registerReducer from "./slices/register/RegisterSlice";
import authReducer from "./slices/login/LoginSlice";
import websiteReducer from "./slices/websites/WebsiteSlice";

export const store = configureStore({
  reducer: {
    register: registerReducer,
    auth: authReducer,
    reports: reportsReducer,
    websites: websiteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
