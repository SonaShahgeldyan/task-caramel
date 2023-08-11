import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getWebsitesData } from "../../../services/website.service";
import { IWebsitesDataState } from "../../../types/websites.type";

const initialState: IWebsitesDataState = {
  fetchedData: [],
  loading: false,
  error: "",
  currentPage: 1,
};

export const fetchData = createAsyncThunk(
  "websiteData/fetchData",
  async (currentPage: number) => {
    try {
      return (await getWebsitesData(currentPage)).data;
    } catch (error) {
      throw error;
    }
  }
);

const websiteDataSlice = createSlice({
  name: "websiteData",
  initialState,
  reducers: {
    updateCurrentPage: (state, action) => {
      console.log("action", action);
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.currentPage = action.payload.meta.current_page;
        state.fetchedData = action.payload.data;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { updateCurrentPage } = websiteDataSlice.actions;

export default websiteDataSlice.reducer;
