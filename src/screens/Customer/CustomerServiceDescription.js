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

import Headers from "../../components/Headers/Headers";
import { COLORS } from "../../utils/Theme";
import styles from "./Style";
const CustomerServiceDescription = ({ navigation, route }) => {
  const service = route.params?.service;

  return (
    <>
      <Headers mainHeader={true} />
      <KeyboardAwareScrollView style={{ backgroundColor: COLORS.white }}>
        <View style={styles.mainView}>
          <View style={styles.innerMain}>
            <Text style={styles.txtTitle}>{service?.name}</Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};
export default CustomerServiceDescription;
