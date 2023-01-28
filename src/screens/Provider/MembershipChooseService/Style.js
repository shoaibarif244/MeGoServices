import { StyleSheet } from "react-native";
import { COLORS, FONTS, Theme } from "../../../utils/Theme";
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
  txtHeading: {
    color: COLORS.black,
    fontSize: Theme.txtLarge,
    fontFamily: FONTS.bold,
  },
  txtTitle: {
    fontSize: Theme.txtMedium,
    fontFamily: FONTS.bold,
    color: COLORS.black,
  },
  serviceContainer: {
    width: Theme.wp("28%"),
    borderWidth: 1,
    borderColor: COLORS.secondary,
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
    fontSize: Theme.txtSmallest,
    fontFamily: FONTS.medium,
    color: COLORS.black,
    marginTop: Theme.hp("0.6%"),
    textAlign: "center",
  },
});

export default styles;
