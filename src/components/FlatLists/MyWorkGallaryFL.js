import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import Theme from "../../Utils/Theme";
import styles from "./Style";

const MyWorkGallaryFL = (props) => {
  const { navigation, data } = props;

  return (
    <>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        renderItem={({ item, index }) => {
          return (
            <View>
              <View style={styles.wrapImgMyWork}>

              <Image source={item.img } style={styles.imgStar} />
              </View>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
};
export default MyWorkGallaryFL;
