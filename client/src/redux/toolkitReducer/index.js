import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

const url = "http://localhost:3001/";
const initialState = {
  data: [],
  status: null,
};

export const fetchData = createAsyncThunk("toolkit/fetchData", async (path) => {
  return api(url + path, "GET");
});

const toolkitReducer = createSlice({
  name: "toolkit",
  initialState,
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.status = "loading";
    },
    [fetchData.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.data = action.payload;
    },
    [fetchData.rejected]: () => {
      console.log("rejected");
    },
  },
});

export default toolkitReducer.reducer;
