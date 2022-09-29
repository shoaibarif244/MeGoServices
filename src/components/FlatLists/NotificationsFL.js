import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import IMAGES from "../../assets/images";
import { COLORS, FONTS, Theme } from "../../utils/Theme";

const NotificationsFL = (props) => {
  const renderItem = (item) => {
    return (
      <TouchableOpacity style={styles.notificationView} activeOpacity={0.8}>
        <View style={styles.imgContainer}>
          <View style={styles.imgView}>
            <Image
              source={IMAGES.picture}
              style={styles.img}
              resizeMode="center"
            />
          </View>
        </View>
        <View style={{ marginLeft: Theme.wp("2%") }}>
          <Text allowFontScaling={false} style={styles.txtNotification}>
            Notification Heading or Title
          </Text>
          <Text allowFontScaling={false} style={styles.txtNotificationTime}>
            00-00-0000 hh:mm PM
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={["", "", "", "", "", "", "", "", "", "", "", "", "", ""]}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => renderItem(item)}
      keyExtractor={(item, index) => index.toString()}
      ListFooterComponent={() => (
        <View style={{ paddingBottom: Theme.hp("3%") }} />
      )}
    />
  );
};
const styles = StyleSheet.create({
  notificationView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Theme.hp("1%"),
    paddingBottom: Theme.hp("0.5%"),
    borderBottomWidth: 1,
    borderColor: COLORS.secondary,
  },
  imgContainer: {
    marginTop: Theme.hp("1%"),
    width: Theme.wp("22%"),
    height: Theme.hp("6%"),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.lightGreish,
    borderRadius: 5,
  },
  imgView: {
    width: Theme.wp("6%"),
    height: Theme.hp("3%"),
  },
  img: { width: "100%", height: "100%" },
  txtNotification: {
    color: COLORS.black,
    fontSize: Theme.txtSmallest,
    fontFamily: FONTS.medium,
  },
  txtNotificationTime: {
    color: COLORS.black,
    fontSize: Theme.txtTiny,
    fontFamily: FONTS.regular,
  },
});
export default NotificationsFL;
