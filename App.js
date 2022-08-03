// import React, { useEffect } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// const RootStack = createNativeStackNavigator();
// // Navigator Screens
// import

// // const store = configureStore();
// function App() {
//   return (
//     <>
// <SafeAreaProvider>
//   <NavigationContainer>
//     <RootStack.Navigator
//       headerMode="none"
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <RootStack.Screen name="Navigation" component={Navigation} />
//     </RootStack.Navigator>
//   </NavigationContainer>
// </SafeAreaProvider>
//     </>
//   );
// }

// export default App;
import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StackNavigator from "./src/screens/Navigations/StackNavigator";
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
