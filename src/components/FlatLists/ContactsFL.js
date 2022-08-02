import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import Theme from "../../Utils/Theme";
import styles from "./Style";
import Stars from "react-native-stars";
import { AntDesign } from "../../Utils/Exports";
const ContactsFL = (props) => {
  const { navigation, data } = props;

  return (
    <>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.wrapFLBtn}>
              <View style={styles.flexRow}>
                <View style={{ width: "20%" }}>
                  <View style={styles.wrapImgProfile1}>
                    <Image
                      source={item.imgProfile}
                      style={styles.imgProfile}
                      resizeMode={"center"}
                    />
                  </View>
                </View>

                <View style={styles.flex80}>
                  <View style={{ width: "60%" }}>
                    <Text style={styles.txtName}>{item.name}</Text>

                    <Text style={styles.txtDesignation}>
                      {item.designation}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "18%",
                      justifyContent: "space-between",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    {item.fav === true ? (
                      <View
                        style={{
                          width: "100%",
                          justifyContent: "space-between",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Stars
                          display={1}
                          count={1}
                          starSize={Theme.iconSizeSm}
                          fullStar={
                            <AntDesign
                              name={"star"}
                              size={Theme.iconSizeSm}
                              color={"#F2B916"}
                            />
                          }
                        />
                        <Image
                          source={require("../../Assets/verticalMenu.png")}
                          style={{
                            width: Theme.iconSizeSm,
                            height: Theme.iconSizeSm,
                          }}
                          resizeMode="center"
                        />
                      </View>
                    ) : (
                      <View
                        style={{
                          height: 15,
                          width: 15,
                          borderRadius: 15,
                          backgroundColor:
                            item.status === "Paid"
                              ? Theme.white
                              : Theme.primary,
                          borderWidth: 1,
                          borderColor:
                            item.status === "Paid"
                              ? Theme.gray1
                              : Theme.primary,
                        }}
                      />
                    )}
                  </View>
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
};
export default ContactsFL;
