import React, { useEffect } from "react";
import { View, SafeAreaView, StatusBar, Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../../utils/Theme";
const Stack = createNativeStackNavigator();

import SplashScreen from "../SplashScreen/SplashScreen";

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
      </Stack.Navigator>
    </SafeAreaView>
  );
}

export default StackNavigator;
