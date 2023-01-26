import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    isLoaderStart: false,
  },
  reducers: {
    startLoader: (state, action) => {
      state.isLoaderStart = action?.payload;
    },
  },
});

export const { startLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
