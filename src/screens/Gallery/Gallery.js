import React, { useEffect, useState } from "react";
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
import { COLORS, FONTS, Theme } from "../../utils/Theme";
import Headers from "../../components/Headers/Headers";
import styles from "./Style";
import IMAGES from "../../assets/images";
import GalleryFL from "../../components/FlatLists/GalleryFL";

const Gallery = ({ navigation }) => {
  const [isVideos, setIsVideos] = useState(false);
  return (
    <View style={styles.mainView}>
      <Headers mainHeader={true} onMenuPress={() => navigation.openDrawer()} />
      <View style={{ alignItems: "center", marginVertical: Theme.hp("2%") }}>
        <Text allowFontScaling={false} style={styles.txtHeading}>
          Gallery
        </Text>
      </View>
      <View style={styles.tabBtnView}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={{
            ...styles.tabBtn,
            backgroundColor: !isVideos ? COLORS.primary : COLORS.lightGreish,
          }}
          onPress={() => setIsVideos(false)}
        >
          <Text
            allowFontScaling={false}
            style={{
              ...styles.txtTabBtn,
              color: !isVideos ? COLORS.white : COLORS.black,
            }}
          >
            Pictures
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={{
            ...styles.tabBtn,
            backgroundColor: isVideos ? COLORS.primary : COLORS.lightGreish,
          }}
          onPress={() => setIsVideos(true)}
        >
          <Text
            allowFontScaling={false}
            style={{
              ...styles.txtTabBtn,
              color: isVideos ? COLORS.white : COLORS.black,
            }}
          >
            Videos
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.innerMain}>
        <GalleryFL isVideos={isVideos} />
        {/* <FlatList
          data={["", "", "", "", "", "", "", "", "", "", "", "", "", ""]}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  marginTop: Theme.hp("1%"),
                  width: "48.5%",
                  height: Theme.hp("10.4%"),
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: COLORS.lightGreish,
                  borderRadius: 5,
                }}
              >
                <Image
                  source={isVideos ? IMAGES.video : IMAGES.picture}
                  style={{ width: Theme.wp("14%"), height: Theme.hp("5.2%") }}
                  resizeMode="center"
                />
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        /> */}
      </View>
    </View>
  );
};

export default Gallery;
