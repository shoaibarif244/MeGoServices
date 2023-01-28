import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import IMAGES from "../../../assets/images";
import { COLORS, Theme } from "../../../utils/Theme";
import styles from "./Style";
import Buttons from "../../../components/Buttons/Buttons";
import { useState } from "react";
import Modals from "../../../components/Modals/Modals";
import { providerRegistration } from "../../../services/apis";
const MembershipChooseService = ({ navigation, route }) => {
  const { values } = route?.params;

  const SERVICES = [
    { id: 1, img: IMAGES.tyreMan, name: "Tyreman" },
    { id: 2, img: IMAGES.carAC, name: "Car AC" },
    { id: 3, img: IMAGES.electrician, name: "Electrician" },
    { id: 4, img: IMAGES.carpenter, name: "Carpenter" },
    { id: 5, img: IMAGES.acTechnician, name: "AC Technician" },
    { id: 6, img: IMAGES.laundry, name: "Laundary" },
    { id: 7, img: IMAGES.mobileRepair, name: "Mobile Repair" },
    { id: 8, img: IMAGES.autoMechanic, name: "Auto Mechanic" },
    { id: 9, img: IMAGES.plumber, name: "Plumber" },
  ];
  const [service, setService] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const Service = ({ Service }) => (
    <TouchableOpacity
      key={Service?.id}
      style={{
        ...styles.serviceContainer,
        backgroundColor:
          service === Service.name ? "rgba(242,189,145,0.7)" : "transparent",
      }}
      onPress={() => {
        setService(Service.name);
      }}
    >
      <Image source={Service?.img} style={styles.serviceImg} />
      <Text style={styles.serviceName}>{Service?.name}</Text>
    </TouchableOpacity>
  );

  return (
    <KeyboardAwareScrollView style={{ backgroundColor: COLORS.white }}>
      <Modals loaderIndicator modalVisible={isLoading} />
      <View style={styles.mainView}>
        <View style={styles.innerMain}>
          <View style={{ marginTop: Theme.hp("4%"), alignItems: "center" }}>
            <Text style={styles.txtHeading}>Providers Registration</Text>
            <Text style={styles.serviceName}>
              Only one service you can select
            </Text>
          </View>
          <View style={{ marginTop: Theme.hp("4%") }}>
            <FlatList
              columnWrapperStyle={{
                justifyContent: "space-between",
                marginTop: Theme.hp("1.8%"),
              }}
              showsVerticalScrollIndicator={false}
              numColumns={3}
              data={SERVICES}
              renderItem={({ item }) => {
                return <Service Service={item} />;
              }}
            />
          </View>
          <Buttons
            btnMedium={true}
            label={"Next"}
            txtColor={COLORS.txtWhite}
            BGcolor={COLORS.primary}
            btnStyle={{ marginTop: Theme.hp("6%") }}
            onPress={() => {
              const value = { ...values, service: service };

              providerRegistration(value, navigation, setIsLoading);
              // service !== ""
              //   ? console.log(
              //       JSON.stringify({ ...values, service: service }, 2, 4)
              //     )
              //   : // ? navigation.navigate("MembershipCongrats")
              //     Alert.alert(
              //       "Required",
              //       "To proceed further,Please Select one Service that you can provide."
              //     );
            }}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default MembershipChooseService;
