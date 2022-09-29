import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Theme } from "../../utils/Theme";
import Headers from "../../components/Headers/Headers";
import styles from "./Style";
import NotificationsFL from "../../components/FlatLists/NotificationsFL";

const Notifications = ({ navigation }) => {
  return (
    <View style={styles.mainView}>
      <Headers mainHeader={true} onMenuPress={() => navigation.openDrawer()} />
      <View style={{ alignItems: "center", marginVertical: Theme.hp("2%") }}>
        <Text allowFontScaling={false} style={styles.txtHeading}>
          Notifications
        </Text>
      </View>

      <View style={styles.innerMain}>
        <NotificationsFL />
      </View>
    </View>
  );
};

export default Notifications;
