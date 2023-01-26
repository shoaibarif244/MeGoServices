import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StackNavigator from "./src/navigations/StackNavigator";
const RootStack = createNativeStackNavigator();
import { BASE_URL } from "@env";
import { persistor, Store } from "./src/redux/store1";
import { PersistGate } from "redux-persist/integration/react";
import NetInfo from "@react-native-community/netinfo";
import { useDispatch, useSelector } from "./src/redux/store";
import { updateNetConnection } from "./src/redux/slices/netInfoSlice";
const App = () => {
  const selector = useSelector((state) => state);
  const { netInfo } = selector;
  const dispatch = useDispatch();
  const checkInternet = () => {
    NetInfo.addEventListener((state) => {
      dispatch(updateNetConnection(state.isConnected));
    });
  };
  useEffect(() => {
    checkInternet();
    console.log(BASE_URL, netInfo.connected);
  }, [netInfo.connected]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen name="Navigation" component={StackNavigator} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
