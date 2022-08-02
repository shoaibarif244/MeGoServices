import { StyleSheet, Dimensions } from "react-native";
import Theme from "../../Utils/Theme";
const styles = StyleSheet.create({
  txtInp: {
    borderWidth: 2,
    backgroundColor: Theme.white,
    borderRadius: 5,
    borderColor: Theme.lightGrey,
    height: Theme.hp("7%"),
    color: Theme.txtBlack,
    paddingLeft: "4%",
    marginTop: Theme.hp("2%"),
    fontSize: Theme.txtSmall,
  },
  txtInp1: {
    color: Theme.txtBlack,
    width: "90%",
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
    alignItems: Theme.align,
    justifyContent: Theme.align,
    marginTop: Theme.hp("2%"),
    flexDirection: "row",
    paddingHorizontal: Theme.wp("1%"),
    borderWidth: 2,
    borderColor: Theme.lightGrey,
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
});

export default styles;
