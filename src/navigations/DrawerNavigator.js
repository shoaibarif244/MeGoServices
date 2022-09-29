import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProviderMainPage from "../screens/Provider/ProviderMainPage/ProviderMainPage";
import Gallery from "../screens/Gallery/Gallery";
import DrawerContent from "../components/DrawerContent/DrawerContent";
import { Theme } from "../utils/Theme";

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
      // useLegacyImplementation
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="ProviderMainPage" component={ProviderMainPage} />
      <Drawer.Screen name="Gallery" component={Gallery} />
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
