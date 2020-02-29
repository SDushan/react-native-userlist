import React from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Alert,
  ScrollView
} from "react-native";
import UserSummary from "./common/UserSummary";
import UserModel from "./UserModel";
import Spinner from "./common/Spinner";
import { Input } from "./common/Input";
import { Button } from "./common/Button";
import { fetchUsers } from "../actions";

const ScreenWidth = Dimensions.get("window").width;

class UserList extends React.Component {
  state = {
    isModalVisible: false,
    selectedUser: {},
    searchInputId: ""
  };

  static navigationOptions = {
    title: "User Information"
  };

  componentDidMount() {
    this.props.onFetchUsers();
  }

  selectItem = user => {
    this.setState({
      selectedUser: user,
      isModalVisible: true
    });
  };

  onHideModal = () => {
    this.setState({
      selectedUser: {},
      isModalVisible: false,
      searchInputId: ""
    });
  };

  onHandleInputId = userId => {
    this.setState({
      searchInputId: userId
    });
  };

  onSearchInputId = () => {
    if (Number(this.state.searchInputId) && this.state.searchInputId > 0) {
      let selectedUser = this.props.userData.users.find(
        user => user.id == this.state.searchInputId
      );
      if (selectedUser) {
        this.selectItem(selectedUser);
      } else {
        Alert.alert(
          "",
          "No ID found 😢 search again...",
          [{ text: "OK", onPress: () => this.setState({ searchInputId: "" }) }],
          { cancelable: false }
        );
      }
    } else {
      Alert.alert(
        "",
        "Please enter a valid number 😢...",
        [{ text: "OK", onPress: () => this.setState({ searchInputId: "" }) }],
        { cancelable: false }
      );
    }
  };

  renderPosts = ({ item }) => {
    return (
      <UserSummary key={item.id} user={item} onSelected={this.selectItem} />
    );
  };

  render() {
    const {
      containerStyle,
      subContainerStyle,
      textStyle,
      inputContainerStyle
    } = styles;

    return (
      <View style={containerStyle}>
        {this.props.userData.users.length > 0 ? (
          <ScrollView>
            <View style={inputContainerStyle}>
              <Input
                placeholder="User ID"
                value={this.state.searchInputId}
                onChangeText={this.onHandleInputId}
              />
              <Button onPress={this.onSearchInputId}>Search</Button>
            </View>
            <Text style={textStyle}>AVAILABLE USERS</Text>
            <FlatList
              data={this.props.userData.users}
              renderItem={this.renderPosts}
              keyExtractor={item => String(item.id)}
            />
            <UserModel
              isModalVisible={this.state.isModalVisible}
              onHideModal={this.onHideModal}
              user={this.state.selectedUser}
            />
          </ScrollView>
        ) : this.props.userData.isErrorFetchingUsers ? (
          <View style={subContainerStyle}>
            <Text style={textStyle}>Error while loading... 😢</Text>
          </View>
        ) : (
          <View style={subContainerStyle}>
            <Text style={textStyle}>Loading... Please wait 😃</Text>
            <Spinner size={ScreenWidth / 2} />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1
  },
  subContainerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    padding: 20,
    fontSize: 18
  },
  inputContainerStyle: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F7F7FA"
  }
});

const mapStateToProps = state => {
  return {
    userData: state.UserReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUsers: () => {
      dispatch(fetchUsers());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
