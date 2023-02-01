import { combineReducers } from "redux";
// import profileSliceReducer from "./slices/profileSlice";
// import dashboardSliceReducer from "./slices/dashboardSlice";
// import logSliceReducer from "./slices/logSlice";
import userSliceReducer from "./slices/userSlice";
import netInfoSliceReducer from "./slices/netInfoSlice";
import loaderSliceReducer from "./slices/loaderSlice";

// import roleSliceReducer from "./slices/RoleSlice";
// import alarmSliceReducer from "./slices/AlarmSlice";
// import inputSliceReducer from "./slices/InputSlice";
// import outputSliceReducer from "./slices/OutputSlice";
// import procedureSliceReducer from "./slices/procedureSlice";
// import roomSliceReducer from "./slices/RoomSlice";
// import categorySliceReducer from "./slices/CategorySlice";
// import deviceSliceReducer from "./slices/DeviceSlice";
// import permissionSliceReducer from "./slices/permissionSlice";
// import templateSliceReducer from "./slices/TemplateSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

// const rootPersistConfig = {
//   key: "root",
//   storage,
//   keyPrefix: "redux-",
//   whitelist: [],
// };
const rootPersistConfig = {
  key: "primary",
  storage: AsyncStorage,
  keyPrefix: "redux-",
  whitelist: [],
};
const rootReducer = combineReducers({
  userReducer: userSliceReducer,
  netInfoReducer: netInfoSliceReducer,
  loaderSlice: loaderSliceReducer,
  // roleReducer: roleSliceReducer,
  // alarmReducer: alarmSliceReducer,
  // procedureReducer: procedureSliceReducer,
  // inputReducer: inputSliceReducer,
  // outputReducer: outputSliceReducer,
  // roomReducer: roomSliceReducer,
  // categoryReducer: categorySliceReducer,
  // deviceReducer: deviceSliceReducer,
  // permissionReducer: permissionSliceReducer,
  // templateReducer: templateSliceReducer,
});

export { rootPersistConfig, rootReducer };
