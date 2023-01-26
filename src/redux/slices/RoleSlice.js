import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { dispatch } from "../store";

const headers = { Authorization: `Bearer ${localStorage.getItem("token")}` };
const initialState = {
  rolesList: [],
};

const slice = createSlice({
  name: "role",
  initialState,
  reducers: {
    getRoles(state, action) {
      state.rolesList = action.payload.data;
    },
  },
});

export default slice.reducer;

export function getRolesList(handleApiRes) {
  return async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST_API_KEY}roles`,
        { headers }
      );
      dispatch(slice.actions.getRoles(response.data));
      if (handleApiRes) {
        handleApiRes();
      }
    } catch (error) {
      console.log(error);
      if (handleApiRes) {
        handleApiRes(error);
      }
    }
  };
}

export function createRole(data, handleApiRes) {
  return async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_HOST_API_KEY}roles`,
        data,
        {
          headers,
        }
      );
      handleApiRes(response.data);
      dispatch(getRolesList());
    } catch (error) {
      handleApiRes(error.response.data.message);
      console.log(error);
    }
  };
}

export function updateRole(data, handleApiRes) {
  return async () => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_HOST_API_KEY}roles`,
        data,
        {
          headers,
        }
      );
      handleApiRes(response.data);
      dispatch(getRolesList());
    } catch (error) {
      handleApiRes(error.response.data.message);
      console.log(error);
    }
  };
}

export function deleteRole(id, handleApiRes) {
  return async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_HOST_API_KEY}roles?roleId=${id}`,
        { headers }
      );
      handleApiRes(response.data);
      dispatch(getRolesList());
    } catch (error) {
      handleApiRes(error.response.data.message);
      console.log(error);
    }
  };
}
