import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { dispatch } from "../store";

const headers = { Authorization: `Bearer ${localStorage.getItem("token")}` };
const initialState = {
  profileUsers: [],
  profilesList: [],
};

const slice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    getUserProfile(state, action) {
      state.profileUsers = action.payload.data;
    },

    // Profile lsiting function
    getProfiles(state, action) {
      state.profilesList = action.payload.data;
    },
  },
});

export default slice.reducer;

export function getUsersProfileList() {
  return async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST_API_KEY}profileConfigurations/user-profiles`,
        { headers }
      );

      dispatch(slice.actions.getUserProfile(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function setUserProfileDefault(id, handleResponse) {
  return async () => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_HOST_API_KEY}profileConfigurations/set-default-profile?id=${id}`,
        {},
        { headers }
      );
      handleResponse(response.data, id);
    } catch (error) {
      console.log(error.response.data.message);
      handleResponse(error.response.data.message);
    }
  };
}

export function getProfilesList(handleProfileResponse) {
  return async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST_API_KEY}profileConfigurations`,
        { headers }
      );
      dispatch(slice.actions.getProfiles(response.data));
      if (handleProfileResponse) {
        handleProfileResponse();
      }
    } catch (error) {
      if (handleProfileResponse) {
        handleProfileResponse();
      }
      console.log(error);
    }
  };
}

export function createProfile(data, handleCreateProfileResponse) {
  return async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_HOST_API_KEY}profileConfigurations`,
        data,
        { headers }
      );
      handleCreateProfileResponse(response.data);
      dispatch(getProfilesList());
    } catch (error) {
      if (handleCreateProfileResponse) {
        handleCreateProfileResponse(error.response.data.message);
      }
      console.log(error);
    }
  };
}

export function updateProfile(data, handleUpdateProfileResponse) {
  return async () => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_HOST_API_KEY}profileConfigurations?id=${data.id}`,
        data,
        { headers }
      );
      handleUpdateProfileResponse(response.data);
      dispatch(getProfilesList());
    } catch (error) {
      if (handleUpdateProfileResponse) {
        handleUpdateProfileResponse(error.response.data.message);
      }
      console.log(error);
    }
  };
}

export function deleteProfile(id, handleDeleteProfileResponse) {
  return async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_HOST_API_KEY}profileConfigurations?id=${id}`,
        { headers }
      );
      handleDeleteProfileResponse(response.data);
      dispatch(getProfilesList());
    } catch (error) {
      if (handleDeleteProfileResponse) {
        handleDeleteProfileResponse(error.response.data.message);
      }
      console.log(error);
    }
  };
}
