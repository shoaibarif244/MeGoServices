import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StackNavigator from "./src/Navigations/StackNavigator";
const RootStack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStack.Navigator
            headerMode="none"
            screenOptions={{
              headerShown: false,
            }}
          >
            <RootStack.Screen name="Navigation" component={StackNavigator} />
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

export default App;
