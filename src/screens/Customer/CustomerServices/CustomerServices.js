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
import { ImageSlider } from "react-native-image-slider-banner";
import IMAGES from "../../../assets/images";
import Headers from "../../../components/Headers/Headers";
import { COLORS, Theme } from "../../../utils/Theme";
import styles from "./Style";
const CustomerServices = ({ navigation }) => {
  const images = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU",
    },
    {
      img: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
    },
    {
      img: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg",
    },
  ];
  const services = [
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
  const Service = ({ service }) => (
    <TouchableOpacity
      key={service?.id}
      style={styles.serviceContainer}
      onPress={() => {
        navigation.navigate("CustomerServiceDescription", {
          service: service,
        });
      }}
    >
      <Image source={service?.img} style={styles.serviceImg} />
      <Text style={styles.serviceName}>{service?.name}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <Headers mainHeader={true} />
      <KeyboardAwareScrollView style={{ backgroundColor: COLORS.white }}>
        <View style={styles.mainView}>
          <View style={styles.sliderContainer}>
            <ImageSlider
              data={images}
              autoPlay={true}
              // onItemChanged={(item) => console.log("item", item)}
              timer={2000}
              closeIconColor={COLORS.white}
            />
          </View>
          <View style={styles.innerMain}>
            <Text style={styles.txtTitle}>Popular Services</Text>
            <View style={{ marginTop: Theme.hp("1%") }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {services.map((service, index) => {
                  return <Service service={service} />;
                })}
              </ScrollView>
            </View>
            <View style={{ marginTop: Theme.hp("1%") }}>
              <Text style={styles.txtTitle}>Popular Services</Text>
              <View>
                <FlatList
                  columnWrapperStyle={{
                    justifyContent: "space-between",
                    marginTop: Theme.hp("1.8%"),
                  }}
                  showsVerticalScrollIndicator={false}
                  numColumns={3}
                  data={services}
                  renderItem={({ item }) => {
                    return <Service service={item} />;
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default CustomerServices;
