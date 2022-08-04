import React, { useEffect } from "react";
import { View, SafeAreaView, StatusBar, Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../utils/Theme";
const Stack = createNativeStackNavigator();

import SplashScreen from "../screens/SplashScreen/SplashScreen";
import OnBoardingSlider from "../screens/OnBoardingScreens/OnBoardingSlider";
import LoginScreen from "../screens/Auth/LoginScreen";

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
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnBoardingSlider" component={OnBoardingSlider} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

export default StackNavigator;
