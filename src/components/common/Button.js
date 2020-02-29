import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from "react-native";

const ScreenWidth = Dimensions.get("window").width;

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle, cutOffBottomRight } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <View style={cutOffBottomRight} />
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 14,
    paddingTop: 5,
    paddingBottom: 5
  },
  buttonStyle: {
    width: (ScreenWidth - 40) / 3,
    backgroundColor: "#3a86a8",
    marginLeft: 5,
    marginRight: 5
  },
  cutOffBottomRight: {
    position: "absolute",
    right: 0,
    bottom: 0,
    borderLeftWidth: 10,
    borderBottomWidth: 10,
    borderBottomColor: "#F7F7FA",
    borderLeftColor: "transparent"
  }
});

export { Button };
