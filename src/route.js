import { createStackNavigator, createAppContainer } from "react-navigation";
import UserList from "./components/UserList";

const Navigator = createStackNavigator(
  {
    UserList: { screen: UserList }
  },
  {
    initialRouteName: "UserList",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#3a86a8"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    },
    headerLayoutPreset: "center"
  }
);

export default createAppContainer(Navigator);
