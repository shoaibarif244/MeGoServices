// import React, { useState } from "react";
// import { View } from "react-native";
// import SlideToConfirm from "rn-slide-to-confirm";
// import { COLORS, FONTS, Theme } from "../../../utils/Theme";
// import { Foundation } from "../../../utils/Exports";
// const ProviderMainPage = () => {
//   const [isOnline, setIsOnline] = useState(false);

//   return (
//     <View style={{ alignItems: "center", justifyContent: "center" }}>
//       <SlideToConfirm
//         unconfimredTipText={"Slide to Online"}
//         unconfirmedTipTextStyle={{
//           color: COLORS.black,
//           fontSize: Theme.txtMedium,
//           fontFamily: FONTS.bold,
//         }}
//         confirmedTipText={"Slide to Offline"}
//         confirmedTipTextStyle={{
//           color: COLORS.white,
//           fontSize: Theme.txtMedium,
//           fontFamily: FONTS.bold,
//         }}
//         state={isOnline}
//         onSlideConfirmed={() => setIsOnline(true)}
//         onSlideEnd={() => setIsOnline(false)}
//         sliderStyle={{
//           backgroundColor: isOnline ? COLORS.secondary : COLORS.white,
//           justifyContent: "center",
//           width: Theme.wp("75%"),
//           height: Theme.wp("10.5%"),
//           borderWidth: 1,
//           borderColor: COLORS.secondary,
//           borderRadius: 20,
//           marginTop: 150,
//           //   overflow: "hidden",
//         }}
//         sliderButtonComponent={
//           <View
//             style={{
//               width: Theme.wp("10%"),
//               height: Theme.wp("10%"),
//               alignItems: "center",
//               justifyContent: "center",
//               backgroundColor: isOnline ? COLORS.white : COLORS.secondary,
//               borderRadius: 40,
//             }}
//           >
//             <Foundation
//               name={isOnline ? "arrow-left" : "arrow-right"}
//               size={Theme.iconSizeS}
//               color={isOnline ? COLORS.secondary : COLORS.white}
//             />
//           </View>
//         }
//       />
//     </View>
//   );
// };

// export default ProviderMainPage;
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import SlideToConfirm from "rn-slide-to-confirm";
import { ImageSlider } from "react-native-image-slider-banner";
import { COLORS, FONTS, Theme } from "../../../utils/Theme";
import { Foundation } from "../../../utils/Exports";
import IMAGES from "../../../assets/images";
import Headers from "../../../components/Headers/Headers";
import styles from "./Style";
import Buttons from "../../../components/Buttons/Buttons";
const ProviderMainPage = ({ navigation }) => {
  const images = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU",
    },
    {
      img: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
    },
    {
      img: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg",
    },
  ];
  const [isOnline, setIsOnline] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  useEffect(() => {
    navigation.openDrawer();
    setTimeout(() => {
      setIsVerified(true);
    }, 4000);
  });
  return (
    <View style={styles.mainView}>
      <Headers mainHeader={true} onMenuPress={() => navigation.openDrawer()} />
      <ImageBackground
        source={IMAGES.mapBg}
        style={{ ...StyleSheet.absoluteFill, zIndex: -2 }}
        blurRadius={isOnline ? 0 : 5}
      />
      {isVerified && (
        <View style={styles.sliderContainer}>
          <ImageSlider
            data={images}
            autoPlay={true}
            // onItemChanged={(item) => console.log("item", item)}
            timer={2000}
            closeIconColor={COLORS.white}
            caroselImageContainerStyle={styles.caroselImageContainerStyle}
            caroselImageStyle={{ width: Theme.width }}
            inActiveIndicatorStyle={{ backgroundColor: COLORS.primary }}
            activeIndicatorStyle={{ backgroundColor: COLORS.secondary }}
            indicatorContainerStyle={{ ...Theme.shadow }}
          />
        </View>
      )}
      <View style={styles.innerMain}>
        {!isVerified && (
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
            }}
          >
            <Text></Text>
            <Text
              style={{
                fontSize: Theme.txtExtraLarge1,
                fontFamily: FONTS.bold,
                color: COLORS.black,
                textAlign: "center",
              }}
            >
              Under{"\n"}Verification
            </Text>
            <Buttons
              btnMedium={true}
              label={"Contact Us"}
              txtColor={COLORS.txtWhite}
              BGcolor={COLORS.secondary}
              //   btnStyle={{ alignSelf: "center" }}
              //   onPress={() => navigation.navigate("ProviderMainPage")}
            />
          </View>
        )}
        {isVerified && (
          <View
            style={{
              position: "absolute",
              bottom: 0,
              alignSelf: "center",
            }}
          >
            <SlideToConfirm
              unconfimredTipText={"Slide to Online"}
              unconfirmedTipTextStyle={{
                color: COLORS.black,
                fontSize: Theme.txtMedium,
                fontFamily: FONTS.bold,
              }}
              confirmedTipText={"Slide to Offline"}
              confirmedTipTextStyle={{
                color: COLORS.white,
                fontSize: Theme.txtMedium,
                fontFamily: FONTS.bold,
              }}
              state={isOnline}
              onSlideConfirmed={() => setIsOnline(true)}
              onSlideEnd={() => setIsOnline(false)}
              sliderStyle={{
                backgroundColor: isOnline ? COLORS.secondary : COLORS.white,
                justifyContent: "center",
                width: Theme.wp("75%"),
                height: Theme.wp("10.5%"),
                borderWidth: 1,
                borderColor: COLORS.secondary,
                borderRadius: 20,
                marginTop: 150,
                overflow: "hidden",
              }}
              sliderButtonComponent={
                <View
                  style={{
                    width: Theme.wp("10%"),
                    height: Theme.wp("10%"),
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: isOnline ? COLORS.white : COLORS.secondary,
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: COLORS.secondary,
                  }}
                >
                  <Foundation
                    name={isOnline ? "arrow-left" : "arrow-right"}
                    size={Theme.iconSizeS}
                    color={isOnline ? COLORS.secondary : COLORS.white}
                  />
                </View>
              }
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default ProviderMainPage;
