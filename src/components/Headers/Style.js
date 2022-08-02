import { StyleSheet, Dimensions } from "react-native";
import Theme from "../../Utils/Theme";
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: Theme.secondary,
  },

  headerWrap: {
    width: Theme.width,
    alignSelf: "center",
  },
  imgSplashWrap: {
    width: Theme.wp("45%"),
    height: Theme.hp("20%"),
    alignSelf: "center",
    marginTop: Theme.hp("4%"),
    // backgroundColor:'red'
  },
  imgSplashWrapSmall: {
    width: Theme.wp("25%"),
    height: Theme.hp("12%"),
    alignSelf: "center",
    marginTop: Theme.hp("4%"),
    // backgroundColor:'red'
  },
  imgSplash: {
    width: "100%",
    height: "100%",
  },
  txtLabel: {
    color: Theme.primary,
    fontSize: Theme.txtMedium,
    fontWeight: "600",
  },
  headerHomeWrap: {
    width: Theme.width,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: Theme.hp("3%"),
    alignSelf: "center",
    alignItems: "center",
  },
  imgDots: {
    width: Theme.wp("4.5%"),
    height: Theme.hp("3%"),
  },
  back: {
    width: Theme.wp("7%"),
    height: Theme.hp("3.5%"),
  },
  imgPerson: {
    width: Theme.wp("8%"),
    height: Theme.wp("8%"),
  },
});

export default styles;
