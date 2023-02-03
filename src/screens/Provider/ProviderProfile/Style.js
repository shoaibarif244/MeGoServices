import { StyleSheet } from "react-native";
import { COLORS, FONTS, Theme } from "../../../utils/Theme";
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  innerMain: {
    // flex: 1,
    width: Theme.width,
    alignSelf: "center",
  },
  txtHeading: {
    color: COLORS.black,
    fontSize: Theme.txtMedium,
    fontFamily: FONTS.semiBold,
  },
  img100: {
    width: "100%",
    height: "100%",
  },
});

export default styles;
