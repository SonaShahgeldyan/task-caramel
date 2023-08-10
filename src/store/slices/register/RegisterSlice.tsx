import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    isRegister: false,
  },
  reducers: {
    setRegisterTrue: (state) => {
      state.isRegister = true;
    },
    setRegisterFalse: (state) => {
      state.isRegister = false;
    },
  },
});

export const { setRegisterTrue, setRegisterFalse } = registerSlice.actions;

export default registerSlice.reducer;
