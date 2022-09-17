import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONTS, Theme } from "../../utils/Theme";
const styles = StyleSheet.create({
  txtInp: {
    borderWidth: 1,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    borderColor: COLORS.secondary,
    height: Theme.hp("7%"),
    color: Theme.txtBlack,
    paddingLeft: "4%",
    marginTop: Theme.hp("1%"),
    fontSize: Theme.txtSmall,
    fontFamily: FONTS.medium,
  },
  txtInp1: {
    color: Theme.txtBlack,
    width: "90%",
    fontFamily: FONTS.bold,
    fontSize: Theme.txtMedium,
    color: COLORS.black,
    paddingHorizontal: Theme.wp("2%"),
  },
  width25Flex: {
    width: "25%",
    flexDirection: "row",
    alignItems: Theme.align,
  },
  width25: {
    width: "25%",
    alignItems: Theme.align,
    justifyContent: Theme.align,
  },
  txtInp75Width: {
    width: "75%",
    height: Theme.hp("8%"),
    borderRightWidth: 0.5,
    color: Theme.txtBlack,
  },

  wrapIconTxtInp: {
    backgroundColor: Theme.white,
    width: Theme.width,
    height: Theme.hp("7%"),
    borderRadius: 5,
    marginTop: Theme.hp("2%"),
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
    paddingHorizontal: Theme.wp("2%"),
    borderWidth: 2,
    borderColor: COLORS.lightGrey,
  },
  txtInpBgWhite: {
    borderWidth: 0.5,
    backgroundColor: Theme.lightGrey,
    borderRadius: 10,
    borderColor: Theme.white,
    // padding: '4%',
    height: Theme.hp("7%"),
    width: Theme.wp("35"),
    paddingHorizontal: "4%",
    color: Theme.txtBlack,
  },
  txtSend: {
    fontWeight: Theme.bold,
    color: Theme.primary,
    fontSize: Theme.txtMedium,
  },
  countryCode: {
    fontFamily: FONTS.bold,
    fontSize: Theme.txtMedium,
    color: COLORS.black,
  },
});

export default styles;
