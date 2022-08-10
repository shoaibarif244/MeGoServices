import React, { useEffect } from "react";
import { View, SafeAreaView, StatusBar, Platform, LogBox } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../utils/Theme";
const Stack = createNativeStackNavigator();

import SplashScreen from "../screens/SplashScreen/SplashScreen";
import OnBoardingSlider from "../screens/OnBoardingScreens/OnBoardingSlider";
import LoginScreen from "../screens/Auth/LoginScreen";
import OTPScreen from "../screens/Auth/OTPScreen";
//
//
import ProviderMembershipDetails from "../screens/Provider/ProviderMembershipDetails";
//
//
import CustomerServices from "../screens/Customer/CustomerServices";
import CustomerServiceDescription from "../screens/Customer/CustomerServiceDescription";
LogBox.ignoreLogs([
  "VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.",
]);
LogBox.ignoreLogs([
  'Warning: Each child in a list should have a unique "key" prop.',
]);
function StackNavigator() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        {Platform.OS === "ios" ? (
          <StatusBar barStyle="dark-content" />
        ) : (
          <StatusBar
            barStyle="light-content"
            backgroundColor={COLORS.primary}
          />
        )}
      </View>

      <Stack.Navigator
        initialRouteName="CustomerServices"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnBoardingSlider" component={OnBoardingSlider} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
        <Stack.Screen name="CustomerServices" component={CustomerServices} />
        <Stack.Screen
          name="CustomerServiceDescription"
          component={CustomerServiceDescription}
        />

        <Stack.Screen
          name="ProviderMembershipDetails"
          component={ProviderMembershipDetails}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

export default StackNavigator;
