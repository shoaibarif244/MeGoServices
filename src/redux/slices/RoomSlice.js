import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { dispatch } from "../store";

const headers = { Authorization: `Bearer ${localStorage.getItem("token")}` };
const initialState = {
  roomsList: [],
};

const slice = createSlice({
  name: "room",
  initialState,
  reducers: {
    getRooms(state, action) {
      state.roomsList = action.payload.data;
    },
  },
});

export default slice.reducer;

export function getRoomsList(handleGetRoomListResponse) {
  return async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST_API_KEY}roomConfigurations`,
        { headers }
      );
      dispatch(slice.actions.getRooms(response.data));
      if (handleGetRoomListResponse) {
        handleGetRoomListResponse();
      }
    } catch (error) {
      if (handleGetRoomListResponse) {
        handleGetRoomListResponse(error.response.data.message);
      }
      console.log(error);
    }
  };
}

export function createRoom(data, handleCreateRoomResponse) {
  return async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_HOST_API_KEY}roomConfigurations`,
        data,
        { headers }
      );
      handleCreateRoomResponse(response.data);
      dispatch(getRoomsList());
    } catch (error) {
      handleCreateRoomResponse(error.response.data.message);
      console.log(error);
    }
  };
}

export function updateRoom(data, handleUpdateRoomResponse) {
  return async () => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_HOST_API_KEY}roomConfigurations?id=${data.id}`,
        data,
        { headers }
      );
      handleUpdateRoomResponse(response.data);
      dispatch(getRoomsList());
    } catch (error) {
      if (handleUpdateRoomResponse) {
        handleUpdateRoomResponse(error.response.data.message);
      }
      console.log(error);
    }
  };
}

export function deleteRoom(id, handleDeleteRoomResponse) {
  return async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_HOST_API_KEY}roomConfigurations?id=${id}`,
        { headers }
      );
      console.log("response");
      console.log("response");
      console.log("response");
      console.log(response.data);
      handleDeleteRoomResponse(response.data);
      dispatch(getRoomsList());
    } catch (error) {
      if (handleDeleteRoomResponse) {
        handleDeleteRoomResponse(error.response.data.message);
      }
      console.log(error);
    }
  };
}
