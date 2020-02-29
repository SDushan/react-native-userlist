import React from "react";
import { Text, View, Image, Modal, StyleSheet } from "react-native";
import { Button } from "./common/Button";

export default class UserModel extends React.PureComponent {
  render() {
    const {
      containerStyle,
      textContainer,
      headerTextStyle,
      bodyTextStyle,
      imgContainer,
      modelContainerStyle,
      subContainerStyle,
      cutOffTopLeft,
      cutOffBottomRight
    } = styles;

    return (
      <Modal
        visible={this.props.isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={this.props.onHideModal}
      >
        <View style={containerStyle}>
          <View style={modelContainerStyle}>
            <View style={cutOffTopLeft} />
            <View style={cutOffBottomRight} />
            <View style={subContainerStyle}>
              <Image
                source={{ uri: this.props.user.avatar }}
                style={imgContainer}
                borderRadius={25}
                resizeMode="cover"
              />

              <View style={textContainer}>
                <Text style={headerTextStyle}>First Name</Text>
                <Text style={headerTextStyle}>Last Name</Text>
                <Text style={headerTextStyle}>Email</Text>
              </View>

              <View style={textContainer}>
                <Text style={bodyTextStyle}>{this.props.user.first_name}</Text>
                <Text style={bodyTextStyle}>{this.props.user.last_name}</Text>
                <Text style={bodyTextStyle}>{this.props.user.email}</Text>
              </View>
            </View>
            <Button onPress={this.props.onHideModal}>Close</Button>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  modelContainerStyle: {
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F7FA",
  },
  subContainerStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10
  },
  imgContainer: { width: 50, height: 50, marginLeft: 10, marginRight: 10 },
  textContainer: {
    flexDirection: "column",
    paddingTop: 10,
    paddingBottom: 10
  },
  headerTextStyle: {
    color: "#2A2E43",
    fontSize: 14
  },
  bodyTextStyle: {
    color: "#78849E",
    fontSize: 14,
    paddingLeft: 10,
    paddingRight: 10
  },
  cutOffTopLeft: {
    position: "absolute",
    left: 0,
    top: 0,
    borderRightWidth: 10,
    borderTopWidth: 10,
    borderTopColor: "rgba(0,0,0,0.5)",
    borderRightColor: "transparent"
  },
  cutOffBottomRight: {
    position: "absolute",
    right: 0,
    bottom: 0,
    borderLeftWidth: 15,
    borderBottomWidth: 15,
    borderBottomColor: "rgba(0,0,0,0.5)",
    borderLeftColor: "transparent"
  },
});
