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
  return (
    <KeyboardAwareScrollView style={{ backgroundColor: COLORS.white }}>
      <View style={styles.mainView}>
        <View style={styles.innerMain}>
          <View style={styles.indicatorConatiner}>
            <View style={styles.filled} />
            <View style={styles.unFilled} />
          </View>
          <Image source={IMAGES.logo} style={styles.logo} />
          <Text style={styles.title}>Enter your mobile number to Login</Text>
          <View style={styles.countryContainer}>
            <Image source={IMAGES.flagPK} style={styles.flag} />

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
            <Image source={IMAGES.flagUAE} style={styles.flag} />
          </View>

          <View style={{ alignItems: "center", marginTop: Theme.hp("4%") }}>
            <TextInputs
              placeholder=""
              phoneNum={true}
              keyboardType={"phone-pad"}
              country={isEnabled}
              // value={values.username}
              // onChangeText={(val) => {
              //   setUsername(val);
              // }}
            />

            <Buttons
              btnMedium={true}
              label={"Next"}
              txtColor={COLORS.txtWhite}
              BGcolor={COLORS.primary}
              btnStyle={{ marginTop: Theme.hp("4%") }}
              onPress={() => {
                navigation.replace("OTPScreen");
              }}
            />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
