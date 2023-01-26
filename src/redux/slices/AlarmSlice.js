import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { dispatch } from "../store";

const headers = { Authorization: `Bearer ${localStorage.getItem("token")}` };
const initialState = {
  alarmsList: [],
  alarmsProcedureDetailList: [],
};

const slice = createSlice({
  name: "log",
  initialState,
  reducers: {
    getAlarms(state, action) {
      state.alarmsList = action.payload.data;
    },

    getAlarmsProcedureDetail(state, action) {
      state.alarmsProcedureDetailList = action.payload;
    },
  },
});

export default slice.reducer;

export function getAlarmsList(handleAlarmResponse) {
  return async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST_API_KEY}alarms`,
        { headers }
      );
      dispatch(slice.actions.getAlarms(response.data));
      if (handleAlarmResponse) {
        handleAlarmResponse();
      }
    } catch (error) {
      if (handleAlarmResponse) {
        handleAlarmResponse();
      }
      console.log(error);
    }
  };
}

export function getAlarmsProcedureList(id, handleGetAlarmsProcedureResponse) {
  return async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST_API_KEY}alarms/details?roomId=${id}`,
        { headers }
      );
      dispatch(
        slice.actions.getAlarmsProcedureDetail(
          response.data.data.procedureConfigurations
        )
      );
      handleGetAlarmsProcedureResponse(response.data.data);
    } catch (error) {
      handleGetAlarmsProcedureResponse(error);
      console.log(error);
    }
  };
}

export function clearAlarmsProcedure(
  id,
  handleClearAlarmProcedureResponse,
  handleGetAlarmsProcedureResponse
) {
  return async () => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_HOST_API_KEY}alarms/clear?roomId=${id}`,
        {},
        { headers }
      );
      console.log("response");
      console.log("response");
      console.log("response");
      console.log(response.data);
      handleClearAlarmProcedureResponse(response.data);
      dispatch(getAlarmsList());
      dispatch(getAlarmsProcedureList(id, handleGetAlarmsProcedureResponse));
      // handleGetAlarmsProcedureResponse(response.data.data);
    } catch (error) {
      handleClearAlarmProcedureResponse(error.response.data.message);
      console.log(error);
    }
  };
}
