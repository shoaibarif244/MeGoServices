import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { dispatch } from "../store";

const headers = { Authorization: `Bearer ${localStorage.getItem("token")}` };
const initialState = {
  logsList: [],
};

const slice = createSlice({
  name: "log",
  initialState,
  reducers: {
    getLogs(state, action) {
      state.logsList = action.payload.data;
    },
  },
});

export default slice.reducer;

export function getLogsList(handleApiRes) {
  return async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST_API_KEY}logs`,
        { headers }
      );
      dispatch(slice.actions.getLogs(response.data));
      handleApiRes();
    } catch (error) {
      console.log(error);
      handleApiRes();
    }
  };
}
