import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import styles from "./Style";
import { COLORS, FONTS, Theme } from "../../../utils/Theme";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Buttons from "../../../components/Buttons/Buttons";
import ImageCropPicker from "react-native-image-crop-picker";
const MembershipOtherDocs = ({ navigation, route }) => {
  const { values } = route?.params;
  const [technicalDiploma, setTechnicalDiploma] = useState(null);
  const [experienceCertificate, setExperienceCertificate] = useState(null);
  const chooseProfilePic = (field) => {
    ImageCropPicker.openPicker({
      cropping: true,
    })
      .then((image) => {
        field === "technicalDiploma"
          ? setTechnicalDiploma(image)
          : setExperienceCertificate(image);
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
          <View style={{ marginTop: Theme.hp("6%") }}>
            {technicalDiploma && (
              <Text style={styles.txtTitle}>Technical Diploma</Text>
            )}
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.uploadContainer}
              onPress={() => chooseProfilePic("technicalDiploma")}
            >
              {technicalDiploma ? (
                <Image
                  source={{ uri: technicalDiploma?.path }}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 6,
                  }}
                  resizeMode="cover"
                />
              ) : (
                <Text style={styles.txtUpload}>Technical Diploma</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: Theme.hp("2%") }}>
            {experienceCertificate && (
              <Text style={styles.txtTitle}>Experience Certificate</Text>
            )}
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.uploadContainer}
              onPress={() => chooseProfilePic("experienceCertificate")}
            >
              {experienceCertificate ? (
                <Image
                  source={{ uri: experienceCertificate?.path }}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 6,
                  }}
                  resizeMode="cover"
                />
              ) : (
                <Text style={styles.txtUpload}>Experience Certificate</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: Theme.hp("6%") }}>
            <Text style={styles.txtInstructions}>Instructions</Text>
            <Text style={styles.txtInstruction}>
              Upload the pictures of ID Card front and back.
            </Text>
            <Text style={styles.txtInstruction}>
              The pictures must be clear and readable.
            </Text>
            <Text style={styles.txtInstruction}>
              Blury or altered pictures, will be rejected.
            </Text>
          </View>

          <Buttons
            btnMedium={true}
            label={"Next"}
            txtColor={COLORS.txtWhite}
            BGcolor={COLORS.primary}
            btnStyle={{ marginTop: Theme.hp("6%") }}
            onPress={() =>
              navigation.navigate("MembershipChooseService", {
                values: {
                  ...values,
                  experienceCertificate: experienceCertificate,
                  technicalDiploma: technicalDiploma,
                },
              })
            }
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default MembershipOtherDocs;
