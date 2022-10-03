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

const CustomerProfile = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState("Personal");
  const TABS = [
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
        }}
      >
        <Text
          allowFontScaling={false}
          style={{
            color: COLORS.greish,
            fontFamily: FONTS.medium,
            fontSize: Theme.txtSmallest,
          }}
        >
          Wallpaper (20% opacity)
        </Text>
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
              source={IMAGES.logoWithBG}
              style={{
                width: "100%",
                height: "100%",
              }}
              resizeMode="center"
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
              Provider Name
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
            </Text>
          </View>
        </View>
      </View>
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
              050-1234567
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
              customername@mail.com
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginVertical: Theme.hp("0.5%"),
          borderTopWidth: 1,
          borderColor: COLORS.secondary,
        }}
      />
      <View style={styles.innerMain}>
        <View
          style={{
            marginTop: Theme.hp("2%"),
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{}}>
            <Text
              allowFontScaling={false}
              style={{
                color: COLORS.black,
                fontFamily: FONTS.medium,
                fontSize: Theme.txtMedium,
              }}
            >
              Wallet Balance
            </Text>
            <Text
              allowFontScaling={false}
              style={{
                color: COLORS.secondary,
                fontFamily: FONTS.medium,
                fontSize: Theme.txtSmallest,
              }}
            >
              AED 00.00
            </Text>
          </View>

          <Buttons
            btnMedium={true}
            label={"Add Funds"}
            txtColor={COLORS.txtWhite}
            BGcolor={COLORS.primary}
            btnStyle={{
              width: Theme.wp("35%"),
              alignSelf: "center",
              marginTop: 0,
            }}
            // onPress={() => navigation.navigate("MembershipOtherDocs")}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: Theme.hp("3%"),
        }}
      >
        <View
          style={{
            width: "33.33%",
            borderTopWidth: 1,
            borderColor: COLORS.secondary,
          }}
        />
        <View
          style={{
            height: Theme.hp("5%"),
            width: "33.33%",
            backgroundColor: COLORS.primary,
            borderRadius: Theme.hp("2.5%"),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            allowFontScaling={false}
            style={{
              color: COLORS.white,
              fontFamily: FONTS.bold,
              fontSize: Theme.txtSmall,
            }}
          >
            History
          </Text>
        </View>
        <View
          style={{
            width: "33.33%",
            borderTopWidth: 1,
            borderColor: COLORS.secondary,
          }}
        />
      </View>
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
          <Text
            allowFontScaling={false}
            style={{
              color: COLORS.black,
              fontFamily: FONTS.medium,
              fontSize: Theme.txtSmallestt,
            }}
          >
            Service Category
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
          <Text
            allowFontScaling={false}
            style={{
              color: COLORS.black,
              fontFamily: FONTS.medium,
              fontSize: Theme.txtSmallestt,
            }}
          >
            Service Category
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
          <Text
            allowFontScaling={false}
            style={{
              color: COLORS.black,
              fontFamily: FONTS.medium,
              fontSize: Theme.txtSmallestt,
            }}
          >
            Service Category
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
    </View>
  );
};

export default CustomerProfile;
