import { StyleSheet } from "react-native";
import { COLORS, FONTS, Theme } from "../../utils/Theme";

const CELL_SIZE = Theme.wp("13%");
const CELL_BORDER_RADIUS = 8;
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingBottom: Theme.hp("5%"),
  },
  innerMain: {
    width: Theme.width,
    marginTop: Theme.hp("10%"),
    alignSelf: "center",
  },
  filled: {
    width: Theme.wp("9%"),
    height: Theme.wp("9%"),
    backgroundColor: COLORS.secondary,
    borderRadius: Theme.wp("4.5%"),
  },
  unFilled: {
    width: Theme.wp("9%"),
    height: Theme.wp("9%"),
    backgroundColor: COLORS.lightGreish,
    borderRadius: Theme.wp("4.5%"),
  },
  logo: {
    width: Theme.wp("25%"),
    height: Theme.wp("25%"),
    resizeMode: "center",
    alignSelf: "center",
    marginTop: Theme.hp("10%"),
  },
  flag: {
    borderWidth: 1.5,
    borderRadius: Theme.wp("6%"),
    width: Theme.wp("12%"),
    height: Theme.wp("12%"),
    resizeMode: "center",
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: Theme.txtSmall,
    color: COLORS.black,
    paddingHorizontal: Theme.wp("10%"),
    textAlign: "center",
    marginTop: Theme.hp("8%"),
  },
  card: {
    // width: width,
    height: Theme.hp("70%"),
    backgroundColor: COLORS.white,
    // marginHorizontal: 5,
    // borderRadius: 5,
  },
  indicatorConatiner: {
    flexDirection: "row",
    width: Theme.wp("20%"),
    justifyContent: "space-between",
    alignSelf: "center",
  },
  countryContainer: {
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: Theme.wp("65%"),
    marginTop: Theme.hp("5%"),
  },
  switchCont: {
    width: Theme.wp("20%"),
    height: Theme.wp("6%"),
    borderRadius: 30,
  },
  switchCircle: {
    width: Theme.wp("6%"),
    height: Theme.wp("6%"),
    borderRadius: 30,
  },
  cell: {
    marginHorizontal: Theme.wp("2%"),
    height: CELL_SIZE,
    width: CELL_SIZE,
    textAlignVertical: "center",
    // ...Platform.select({ web: { lineHeight: 65 } }),
    fontSize: Theme.txtLarge,
    fontFamily: FONTS.bold,
    textAlign: "center",
    borderRadius: CELL_BORDER_RADIUS,
    color: COLORS.primary,
    backgroundColor: "#fff",

    // IOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    // Android
    elevation: 3,
  },
  codeFieldRoot: {
    height: CELL_SIZE,
    marginTop: Theme.hp("1%"),
    paddingHorizontal: Theme.wp("10%"),
    justifyContent: "center",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: Theme.hp("5%"),
  },
  txtResend: {
    color: COLORS.primary,
    fontFamily: FONTS.bold,
    fontSize: Theme.txtSmallest,
  },
  txtOTP: {
    color: COLORS.secondary,
    fontFamily: FONTS.medium,
    fontSize: Theme.txtSmallest,
  },
});
export default styles;
