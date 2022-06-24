import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

const url = "http://localhost:3001/data";
const initialState = {
  data: [],
};

export const fetchData = createAsyncThunk("toolkit/fetchData", async () =>
  api(url, "GET")
);

const toolkitReducer = createSlice({
  name: "toolkit",
  initialState,
  extraReducers: {
    [fetchData.pending]: () => console.log("pending"),
    [fetchData.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [fetchData.rejected]: () => console.log("rejected"),
  },
});

export default toolkitReducer.reducer;
