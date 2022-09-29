import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import styles from "./Style";
import IMAGES from "../../assets/images";
import { COLORS, FONTS, Theme } from "../../utils/Theme";
const DrawerContent = (props) => {
  const drawerItems = [
    { icon: IMAGES.flagPK, label: "Profile" },
    { icon: IMAGES.flagPK, label: "Payments" },
    { icon: IMAGES.flagPK, label: "Settings" },
    { icon: IMAGES.flagPK, label: "Gallery" },
    { icon: IMAGES.flagPK, label: "Notifications" },
    { icon: IMAGES.flagPK, label: "Request History" },
    { icon: IMAGES.flagPK, label: "Contact Us" },
    { icon: IMAGES.flagPK, label: "About" },
  ];
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ flex: 1, backgroundColor: "transparent" }}>
        <View
          style={{
            flexDirection: "row",
            margin: Theme.hp("2%"),
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: Theme.wp("14%"),
              height: Theme.hp("7%"),
              borderRadius: Theme.hp("5%"),
              borderWidth: 1.5,
              borderColor: COLORS.secondary,
            }}
          >
            <Image
              source={IMAGES.logoWithBG}
              style={{
                width: "100%",
                height: "100%",
              }}
              resizeMode="center"
            />
          </View>
          <Text
            allowFontScaling={false}
            style={{
              marginLeft: Theme.wp("2%"),
              color: COLORS.black,
              fontSize: Theme.txtSmallest,
              fontFamily: FONTS.semiBold,
            }}
          >
            Full Name
          </Text>
        </View>
        {drawerItems.map((dItem, index) => (
          <TouchableOpacity
            style={styles.drawerItem}
            //   onPress={() => props.navigation.navigate("MyAccount")}
          >
            <Text allowFontScaling={false} style={styles.drawerItemTxt}>
              {dItem.label}
            </Text>
            <Image
              style={{ height: Theme.hp("1.5%"), width: Theme.wp("3%") }}
              resizeMode="center"
              source={IMAGES.arrow}
            />
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.drawerItem}
          //   onPress={() => props.navigation.navigate("MyAccount")}
        >
          <Text
            allowFontScaling={false}
            style={{ ...styles.drawerItemTxt, color: COLORS.errorColor }}
          >
            Logout
          </Text>
          <Image
            style={{ height: Theme.hp("1.5%"), width: Theme.wp("3%") }}
            resizeMode="center"
            source={IMAGES.arrow}
          />
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
