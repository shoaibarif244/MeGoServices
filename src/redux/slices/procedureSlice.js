import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { dispatch } from "../store";

const headers = { Authorization: `Bearer ${localStorage.getItem("token")}` };
const initialState = {
  procedureList: [],
  procedureDetailList: [],
};

const slice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    getProcedures(state, action) {
      state.procedureList = action.payload.data;
    },
    getProcedureDetail(state, action) {
      state.procedureDetailList = action.payload.data;
    },
  },
});

export default slice.reducer;

export function getProcedureList(handleApiRes) {
  return async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST_API_KEY}procedureConfigurations`,
        { headers }
      );
      dispatch(slice.actions.getProcedures(response.data));
      if (handleApiRes) handleApiRes();
    } catch (error) {
      if (handleApiRes) handleApiRes();
      console.log(error);
    }
  };
}
export function getProcedureDetailList(id) {
  return async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST_API_KEY}procedureConfigurations/details?id=${id}`,
        { headers }
      );
      dispatch(slice.actions.getProcedureDetail(response.data));
      // if (handleApiRes) handleApiRes();
    } catch (error) {
      // if (handleApiRes) handleApiRes();
      console.log(error);
    }
  };
}

export function createProcedure(data, handleApiRes) {
  return async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_HOST_API_KEY}procedureConfigurations`,
        data,
        { headers }
      );
      console.log(response);
      handleApiRes(response.data);
      // handleResponse(response.data, id);
      // dispatch(slice.actions.getProcedures(response.data));
      dispatch(getProcedureList());
    } catch (error) {
      console.log(error);
      handleApiRes(error);
    }
  };
}

export function deleteProcedure(id, handleApiRes) {
  return async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_HOST_API_KEY}procedureConfigurations?id=${id}`,
        { headers }
      );
      console.log("delete", response);
      handleApiRes(response.data);
      // handleResponse(response.data, id);
      // dispatch(slice.actions.getUserProfile(response.data));
      dispatch(getProcedureList());
    } catch (error) {
      console.log(error);
      handleApiRes(error);
    }
  };
}
export function updateProcedure(id, data, handleApiRes) {
  return async () => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_HOST_API_KEY}procedureConfigurations?id=${id}`,
        data,
        { headers }
      );
      console.log("update", response);
      handleApiRes(response.data);
      // handleResponse(response.data, id);
      // dispatch(slice.actions.getUserProfile(response.data));
      dispatch(getProcedureList());
    } catch (error) {
      handleApiRes(error);
      console.log(error);
    }
  };
}

export function updateAlarmsProcedure(
  data,
  handleUpdateProcedureSettingsResponse
) {
  return async () => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_HOST_API_KEY}procedureConfigurations/update-activation-settings`,
        { settings: data },
        { headers }
      );
      handleUpdateProcedureSettingsResponse(response.data);
      // dispatch(slice.actions.getProcedures(response.data));
    } catch (error) {
      console.log(error);
      handleUpdateProcedureSettingsResponse(error.response.data.message);
    }
  };
}
