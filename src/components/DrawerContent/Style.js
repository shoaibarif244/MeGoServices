import { StyleSheet } from "react-native";
import { COLORS, FONTS, Theme } from "../../utils/Theme";
const styles = StyleSheet.create({
  drawerItem: {
    margin: Theme.hp("2%"),
    marginTop: Theme.hp("1%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  drawerItemTxt: {
    color: COLORS.black,
    fontSize: Theme.txtSmall,
    fontFamily: FONTS.semiBold,
  },
});

export default styles;
