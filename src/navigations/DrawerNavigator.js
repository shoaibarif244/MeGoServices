import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProviderMainPage from "../screens/Provider/ProviderMainPage/ProviderMainPage";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="ProviderMainPage" component={ProviderMainPage} />
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
