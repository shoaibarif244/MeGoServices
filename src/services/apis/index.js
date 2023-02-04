import axios from "axios";
import { Alert } from "react-native";
import { Theme } from "../../utils/Theme";
// import Toast from "react-native-toast-message";
// import { userToken } from "../redux/actions";
import messaging from "@react-native-firebase/messaging";
import { dispatch, useSelector } from "../../redux/store";
import { saveUser } from "../../redux/slices/userSlice";
import { saveCustomer } from "../../redux/slices/customerSlice";
import { saveProvider } from "../../redux/slices/providerSlice";

export const saveUserOtp = async (values, navigation, setIsLoading) => {
  try {
    setIsLoading(true);
    console.log(values);
    const response = await axios.post(
      "users/saveUserOTP",
      {
        phoneNo: values?.phoneNo,
        userType: values?.userType,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setIsLoading(false);
    if (response.status === 200 || response.status === 201) {
      if (response.data?.status) {
        console.log("SUCCESS ", JSON.stringify(response?.data, 2, 4));
        // Alert.alert("SUCCESS ", JSON.stringify(response?.data?.success, 2, 4));
        navigation.navigate("OTPScreen", { values: values });
      } else {
        Alert.alert("Error", response?.data?.error?.message);
      }
      // dispatch(userToken(response.data.token));
    } else {
      Alert.alert("ERROR ", JSON.stringify(response, 2, 4));
    }
  } catch (error) {
    console.log("ERROR saveUserOtp() API", JSON.stringify(error, 2, 4));
    setIsLoading(false);
    alert(JSON.stringify(error, 2, 4));
  }
};

export const verifyOtp = async (values, navigation, setIsLoading) => {
  try {
    setIsLoading(true);
    console.log(values);
    const response = await axios.post(
      "users/verifyOtp",
      {
        phoneNo: values?.phoneNo,
        otp: values?.otp,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setIsLoading(false);
    if (response.status === 200 || response.status === 201) {
      console.log(
        "RESPONSE===> users/verifyOtp ",
        JSON.stringify(response.data, 2, 4)
      );
      if (response.data?.userType === "customer") {
        dispatch(saveCustomer(response?.data));
        navigation.navigate("CustomerServices");
      } else {
        if (response?.data?.isProfileCompleted) {
          navigation.navigate("DrawerNavigator");
          dispatch(saveProvider(response?.data));
        } else {
          dispatch(saveProvider(response?.data));
          navigation.navigate("MembershipDetails");
        }
      }
    } else {
      Alert.alert("ERROR ", JSON.stringify(response, 2, 4));
    }
  } catch (error) {
    console.log("ERROR saveUserOtp() API", JSON.stringify(error, 2, 4));
    setIsLoading(false);
    alert(JSON.stringify(error, 2, 4));
  }
};
export const providerRegistration = async (
  providerReducer,
  values,
  navigation,
  setIsLoading
) => {
  try {
    setIsLoading(true);
    console.log(values);
    let deviceFCM_Token = await messaging().getToken();
    console.log(deviceFCM_Token);

    const formData = new FormData();
    formData.append("fullName", values?.fullName);
    formData.append("phoneNo", providerReducer?.phoneNo);
    formData.append("email", values?.email);
    formData.append("guarantorName", values?.guarantorName);
    formData.append("guarantorPhoneNum", values?.guarantorPhoneNum);
    formData.append("profileImg", {
      uri: values?.profileImg?.path,
      name: "profileImg.png",
      type: values?.profileImg?.mime,
    });
    formData.append("shopImg", {
      uri: values?.shopImg?.path,
      name: "shopImg.png",
      type: values?.shopImg?.mime,
    });
    formData.append("isTerms", values?.isTerms);
    formData.append("idFront", {
      uri: values?.idFront?.path,
      name: "idFront.png",
      type: values?.idFront?.mime,
    });
    formData.append("idBack", {
      uri: values?.idBack?.path,
      name: "idBack.png",
      type: values?.idBack?.mime,
    });
    formData.append("experienceCertificate", {
      uri: values?.experienceCertificate?.path,
      name: "experienceCertificate.png",
      type: values?.experienceCertificate?.mime,
    });
    formData.append("technicalDiploma", {
      uri: values?.technicalDiploma?.path,
      name: "technicalDiploma.png",
      type: values?.technicalDiploma?.mime,
    });
    formData.append("service", values?.service);
    formData.append("userType", "provider");
    // formData.append("createdAt", new Date());
    formData.append("isFCM", true);
    formData.append("fcmToken", deviceFCM_Token);
    formData.append("isProfileCompleted", true);
    console.log("1 BEFORE");
    const response = await axios.post(
      `users/updateProvider/${providerReducer?._id}`,
      formData,
      {
        headers: {
          Accept: "*/*",
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${providerReducer?.token}`,
        },
      }
    );
    console.log("2 AFTER axios");

    setIsLoading(false);
    // if (response.status === 200 || response.status === 201) {
    // Alert.alert("SUCCESS ", JSON.stringify(response.data, 2, 4));
    console.log(JSON.stringify(response, 2, 4));
    dispatch(saveProvider(response?.data));
    navigation.navigate("MembershipCongrats");
    // navigation.navigate("OTPScreen", { values: values });
    // dispatch(userToken(response.data.token));
    // } else {
    //   Alert.alert("ERROR ", JSON.stringify(response, 2, 4));
    // }
  } catch (error) {
    console.log(
      "ERROR providerRegistration() API",
      JSON.stringify(error, 2, 4)
    );
    setIsLoading(false);
    alert(JSON.stringify(error, 2, 4));
  }
};

export const getAllServices = async (
  token,
  navigation,
  setIsLoading,
  setAllServices
) => {
  try {
    setIsLoading(true);
    const response = await axios.get("services/allServices", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setIsLoading(false);
    if (response.status === 200 || response.status === 201) {
      setAllServices(response.data);
      console.log("SUCCESS ", JSON.stringify(response.data, 2, 4));
      // Alert.alert("SUCCESS ", JSON.stringify(response?.data?.success, 2, 4));
      // navigation.navigate("OTPScreen", { values: values });

      // dispatch(userToken(response.data.token));
    } else {
      Alert.alert("ERROR ", JSON.stringify(response, 2, 4));
    }
  } catch (error) {
    console.log("ERROR saveUserOtp() API", JSON.stringify(error, 2, 4));
    setIsLoading(false);
    alert(JSON.stringify(error, 2, 4));
  }
};
export const loginUser = async (
  values,
  dispatch,
  setLoader,
  code,
  value,
  navigation,
  isAccVerfy
) => {
  setLoader(true);
  try {
    const response = await axios.post(
      "/login",
      {
        phone: value,
        phone_country_code: code,
        password: values.Password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
        },
      }
    );
    Toast.show({
      type: "success",
      text1: "Success",
      text2: "Login sucessfully.",
      visibilityTime: 4000,
    });
    setLoader(false);

    if (code === "+1") {
      if (isAccVerfy === 1) {
        navigation.replace("PersonalUser");
      } else {
        navigation.replace("AddPersonalUser");
      }
    } else {
      navigation.replace("BanificalProfile");
    }
    // dispatch(userToken(response.data.token));
  } catch (error) {
    console.log(JSON.stringify(error));
    setLoader(false);
    if (error.code === "ERR_BAD_REQUEST") {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Invalid user, phone number, or password.",
        visibilityTime: 4000,
      });
    } else {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Something went wrong.",
        visibilityTime: 4000,
      });
    }
  }
};
