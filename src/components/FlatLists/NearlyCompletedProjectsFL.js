import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import Theme from "../../Utils/Theme";
import styles from "./Style";

const NearlyCompletedProjects = (props) => {
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
                style={styles.wrapFLBtn}
                onPress={() => navigation.navigate("CompanyDashBoard1")}
              >
                <View style={styles.flexRow}>
                  <View style={{ width: "25%" }}>
                    <View style={styles.imgProfileWrap}>
                      <Image
                        source={item.imgProfile}
                        style={styles.imgProfile}
                        resizeMode={"center"}
                      />
                    </View>
                  </View>
                  <View style={{ width: "75%" }}>
                    <Text style={styles.txtAmount}>{item.amount}</Text>
                    <Text style={styles.txtTitle}>{item.title}</Text>
                    <View style={styles.flexRowJustify}>
                      <View>
                        <Text style={styles.txtJobType}>Job Type</Text>
                        <Text
                          style={{ ...styles.txtJobType, color: Theme.purple }}
                        >
                          {item.jobType}
                        </Text>
                      </View>

                      <View style={styles.bgBtn1}>
                        <Image
                          style={{
                            height: Theme.wp("9"),
                            width: Theme.wp("9"),
                          }}
                          source={require("../../Assets/info.png")}
                          resizeMode="center"
                        />
                        <Image
                          style={{
                            height: Theme.wp("9"),
                            width: Theme.wp("9"),
                          }}
                          source={require("../../Assets/sort.png")}
                          resizeMode="center"
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.flexRowJustify1}>
                  <View style={styles.wrapImgTxt}>
                    <View style={styles.pinLogo}>
                      <Image
                        source={require("../../Assets/Pin_light.png")}
                        style={styles.imgProfile}
                        resizeMode={"center"}
                      />
                    </View>
                    <Text style={styles.txtLocation}>{item.location}</Text>
                  </View>
                  <View style={styles.wrapDueDate}>
                    <Text style={styles.txtDueDate}>
                      Estimated Completion Date{" "}
                      <Text
                        style={{
                          ...styles.txtDueDate,
                          fontWeight: "700",
                          color: Theme.txtBlack,
                        }}
                      >
                        {item.dueDate}
                      </Text>
                    </Text>
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
export default NearlyCompletedProjects;
