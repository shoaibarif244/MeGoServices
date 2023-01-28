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
    borderColor: COLORS.secondary,
    marginTop: Theme.hp("1%"),
  },
  textContainerStyle: {
    borderRadius: 7,
    paddingVertical: 0,
    backgroundColor: COLORS.white,
  },
  textInputStyle: {
    fontFamily: FONTS.medium,
    fontSize: Theme.txtSmall,
  },
  codeTextStyle: {
    fontFamily: FONTS.semiBold,
    fontSize: Theme.txtSmall,
  },
  txtTitle: {
    fontSize: Theme.txtSmall,
    fontFamily: FONTS.medium,
    color: COLORS.black,
  },
  txtContainer: {
    marginTop: Theme.hp("1%"),
    alignSelf: "center",
  },
  uploadView: {
    marginTop: Theme.hp("1%"),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  uploadContainer: {
    marginTop: Theme.hp("1%"),
    height: Theme.hp("16%"),
    borderWidth: 1,
    borderRadius: 7,
    borderColor: COLORS.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  txtUpload: {
    color: COLORS.greish,
    fontSize: Theme.txtSmall,
    fontFamily: FONTS.medium,
    marginHorizontal: Theme.wp("4%"),
    textAlign: "center",
  },
  termsView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Theme.hp("2%"),
  },
  innerIconStyle: {
    borderColor: "transparent",
    borderWidth: 1,
    borderRadius: 5,
  },
  txtAgree: { fontFamily: FONTS.medium, color: COLORS.black },
  txtTerms: {
    fontFamily: FONTS.medium,
    textDecorationLine: "underline",
    color: COLORS.secondary,
  },
});

export default styles;
