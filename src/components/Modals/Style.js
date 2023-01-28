import { StyleSheet, Dimensions } from "react-native";
import { Theme } from "../../utils/Theme";
const styles = StyleSheet.create({
  modalWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.7)",
  },
  imgLogo: {
    width: Theme.wp("12%"),
    height: Theme.wp("12%"),
  },
  txtLoading: {
    fontSize: Theme.txtMedium,
    color: Theme.primary,
    marginTop: "5%",
    fontWeight: "600",
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
