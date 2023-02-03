import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useRef, useState } from "react";
import PhoneInput from "react-native-phone-number-input";
import styles from "./Style";
import { COLORS, FONTS, Theme } from "../../../utils/Theme";
import TextInputs from "../../../components/TextInputs/TextInputs";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Buttons from "../../../components/Buttons/Buttons";
import ImageCropPicker from "react-native-image-crop-picker";
import { useSelector } from "../../../redux/store";
const MembershipDetails = ({ navigation, route }) => {
  const { providerReducer } = useSelector((state) => state);

  const ref_PhoneInput = useRef();
  const [selectedCountry, setSelectedCountry] = useState("PK");
  const [ownImg, setOwnImg] = useState(null);
  const [shopImg, setShopImage] = useState(null);
  const chooseProfilePic = (field) => {
    ImageCropPicker.openPicker({
      cropping: true,
    })
      .then((image) => {
        field === "own" ? setOwnImg(image) : setShopImage(image);
        console.log(image);
      })
      .catch((error) =>
        console.log("ERROR in ImageCropPicker.openPicker()", error)
      );
  };
  return (
    <KeyboardAwareScrollView style={{ backgroundColor: COLORS.white }}>
      <View style={styles.mainView}>
        <View style={styles.innerMain}>
          <View style={{ marginTop: Theme.hp("4%"), alignItems: "center" }}>
            <Text style={styles.txtHeading}>Providers Registration</Text>
          </View>
          <View style={{ marginTop: Theme.hp("1%") }}>
            <Text style={styles.txtTitle}>Full Name</Text>
            <TextInputs
              placeholder="Full Name"
              simpleTxtInput={true}
              // value={phoneNum}
              // onChangeText={(val) => {
              //   onTextChange(val);
              // }}
            />
          </View>

          <View style={styles.txtContainer}>
            <Text style={styles.txtTitle}>Mobile Number</Text>
            <PhoneInput
              ref={ref_PhoneInput}
              defaultCode="PK"
              disabled
              layout="first"
              countryPickerProps={{ countryCodes: ["PK", "AE"] }}
              onChangeCountry={(country) => setSelectedCountry(country.cca2)}
              placeholder={
                selectedCountry == "AE" ? "05X XXX XXXX" : "3XX YYYYYYY"
              }
              containerStyle={styles.phoneInputContainer}
              textContainerStyle={styles.textContainerStyle}
              textInputStyle={styles.textInputStyle}
              codeTextStyle={styles.codeTextStyle}
              value={
                providerReducer?.country === "PAKISTAN"
                  ? providerReducer?.phoneNo?.slice(3)
                  : providerReducer?.phoneNo?.slice(4)
              }
            />
          </View>
          <View style={{ marginTop: Theme.hp("1%") }}>
            <Text style={styles.txtTitle}>Email Address</Text>
            <TextInputs
              placeholder="Email Address"
              simpleTxtInput={true}
              // value={phoneNum}
              // onChangeText={(val) => {
              //   onTextChange(val);
              // }}
            />
          </View>
          <View style={{ marginTop: Theme.hp("1%") }}>
            <Text style={styles.txtTitle}>Name of Guarantor</Text>
            <TextInputs
              placeholder="Name of Guarantor"
              simpleTxtInput={true}
              // value={phoneNum}
              // onChangeText={(val) => {
              //   onTextChange(val);
              // }}
            />
          </View>
          <View style={{ marginTop: Theme.hp("1%") }}>
            <Text style={styles.txtTitle}>Number of Guarantor</Text>
            <TextInputs
              placeholder="Number of Guarantor"
              simpleTxtInput={true}
              // value={phoneNum}
              // onChangeText={(val) => {
              //   onTextChange(val);
              // }}
            />
          </View>
          <View style={styles.uploadView}>
            <View style={{ width: "37%" }}>
              <Text style={styles.txtTitle}>Your Photo</Text>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.uploadContainer}
                onPress={() => chooseProfilePic("own")}
              >
                {ownImg ? (
                  <Image
                    source={{ uri: ownImg?.path }}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 6,
                    }}
                    resizeMode="cover"
                  />
                ) : (
                  <Text style={styles.txtUpload}>Upload Your Photo</Text>
                )}
              </TouchableOpacity>
            </View>
            <View style={{ width: "58%" }}>
              <Text style={styles.txtTitle}>Shop Image</Text>

              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.uploadContainer}
                onPress={() => chooseProfilePic("shop")}
              >
                {shopImg ? (
                  <Image
                    source={{ uri: shopImg?.path }}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 6,
                    }}
                    resizeMode="cover"
                  />
                ) : (
                  <Text style={styles.txtUpload}>
                    Provider Shop image or wallpaper
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.termsView}>
            <BouncyCheckbox
              size={22}
              fillColor={COLORS.primary}
              unfillColor={COLORS.lightGreish}
              iconStyle={{ borderRadius: 5 }}
              innerIconStyle={styles.innerIconStyle}
            />
            <Text style={styles.txtAgree}>I agree </Text>
            <TouchableOpacity>
              <Text style={styles.txtTerms}>terms and conditions</Text>
            </TouchableOpacity>
          </View>
          <Buttons
            btnMedium={true}
            label={"Next"}
            txtColor={COLORS.txtWhite}
            BGcolor={COLORS.primary}
            btnStyle={{ marginTop: Theme.hp("2%") }}
            onPress={() =>
              shopImg == null || ownImg == null
                ? Alert.alert(
                    "Required Field!!!",
                    "Must upload/select your own photo & shop image"
                  )
                : navigation.navigate("MembershipIDUpload", {
                    values: {
                      fullName: "Shoaib",
                      phoneNo:
                        ref_PhoneInput.current?.getNumberAfterPossiblyEliminatingZero()
                          ?.formattedNumber,
                      email: "shoaibarif@gmail.com",
                      guarantorName: "Khan",
                      guarantorPhoneNum: "+923001234567",
                      profileImg: ownImg,
                      shopImg: shopImg,
                      isTerms: true,
                    },
                  })
            }
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default MembershipDetails;
