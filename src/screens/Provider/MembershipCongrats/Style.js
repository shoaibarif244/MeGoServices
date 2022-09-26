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
  silderImage: {
    width: Theme.wp("90%"),
    height: Theme.hp("45%"),
    resizeMode: "center",
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
    fontSize: Theme.txtSmall,
    fontFamily: FONTS.medium,
    color: COLORS.black,
    textAlign: "center",
    marginTop: Theme.hp("4%"),
  },
});

export default styles;
