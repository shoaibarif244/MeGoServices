import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import Theme from "../Utils/Theme";
import moment from "moment";
function WeeksView() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  useEffect(() => {}, []);
  return (
    <ScrollView horizontal style={{}} showsHorizontalScrollIndicator={false}>
      {getWeekDates().map((dt, indx) => {
        const isSelected =
          moment(dt).format("YYYY-MM-DD") ==
          moment(selectedDate).format("YYYY-MM-DD");
        let bgColor = "transparent";
        let txtColor = Theme.txtBlack;
        if (isSelected) {
          bgColor = Theme.white;
          txtColor = Theme.primary;
        }
        return (
          <TouchableOpacity
            key={indx}
            style={{
              backgroundColor: bgColor,
              width: Theme.wp("10%"),
              height: Theme.hp("6%"),
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              //   paddingVertical: 5,
              marginEnd: 10,
              borderWidth: isSelected ? 1.3 : 0,
              borderColor: Theme.primary,
            }}
            onPress={() => handleOnDateSelect(dt)}
          >
            <Text style={{ fontSize: Theme.txtSmall, color: txtColor }}>
              {moment(dt).format("ddd")}
            </Text>
            <Text
              style={{
                fontSize: Theme.txtSmall,
                // marginVertical: -5,
                color: txtColor,
                fontWeight: "700",
              }}
            >
              {moment(dt).format("DD")}
            </Text>
            {/* <Text style={{ fontSize: 10, color: txtColor }}>
              {moment(dt).format("MMM")}
            </Text> */}
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
  function handleOnDateSelect(dt) {
    setSelectedDate(dt);
    // updateCartIndex({ ...cart, orderDate: dt });
  }
  function getWeekDates() {
    const date = new Date();
    // const beginOfWeek = moment(date).startOf('week')
    // const endOfWeek = moment(date).endOf('week')
    const beginOfWeek = moment(date);
    const endOfWeek = moment(date).add(2, "weeks");
    let day = 1,
      weekDates = [];
    let curentDate = moment(beginOfWeek);
    while (curentDate.isBefore(moment(endOfWeek))) {
      weekDates.push(curentDate.toDate());
      curentDate = moment(beginOfWeek).add(day, "day");
      day++;
    }
    return weekDates;
  }
}
export default WeeksView;
