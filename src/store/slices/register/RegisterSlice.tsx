import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
  },
  reducers: {
    setAuthTrue: (state) => {
      state.isAuth = true;
    },
    setAuthFalse: (state) => {
      state.isAuth = false;
    },
  },
});

export const { setAuthTrue, setAuthFalse } = authSlice.actions;

export default authSlice.reducer;
