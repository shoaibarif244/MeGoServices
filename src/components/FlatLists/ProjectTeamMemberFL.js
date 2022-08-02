import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import Theme from "../../Utils/Theme";
import styles from "./Style";

const ProjectTeamMemberFL = (props) => {
  const { navigation, data, routeName, disable } = props;

  return (
    <>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <>
              <TouchableOpacity
                disabled={disable ?? false}
                style={styles.wrapFLBtn}
                onPress={() => navigation.navigate(routeName)}
              >
                {item.haveStar ? (
                  <View style={styles.wrapImgStar}>
                    <Image
                      source={require("../../Assets/Star.png")}
                      style={styles.imgStar}
                    />
                  </View>
                ) : null}

                <View style={styles.flexRow}>
                  <View style={{ width: "20%" }}>
                    <View style={styles.wrapImgProfile1}>
                      <Image
                        source={item.imgProfile}
                        style={styles.imgProfile}
                      />
                    </View>
                  </View>
                  <View style={styles.flex80}>
                    <View>
                      <Text style={styles.txtName}>{item.name}</Text>

                      <Text style={styles.txtDesignation}>
                        {item.designation}
                      </Text>
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
              </TouchableOpacity>
            </>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
};
export default ProjectTeamMemberFL;
