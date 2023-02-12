import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Headers from "../../../components/Headers/Headers";
import { COLORS, FONTS, Theme } from "../../../utils/Theme";
import styles from "./Style";
import { useState } from "react";
import { useSelector } from "../../../redux/store";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { WaveIndicator } from "react-native-indicators";
import Buttons from "../../../components/Buttons/Buttons";
import { calculateSum } from "../../../utils/Helpers";
const CustomerServiceDescription1 = ({ navigation, route }) => {
  const { customerReducer } = useSelector((state) => state);
  const service = route.params?.service;
  const [isLoading, setIsLoading] = useState(false);
  const [allSubServices, setAllSubServices] = useState([]);
  const [selectedSubServices, setSelectedSubServices] = useState([]);

  return (
    <>
      <Headers mainHeader={true} navigation={navigation} />
      <KeyboardAwareScrollView
        contentContainerStyle={{ backgroundColor: COLORS.white, flexGrow: 1 }}
      >
        <View style={styles.mainView}>
          <View style={styles.innerMain}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: Theme.hp("3%"),
                justifyContent: "space-between",
              }}
            >
              <View style={{ width: "26%" }}>
                <Image
                  source={{
                    uri: service?.serviceIcon,
                  }}
                  style={{ width: "100%", height: Theme.hp("10%") }}
                  resizeMode="center"
                />
              </View>
              <View style={{ width: "68%" }}>
                <Text style={styles.txtTitle}>{service?.name}</Text>
                <Text style={styles.serviceName}>{service?.description}</Text>
              </View>
            </View>
            <View
              style={{
                marginVertical: Theme.hp("1%"),
                width: "100%",
              }}
            >
              <Image
                source={{
                  uri: service?.serviceImg,
                }}
                style={{
                  width: "100%",
                  height: Theme.hp("20%"),
                  borderRadius: 6,
                }}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.serviceDesc}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                position: "absolute",
                bottom: Theme.hp("10%"),
              }}
            >
              <BouncyCheckbox
                disableText
                size={22}
                fillColor={COLORS.primary}
                unfillColor={COLORS.lightGreish}
                iconStyle={{ borderRadius: 5 }}
                innerIconStyle={styles.innerIconStyle}
              />
              <Text style={styles.subServiceName}>
                I agree{" "}
                <Text
                  style={{
                    color: COLORS.secondary,
                    textDecorationLine: "underline",
                  }}
                >
                  terms and conditions
                </Text>
              </Text>
            </View>

            <View style={{ position: "absolute", bottom: 0 }}>
              <Buttons
                btnMedium={true}
                label={"Request Service"}
                txtColor={COLORS.txtWhite}
                BGcolor={COLORS.primary}
                btnStyle={{ marginTop: Theme.hp("4%") }}
                onPress={() => alert("")}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};
export default CustomerServiceDescription1;
