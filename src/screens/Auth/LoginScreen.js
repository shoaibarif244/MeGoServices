import { View, Text, Image, Alert } from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { COLORS, FONTS, Theme } from "../../utils/Theme";
import IMAGES from "../../assets/images";
import SwitchToggle from "react-native-switch-toggle";
import Buttons from "../../components/Buttons/Buttons";
import TextInputs from "../../components/TextInputs/TextInputs";
import styles from "./Style";
import ImageCropPicker from "react-native-image-crop-picker";
import axios from "axios";
import { useEffect } from "react";
import RadioButtonRN from "radio-buttons-react-native";
import { saveUserOtp } from "../../services/apis";
import Modals from "../../components/Modals/Modals";
import {
  isValidPhoneNumFor_PK,
  isValidPhoneNumFor_UAE,
} from "../../utils/Helpers";

const LoginScreen = ({ navigation }) => {
  const data = [
    {
      label: "Customer",
      value: "customer",
    },
    {
      label: "Provider",
      value: "provider",
    },
  ];
  const [isUAE, setIsUAE] = useState(false);
  const [phoneNum, setPhoneNum] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [userType, setUserType] = useState("customer");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setCountryCode(isUAE ? "+971" : "+92");
    setPhoneNum("");
  }, [isUAE]);
  const toggleSwitch = () => {
    setIsUAE((previousState) => !previousState);
  };

  const onTextChange = (text) => {
    let cleaned = text.replace(/\D/g, "");
    // let reg = isUAE
    //   ? /^(?:\+971|00971|0)(?:2|3|4|6|7|9|50|51|52|55|56)[0-9]{7}$/
    //   : /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/;
    // let isValid = reg.test(cleaned);
    // console.log(cleaned, isValid);
    setPhoneNum(cleaned);
  };
  const uploadImage = async (image) => {
    try {
      let formData = new FormData();
      formData.append("sliderUrl", "acasdasdsb.com");
      formData.append("slider", {
        uri: image?.path,
        name: "image.jpg",
        type: image?.mime,
      });
      const response = await axios.post("sliders/saveSlider", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2FmZWEyMDNjZTZhMzMyNTdkMTFiNjAiLCJwaG9uZU5vIjoiKzkyMzAwNzYwMzEwNTgiLCJvdHAiOjY5MzYsImlhdCI6MTY3NDUwMTE1Nn0.sm4LlASBcGbsNq6CqKkn8MelEQyq_GUwRm4KHeMWRz4",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log("Err img upload", JSON.stringify(error));
    }
  };
  const pickImage = () => {
    ImageCropPicker.openCamera({
      cropping: true,
      freeStyleCropEnabled: true,
      compressImageQuality: 0.5,
    })
      .then((image) => {
        console.log("IMAGE FROM CAMERA===>>>", image);
        uploadImage(image);
      })
      .catch((e) => console.log(e.message));
  };
  const sendOTP = () => {
    let numWithCountryCode = countryCode + phoneNum;
    let data = {
      phoneNo: numWithCountryCode,
      userType: userType,
    };
    if (isUAE) {
      if (isValidPhoneNumFor_UAE(numWithCountryCode)) {
        saveUserOtp(data, navigation, setIsLoading);
      } else {
        Alert.alert("WRONG UAE NUMBER!!!", "Enter a valid UAE Phone Number");
      }
    } else {
      if (isValidPhoneNumFor_PK(numWithCountryCode)) {
        saveUserOtp(data, navigation, setIsLoading);
      } else {
        Alert.alert("WRONG PK NUMBER!!!", "Enter a valid PK Phone Number");
      }
    }

    // navigation.navigate("OTPScreen", { values: data });
  };
  return (
    <KeyboardAwareScrollView style={{ backgroundColor: COLORS.white }}>
      <Modals
        loaderIndicator
        modalVisible={isLoading}
        label={"Sending OTP..."}
      />
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
                borderColor: !isUAE ? COLORS.secondary : COLORS.lightGrey,
              }}
            />

            <SwitchToggle
              switchOn={isUAE}
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
                borderColor: isUAE ? COLORS.secondary : COLORS.lightGrey,
              }}
            />
          </View>

          <View style={{ alignItems: "center", marginTop: Theme.hp("4%") }}>
            <TextInputs
              placeholder=""
              phoneNum={true}
              keyboardType={"phone-pad"}
              country={isUAE}
              value={phoneNum}
              onChangeText={(val) => {
                onTextChange(val);
              }}
            />
            <RadioButtonRN
              style={{ flexDirection: "row", marginTop: Theme.hp("1%") }}
              data={data}
              animationTypes={["pulse"]}
              initial={1}
              circleSize={Theme.txtSmallest}
              box={false}
              selectedBtn={(e) => setUserType(e?.value)}
              activeColor={COLORS.secondary}
              boxStyle={{ flex: 1, alignItems: "center" }}
              textStyle={{
                fontFamily: FONTS.semiBold,
                fontSize: Theme.txtSmallestt,
                color: COLORS.black,
              }}
            />
            <Buttons
              btnMedium={true}
              label={"Next"}
              txtColor={COLORS.txtWhite}
              BGcolor={COLORS.primary}
              btnStyle={{ marginTop: Theme.hp("4%") }}
              onPress={() => sendOTP()}
            />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
