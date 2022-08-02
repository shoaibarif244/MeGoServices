import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import Theme from "../../Utils/Theme";
import styles from "./Style";

const NotificationFL = (props) => {
  const { navigation, data } = props;

  return (
    <>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <>
              <TouchableOpacity
                style={{
                  width: Theme.width,
                  padding: Theme.wp("2%"),
                  alignItems: "center",
                  backgroundColor: Theme.white,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                // onPress={() => navigation.navigate("")}
              >
                <View style={{ width: Theme.wp("5%"), flexDirection: "row" }}>
                  <Image
                    source={item.imgProfile}
                    style={{
                      width: Theme.wp("12%"),
                      height: Theme.hp("6%"),
                      borderRadius: 50,
                    }}
                    resizeMode="center"
                  />

                  <View
                    style={{ marginHorizontal: 10, width: Theme.wp("65%") }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.txtAmount}>
                        {item.name}
                        <Text style={styles.txtDesc}>{item.content}</Text>
                      </Text>
                    </View>
                    <Text>{item.date}</Text>
                  </View>
                </View>
                <Image
                  source={require("../../Assets/menuDots.png")}
                  resizeMode="center"
                  style={{
                    width: Theme.wp("6%"),
                    height: Theme.hp("3%"),
                  }}
                />
              </TouchableOpacity>
            </>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
};
export default NotificationFL;
