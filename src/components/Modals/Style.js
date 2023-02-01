import { StyleSheet, Dimensions } from "react-native";
import { COLORS, Theme } from "../../utils/Theme";
const styles = StyleSheet.create({
  modalWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.85)",
  },
  imgLogo: {
    width: Theme.wp("12%"),
    height: Theme.wp("12%"),
  },
  txtLoading: {
    fontSize: Theme.txtSmall,
    color: COLORS.black,
    marginTop: "5%",
    fontWeight: "800",
  },
  indic: {
    margin: "5%",
  },
  toastModalWrap: {
    backgroundColor: Theme.white,
    alignItems: "center",
    justifyContent: "center",
    padding: "2%",
  },
});

export default styles;
