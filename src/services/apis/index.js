import axios from "axios";
import { Alert } from "react-native";
import { Theme } from "../../utils/Theme";
// import Toast from "react-native-toast-message";
// import { userToken } from "../redux/actions";
import messaging from "@react-native-firebase/messaging";
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
        Alert.alert("SUCCESS ", JSON.stringify(response?.data?.success, 2, 4));
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
      Alert.alert("SUCCESS ", JSON.stringify(response, 2, 4));
      navigation.navigate("MembershipDetails");
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
export const providerRegistration = async (
  values,
  navigation,
  setIsLoading
) => {
  try {
    setIsLoading(true);
    console.log(values);
    let deviceFCM_Token = await messaging().getToken();
    const formData = new FormData();
    formData.append("fullName", values?.fullName);
    formData.append("phoneNo", "+923001234567");
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
    formData.append("isFCM", true);
    formData.append("fcmToken", deviceFCM_Token);

    const response = await axios.post(
      "users/updateProvider/63d6c7df86e9756b99a305b8",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Q2YzdkZjg2ZTk3NTZiOTlhMzA1YjgiLCJpYXQiOjE2NzUwMjAyODZ9.bE6VIoY7oSaRh6O8BfJRs32A52oju_y2uHFzmdyVDlA",
        },
      }
    );

    setIsLoading(false);
    if (response.status === 200 || response.status === 201) {
      Alert.alert("SUCCESS ", JSON.stringify(response, 2, 4));
      console.log(JSON.stringify(response, 2, 4));
      // navigation.navigate("MembershipDetails");
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
