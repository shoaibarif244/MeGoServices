import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import Theme from "../../Utils/Theme";
import styles from "./Style";

const TransactionHistoryFL = (props) => {
  const { navigation, data, disable } = props;
  // alert(JSON.stringify(data, 0, 2));
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
                onPress={() => navigation.navigate("ConstructorDashBoard2")}
              >
                <View style={styles.flexRow}>
                  <View style={{ width: "20%" }}>
                    <Image
                      source={item.imgProfile}
                      style={styles.imgProfile1}
                    />
                  </View>
                  <View style={styles.flex80}>
                    <View style={{ width: "45%" }}>
                      <Text style={styles.txtName}>{item.name}</Text>

                      <Text style={styles.txtDesignation}>
                        {item.designation}
                      </Text>
                    </View>
                    <View style={{ width: "48%" }}>
                      <View style={styles.flexAlignJustify}>
                        {item.requestPayment ? (
                          <View style={styles.wrapRequestPayment}>
                            <Text style={styles.txtRequestPay}>
                              Request payment
                            </Text>
                          </View>
                        ) : item.payNow ? (
                          <View style={styles.wrapRequestPayment}>
                            <Text style={styles.txtRequestPay}>Pay Now</Text>
                          </View>
                        ) : item.upcoming ? (
                          <View
                            style={{
                              ...styles.wrapRequestPayment,
                              backgroundColor: Theme.orange,
                            }}
                          >
                            <Text style={styles.txtRequestPay}>Upcoming</Text>
                          </View>
                        ) : (
                          <Text></Text>
                        )}
                        <Text style={styles.txtAmount1}>{item.status}</Text>

                        <Text
                          style={{
                            ...styles.txtAmount1,
                            color:
                              item.status == "Recieved"
                                ? Theme.green
                                : item.status == "Paid"
                                ? Theme.errorColor
                                : item.upcoming
                                ? Theme.orange
                                : Theme.gray1,
                          }}
                        >
                          {item.amount}
                        </Text>
                      </View>
                      <Text style={styles.txtDate}>{item.date}</Text>
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
export default TransactionHistoryFL;
