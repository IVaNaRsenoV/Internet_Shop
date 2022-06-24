import { configureStore } from "@reduxjs/toolkit";
import reducer from "../toolkitReducer";

const store = configureStore({
  reducer,
});

export default store;
