import React from "react";
import { View, FlatList, Image, StyleSheet } from "react-native";
import IMAGES from "../../assets/images";
import { COLORS, Theme } from "../../utils/Theme";

const GalleryFL = (props) => {
  const { isVideos } = props;
  const renderItem = (item) => {
    return (
      <View style={styles.mediaView}>
        <View style={styles.imgView}>
          <Image
            source={isVideos ? IMAGES.video : IMAGES.picture}
            style={styles.img}
            resizeMode="center"
          />
        </View>
      </View>
    );
  };
  return (
    <FlatList
      data={["", "", "", "", "", "", "", "", "", "", "", "", "", ""]}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => renderItem(item)}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
const styles = StyleSheet.create({
  mediaView: {
    marginTop: Theme.hp("1%"),
    width: "48.5%",
    height: Theme.hp("10.4%"),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.lightGreish,
    borderRadius: 5,
  },
  imgView: { width: Theme.wp("14%"), height: Theme.hp("5.2%") },
  img: { width: "100%", height: "100%" },
});
export default GalleryFL;
