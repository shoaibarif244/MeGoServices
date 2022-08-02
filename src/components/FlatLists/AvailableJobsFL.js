import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import Theme from "../../Utils/Theme";
import styles from "./Style";

const AvailableJobsFL = (props) => {
  const { navigation, data } = props;
  const routeName = props?.routeName ?? null;
  return (
    <>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <>
              <View style={styles.wrapFLBtn}>
                <TouchableOpacity
                  style={[styles.flexRow, { borderBottomWidth: 0 }]}
                  onPress={() => {
                    navigation.navigate(routeName, {
                      item: item,
                    });
                  }}
                >
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
                    <Text style={styles.txtTitle}>{item.title}</Text>
                    <Text style={styles.txtDesc}>
                      {item.desc}{" "}
                      <Text style={{ color: Theme.purple }}>see more</Text>
                    </Text>
                    <View style={styles.flexRowJustify}>
                      <View>
                        <Text style={styles.txtJobType}>
                          Job Type{" "}
                          <Text
                            style={{
                              ...styles.txtJobType,
                              color: Theme.gray1,
                              fontWeight: "600",
                            }}
                          >
                            - {item.jobType}
                          </Text>
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    ...styles.flexRow,
                    paddingVertical: Theme.hp("0.5%"),
                  }}
                >
                  <View
                    style={{
                      width: Theme.wp("65%"),
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <TouchableOpacity
                      style={styles.btnViewDetails}
                      onPress={() => {
                        navigation.navigate(routeName, {
                          item: item,
                        });
                      }}
                    >
                      <Text style={styles.txtViewDetails}>View Details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnViewDetails}>
                      <Text style={styles.txtViewDetails}>Contact</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        ...styles.btnViewDetails,
                        backgroundColor:
                          item.requestWork === true || item.submitQoute === true
                            ? Theme.primary
                            : Theme.lightFrozey,
                      }}
                      onPress={() => {
                        routeName &&
                          navigation.navigate(routeName, {
                            item: item,
                          });
                      }}
                    >
                      <Text
                        style={{
                          ...styles.txtViewDetails,
                          color:
                            item.requestWork === true ||
                            item.submitQoute === true
                              ? Theme.white
                              : Theme.primary,
                        }}
                      >
                        {item.requestWork && "Request Work"}
                        {item.submitQoute && "Submit Qoute"}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      width: Theme.wp("26%"),
                      flexDirection: "row",
                      justifyContent: "flex-end",
                    }}
                  >
                    <TouchableOpacity>
                      <Image
                        source={require("../../Assets/time.png")}
                        style={{
                          width: Theme.wp("10%"),
                          height: Theme.wp("10%"),
                          resizeMode: "center",
                        }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image
                        source={require("../../Assets/star1.png")}
                        style={{
                          width: Theme.wp("10%"),
                          height: Theme.wp("10%"),
                          resizeMode: "center",
                        }}
                      />
                    </TouchableOpacity>
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
                    <Text
                      style={{
                        ...styles.txtLocation,
                      }}
                    >
                      {item.location}
                    </Text>
                  </View>
                  <View style={styles.wrapDueDate}>
                    <Text
                      style={{
                        ...styles.txtDueDate,
                        fontWeight: "500",
                        color: Theme.txtBlack,
                        fontSize: Theme.txtSmallest,
                      }}
                    >
                      {item.dueDate}
                    </Text>
                  </View>
                </View>
              </View>
            </>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
};
export default AvailableJobsFL;
