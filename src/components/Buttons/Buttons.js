import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "../../utils/Exports";
import styles from "./Style";
import { Theme } from "../../utils/Theme";
const Buttons = (props) => {
  const {
    btnSmall,
    label,
    onPress,
    alignSelf,
    btnMedium,
    btnDOB,
    socialMedia,
    imgLogo,
    simpleBtn,
    borderedBtn,
    borderBtn,
    addEventBtn,
    borderBtnMedium,
    btnStyle,
  } = props;
  const fSize = props?.fontSize ?? styles.txtLabel.fontSize;
  // alert(style)
  // btnStyle && alert(JSON.stringify(btnStyle, 0, 2));
  return (
    <>
      {btnSmall === true ? (
        <TouchableOpacity
          style={{
            ...styles.btnWrap,
            alignSelf: alignSelf,
            backgroundColor: props.BGcolor,
          }}
          onPress={onPress}
        >
          <Text style={{ ...styles.txtLabel, color: props.txtColor }}>
            {label}
          </Text>
        </TouchableOpacity>
      ) : btnMedium === true ? (
        <>
          <TouchableOpacity
            style={{
              ...styles.btnMediumWrap,
              ...btnStyle,
              alignSelf: alignSelf,
              backgroundColor: props.BGcolor,
            }}
            onPress={onPress}
          >
            <Text style={{ ...styles.txtLabel, color: props.txtColor }}>
              {label}
            </Text>
          </TouchableOpacity>
        </>
      ) : btnDOB === true ? (
        <>
          <TouchableOpacity
            style={{
              ...styles.btnDOBWrap,
              alignSelf: alignSelf,
            }}
            onPress={onPress}
          >
            <Text style={{ ...styles.txtLabelDOB }}>{label}</Text>
            <MaterialCommunityIcons
              name="calendar-range"
              size={Theme.iconSizeSm}
              color={Theme.greish}
            />
          </TouchableOpacity>
        </>
      ) : socialMedia === true ? (
        <>
          <TouchableOpacity
            style={{
              ...styles.btnSocialWrap,
              alignSelf: alignSelf,
            }}
            onPress={onPress}
          >
            <View style={styles.imgLogoWrap}>
              <Image
                source={imgLogo}
                style={styles.imgLogo1}
                resizeMode={"center"}
              />
            </View>
            <Text style={{ ...styles.txtSocial, color: props.txtColor }}>
              {label}
            </Text>
            <Text>{"   "}</Text>
          </TouchableOpacity>
        </>
      ) : simpleBtn === true ? (
        <>
          <TouchableOpacity
            style={{
              ...styles.btnSimpleWrap,
              alignSelf: alignSelf,
            }}
            onPress={onPress}
          >
            <View style={styles.imgLogo1Wrap}>
              <Image
                source={imgLogo}
                style={styles.imgLogo1}
                resizeMode={"center"}
              />
            </View>
          </TouchableOpacity>
        </>
      ) : borderedBtn === true ? (
        <>
          <TouchableOpacity
            style={{
              ...styles.btnSimpleWrap1,
              alignSelf: alignSelf,
            }}
            onPress={onPress}
          >
            <Text style={{ ...styles.txtLabel1, color: props.txtColor }}>
              {label}
            </Text>
          </TouchableOpacity>
        </>
      ) : borderBtn === true ? (
        <TouchableOpacity
          style={{
            ...styles.btnBorder,
            alignSelf: alignSelf,
            backgroundColor: props.BGcolor,
          }}
          onPress={onPress}
        >
          <Text style={{ ...styles.txtLabel, color: props.txtColor }}>
            {label}
          </Text>
        </TouchableOpacity>
      ) : addEventBtn === true ? (
        <>
          <TouchableOpacity
            style={{
              ...styles.btnEventWrap,
              // alignSelf: alignSelf,
              backgroundColor: props.BGcolor,
            }}
            onPress={onPress}
          >
            <AntDesign
              color={Theme.white}
              size={Theme.iconSizeSm}
              name={"plus"}
              style={{ right: Theme.wp("1%") }}
            />
            <Text
              style={{
                ...styles.txtLabel,
                color: props.txtColor,
                fontWeight: "600",
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        </>
      ) : borderBtnMedium === true ? (
        <TouchableOpacity
          style={{
            ...styles.btnBorder,
            ...btnStyle,
            alignSelf: alignSelf,
            backgroundColor: props.BGcolor,
          }}
          onPress={onPress}
        >
          <Text
            style={{
              ...styles.txtLabel,
              color: props.txtColor,
              fontSize: fSize,
            }}
          >
            {label}
          </Text>
        </TouchableOpacity>
      ) : null}
    </>
  );
};
export default Buttons;
