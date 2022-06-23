import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "../reducer";

const data = (state) => state.data;
const selectorData = createSelector(data, (state) => state);

export default selectorData(initialState);
