import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";

const initialState = {};

export const applicantsSlice = createSlice({
  name: "websites",
  initialState,
  reducers: {
    //editItem: (state, action: PayloadAction<>) => {},
    //deleteItem: (state, action: PayloadAction<>) => {},
  },
});

export const applicantActions = applicantsSlice.actions;

export const selectApplicants = (state: RootState) => state.applicants.selected;
export const selectApplicantKeys = (state: RootState) =>
  state.applicants.selectedKeys;
