// // import React from "react";
// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { dispatch } from "../store";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const showToastMessage = () => {
//   toast.success("User Created Successfully !", {
//     position: toast.POSITION.TOP_RIGHT,
//   });
// };
// const showToastErrMessage = () => {
//   toast.error("Invalid Role id !", {
//     position: toast.POSITION.TOP_RIGHT,
//   });
// };
// const headers = { Authorization: `Bearer ${localStorage.getItem("token")}` };
// const initialState = {
//   usersList: [],
// };

// const slice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     getUsers(state, action) {
//       state.usersList = action.payload.data;
//     },
//     postUsers(state, action) {
//       state.usersList = action.payload("");
//     },
//   },
// });

// export default slice.reducer;

// export function getUsersList(handleApiRes) {
//   return async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_HOST_API_KEY}users`,
//         { headers }
//       );
//       dispatch(slice.actions.getUsers(response.data));
//       if (handleApiRes) {
//         handleApiRes();
//       }
//     } catch (error) {
//       console.log(error);
//       if (handleApiRes) {
//         handleApiRes(error);
//       }
//     }
//   };
// }

// export function createUser(data, handleApiRes) {
//   return async () => {
//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_HOST_API_KEY}users`,
//         data,
//         {
//           headers,
//         }
//       );
//       dispatch(getUsersList());
//       if (handleApiRes) {
//         handleApiRes(response.data);
//       }
//     } catch (error) {
//       console.log(error);
//       if (handleApiRes) {
//         handleApiRes(error.response.data.message);
//       }
//     }
//   };
// }

// export function updateUser(id, data, handleApiRes) {
//   return async () => {
//     try {
//       const response = await axios.patch(
//         `${process.env.REACT_APP_HOST_API_KEY}users?id=${id}`,
//         data,
//         {
//           headers,
//         }
//       );
//       dispatch(getUsersList());
//       if (handleApiRes) {
//         handleApiRes(response.data);
//       }
//     } catch (error) {
//       console.log(error);
//       if (handleApiRes) {
//         handleApiRes(error.response.data.message);
//       }
//     }
//   };
// }

// export function postUsersList(data) {
//   console.log("User Slice data in slice ");
//   console.log(data);
//   return async () => {
//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_HOST_API_KEY}users`,
//         data,
//         {
//           headers,
//         }
//       );
//       response.status == 200 ? showToastMessage() : null;

//       dispatch(getUsersList());
//     } catch (error) {
//       showToastErrMessage();
//     }
//   };
// }
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "UserSlice",
  initialState: {},
  reducers: {
    saveUser: (state, action) => {
      return { ...state, ...action?.payload };
    },
  },
});

export const { saveUser } = userSlice.actions;
export default userSlice.reducer;
