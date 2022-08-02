import React, { useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Modal,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import Theme from "../../Utils/Theme";
import { Entypo } from "../../Utils/Exports";
import BouncyCheckbox from "react-native-bouncy-checkbox";
// import Modal from "react-native-modal";
import styless from "./Style";
import Buttons from "../Buttons/Buttons";
const Modals = (props) => {
  const {
    loader,
    loaderIndicator,
    label,
    customToast,
    modalVisible,
    secureAllFunds,
    setModalVisibleCallBack,
    addBioModal,
    bio,
    setBioCallback,
    updateBio,
  } = props;
  return (
    <>
      {loaderIndicator === true ? (
        <Modal visible={modalVisible} transparent>
          <View style={styless.modalWrap}>
            <ActivityIndicator
              size="large"
              color={Theme.primary}
              style={styless.indic}
            />
            <Text style={styless.txtLoading}>{label}</Text>
          </View>
        </Modal>
      ) : secureAllFunds === true ? (
        <View style={styles.centeredView}>
          <Modal
            animationType=""
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisibleCallBack(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Secure Funds</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: Theme.wp("85%"),
                    height: Theme.hp("6%"),
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ color: Theme.purple, fontSize: Theme.txtSmall }}
                  >
                    Remaining Payment
                  </Text>
                  <Text
                    style={{
                      color: Theme.black,
                      fontSize: Theme.txtSmall,
                      fontWeight: "600",
                    }}
                  >
                    £ 1250
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: Theme.wp("85%"),
                    height: Theme.hp("6%"),
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: Theme.black,
                      fontSize: Theme.txtSmall,
                      fontWeight: "600",
                    }}
                  >
                    Secure All
                  </Text>

                  <BouncyCheckbox
                    disableText
                    size={Theme.hp("3%")}
                    fillColor={Theme.primary}
                    unfillColor={Theme.white}
                    iconStyle={{
                      borderColor: Theme.lightGrey,
                      borderRadius: 5,
                      borderWidth: 2,
                    }}
                    // onPress={(isChecked) => {}}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: Theme.wp("85%"),
                    height: Theme.hp("6%"),
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: Theme.black,
                      fontSize: Theme.txtSmall,
                      fontWeight: "600",
                    }}
                  >
                    Enter Amount
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 2,
                      borderColor: Theme.lightGrey,
                      borderRadius: 5,
                      padding: 5,
                      height: Theme.hp("5%"),
                    }}
                  >
                    <Text
                      style={{
                        color: Theme.gray1,
                        fontWeight: "600",
                        fontSize: Theme.txtSmall,
                      }}
                    >
                      £
                    </Text>
                    <TextInput
                      style={{ height: Theme.hp("5%"), width: Theme.wp("12%") }}
                      maxLength={6}
                    />
                  </View>
                </View>
                <Buttons
                  btnMedium={true}
                  label={"Secure"}
                  txtColor={Theme.white}
                  BGcolor={Theme.primary}
                  btnStyle={{
                    width: Theme.wp("85%"),
                    height: Theme.hp("5.5%"),
                  }}
                  onPress={() => setModalVisibleCallBack(!modalVisible)}
                />
              </View>
            </View>
          </Modal>
        </View>
      ) : addBioModal ? (
        <View style={styles.centeredView}>
          <Modal
            animationType=""
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisibleCallBack(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Add Bio</Text>
                <TextInput
                  multiline
                  placeholder="Write your bio here..."
                  placeholderTextColor={Theme.gray1}
                  style={styles.txtInput}
                  maxLength={200}
                  value={bio}
                  onChangeText={(text) => {
                    setBioCallback(text);
                  }}
                />
                <Buttons
                  btnMedium={true}
                  label={"Update Bio"}
                  txtColor={Theme.white}
                  BGcolor={Theme.primary}
                  btnStyle={{
                    width: Theme.wp("85%"),
                    height: Theme.hp("5.5%"),
                  }}
                  onPress={() => {
                    setModalVisibleCallBack(false);
                    bio !== "" && updateBio();
                  }}
                />
              </View>
            </View>
          </Modal>
        </View>
      ) : null}
    </>
  );
};
export default Modals;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.57)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    width: Theme.width,
    height: Theme.hp("32%"),
    justifyContent: "space-evenly",
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    fontSize: Theme.txtMedium,
    fontWeight: "500",
    color: Theme.black,
  },
  txtInput: {
    // marginTop: Theme.hp("1%"),
    height: Theme.hp("18%"),
    width: Theme.wp("85%"),
    backgroundColor: Theme.lightGrey,
    borderRadius: 5,
    color: Theme.gray1,
    textAlignVertical: "top",
  },
});
