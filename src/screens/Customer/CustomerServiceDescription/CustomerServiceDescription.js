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
import { useEffect } from "react";
import { getAllSubServices } from "../../../services/apis";
import { useSelector } from "../../../redux/store";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { WaveIndicator } from "react-native-indicators";
import Buttons from "../../../components/Buttons/Buttons";
import { calculateSum } from "../../../utils/Helpers";
import messaging from "@react-native-firebase/messaging";
const CustomerServiceDescription = ({ navigation, route }) => {
  const { customerReducer } = useSelector((state) => state);
  const service = route.params?.service;
  const [isLoading, setIsLoading] = useState(false);
  const [allSubServices, setAllSubServices] = useState([]);
  const [selectedSubServices, setSelectedSubServices] = useState([]);
  useEffect(() => {
    getAllSubServices(
      service?._id,
      customerReducer?.token,
      navigation,
      setIsLoading,
      setAllSubServices
    );
    token();
  }, []);
  const SubService = ({ subService }) => {
    const isSelected =
      selectedSubServices.findIndex((i) => i._id == subService._id) > -1;
    const indx = selectedSubServices.findIndex((i) => i._id == subService._id);
    return (
      <View style={styles.subServiceContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <BouncyCheckbox
            disableBuiltInState
            disableText
            isChecked={isSelected}
            size={22}
            fillColor={COLORS.primary}
            unfillColor={COLORS.lightGreish}
            iconStyle={{ borderRadius: 5 }}
            innerIconStyle={styles.innerIconStyle}
            onPress={() => {
              if (isSelected) selectedSubServices.splice(indx, 1);
              else selectedSubServices.push(subService);
              setSelectedSubServices([...selectedSubServices]);
            }}
          />
          <Text style={styles.subServiceName}>{subService?.name}</Text>
        </View>
        <Text style={[styles.subServiceName, { fontFamily: FONTS.medium }]}>
          {customerReducer?.country === "PAKISTAN"
            ? `PKR ${subService?.pkPrice}`
            : `AED ${subService?.uaePrice}`}
        </Text>
      </View>
    );
  };
  const token = async () => {
    let deviceFCM_Token = await messaging().getToken();
    console.log(deviceFCM_Token);
  };
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
                marginTop: Theme.hp("1%"),
                alignItems: "center",
                padding: Theme.hp("0.5%"),
                borderBottomWidth: 2,
                borderColor: COLORS.secondary,
              }}
            >
              <Text style={styles.txtTitle}>Select the Desired Service</Text>
            </View>
            <View
              style={{
                marginTop: Theme.hp("1%"),
              }}
            >
              {isLoading ? (
                <WaveIndicator size={Theme.hp("6%")} color={COLORS.primary} />
              ) : (
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={allSubServices}
                  renderItem={({ item }) => {
                    return <SubService subService={item} />;
                  }}
                  ListEmptyComponent={() => {}}
                  ListFooterComponent={() => (
                    <View style={styles.subServiceContainer}>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <BouncyCheckbox
                          disableBuiltInState
                          disableText
                          isChecked={true}
                          size={22}
                          fillColor={COLORS.primary}
                          unfillColor={COLORS.lightGreish}
                          iconStyle={{ borderRadius: 5 }}
                          innerIconStyle={styles.innerIconStyle}
                        />
                        <Text style={styles.subServiceName}>
                          Service Charges
                          <Text style={{ color: COLORS.errorColor }}> *</Text>
                        </Text>
                      </View>
                      <Text
                        style={[
                          styles.subServiceName,
                          { fontFamily: FONTS.medium },
                        ]}
                      >
                        {customerReducer?.country === "PAKISTAN"
                          ? `PKR ${service?.pkPrice}`
                          : `AED ${service?.uaePrice}`}
                      </Text>
                    </View>
                  )}
                />
              )}
              <View
                style={[
                  styles.subServiceContainer,
                  { marginTop: Theme.hp("6%") },
                ]}
              >
                <Text style={styles.txtTitle}>Total</Text>
                <Text
                  style={[styles.subServiceName, { fontFamily: FONTS.medium }]}
                >
                  {customerReducer?.country === "PAKISTAN"
                    ? `PKR ${
                        calculateSum(selectedSubServices, "pkPrice") +
                        service?.pkPrice
                      }`
                    : `AED ${
                        calculateSum(selectedSubServices, "uaePrice") +
                        service?.uaePrice
                      }`}
                </Text>
              </View>
            </View>
            <View style={{ position: "absolute", bottom: 0 }}>
              <Buttons
                btnMedium={true}
                label={"Request Service"}
                txtColor={COLORS.txtWhite}
                BGcolor={COLORS.primary}
                btnStyle={{ marginTop: Theme.hp("4%") }}
                onPress={() =>
                  navigation.navigate("CustomerServiceDescription1", {
                    service: service,
                  })
                }
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};
export default CustomerServiceDescription;
