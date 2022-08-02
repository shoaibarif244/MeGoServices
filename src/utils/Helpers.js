import { ToastAndroid, Platform, AlertIOS } from "react-native";
export default class Helpers {
  convertFirebaseDateToJS = (date) => {
    const fireBaseTime = new Date(
      date?.seconds * 1000 + date?.nanoseconds / 1000000
    );
    const dueDate = fireBaseTime.toDateString();
    return dueDate.slice(4);
    return dueDate;
  };

  Toaster = (msg) => {
    if (Platform.OS === "android") {
      ToastAndroid.show(JSON.stringify(msg), ToastAndroid.SHORT);
    } else {
      AlertIOS.alert(msg);
    }
  };
}
