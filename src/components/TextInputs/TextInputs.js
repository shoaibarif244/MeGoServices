import React from "react";
import { View, Image, TouchableOpacity, TextInput, Text } from "react-native";
import { MaterialCommunityIcons, Feather } from "../../utils/Exports";
import { Theme } from "../../utils/Theme";
import styles from "./Style";
const TextInputs = (props) => {
  const {
    simpleTxtInput,
    searchInput,
    label,
    onPressSend,
    value,
    onChangeText,
    secureTextEntry,
    placeholder,
    width,
    maxLength,
    password,
    whiteBgTxtInp,
    keyboardType,
    onEyePress,
    icEye,
    color,
    editable,
    searchInputLIcon,
    style,
    placeholderTextColor,
    phoneNum,
    country,
  } = props;
  return (
    <>
      {simpleTxtInput === true ? (
        <TextInput
          value={value}
          placeholderTextColor={Theme.greish}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          style={{ ...styles.txtInp, width: width, ...style }}
          placeholder={placeholder}
          maxLength={maxLength}
          keyboardType={keyboardType}
          editable={editable}
        />
      ) : password === true ? (
        <View style={styles.wrapIconTxtInp}>
          <TextInput
            value={value}
            placeholderTextColor={Theme.greish}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            style={{ ...styles.txtInp1 }}
            placeholder={placeholder}
            maxLength={maxLength}
            keyboardType={keyboardType}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TouchableOpacity onPress={onEyePress}>
            <MaterialCommunityIcons
              name={icEye}
              size={Theme.iconSizeSm}
              color={color}
            />
          </TouchableOpacity>
        </View>
      ) : searchInput === true ? (
        <View style={{ ...styles.wrapIconTxtInp, ...style }}>
          <TextInput
            label={label}
            value={value}
            placeholderTextColor={placeholderTextColor ?? Theme.greish}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            style={{ ...styles.txtInp1 }}
            placeholder={placeholder}
            maxLength={maxLength}
            keyboardType={keyboardType}
            autoCapitalize="none"
            autoCorrect={false}
            editable={editable}
          />
          <TouchableOpacity onPress={onEyePress}>
            {/* <Image
              source={require("../../Assets/Search_fill.png")}
              style={{ height: Theme.iconSize, width: Theme.iconSize }}
              resizeMode="center"
            /> */}
          </TouchableOpacity>
        </View>
      ) : searchInputLIcon === true ? (
        <View style={styles.wrapIconTxtInp}>
          <TouchableOpacity onPress={onEyePress}>
            {/* <Image
              source={require("../../Assets/searchOutline.png")}
              style={{ height: Theme.wp(5), width: Theme.wp(10) }}
              resizeMode="center"
            /> */}
          </TouchableOpacity>
          <TextInput
            label={label}
            value={value}
            placeholderTextColor={Theme.greish}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            style={{ ...styles.txtInp1 }}
            placeholder={placeholder}
            maxLength={maxLength}
            keyboardType={keyboardType}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      ) : phoneNum === true ? (
        <View style={styles.wrapIconTxtInp}>
          <Text style={styles.countryCode}>{country ? "+971" : "+92"}</Text>
          <TextInput
            label={label}
            value={value}
            placeholderTextColor={Theme.greish}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            style={{ ...styles.txtInp1 }}
            placeholder={placeholder}
            maxLength={maxLength}
            keyboardType={keyboardType}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      ) : null}
    </>
  );
};
export default TextInputs;
