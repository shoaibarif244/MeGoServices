import axios from "axios";
import { Theme } from "../../utils/Theme";
// import Toast from "react-native-toast-message";
// import { userToken } from "../redux/actions";

export const registerUser = async (
  values,
  setLoader,
  checked,
  setCheckedColor,
  setCheckError,
  check,
  navigation,
  dispatch
) => {
  if (checked === false) {
    setCheckedColor(Theme.errorColor);
    setCheckError("You must accept terms of service to complete.");
  } else if (check === false) {
    setCheckedColor(Theme.errorColor);
    setCheckError("You must accept terms of service to complete.");
  } else {
    try {
      setLoader(true);
      const res = await fetch(
        "http://seremobackend-dev.eba-zyijcyj6.us-east-2.elasticbeanstalk.com/api/v1/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            first_name: values.FirstName,
            last_name: values.LastName,
            email: values.Email,
            password: values.Password,
            verify_password: values.ConfirmPassword,
            account_type: "PERSONAL",
          }),
        }
      );

      const response = await res.json();

      // return;
      setLoader(false);

      if (response.code === 200 || response.code === 201) {
        Toast.show({
          type: "success",
          text1: "Success",
          text2: "User register successfully.",
          visibilityTime: 4000,
        });
        navigation.navigate("NumberScreen");
        // dispatch(userToken(response.data.token));
        if (response.data.errors.email[0]) {
          Toast.show({
            type: "error",
            text1: "Error",
            text2: "The email has already been taken.",
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
      } else {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "Something went wrong.",
          visibilityTime: 4000,
        });
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
      alert(error.message);
    }
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
