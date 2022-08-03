import React, { useEffect } from "react";
import { View, Image, Text } from "react-native";
import IMAGES from "../../assets/images";
import styles from "./Style";
import Icon from "react-native-vector-icons/AntDesign";
import { COLORS, FONTS } from "../../utils/Theme";
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      // alert("2nd Screen");
      // navigation.replace("OnBoarding");
    }, 3000);
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
