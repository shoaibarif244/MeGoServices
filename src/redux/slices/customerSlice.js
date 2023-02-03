import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "customerSlice",
  initialState: {},
  reducers: {
    saveCustomer: (state, action) => {
      return { ...state, ...action?.payload };
    },
  },
});

export const { saveCustomer } = userSlice.actions;
export default userSlice.reducer;
