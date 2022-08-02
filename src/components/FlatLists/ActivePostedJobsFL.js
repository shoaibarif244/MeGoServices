import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import Theme from "../../Utils/Theme";
import styles from "./Style";
import Helpers from "../../Utils/Helpers";
const CurrentProjectFL = (props) => {
  const { navigation, data } = props;
  const status = props?.status ?? null;
  // const type = props?.type ?? null;
  const routeName = props?.routeName;
  const helper = new Helpers();
  // {
  //   jobTitle:
  //     "Extension job in Horsley 10 x 15m with running water and Electricity.",
  //   jobDetail: "",
  //   jobType: "Carpentry",
  //   jobStatus: "IN PROGRESS",
  //   jobLocation: "438 Cory Rapids Apt. 640",
  //   jobCompletionDate: "Mar 24, 2022",
  //   jobImages: require("../../../Assets/projectImg1.png"),
  // },

  const renderItem = (item) => {
    // alert(JSON.stringify(item?.jobImages, 0, 2));
    return (
      <TouchableOpacity
        style={styles.wrapFLBtn}
        onPress={() => {
          routeName === "HomeOwnerJobDetails"
            ? navigation.navigate(routeName, {
                docID: item?.id,
              })
            : navigation.navigate(routeName);
        }}
      >
        <View style={styles.flexRow1}>
          <View style={{ width: "25%" }}>
            <View style={styles.imgProfileWrap}>
              {item?.jobImages && (
                <Image
                  source={{ uri: item?.jobImages[0] }}
                  style={styles.imgProfile}
                  resizeMode={"cover"}
                />
              )}
              {/* <Image
                source={item.imgProfile}
                style={styles.imgProfile}
                resizeMode={"center"}
              /> */}
            </View>
          </View>
          <View style={{ width: "75%" }}>
            <Text style={styles.txtAmount}>£5000</Text>
            <Text style={styles.txtTitle1}>{item.jobTitle}</Text>
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
            <Text style={styles.txtLocation}>438 Cory Rapids Apt. 640</Text>
            {/* item.jobLocation */}
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
                {/* {alert(item.jobCompletionDate)} */}
                {helper.convertFirebaseDateToJS(item.jobCompletionDate)}
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
