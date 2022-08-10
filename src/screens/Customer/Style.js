import { StyleSheet } from "react-native";
import { COLORS, FONTS, Theme } from "../../utils/Theme";
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingBottom: Theme.hp("5%"),
  },
  innerMain: {
    width: Theme.width,
    alignSelf: "center",
  },
  sliderContainer: {
    height: Theme.hp("24%"),
    width: Theme.wp("100%"),
    padding: Theme.hp("1%"),
  },
  txtTitle: {
    fontSize: Theme.txtMedium,
    fontFamily: FONTS.bold,
    color: COLORS.black,
  },
  serviceContainer: {
    width: Theme.wp("28%"),
    borderColor: COLORS.secondary,
    borderWidth: 1,
    marginRight: Theme.wp("4%"),
    borderRadius: 10,
    padding: 5,
    alignItems: "center",
  },
  serviceImg: {
    height: Theme.hp("10%"),
    width: Theme.wp("16%"),
    resizeMode: "center",
  },
  serviceName: {
    fontSize: Theme.txtSmall,
    fontFamily: FONTS.medium,
    color: COLORS.black,
    marginTop: Theme.hp("0.6%"),
  },
});

export default styles;
