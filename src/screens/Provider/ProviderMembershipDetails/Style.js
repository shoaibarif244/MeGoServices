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
  serviceName: {
    fontSize: Theme.txtSmall,
    fontFamily: FONTS.medium,
    color: COLORS.black,
    marginTop: Theme.hp("0.6%"),
  },
  phoneInputContainer: {
    width: Theme.width,
    height: Theme.hp("7%"),
    borderRadius: 7,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: "#E5E0EB",
    marginTop: Theme.hp("1%"),
  },
  text: {
    fontSize: Theme.txtSmall,
    fontFamily: FONTS.medium,
    color: COLORS.black,
  },
  txtContainer: {
    marginTop: 13,
    alignSelf: "center",
  },
});

export default styles;
