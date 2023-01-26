import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { dispatch } from "../store";

const headers = { Authorization: `Bearer ${localStorage.getItem("token")}` };
const initialState = {
  categoryList: [],
};

const slice = createSlice({
  name: "categoryList",
  initialState,
  reducers: {
    getCategories(state, action) {
      state.categoryList = action.payload.data;
    },
  },
});

export default slice.reducer;

export function getCategoryList(handleApiRes) {
  return async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST_API_KEY}categories`,
        { headers }
      );
      dispatch(slice.actions.getCategories(response.data));
      if (handleApiRes) handleApiRes();
    } catch (error) {
      if (handleApiRes) handleApiRes();
      console.log(error);
    }
  };
}
