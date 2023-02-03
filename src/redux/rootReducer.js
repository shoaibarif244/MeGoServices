import { combineReducers } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import userSliceReducer from "./slices/userSlice";
import netInfoSliceReducer from "./slices/netInfoSlice";
import loaderSliceReducer from "./slices/loaderSlice";
import providerSliceReducer from "./slices/providerSlice";
import customerSliceReducer from "./slices/customerSlice";

// const rootPersistConfig = {
//   key: "root",
//   storage,
//   keyPrefix: "redux-",
//   whitelist: [],
// };
// const rootPersistConfig = {
//   key: "primary",
//   storage: AsyncStorage,
//   keyPrefix: "redux-",
//   whitelist: [],
// };
const rootPersistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
  //   blacklist: ["age"], //blacklisting a store attribute name, will not persist that store attribute.
};
const rootReducer = combineReducers({
  userReducer: userSliceReducer,
  netInfoReducer: netInfoSliceReducer,
  loaderReducer: loaderSliceReducer,
  providerReducer: providerSliceReducer,
  customerReducer: customerSliceReducer,
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
