import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { dispatch } from "../store";

const headers = { Authorization: `Bearer ${localStorage.getItem("token")}` };
const initialState = {
  outputList: [],
};

const slice = createSlice({
  name: "outputs",
  initialState,
  reducers: {
    getOutputs(state, action) {
      state.outputList = action.payload.data;
    },
  },
});

export default slice.reducer;

export function getOutputList(handleApiRes) {
  return async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST_API_KEY}outputConfigurations`,
        { headers }
      );
      dispatch(slice.actions.getOutputs(response.data));
      if (handleApiRes) handleApiRes();
    } catch (error) {
      console.log(error);
      if (handleApiRes) handleApiRes();
    }
  };
}

export function createOutput(data, handleApiRes) {
  return async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_HOST_API_KEY}outputConfigurations`,
        data,
        { headers }
      );
      console.log(response.data);
      if (handleApiRes) handleApiRes(response.data);
      dispatch(getOutputList());
    } catch (error) {
      if (handleApiRes) handleApiRes(error.response.data.message);
      console.log(error);
    }
  };
}
export function deleteOutput(id, handleApiRes) {
  return async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_HOST_API_KEY}outputConfigurations?id=${id}`,
        { headers }
      );
      console.log("delete", response);
      handleApiRes(response.data);
      dispatch(getOutputList());
    } catch (error) {
      console.log(error);
      handleApiRes(error.response.data.message);
    }
  };
}
export function updateOutput(id, data, handleApiRes) {
  return async () => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_HOST_API_KEY}outputConfigurations?id=${id}`,
        data,
        { headers }
      );
      console.log("update", response);
      handleApiRes(response.data);
      // handleResponse(response.data, id);
      // dispatch(slice.actions.getUserProfile(response.data));
      dispatch(getOutputList());
    } catch (error) {
      console.log(error);
      handleApiRes(error.response.data.message);
    }
  };
}
