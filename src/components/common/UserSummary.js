import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Card from "./Card";

export default class UserSummary extends React.PureComponent {
  onSelected = () => {
    this.props.onSelected(this.props.user);
  };

  render() {
    const { id, first_name } = this.props.user;
    const {
      cardContainer,
      containerStyle,
      headerContainer,
      subContainer,
      headerTextStyle,
      bodyTextStyle
    } = styles;

    return (
      <View style={cardContainer}>
        <Card>
          <TouchableOpacity style={containerStyle} onPress={this.onSelected}>
            <View style={headerContainer}>
              <Text style={headerTextStyle}>ID</Text>
              <Text style={headerTextStyle}>Name</Text>
            </View>
            <View style={subContainer}>
              <Text style={bodyTextStyle}>{String(id).padStart(4, "0")}</Text>
              <Text style={bodyTextStyle}>{first_name}</Text>
            </View>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10
  },
  containerStyle: {
    flex: 1,
    flexDirection: "row"
  },
  headerContainer: {
    backgroundColor: "#F7F7FA",
    width: "25%",
    flexDirection: "column",
    padding: 10
  },
  subContainer: {
    backgroundColor: "#F7F7FA",
    width: "75%",
    flexDirection: "column",
    padding: 10
  },
  headerTextStyle: {
    color: "#2A2E43",
    fontSize: 15
  },
  bodyTextStyle: {
    color: "#78849E",
    fontSize: 15
  }
});
