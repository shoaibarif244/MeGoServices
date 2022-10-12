import {
  View,
  Text,
  Image,
  Animated,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { COLORS, FONTS, Theme } from "../../utils/Theme";
import IMAGES from "../../assets/images";
import Buttons from "../../components/Buttons/Buttons";
import styles from "./Style";

const { Value, Text: AnimatedText } = Animated;

const CELL_COUNT = 4;
const CELL_SIZE = Theme.wp("13%");
const CELL_BORDER_RADIUS = 8;
const DEFAULT_CELL_BG_COLOR = COLORS.white;
const NOT_EMPTY_CELL_BG_COLOR = COLORS.primary;
const ACTIVE_CELL_BG_COLOR = "#CFE5F2";

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));

const animateCell = ({ hasValue, index, isFocused }) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      //   duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
      //   duration: hasValue ? 300 : 250,
    }),
  ]).start();
};

const OTPScreen = ({ navigation }) => {
  const [OTP, setValue] = useState("");
  const ref = useBlurOnFulfill({ OTP, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    OTP,
    setValue,
  });

  const renderCell = ({ index, symbol, isFocused }) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          }),
      borderRadius: animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
      }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
          }),
        },
      ],
    };

    // Run animation on next event loop tik
    // Because we need first return new style prop and then animate this value
    setTimeout(() => {
      animateCell({ hasValue, index, isFocused });
    }, 0);

    return (
      <AnimatedText
        key={index}
        style={[styles.cell, animatedCellStyle]}
        onLayout={getCellOnLayoutHandler(index)}
      >
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };

  // Hiding KeyBoard when OTP entered
  OTP.length === 4 && Keyboard.dismiss();

  return (
    <KeyboardAwareScrollView style={{ backgroundColor: COLORS.white }}>
      <View style={styles.mainView}>
        <View style={styles.innerMain}>
          <View style={styles.indicatorConatiner}>
            <View style={styles.unFilled} />
            <View style={styles.filled} />
          </View>
          <Image source={IMAGES.logo} style={styles.logo} />
          <Text allowFontScaling={false} style={styles.title}>
            We sent an OTP to verify your number
          </Text>

          <View style={{ alignItems: "center", marginTop: Theme.hp("4%") }}>
            <CodeField
              ref={ref}
              {...props}
              value={OTP}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={renderCell}
            />
            <View style={styles.otpContainer}>
              <Text allowFontScaling={false} style={styles.txtOTP}>
                No OTP?{" "}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  alert(OTP);

                  // navigation.replace("SignupScreen")
                }}
              >
                <Text allowFontScaling={false} style={styles.txtResend}>
                  Resend
                </Text>
              </TouchableOpacity>
            </View>
            <Buttons
              btnMedium={true}
              label={"Verify"}
              txtColor={COLORS.txtWhite}
              BGcolor={COLORS.primary}
              btnStyle={{ marginTop: Theme.hp("6%") }}
              onPress={() => {
                OTP === "0000"
                  ? navigation.navigate("CustomerServices")
                  : OTP === "1111"
                  ? navigation.navigate("MembershipDetails")
                  : alert("Unathorized OTP");
                // navigation.replace("LoginScreen");
              }}
            />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default OTPScreen;
