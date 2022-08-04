import { StyleSheet } from "react-native";
import { COLORS, FONTS, Theme } from "../../utils/Theme";
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: Theme.align,
    backgroundColor: COLORS.white,
  },
  sliderView: {
    height: Theme.hp("85%"),
    width: Theme.wp("100%"),
    backgroundColor: COLORS.white,
  },
  renderItem: { alignItems: "center", marginTop: Theme.hp("10%") },
  silderImage: {
    width: Theme.wp("90%"),
    height: Theme.hp("45%"),
    resizeMode: "center",
  },
  dot: {
    width: Theme.wp("1.8%"),
    height: Theme.wp("1.8%"),
    backgroundColor: COLORS.primary,
  },
  activeDot: {
    width: Theme.wp("7%"),
    height: Theme.wp("1.8%"),
    backgroundColor: COLORS.secondary,
  },
  silderText: {
    fontFamily: FONTS.semiBold,
    fontSize: Theme.txtLarge,
    color: COLORS.black,
    paddingHorizontal: Theme.wp("20%"),
    textAlign: "center",
  },
});

export default styles;
