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
    { icon: IMAGES.profile, label: "Profile", routeName: "ProviderProfile" },
    { icon: IMAGES.gallery, label: "Gallery", routeName: "Gallery" },
    { icon: IMAGES.payment, label: "Payments", routeName: "Payments" },
    {
      icon: IMAGES.notification,
      label: "Notifications",
      routeName: "Notifications",
    },
    {
      icon: IMAGES.reqHistory,
      label: "Request History",
      routeName: "RequestHistory",
    },
    { icon: IMAGES.settings, label: "Settings", routeName: "Settings" },
    { icon: IMAGES.contactUs, label: "Contact Us", routeName: "ContactUs" },
    { icon: IMAGES.about, label: "About", routeName: "About" },
  ];
  return (
    <DrawerContentScrollView contentContainerStyle={{ flexGrow: 1 }} {...props}>
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
            onPress={() => props.navigation.navigate(dItem?.routeName)}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  width: Theme.wp("6%"),
                  height: Theme.wp("6%"),
                }}
              >
                <Image
                  source={dItem?.icon}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  resizeMode="center"
                />
              </View>

              <Text allowFontScaling={false} style={styles.drawerItemTxt}>
                {dItem?.label}
              </Text>
            </View>
            <Image
              style={{ height: Theme.hp("1.5%"), width: Theme.wp("3%") }}
              resizeMode="center"
              source={IMAGES.arrow}
            />
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={{
            ...styles.drawerItem,
            position: "absolute",
            bottom: Theme.hp("1%"),
          }}
          onPress={() => alert("LogOut")}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: Theme.wp("6%"),
                height: Theme.wp("6%"),
              }}
            >
              <Image
                source={IMAGES.logout}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                resizeMode="center"
              />
            </View>
            <Text
              allowFontScaling={false}
              style={{ ...styles.drawerItemTxt, color: "#E04F5F" }}
            >
              Logout
            </Text>
          </View>
          {/* 
          <Image
            style={{
              height: Theme.hp("1.5%"),
              width: Theme.wp("3%"),
              tintColor: "#E04F5F",
            }}
            resizeMode="center"
            source={IMAGES.arrow}
          /> */}
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
