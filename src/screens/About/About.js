import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Theme } from "../../utils/Theme";
import Headers from "../../components/Headers/Headers";
import styles from "./Style";

const About = ({ navigation }) => {
  return (
    <View style={styles.mainView}>
      <Headers
        mainHeader={true}
        onMenuPress={() => navigation.openDrawer()}
        navigation={navigation}
      />
      <View style={{ alignItems: "center", marginVertical: Theme.hp("2%") }}>
        <Text allowFontScaling={false} style={styles.txtHeading}>
          About
        </Text>
      </View>

      <View style={styles.innerMain}></View>
    </View>
  );
};

export default About;
