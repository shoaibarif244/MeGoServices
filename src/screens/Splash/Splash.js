import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import IMAGES from "../../assets/images";
import styles from "./Style";
import Icon from "react-native-vector-icons/AntDesign";
import { COLORS, FONTS } from "../../utils/Theme";
const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      // navigation.replace('RegisterAs');
      // navigation.replace("OnBoarding");
    }, 3000);
  }, []);

  return (
    <View style={styles.MainView}>
      <View style={styles.imgSplashWrap}>
        <Image
          source={IMAGES.logoFull}
          style={styles.imgSplash}
          resizeMode={"center"}
        />
        <Icon name="plus" size={30} color={COLORS.primary} />
        <Text>Splash</Text>
        <Text style={{ fontFamily: FONTS.medium }}>Splash</Text>
      </View>
    </View>
  );
};
export default Splash;
