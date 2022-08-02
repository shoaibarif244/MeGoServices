import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import Theme from "../../Utils/Theme";
import styles from "./Style";

const TransactionsFL = (props) => {
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
                        {item.payNow ? (
                          <View
                            style={{
                              ...styles.wrapPayNow,
                              left: Theme.wp("5%"),
                            }}
                          >
                            <Text style={styles.txtPayNow}>Pay Now</Text>
                          </View>
                        ) : item.paid ? (
                          <View
                            style={{
                              ...styles.wrapPayNow,
                              left: Theme.wp("10%"),
                              backgroundColor: Theme.white,
                            }}
                          >
                            <Text style={styles.txtPaid}>Paid</Text>
                          </View>
                        ) : item.upcoming ? (
                          <View style={{...styles.wrapPayNow,backgroundColor:Theme.orange}}>
                            <Text style={styles.txtPayNow}>Upcoming</Text>
                          </View>
                        ) : null}
                        <Text style={styles.txtAmount1}>{item.amount}</Text>
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
export default TransactionsFL;
