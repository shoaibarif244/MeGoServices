import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "providerSlice",
  initialState: {},
  reducers: {
    saveProvider: (state, action) => {
      return { ...state, ...action?.payload };
    },
  },
});

export const { saveProvider } = userSlice.actions;
export default userSlice.reducer;
