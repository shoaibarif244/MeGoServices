import { View, Text, Image } from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import IMAGES from "../../../assets/images";
import { COLORS, Theme } from "../../../utils/Theme";
import styles from "./Style";
import Buttons from "../../../components/Buttons/Buttons";
const MembershipCongrats = ({ navigation }) => {
  return (
    <KeyboardAwareScrollView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <View style={styles.mainView}>
        <View style={styles.innerMain}>
          <View style={{ marginTop: Theme.hp("6%"), alignItems: "center" }}>
            <Image source={IMAGES.congrats} style={styles.silderImage} />

            <Text style={styles.txtHeading}>Congratulations</Text>
            <Text style={styles.serviceName}>
              Your account has been created, our technical team will review the
              details provided by you during the registration process. If
              everything is ok, your account will be approved and we will inform
              you so that you can start using our services.
            </Text>
          </View>

          <Buttons
            btnMedium={true}
            label={"Next"}
            txtColor={COLORS.txtWhite}
            BGcolor={COLORS.primary}
            btnStyle={{ marginTop: Theme.hp("6%") }}
            onPress={() => navigation.navigate("DrawerNavigator")}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default MembershipCongrats;
