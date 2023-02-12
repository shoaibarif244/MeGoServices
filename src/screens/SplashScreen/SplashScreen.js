import React, { useEffect } from "react";
import { View, Image, Text } from "react-native";
import IMAGES from "../../assets/images";
import styles from "./Style";
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("CustomerServices");
      // navigation.replace("OnBoardingSlider");
    }, 2500);
  }, []);

  return (
    <View style={styles.MainView}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.txtWelcome}>Welcome to</Text>
        <Image
          source={IMAGES.logoWithBG}
          style={styles.imgLogo}
          resizeMode={"center"}
        />
      </View>
      <View style={styles.poweredByContainer}>
        <Text style={styles.txtPoweredBy}>Powered by</Text>
        <Image
          source={IMAGES.eyetechLogo}
          style={styles.imgLogo}
          resizeMode={"center"}
        />
      </View>
    </View>
  );
};
export default SplashScreen;
