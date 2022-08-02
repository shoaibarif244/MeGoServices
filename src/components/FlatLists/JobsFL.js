import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "../../Utils/Exports";
import Theme from "../../Utils/Theme";
import Stars from "react-native-stars";
import styles from "./Style";

const JobsFL = (props) => {
  const { navigation, data } = props;

  return (
    <>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.wrapBox}>
              <Text style={styles.txtTitle}>{item.title}</Text>
              <Text style={{ ...styles.txtDesc, marginTop: Theme.hp("2%") }}>
                {item.desc}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: Theme.hp("2%"),
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Stars
                    display={item.starsQty}
                    spacing={1}
                    count={5}
                    starSize={Theme.iconSizeSm}
                    fullStar={
                      <AntDesign
                        name={"star"}
                        size={Theme.iconSizeSm}
                        color={"#F2B916"}
                      />
                    }
                    emptyStar={
                      <AntDesign
                        name={"staro"}
                        size={Theme.iconSizeSm}
                        color={"#F2B916"}
                      />
                    }
                  />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      height: Theme.wp("5%"),
                      width: Theme.wp("5%"),
                      right: Theme.wp("1%"),
                    }}
                  >
                    <Image
                      source={item.profilePic}
                      style={{ width: "100%", height: "100%" }}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={styles.txtPostBy}>{item.postedBY}</Text>
                </View>
                <Text
                  style={{
                    ...styles.txtDate,
                    marginTop: "0%",
                    bottom: Theme.hp(".5%"),
                  }}
                >
                  {item.date}
                </Text>
              </View>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
};
export default JobsFL;
