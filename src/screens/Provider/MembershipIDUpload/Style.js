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
    fontSize: Theme.txtSmall,
    fontFamily: FONTS.medium,
    color: COLORS.black,
    textAlign: "center",
  },
  uploadContainer: {
    backgroundColor: COLORS.lightGreish,
    height: Theme.hp("20%"),
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  txtUpload: {
    color: COLORS.gray1,
    fontSize: Theme.txtMedium,
    fontFamily: FONTS.medium,
    textAlign: "center",
  },
  txtInstruction: {
    fontFamily: FONTS.medium,
    color: COLORS.black,
    fontSize: Theme.txtSmall,
  },
  txtInstructions: {
    fontSize: Theme.txtSmall,
    fontFamily: FONTS.medium,
    color: COLORS.secondary,
  },
});

export default styles;
