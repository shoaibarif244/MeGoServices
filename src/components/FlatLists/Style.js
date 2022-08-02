import { StyleSheet, Dimensions } from "react-native";
import Theme from "../../Utils/Theme";
const styles = StyleSheet.create({
  amountView: {
    backgroundColor: Theme.lightGreish,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Theme.wp(3),
    borderRadius: 5,
  },
  imgGymGallary: {
    width: "100%",
    height: "100%",
  },
  bgBtn1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Theme.wp("20%"),
    height: Theme.hp("5%"),
  },
  wrapFLBtn: {
    width: Theme.width,
    borderWidth: 2,
    borderColor: Theme.lightGrey,
    borderRadius: 10,
    padding: Theme.wp("2%"),
    marginTop: Theme.hp("2%"),
    backgroundColor: Theme.white,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.6,
    // marginVertical: Theme.hp("0%"),
    borderColor: "#C4C4C4",
  },
  flexRow1: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    paddingVertical: Theme.hp("1%"),
    borderColor: "#C4C4C4",
  },
  flexRowJustify: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgProfileWrap: {
    width: Theme.wp("21%"),
    height: Theme.wp("21%"),
    borderRadius: 5,
  },
  imgProfile: {
    width: "100%",
    height: "100%",
  },
  imgProfile1: {
    width: Theme.wp("15%"),
    height: Theme.wp("15%"),
    borderRadius: 5,
  },
  wrapImgProfile1: {
    width: Theme.wp("15%"),
    height: Theme.wp("15%"),
    borderRadius: 5,
  },
  txtDesc: {
    color: Theme.greish,
    fontSize: Theme.txtSmallest,
    fontWeight: "400",
  },
  txtTitle: {
    color: Theme.purple,
    fontSize: Theme.txtSmall,
    fontWeight: "600",
  },
  txtTitle1: {
    color: Theme.gray1,
    fontSize: Theme.txtSmall,
    fontWeight: "400",
  },
  txtJobType: {
    color: Theme.greish,
    fontSize: Theme.txtSmallest,
  },
  bgBtn: {
    backgroundColor: "#E0CCFC",
    alignItems: "center",
    justifyContent: "center",
    width: Theme.wp("20%"),
    height: Theme.hp("2.3%"),
    marginTop: Theme.hp("1.7%"),
    borderRadius: 3,
  },
  flexRowJustify1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: Theme.hp("1%"),
  },
  txtLocation: {
    fontSize: Theme.RFPercentage(1.7),
    color: Theme.gray1,
    fontWeight: "500",
  },
  txtDueDate: {
    fontSize: Theme.txtTiny,
    color: Theme.greish,
  },
  pinLogo: {
    width: Theme.wp("4%"),
    height: Theme.hp("2%"),
  },
  wrapImgTxt: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
  },
  wrapDueDate: {
    width: "50%",
    alignItems: "flex-end",
  },
  wrapIconCall: {
    height: Theme.hp("5%"),
    width: Theme.wp("10%"),
    right: Theme.wp("3%"),
  },
  txtName: {
    color: Theme.primary,
    fontSize: Theme.txtSmall,
    fontWeight: "800",
  },
  txtDesignation: {
    color: Theme.txtBlack,
    fontSize: Theme.txtSmallest,
    fontWeight: "400",
  },
  flex80: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgStar: {
    width: "100%",
    height: "100%",
  },
  wrapImgStar: {
    height: Theme.hp("2%"),
    width: Theme.hp("2%"),
    position: "absolute",
    alignSelf: "flex-end",
    right: Theme.hp("1%"),
    top: Theme.hp("1%"),
  },
  wrapRequestPayment: {
    backgroundColor: Theme.frozey,
    width: Theme.wp("23%"),
    height: Theme.hp("2.7%"),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
  wrapPayNow: {
    backgroundColor: Theme.frozey,
    // width: Theme.wp('23%'),
    // height: Theme.hp('2.7%'),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
    padding: Theme.hp(".5%"),
  },
  txtPayNow: {
    color: Theme.txtWhite,
    fontSize: Theme.txtSmall,
    fontWeight: "500",
  },
  txtPaid: {
    color: Theme.gray1,
    fontSize: Theme.txtSmall,
    fontWeight: "600",
  },
  txtRequestPay: {
    color: Theme.txtWhite,
    fontSize: Theme.txtTiny,
    fontWeight: "700",
  },
  txtAmount1: {
    fontSize: Theme.txtSmallest,
    fontWeight: "500",
    color: Theme.greish,
  },
  txtDate: {
    fontSize: Theme.txtTiny,
    alignSelf: "flex-end",
    color: Theme.greish,
    marginTop: Theme.hp(".5%"),
  },
  flexAlignJustify: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  txtViewDetails: {
    color: Theme.primary,
    fontSize: Theme.txtTiny,
    fontWeight: "500",
  },
  txtPostBy: {
    fontSize: Theme.txtSmallest,
    color: Theme.greish,
  },
  btnViewDetails: {
    width: Theme.wp("20%"),
    height: Theme.hp("4%"),
    backgroundColor: Theme.lightFrozey,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  txtAmount: {
    color: Theme.purple,
    fontWeight: "500",
  },
  wrapImgMyWork: {
    width: Theme.wp("29%"),
    height: Theme.wp("29%"),
    margin: "2%",
  },
  wrapBox: {
    borderWidth: 2,
    borderColor: Theme.lightGrey,
    borderRadius: 10,
    width: "100%",
    padding: Theme.hp("2%"),
    marginTop: Theme.hp("3%"),
  },
});

export default styles;
