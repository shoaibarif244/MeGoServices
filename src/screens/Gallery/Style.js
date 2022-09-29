import { StyleSheet } from "react-native";
import { COLORS, FONTS, Theme } from "../../utils/Theme";
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  innerMain: {
    flex: 1,
    width: Theme.width,
    alignSelf: "center",
  },
  txtHeading: {
    color: COLORS.black,
    fontSize: Theme.txtMedium,
    fontFamily: FONTS.semiBold,
  },
  tabBtnView: {
    flexDirection: "row",
    backgroundColor: COLORS.lightGreish,
    justifyContent: "space-between",
  },
  tabBtn: {
    height: Theme.hp("5%"),
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  txtTabBtn: {
    fontSize: Theme.txtSmall,
    fontFamily: FONTS.medium,
  },
});

export default styles;
