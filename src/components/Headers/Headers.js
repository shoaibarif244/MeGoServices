import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { COLORS, Theme } from "../../utils/Theme";
import { AntDesign, Feather, Entypo, MaterialIcons } from "../../utils/Exports";
import styles from "./Style";
import IMAGES from "../../assets/images";
// import { useRoute, useNavigation } from "@react-navigation/native";
const Headers = (props) => {
  const {
    LogoBackHeader,
    onBackPress,
    homePage,
    label,
    small,
    profile,
    backWithLabel,
    headerDispute,
    onMenuPress,
    onProfilePress,
    mainHeader,
  } = props;
  // const routes = useNavigation().getState()?.routes;
  // let prevRouteName = routes[routes.length - 2].name; // -2 because -1 is the current route
  // const route = useRoute();
  return (
    <>
      {mainHeader === true ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            height: Theme.hp("6%"),
            backgroundColor: COLORS.primary,
            alignItems: "center",
            paddingHorizontal: Theme.wp("2%"),
          }}
        >
          <TouchableOpacity onPress={onMenuPress}>
            <Feather name="menu" color={COLORS.white} size={Theme.iconSizeM} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={IMAGES.logoWithBG}
              style={{
                width: Theme.wp("10%"),
                height: Theme.hp("5%"),
                resizeMode: "center",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              alert("Notifications");
            }}
          >
            <MaterialIcons
              name="notifications"
              color={COLORS.white}
              size={Theme.iconSizeM}
            />
          </TouchableOpacity>
        </View>
      ) : homePage === true ? (
        <View style={styles.headerHomeWrap}>
          <TouchableOpacity
            onPress={
              onMenuPress
                ? onMenuPress
                : () => props.nav.navigate("CompanyDrawer")
            }
          >
            {/* <Image
              source={require("../../Assets/Dots.png")}
              style={styles.imgDots}
              resizeMode="contain"
            /> */}
          </TouchableOpacity>
          <Text style={styles.txtLabel}>{label}</Text>
          <TouchableOpacity
            onPress={
              onProfilePress
                ? onProfilePress
                : () => props.nav.navigate("CompanyProfile")
            }
          >
            {/* <Image
              source={require("../../Assets/Person.png")}
              style={styles.imgPerson}
            /> */}
          </TouchableOpacity>
        </View>
      ) : small === true ? (
        <View style={styles.headerWrap}>
          <TouchableOpacity
            onPress={onBackPress}
            style={{ marginTop: Theme.hp("2%") }}
          >
            {/* <Image
              source={require("../../Assets/back.png")}
              style={{
                width: Theme.wp("7%"),
                height: Theme.hp("3.5%"),
              }}
              resizeMode="contain"
            /> */}
          </TouchableOpacity>
          <View style={styles.imgSplashWrapSmall}>
            {/* <Image
              source={require("../../Assets/Logo.png")}
              style={styles.imgSplash}
              resizeMode={"center"}
            /> */}
          </View>
        </View>
      ) : profile === true ? (
        <View style={styles.headerHomeWrap}>
          <TouchableOpacity onPress={onBackPress}>
            {/* <Image
              source={require("../../Assets/back.png")}
              style={{
                width: Theme.wp("7%"),
                height: Theme.hp("3.5%"),
              }}
              resizeMode="contain"
            /> */}
          </TouchableOpacity>

          <Text style={styles.txtLabel}>{label}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Entypo
              name="menu"
              color={Theme.primary}
              size={Theme.iconSizeSm}
              style={{ right: Theme.wp("2%") }}
            />
            <Entypo
              name="dots-two-horizontal"
              color={Theme.primary}
              size={Theme.iconSize}
            />
          </View>
        </View>
      ) : backWithLabel === true ? (
        <View style={styles.headerHomeWrap}>
          <TouchableOpacity onPress={onBackPress}>
            {/* <Image
              source={require("../../Assets/back.png")}
              style={{
                width: Theme.wp("7%"),
                height: Theme.hp("3.5%"),
              }}
              resizeMode="contain"
            /> */}
          </TouchableOpacity>
          <Text style={styles.txtLabel}>{label}</Text>
          <Text></Text>
        </View>
      ) : headerDispute === true ? (
        <View style={styles.headerHomeWrap}>
          <TouchableOpacity
            onPress={onBackPress ? onBackPress : () => props.nav.goBack()}
          >
            {/* <Image
              source={require("../../Assets/back.png")}
              style={styles.back}
              resizeMode="contain"
            /> */}
          </TouchableOpacity>
          <Text style={styles.txtLabel}>{label}</Text>
          <TouchableOpacity
            onPress={() => {
              props.nav.navigate("CompanyProfile");
            }}
          >
            {/* <Image
              source={require("../../Assets/Person.png")}
              style={styles.imgPerson}
            /> */}
          </TouchableOpacity>
        </View>
      ) : null}
    </>
  );
};
export default Headers;
