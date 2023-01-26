import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { dispatch } from "../store";

const headers = { Authorization: `Bearer ${localStorage.getItem("token")}` };
const initialState = {
  deviceDetail: [],
  deviceList: [],
  deviceTypeList: [],
  deviceTypeDetail: [],
};

const slice = createSlice({
  name: "deviceList",
  initialState,
  reducers: {
    getDeviceDetail(state, action) {
      state.deviceDetail = action.payload.data;
    },
    getDevices(state, action) {
      state.deviceList = action.payload.data;
    },
    getDeviceTypes(state, action) {
      state.deviceTypeList = action.payload.data;
    },
    getDeviceTypeDetail(state, action) {
      state.deviceTypeDetail = action.payload.data;
    },
  },
});

export default slice.reducer;

export function getDeviceDetailConfig(id) {
  return async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST_API_KEY}deviceConfigurations/details?id=${id}`,
        { headers }
      );
      dispatch(slice.actions.getDeviceDetail(response.data));
      // if (handleApiRes) handleApiRes();
    } catch (error) {
      // if (handleApiRes) handleApiRes();
      console.log(error);
    }
  };
}
export function getDeviceList(handleApiRes) {
  return async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST_API_KEY}deviceConfigurations`,
        { headers }
      );
      dispatch(slice.actions.getDevices(response.data));
      if (handleApiRes) handleApiRes();
    } catch (error) {
      if (handleApiRes) handleApiRes();
      console.log(error);
    }
  };
}
export function getDeviceTypeList(handleApiRes) {
  return async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST_API_KEY}deviceTypes`,
        { headers }
      );
      dispatch(slice.actions.getDeviceTypes(response.data));
      if (handleApiRes) handleApiRes();
    } catch (error) {
      if (handleApiRes) handleApiRes();
      console.log(error);
    }
  };
}
export function getDeviceTypeDetail(id, handleApiRes) {
  return async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST_API_KEY}deviceTypeSettings?deviceTypeId=${id}`,
        { headers }
      );
      dispatch(slice.actions.getDeviceTypeDetail(response.data));
      if (handleApiRes) handleApiRes();
    } catch (error) {
      if (handleApiRes) handleApiRes();
      console.log(error);
    }
  };
}

export function createDevice(data, handleApiRes) {
  return async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_HOST_API_KEY}deviceConfigurations`,
        data,
        { headers }
      );
      // console.log(response.data);
      if (handleApiRes) handleApiRes();
      dispatch(getDeviceList());
    } catch (error) {
      if (handleApiRes) handleApiRes(error);
      console.log(error);
    }
  };
}
export function deleteDevice(id, handleApiRes) {
  return async () => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_HOST_API_KEY}deviceConfigurations?id=${id}`,
        { headers }
      );
      // console.log("delete", response);
      handleApiRes();
      dispatch(getDeviceList());
    } catch (error) {
      handleApiRes(error);
      console.log(error);
    }
  };
}

export function updateDevice(id, data, handleApiRes) {
  console.log("id in update device slice");
  console.log("id in update device slice");
  console.log("id in update device slice");
  console.log(id);
  return async () => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_HOST_API_KEY}deviceConfigurations?id=${id}`,
        data,
        { headers }
      );
      console.log("update", response);
      handleApiRes();
      // handleResponse(response.data, id);
      // dispatch(slice.actions.getUserProfile(response.data));
      dispatch(getDeviceList());
    } catch (error) {
      handleApiRes(error);
      console.log(error);
    }
  };
}
