import * as React from "react";
import styles, { primary, secondary } from "./styles";
import "react-native-gesture-handler";
import { View, Text, Button, AsyncStorage } from "react-native";

// redux
import { createStore, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";
import thunk from "redux-thunk";
import { reducer } from "./utils/reducers";

// react-navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// components
import { Login, Signup } from "./screens/AuthStack";
import { Home, Question, Profile } from "./screens/HomeStack";
import { Settings, Personal, EmailPassword } from "./screens/SettingsStack";

const store = createStore(reducer, applyMiddleware(thunk));

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const AuthStackScreen = ({ navigation }) => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
  );
};

const HomeStackScreen = props => {
  console.log(styles);
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: primary
        },
        headerTintColor: "#fff"
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Question" component={Question} />
      <HomeStack.Screen name="Profile" component={Profile} />
    </HomeStack.Navigator>
  );
};

const SettingsStackScreen = props => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={Settings} />
      <SettingsStack.Screen name="Personal" component={Personal} />
      <SettingsStack.Screen name="EmailPassword" component={EmailPassword} />
    </SettingsStack.Navigator>
  );
};

const myTabBarOptions = {
  style: {
    backgroundColor: secondary
  },
  activeTintColor: "white",
  keyboardHidesTabBar: true
};

const MainApp = connect(state => ({ token: state.token }))(props => {
  console.log("PROPS", props);
  return (
    <NavigationContainer>
      {props.token ? (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Auth" component={AuthStackScreen} />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator tabBarOptions={myTabBarOptions}>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Settings" component={SettingsStackScreen} />
          <Tab.Screen name="Settings3" component={SettingsStackScreen} />
          <Tab.Screen name="Settings2" component={SettingsStackScreen} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
});

const App = () => {
  AsyncStorage.getItem("@token").then(res => console.log("@token", res));
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
