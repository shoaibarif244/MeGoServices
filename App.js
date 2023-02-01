import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StackNavigator from "./src/navigations/StackNavigator";
const RootStack = createNativeStackNavigator();
import { BASE_URL } from "@env";
import NetInfo from "@react-native-community/netinfo";
import { useDispatch, useSelector } from "./src/redux/store";
import { updateNetConnection } from "./src/redux/slices/netInfoSlice";
import messaging from "@react-native-firebase/messaging";
import { Alert } from "react-native";
const App = () => {
  const { netInfoReducer } = useSelector((state) => state);

  const dispatch = useDispatch();
  const checkInternet = () => {
    NetInfo.addEventListener((state) => {
      dispatch(updateNetConnection(state.isConnected));
    });
  };
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert("A new FCM message arrived!", JSON.stringify(remoteMessage));
    });

    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log("App Opened with message ", remoteMessage.data);
      // navigation.navigate();
    });

    checkInternet();

    console.log(BASE_URL, netInfoReducer.connected);
    return unsubscribe;
  }, [netInfoReducer.connected]);

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
