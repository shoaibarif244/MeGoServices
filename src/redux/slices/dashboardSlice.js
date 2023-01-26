import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { dispatch } from "../store";

const headers = { Authorization: `Bearer ${localStorage.getItem("token")}` };
const initialState = {
  dashboardStatsData: [],
};

const slice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    getDashboardStats(state, action) {
      state.dashboardStatsData = action.payload.data;
    },
  },
});

export default slice.reducer;

export function getDashboardStatsData() {
  return async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST_API_KEY}dashboard/stats`,
        { headers }
      );
      dispatch(slice.actions.getDashboardStats(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}
