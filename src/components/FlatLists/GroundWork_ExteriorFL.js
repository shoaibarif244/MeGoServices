import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import Theme from "../../Utils/Theme";
import styles from "./Style";

const GroundWork_ExteriorFL = (props) => {
  const { navigation, data } = props;
  const disable = props?.disable;
  const routeName = props?.routeName ?? "ConstructorDashBoard2";
  return (
    <>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <>
              <TouchableOpacity
                style={styles.wrapFLBtn}
                onPress={() => navigation.navigate(routeName)}
                disabled={disable}
              >
                <View style={styles.flexRow}>
                  <View style={{ width: "20%" }}>
                    <View style={styles.wrapImgProfile1}>
                      <Image
                        source={item.imgProfile}
                        style={styles.imgProfile}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      width: "80%",
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      <Text style={styles.txtName}>{item.name}</Text>
                      <Text style={styles.txtDesignation}>
                        {item.designation}
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        width: "36%",
                      }}
                    >
                      <View style={styles.wrapIconCall}>
                        <Image
                          source={require("../../Assets/MsgIcon_outline.png")}
                          style={styles.imgProfile}
                          resizeMode={"center"}
                        />
                      </View>
                      <View style={styles.wrapIconCall}>
                        <Image
                          source={require("../../Assets/Call.png")}
                          style={styles.imgProfile}
                          resizeMode={"center"}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
};
export default GroundWork_ExteriorFL;
