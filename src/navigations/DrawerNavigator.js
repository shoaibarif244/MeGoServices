import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProviderMainPage from "../screens/Provider/ProviderMainPage/ProviderMainPage";
import Gallery from "../screens/Gallery/Gallery";
import DrawerContent from "../components/DrawerContent/DrawerContent";
import { Theme } from "../utils/Theme";
import Notifications from "../screens/Notifications/Notifications";
import CustomerProfile from "../screens/Customer/CustomerProfile/CustomerProfile";
import Payments from "../screens/Payments/Payments";
import Settings from "../screens/Settings/Settings";
import ContactUs from "../screens/ContactUs/ContactUs";
import About from "../screens/About/About";
import ProviderProfile from "../screens/Provider/ProviderProfile/ProviderProfile";
import RequestHistory from "../screens/RequestHistory/RequestHistory";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: Theme.wp("75%"),
          backgroundColor: "rgba(255,255,255,1)",
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName="ProviderMainPage"
    >
      <Drawer.Screen name="ProviderMainPage" component={ProviderMainPage} />
      <Drawer.Screen name="Gallery" component={Gallery} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="CustomerProfile" component={CustomerProfile} />
      <Drawer.Screen name="ProviderProfile" component={ProviderProfile} />
      <Drawer.Screen name="Payments" component={Payments} />
      <Drawer.Screen name="RequestHistory" component={RequestHistory} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
      <Drawer.Screen name="About" component={About} />
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
