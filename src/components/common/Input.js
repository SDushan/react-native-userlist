import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

const Input = ({ value, onChangeText, placeholder }) => {
  const { inputStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <TextInput
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        keyboardType={"numeric"}
        maxLength={4}
        returnKeyType={"search"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 2.5,
    paddingBottom: 2.5,
    fontSize: 18,
    lineHeight: 23,
    flex: 1,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd"
  },
  containerStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  }
});

export { Input };
