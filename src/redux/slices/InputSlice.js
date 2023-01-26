import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { dispatch } from "../store";

const headers = { Authorization: `Bearer ${localStorage.getItem("token")}` };
const initialState = {
  inputList: [],
};

const slice = createSlice({
  name: "inputs",
  initialState,
  reducers: {
    getInputs(state, action) {
      state.inputList = action.payload.data;
    },
  },
});

export default slice.reducer;

export function getInputList(handleApiRes) {
  return async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST_API_KEY}inputConfigurations`,
        { headers }
      );
      dispatch(slice.actions.getInputs(response.data));
      if (handleApiRes) handleApiRes();
    } catch (error) {
      if (handleApiRes) handleApiRes();
      console.log(error);
    }
  };
}
export function createInput(data, handleApiRes) {
  return async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_HOST_API_KEY}inputConfigurations`,
        data,
        { headers }
      );
      console.log(response.data);
      if (handleApiRes) handleApiRes(response.data);
      dispatch(getInputList());
    } catch (error) {
      if (handleApiRes) handleApiRes(error.response.data.message);
      console.log(error);
    }
  };
}
export function deleteInput(id, handleApiRes) {
  return async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_HOST_API_KEY}inputConfigurations?id=${id}`,
        { headers }
      );
      console.log("delete", response);
      handleApiRes(response.data);
      // handleResponse(response.data, id);
      // dispatch(slice.actions.getUserProfile(response.data));
      dispatch(getInputList());
    } catch (error) {
      console.log(error);
      handleApiRes(error.response.data.message);
    }
  };
}

export function updateInput(id, data, handleApiRes) {
  return async () => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_HOST_API_KEY}inputConfigurations?id=${id}`,
        data,
        { headers }
      );
      console.log("update", response);
      handleApiRes(response.data);
      // handleResponse(response.data, id);
      // dispatch(slice.actions.getUserProfile(response.data));
      dispatch(getInputList());
    } catch (error) {
      handleApiRes(error);
      console.log(error.response.data.message);
    }
  };
}
