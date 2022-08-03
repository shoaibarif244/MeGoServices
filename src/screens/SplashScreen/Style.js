import { StyleSheet } from "react-native";
import { COLORS, FONTS, Theme } from "../../utils/Theme";
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    alignItems: Theme.align,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
  },
  welcomeContainer: {
    alignItems: "center",
    width: Theme.wp("40%"),
    height: Theme.hp("20%"),
  },
  imgLogo: {
    width: "100%",
    height: "100%",
  },
  txtWelcome: {
    fontFamily: FONTS.medium,
    fontSize: Theme.txtLarge,
    color: COLORS.white,
    marginTop: -Theme.hp("6%"),
    marginBottom: Theme.hp("2%"),
  },
  poweredByContainer: {
    position: "absolute",
    bottom: Theme.hp("4%"),
    alignItems: "center",
    width: Theme.wp("32%"),
    height: Theme.hp("8%"),
  },
  txtPoweredBy: {
    fontFamily: FONTS.medium,
    fontSize: Theme.txtSmall,
    color: COLORS.white,
    marginBottom: Theme.hp("0.8%"),
  },
});

export default styles;
