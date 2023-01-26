import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { dispatch } from "../store";

const headers = { Authorization: `Bearer ${localStorage.getItem("token")}` };
const initialState = {
  templateList: [],
};

const slice = createSlice({
  name: "templates",
  initialState,
  reducers: {
    getTemplates(state, action) {
      state.templateList = action.payload.data;
    },
  },
});

export default slice.reducer;

export function getTemplateList(handleApiRes) {
  return async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST_API_KEY}templateConfigurations`,
        { headers }
      );
      dispatch(slice.actions.getTemplates(response.data));
      if (handleApiRes) handleApiRes();
    } catch (error) {
      if (handleApiRes) handleApiRes();
      console.log(error);
    }
  };
}
export function createTemplate(data, handleApiRes) {
  return async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_HOST_API_KEY}templateConfigurations`,
        data,
        { headers }
      );
      console.log(response.data);
      if (handleApiRes) handleApiRes(response.data);
      dispatch(getTemplateList());
    } catch (error) {
      if (handleApiRes) handleApiRes(error.response.data.message);
      console.log(error);
    }
  };
}
