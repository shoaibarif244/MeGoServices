import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { COLORS, Theme } from "../../utils/Theme";
import IMAGES from "../../assets/images";
import SwitchToggle from "react-native-switch-toggle";
import Buttons from "../../components/Buttons/Buttons";
import TextInputs from "../../components/TextInputs/TextInputs";
import styles from "./Style";
const LoginScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  let number;
  const [phoneNum, setPhoneNum] = useState("");
  const onTextChange = (text) => {
    let cleaned = ("" + text).replace(/\D/g, "");
    console.log(cleaned);
    let match = isEnabled
      ? cleaned.match(
          /^(?:\+971|00971|0)(?:2|3|4|6|7|9|50|51|52|55|56)[0-9]{7}$/
        )
      : cleaned.match(/^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/);
    console.log(match);
    if (match) {
      // let intlCode = match[1] ? "+1 " : "",
      // alert(JSON.stringify(match[2]));
      // number = ["(", match[2], ") ", match[3], "-", match[4]].join("");
      number = [match[3], "-", match[4]].join("");
      setPhoneNum(number);
      console.log(number);
      return;
    }
    setPhoneNum(number);
  };
  return (
    <KeyboardAwareScrollView style={{ backgroundColor: COLORS.white }}>
      <View style={styles.mainView}>
        <View style={styles.innerMain}>
          <View style={styles.indicatorConatiner}>
            <View style={styles.filled} />
            <View style={styles.unFilled} />
          </View>
          <Image source={IMAGES.logo} style={styles.logo} />
          <Text allowFontScaling={false} style={styles.title}>
            Enter your mobile number to Login
          </Text>
          <View style={styles.countryContainer}>
            <Image
              source={IMAGES.flagPK}
              style={{
                ...styles.flag,
                borderColor: !isEnabled ? COLORS.secondary : COLORS.lightGrey,
              }}
            />

            <SwitchToggle
              switchOn={isEnabled}
              onPress={toggleSwitch}
              containerStyle={styles.switchCont}
              circleStyle={styles.switchCircle}
              circleColorOff={COLORS.secondary}
              circleColorOn={COLORS.secondary}
              backgroundColorOn={COLORS.lightGreish}
              backgroundColorOff={COLORS.lightGreish}
              duration={100}
            />
            <Image
              source={IMAGES.flagUAE}
              style={{
                ...styles.flag,
                borderColor: isEnabled ? COLORS.secondary : COLORS.lightGrey,
              }}
            />
          </View>

          <View style={{ alignItems: "center", marginTop: Theme.hp("4%") }}>
            <TextInputs
              placeholder=""
              phoneNum={true}
              keyboardType={"phone-pad"}
              country={isEnabled}
              value={phoneNum}
              onChangeText={(val) => {
                onTextChange(val);
              }}
            />
            {/* 
              FORMAT UAE NUMBER
              /^(?:\+971|00971|0)(?:2|3|4|6|7|9|50|51|52|55|56)[0-9]{7}$/
              .test("041234567")
              FORMAT PAKISTAN NUMBER
               /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/
            */}
            <Buttons
              btnMedium={true}
              label={"Next"}
              txtColor={COLORS.txtWhite}
              BGcolor={COLORS.primary}
              btnStyle={{ marginTop: Theme.hp("4%") }}
              onPress={() => {
                navigation.navigate("OTPScreen");
              }}
            />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
