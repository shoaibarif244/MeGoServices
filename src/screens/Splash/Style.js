import { StyleSheet } from "react-native";
import { COLORS, Theme } from "../../utils/Theme";
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    alignItems: Theme.align,
    backgroundColor: COLORS.secondary,
    justifyContent: Theme.align,
  },
  imgSplashWrap: {
    width: Theme.wp("52%"),
    height: Theme.hp("25%"),
    bottom: "5%",
  },
  imgSplash: {
    width: "100%",
    height: "100%",
  },
});

export default styles;
