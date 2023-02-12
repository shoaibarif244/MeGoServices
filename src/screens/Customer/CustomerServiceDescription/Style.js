import { StyleSheet } from "react-native";
import { COLORS, FONTS, Theme } from "../../../utils/Theme";
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingBottom: Theme.hp("5%"),
  },
  innerMain: {
    flex: 1,
    width: Theme.width,
    alignSelf: "center",
  },
  sliderContainer: {
    height: Theme.hp("24%"),
    width: Theme.wp("100%"),
    padding: Theme.hp("1%"),
  },
  txtTitle: {
    fontSize: Theme.txtSmall,
    fontFamily: FONTS.semiBold,
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
    fontSize: Theme.txtSmallestt,
    fontFamily: FONTS.medium,
    color: COLORS.black,
  },
  serviceDesc: {
    fontSize: Theme.txtSmallestt,
    fontFamily: FONTS.regular,
    color: COLORS.black,
    textAlign: "justify",
  },
  innerIconStyle: {
    borderColor: "transparent",
    borderWidth: 1,
    borderRadius: 5,
  },
  subServiceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Theme.hp("1%"),
    padding: Theme.hp("1%"),
    borderBottomWidth: 2,
    borderColor: COLORS.lightGreish,
  },
  subServiceName: {
    fontSize: Theme.txtSmallestt,
    fontFamily: FONTS.regular,
    color: COLORS.black,
    textDecorationLine: "none",
    marginLeft: Theme.wp("2"),
  },
});

export default styles;
