import { configureStore } from "@reduxjs/toolkit";
import handlers from "./handlers";

const store = configureStore({
  reducer: {
    handlers,
  },
});

export default store;
