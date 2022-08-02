import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Theme from "../../Utils/Theme";
import styles from "./Style";

const TeamsFL = (props) => {
  const { navigation, data } = props;

  return (
    <>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.wrapFLBtn}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: Theme.gray1,
                    fontSize: Theme.txtMedium,
                    fontWeight: "600",
                  }}
                >
                  {item.teamName}
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text
                    style={{
                      color: Theme.gray1,
                      fontSize: Theme.txtSmall,
                      fontWeight: "600",
                    }}
                  >
                    {item.teamMembers}
                  </Text>
                  <View
                    style={{
                      height: 15,
                      width: 15,
                      borderRadius: 15,
                      backgroundColor: item.selected
                        ? Theme.white
                        : Theme.primary,
                      borderWidth: 1,
                      borderColor: item.selected ? Theme.gray1 : Theme.primary,
                      marginLeft: Theme.wp(4),
                    }}
                  />
                </View>
              </View>
              <View style={{ marginTop: Theme.hp("2%") }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {item.profileImages.map((img, index) => {
                    return (
                      <Image
                        source={img}
                        style={{
                          height: Theme.hp("7%"),
                          width: Theme.wp("14%"),
                          marginHorizontal: 3,
                          borderRadius: 5,
                        }}
                      />
                    );
                  })}
                </ScrollView>
              </View>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
};
export default TeamsFL;
