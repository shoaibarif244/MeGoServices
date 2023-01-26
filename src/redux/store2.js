import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import NetInfoReducer from "./netInfoSlice";
import UserReducer from "./UserSlice";
import LoaderReducer from "./loaderSlice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["netInfo", "loaderSlice", "UserReducer"],
};

const rootReducer = combineReducers({
  netInfo: NetInfoReducer,
  loaderSlice: LoaderReducer,
  UserSlice: UserReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: {
//     user: UserSlice,
//   },
// });

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
