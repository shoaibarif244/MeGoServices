import React, { useRef, useState } from "react";
import { View, Image, Text } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import IMAGES from "../../assets/images";
import { COLORS, Theme } from "../../utils/Theme";
import styles from "./Style";
import Buttons from "../../components/Buttons/Buttons";

const OnBoardingSlider = ({ navigation }) => {
  const sliderRef = useRef();
  const [index, setIndex] = useState(1);
  const slides = [
    {
      key: "one",
      text: "We provide\nprofessional services\nat friendly prices",
      image: IMAGES.onBoarding1,
    },
    {
      key: "two",
      text: "The best results and\nyour satisfaction is our\ntop priority",
      image: IMAGES.onBoarding2,
    },
    {
      key: "three",
      text: "Let’s make awesome\nchanges to your home",
      image: IMAGES.onBoarding3,
    },
  ];
  const _renderItem = ({ item }) => {
    return (
      <View style={styles.renderItem}>
        <Image source={item.image} style={styles.silderImage} />
        <Text allowFontScaling={false} style={styles.silderText}>
          {item.text}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.sliderView}>
        <AppIntroSlider
          ref={sliderRef}
          renderItem={_renderItem}
          data={slides}
          bottomButton
          activeDotStyle={styles.activeDot}
          dotStyle={styles.dot}
          onSlideChange={(a) => {
            a == 0 ? setIndex(1) : setIndex(a + 1);
          }}
          renderNextButton={() => {
            return (
              <View style={{ alignItems: "center" }}>
                <Buttons
                  btnMedium={true}
                  label={"Next"}
                  txtColor={COLORS.txtWhite}
                  BGcolor={COLORS.primary}
                  btnStyle={{ width: Theme.wp("46%"), borderRadius: 60 }}
                  onPress={() => {
                    sliderRef.current.goToSlide(index);
                    setIndex(index + 1);
                  }}
                />
              </View>
            );
          }}
          renderDoneButton={() => {
            return (
              <View style={{ alignItems: "center" }}>
                <Buttons
                  btnMedium={true}
                  label={"Done"}
                  txtColor={COLORS.txtWhite}
                  BGcolor={COLORS.primary}
                  btnStyle={{ width: Theme.wp("46%"), borderRadius: 60 }}
                  onPress={() => {
                    navigation.replace("LoginScreen");
                  }}
                />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default OnBoardingSlider;
