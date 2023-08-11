import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IReportsDataState } from "../../../types/reports.type";
import { getReportsData } from "../../../services/reports.service";

const initialState: IReportsDataState = {
  fetchedData: [],
  loading: false,
  error: null,
};

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  try {
    return (await getReportsData()).data;
  } catch (error) {
    throw error;
  }
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.fetchedData = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
