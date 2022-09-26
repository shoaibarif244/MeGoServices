import React, { useEffect } from "react";
import { View, SafeAreaView, StatusBar, Platform, LogBox } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/SplashScreen/SplashScreen";
import OnBoardingSlider from "../screens/OnBoardingScreens/OnBoardingSlider";
import LoginScreen from "../screens/Auth/LoginScreen";
import OTPScreen from "../screens/Auth/OTPScreen";
// * ========================================================== * //
// *                 Provider Side Screens                      * //
// * ========================================================== * //
import MembershipDetails from "../screens/Provider/MembershipDetails/MembershipDetails";
import MembershipIDUpload from "../screens/Provider/MembershipIDUpload/MembershipIDUpload";
import MembershipOtherDocs from "../screens/Provider/MembershipOtherDocs/MembershipOtherDocs";
import MembershipChooseService from "../screens/Provider/MembershipChooseService/MembershipChooseService";
// * ========================================================== * //
// * ========================================================== * //

// * ========================================================== * //
// *                 Customer Side Screens                      * //
// * ========================================================== * //
import CustomerServices from "../screens/Customer/CustomerServices/CustomerServices";
import CustomerServiceDescription from "../screens/Customer/CustomerServiceDescription/CustomerServiceDescription";
// * ========================================================== * //
// * ========================================================== * //

import { COLORS } from "../utils/Theme";
import MembershipCongrats from "../screens/Provider/MembershipCongrats/MembershipCongrats";
import ProviderMainPage from "../screens/Provider/ProviderMainPage/ProviderMainPage";
import DrawerNavigator from "./DrawerNavigator";

LogBox.ignoreLogs([
  "VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.",
]);
LogBox.ignoreLogs([
  'Warning: Each child in a list should have a unique "key" prop.',
]);

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
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
        initialRouteName="ProviderMainPage"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnBoardingSlider" component={OnBoardingSlider} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />

        <Stack.Screen name="CustomerServices" component={CustomerServices} />
        <Stack.Screen
          name="CustomerServiceDescription"
          component={CustomerServiceDescription}
        />

        <Stack.Screen name="MembershipDetails" component={MembershipDetails} />
        <Stack.Screen
          name="MembershipIDUpload"
          component={MembershipIDUpload}
        />
        <Stack.Screen
          name="MembershipOtherDocs"
          component={MembershipOtherDocs}
        />
        <Stack.Screen
          name="MembershipChooseService"
          component={MembershipChooseService}
        />
        <Stack.Screen
          name="MembershipCongrats"
          component={MembershipCongrats}
        />
        <Stack.Screen name="ProviderMainPage" component={ProviderMainPage} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default StackNavigator;
