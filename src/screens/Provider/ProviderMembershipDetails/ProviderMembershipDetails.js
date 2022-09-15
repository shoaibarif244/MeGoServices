import { View, Text } from "react-native";
import React from "react";
import PhoneInput from "react-native-phone-number-input";
import styles from "./Style";
import { COLORS, FONTS, Theme } from "../../../utils/Theme";
const ProviderMembershipDetails = () => {
  return (
    <View>
      <Text>ProviderMembershipDetails</Text>
      <View style={styles.txtContainer}>
        <Text style={styles.text}>Mobile Number</Text>
        <PhoneInput
          defaultCode="US"
          layout="first"
          placeholder="(405) 123 - 4567"
          containerStyle={styles.phoneInputContainer}
          textContainerStyle={{
            borderRadius: 7,
            paddingVertical: 0,
            backgroundColor: COLORS.white,
          }}
          textInputStyle={{
            fontFamily: FONTS.regular,
            textAlignVertical: "bottom",
            fontSize: Theme.txtSmall,
          }}
        />
      </View>
    </View>
  );
};

export default ProviderMembershipDetails;
