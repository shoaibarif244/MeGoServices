import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { COLORS, FONTS, Theme } from "../../../utils/Theme";
import { FontAwesome } from "../../../utils/Exports";
import Headers from "../../../components/Headers/Headers";
import styles from "./Style";
import IMAGES from "../../../assets/images";
import Buttons from "../../../components/Buttons/Buttons";
import { useSelector } from "../../../redux/store";

const ProviderProfile = ({ navigation }) => {
  const { providerReducer } = useSelector((state) => state);

  const [selectedTab, setSelectedTab] = useState("Personal");
  const TABS = [
    {
      key: 1,
      name: "Personal",
      value: "Personal",
    },
    {
      key: 2,
      name: "Membership",
      value: "Membership",
    },
    {
      key: 3,
      name: "History",
      value: "History",
    },
  ];
  const [isConnects, setIsConnects] = useState(true);

  return (
    <View style={styles.mainView}>
      <Headers
        mainHeader={true}
        onMenuPress={() => navigation.openDrawer()}
        navigation={navigation}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          height: Theme.hp("20%"),
          backgroundColor: COLORS.lightGreish,
          alignItems: "center",
          justifyContent: "center",
          opacity: 0.8,
        }}
      >
        <Image
          source={{ uri: providerReducer?.imgs?.shopImg }}
          style={styles.img100}
          resizeMode="cover"
        />
        {/* <Text
          allowFontScaling={false}
          style={{
            color: COLORS.greish,
            fontFamily: FONTS.medium,
            fontSize: Theme.txtSmallest,
            position: "absolute",
          }}
        >
          Wallpaper (20% opacity)
        </Text> */}
      </TouchableOpacity>

      <View style={{ width: Theme.width, alignSelf: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <View
            style={{
              width: Theme.wp("25%"),
              height: Theme.wp("25%"),
              borderRadius: Theme.wp("13%"),
              borderWidth: 2,
              borderColor: COLORS.secondary,
              marginTop: -Theme.hp("6.07%"),
            }}
          >
            <Image
              source={{ uri: providerReducer?.imgs?.profileImg }}
              style={{ ...styles.img100, borderRadius: Theme.wp("13%") }}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              marginLeft: Theme.wp("4%"),
            }}
          >
            <Text
              allowFontScaling={false}
              style={{
                color: COLORS.black,
                fontFamily: FONTS.semiBold,
                fontSize: Theme.txtSmallest,
              }}
            >
              {providerReducer?.fullName}
            </Text>
            <Text
              allowFontScaling={false}
              style={{
                color: COLORS.black,
                fontFamily: FONTS.semiBold,
                fontSize: Theme.txtSmallest,
                marginTop: Theme.hp("0.5%"),
              }}
            >
              Since: <Text style={{ color: COLORS.secondary }}>DD-MM-YYYY</Text>
              {/* {moment(providerReducer?.createdAt).format('DD-MM-YYYY')} */}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: Theme.hp("2%"),
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            allowFontScaling={false}
            style={{
              color: COLORS.black,
              fontFamily: FONTS.bold,
              fontSize: Theme.txtSmall,
            }}
          >
            {providerReducer?.service}
            {/* Service Category:  */}
          </Text>
          <Text
            allowFontScaling={false}
            style={{
              color: COLORS.black,
              fontFamily: FONTS.regular,
              fontSize: Theme.txtSmallest,
            }}
          >
            ⭐⭐⭐⭐⭐ 4.5
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: Theme.hp("2%"),
          backgroundColor: COLORS.lightGreish,
          height: Theme.hp("5%"),
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {TABS.map((tab, index) => {
          return (
            <TouchableWithoutFeedback
              key={tab.key}
              onPress={() => setSelectedTab(tab.value)}
            >
              <View
                style={{
                  width: "33.33%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor:
                    selectedTab == tab.value
                      ? COLORS.primary
                      : COLORS.lightGreish,
                }}
              >
                <Text
                  allowFontScaling={false}
                  style={{
                    fontFamily: FONTS.medium,
                    fontSize: Theme.txtSmallest,
                    color:
                      selectedTab == tab.value ? COLORS.white : COLORS.greish,
                  }}
                >
                  {tab.name}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
      {selectedTab == "Personal" && (
        <View style={styles.innerMain}>
          <View
            style={{
              marginTop: Theme.hp("2%"),
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ width: "49%" }}>
              <Text
                allowFontScaling={false}
                style={{
                  color: COLORS.black,
                  fontFamily: FONTS.medium,
                  fontSize: Theme.txtSmallestt,
                }}
              >
                Contact Number
              </Text>
              <Text
                allowFontScaling={false}
                style={{
                  color: COLORS.secondary,
                  fontFamily: FONTS.medium,
                  fontSize: Theme.txtSmallestt,
                }}
              >
                {providerReducer?.phoneNo}
              </Text>
            </View>
            <View style={{ width: "49%" }}>
              <Text
                allowFontScaling={false}
                style={{
                  color: COLORS.black,
                  fontFamily: FONTS.medium,
                  fontSize: Theme.txtSmallestt,
                }}
              >
                Email
              </Text>
              <Text
                allowFontScaling={false}
                style={{
                  color: COLORS.secondary,
                  fontFamily: FONTS.medium,
                  fontSize: Theme.txtSmallestt,
                }}
              >
                {providerReducer?.email}
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: Theme.hp("2%"),
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ width: "49%" }}>
              <Text
                allowFontScaling={false}
                style={{
                  color: COLORS.black,
                  fontFamily: FONTS.medium,
                  fontSize: Theme.txtSmallestt,
                }}
              >
                Guarantor Name
              </Text>
              <Text
                allowFontScaling={false}
                style={{
                  color: COLORS.secondary,
                  fontFamily: FONTS.medium,
                  fontSize: Theme.txtSmallestt,
                }}
              >
                {providerReducer?.guarantorName}
              </Text>
            </View>
            <View style={{ width: "49%" }}>
              <Text
                allowFontScaling={false}
                style={{
                  color: COLORS.black,
                  fontFamily: FONTS.medium,
                  fontSize: Theme.txtSmallestt,
                }}
              >
                Guarantor Number
              </Text>
              <Text
                allowFontScaling={false}
                style={{
                  color: COLORS.secondary,
                  fontFamily: FONTS.medium,
                  fontSize: Theme.txtSmallestt,
                }}
              >
                {providerReducer?.guarantorPhoneNum}
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: Theme.hp("2%"),
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              activeOpacity={0.6}
              style={{
                backgroundColor: COLORS.lightGreish,
                height: Theme.hp("12%"),
                width: "49%",
                borderRadius: 7,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={{ uri: providerReducer?.imgs?.idFront }}
                style={{ ...styles.img100, borderRadius: 7 }}
                resizeMode="cover"
              />
              {/* <Text
                allowFontScaling={false}
                style={{
                  color: COLORS.greish,
                  fontFamily: FONTS.medium,
                  fontSize: Theme.txtSmallestt,
                }}
              >
                ID Front
              </Text> */}
            </View>
            <View
              activeOpacity={0.6}
              style={{
                backgroundColor: COLORS.lightGreish,
                height: Theme.hp("12%"),
                width: "49%",
                borderRadius: 7,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={{ uri: providerReducer?.imgs?.idBack }}
                style={{ ...styles.img100, borderRadius: 7 }}
                resizeMode="cover"
              />
              {/* <Text
                allowFontScaling={false}
                style={{
                  color: COLORS.greish,
                  fontFamily: FONTS.medium,
                  fontSize: Theme.txtSmallestt,
                }}
              >
                ID Back
              </Text> */}
            </View>
          </View>
          <View
            style={{
              marginTop: Theme.hp("1%"),
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              activeOpacity={0.6}
              style={{
                backgroundColor: COLORS.lightGreish,
                height: Theme.hp("12%"),
                width: "49%",
                borderRadius: 7,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={{ uri: providerReducer?.imgs?.technicalDiploma }}
                style={{ ...styles.img100, borderRadius: 7 }}
                resizeMode="cover"
              />
              {/* <Text
                allowFontScaling={false}
                style={{
                  color: COLORS.greish,
                  fontFamily: FONTS.medium,
                  fontSize: Theme.txtSmallestt,
                }}
              >
                Technical Diploma
              </Text> */}
            </View>
            <View
              activeOpacity={0.6}
              style={{
                backgroundColor: COLORS.lightGreish,
                height: Theme.hp("12%"),
                width: "49%",
                borderRadius: 7,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={{ uri: providerReducer?.imgs?.experienceCertificate }}
                style={{ ...styles.img100, borderRadius: 7 }}
                resizeMode="cover"
              />
              {/* <Text
                allowFontScaling={false}
                style={{
                  color: COLORS.greish,
                  fontFamily: FONTS.medium,
                  fontSize: Theme.txtSmallestt,
                }}
              >
                Experience Certificate
              </Text> */}
            </View>
          </View>
        </View>
      )}
      {selectedTab == "Membership" && (
        <>
          <View style={styles.innerMain}>
            <View
              style={{
                marginTop: Theme.hp("2%"),
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                allowFontScaling={false}
                style={{
                  color: COLORS.black,
                  fontFamily: FONTS.medium,
                  fontSize: Theme.txtSmallest,
                }}
              >
                Membership Type
              </Text>
              <Text
                allowFontScaling={false}
                style={{
                  color: COLORS.secondary,
                  fontFamily: FONTS.medium,
                  fontSize: Theme.txtSmallest,
                }}
              >
                Standard
              </Text>
            </View>
            <View
              style={{
                marginTop: Theme.hp("2%"),
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                allowFontScaling={false}
                style={{
                  color: COLORS.black,
                  fontFamily: FONTS.medium,
                  fontSize: Theme.txtSmallest,
                }}
              >
                Expiry Date
              </Text>
              <Text
                allowFontScaling={false}
                style={{
                  color: COLORS.secondary,
                  fontFamily: FONTS.medium,
                  fontSize: Theme.txtSmallestt,
                }}
              >
                DD-MM-YYYY
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: Theme.hp("2%"),
              backgroundColor: COLORS.lightGreish,
              height: Theme.hp("5%"),
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                width: "50%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: isConnects
                  ? COLORS.primary
                  : COLORS.lightGreish,
              }}
              onPress={() => setIsConnects(!isConnects)}
            >
              <Text
                allowFontScaling={false}
                style={{
                  fontFamily: FONTS.medium,
                  fontSize: Theme.txtSmallest,
                  color: isConnects ? COLORS.white : COLORS.greish,
                }}
              >
                Connects
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "50%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: !isConnects
                  ? COLORS.primary
                  : COLORS.lightGreish,
              }}
              onPress={() => setIsConnects(!isConnects)}
            >
              <Text
                allowFontScaling={false}
                style={{
                  fontFamily: FONTS.medium,
                  fontSize: Theme.txtSmallest,
                  color: !isConnects ? COLORS.white : COLORS.greish,
                }}
              >
                Subscriptions
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.innerMain}>
            {isConnects && (
              <>
                <View
                  style={{
                    marginTop: Theme.hp("2%"),
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    allowFontScaling={false}
                    style={{
                      color: COLORS.black,
                      fontFamily: FONTS.medium,
                      fontSize: Theme.txtSmallest,
                    }}
                  >
                    Connects Balance
                  </Text>
                  <Text
                    allowFontScaling={false}
                    style={{
                      color: COLORS.secondary,
                      fontFamily: FONTS.medium,
                      fontSize: Theme.txtSmallestt,
                    }}
                  >
                    00
                  </Text>
                </View>
                <Buttons
                  btnMedium={true}
                  label={"Add Connects"}
                  txtColor={COLORS.txtWhite}
                  BGcolor={COLORS.primary}
                  btnStyle={{ width: Theme.wp("40%"), alignSelf: "center" }}
                  // onPress={() => navigation.navigate("MembershipOtherDocs")}
                />
              </>
            )}
            {!isConnects && (
              <>
                <View
                  style={{
                    marginTop: Theme.hp("2%"),
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    allowFontScaling={false}
                    style={{
                      color: COLORS.black,
                      fontFamily: FONTS.medium,
                      fontSize: Theme.txtSmallest,
                    }}
                  >
                    Plan Type
                  </Text>
                  <Text
                    allowFontScaling={false}
                    style={{
                      color: COLORS.secondary,
                      fontFamily: FONTS.medium,
                      fontSize: Theme.txtSmallestt,
                    }}
                  >
                    Basic
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Buttons
                    btnMedium={true}
                    label={"Upgrade"}
                    txtColor={COLORS.txtWhite}
                    BGcolor={COLORS.primary}
                    btnStyle={{ width: Theme.wp("40%"), alignSelf: "center" }}
                    // onPress={() => navigation.navigate("MembershipOtherDocs")}
                  />
                  <Buttons
                    btnMedium={true}
                    label={"Renew"}
                    txtColor={COLORS.txtWhite}
                    BGcolor={COLORS.secondary}
                    btnStyle={{ width: Theme.wp("40%"), alignSelf: "center" }}
                    // onPress={() => navigation.navigate("MembershipOtherDocs")}
                  />
                </View>
              </>
            )}
          </View>
        </>
      )}
      {selectedTab == "History" && (
        <View style={styles.innerMain}>
          <View
            style={{
              marginTop: Theme.hp("2%"),
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              allowFontScaling={false}
              style={{
                color: COLORS.black,
                fontFamily: FONTS.medium,
                fontSize: Theme.txtSmallestt,
              }}
            >
              DD-MM-YYYY
            </Text>
            <FontAwesome
              name="eye"
              size={Theme.iconSizeM}
              color={COLORS.secondary}
            />
          </View>
          <View
            style={{
              marginVertical: Theme.hp("0.5%"),
              borderTopWidth: 1,
              borderColor: COLORS.secondary,
            }}
          />
          <View
            style={{
              marginTop: Theme.hp("2%"),
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              allowFontScaling={false}
              style={{
                color: COLORS.black,
                fontFamily: FONTS.medium,
                fontSize: Theme.txtSmallestt,
              }}
            >
              DD-MM-YYYY
            </Text>
            <FontAwesome
              name="eye"
              size={Theme.iconSizeM}
              color={COLORS.secondary}
            />
          </View>
          <View
            style={{
              marginVertical: Theme.hp("0.5%"),
              borderTopWidth: 1,
              borderColor: COLORS.secondary,
            }}
          />
          <View
            style={{
              marginTop: Theme.hp("2%"),
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              allowFontScaling={false}
              style={{
                color: COLORS.black,
                fontFamily: FONTS.medium,
                fontSize: Theme.txtSmallestt,
              }}
            >
              DD-MM-YYYY
            </Text>
            <FontAwesome
              name="eye"
              size={Theme.iconSizeM}
              color={COLORS.secondary}
            />
          </View>
          <View
            style={{
              marginVertical: Theme.hp("0.5%"),
              borderTopWidth: 1,
              borderColor: COLORS.secondary,
            }}
          />
        </View>
      )}
      {/* <View style={styles.innerMain}></View> */}
    </View>
  );
};

export default ProviderProfile;
