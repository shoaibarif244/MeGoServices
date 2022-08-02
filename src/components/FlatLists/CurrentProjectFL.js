import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import Theme from "../../Utils/Theme";
import styles from "./Style";

const CurrentProjectFL = (props) => {
  const { navigation, data } = props;
  const status = props?.status ?? null;
  // const type = props?.type ?? null;
  const routeName = props?.routeName ?? "ConstructorDashBoard1";
  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={styles.wrapFLBtn}
        onPress={() => navigation.navigate(routeName)}
      >
        <View style={styles.flexRow1}>
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
            <Text style={styles.txtTitle1}>{item.title}</Text>
            <View
              style={{
                ...styles.flexRowJustify,
                marginTop: Theme.hp("1%"),
              }}
            >
              <View>
                <Text style={{ ...styles.txtJobType }}>Job Type</Text>
                <Text
                  style={{
                    ...styles.txtJobType,
                    color: Theme.purple,
                  }}
                >
                  {item.jobType}
                </Text>
              </View>

              <View
                style={{
                  ...styles.bgBtn,
                  backgroundColor:
                    status === "POSTED" ? Theme.lightFrozey : Theme.lightPink,
                }}
              >
                <Text
                  style={{
                    color: status === "POSTED" ? Theme.primary : Theme.purple,
                    fontSize: Theme.RFPercentage(1.2),
                    fontWeight: "600",
                  }}
                >
                  {item.jobStatus}
                </Text>
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
              Estimated Completion Date{"  "}
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
    );
  };
  return (
    <>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <>
              {status === item.jobStatus
                ? renderItem(item)
                : status === "all"
                ? renderItem(item)
                : null}
            </>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
};
export default CurrentProjectFL;
