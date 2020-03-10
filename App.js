import * as React from "react";
import styles from "./styles";
import "react-native-gesture-handler";
import { View, Text, Button, AsyncStorage } from "react-native";

import { createStore, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";
import thunk from "redux-thunk";
import { reducer } from "./utils/reducers";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Login, Signup } from "./screens/Auth";

const store = createStore(reducer, applyMiddleware(thunk));

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const mapStateToProps = state => {
  return {
    title: state.title
  };
};

const Home = connect(mapStateToProps)(props => (
  <View style={styles.container}>
    <Text>{props.title}</Text>
    <Text onPress={() => props.navigation.push("Details")}>Go to Details</Text>
  </View>
));

const Profile = props => (
  <View style={styles.container}>
    <Text>Profile</Text>
  </View>
);

const AuthScreen = ({ navigation }) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor: "white",
        style: {
          backgroundColor: "#141534"
        }
      }}
    >
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Signup" component={Signup} />
    </Tab.Navigator>
  );
};

function HomeScreen({ navigation }) {
  let token = "";

  storeData = async (token, data) => {
    try {
      await AsyncStorage.setItem(token, JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  };

  retrieveData = async () => {
    try {
      console.log(JSON.parse(await AsyncStorage.getItem("token")));
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    storeData("token", [1, 2, 3]);
    retrieveData();
  }, []);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor: "white",
        style: {
          backgroundColor: "#141534"
        }
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text onPress={() => navigation.push("Home")}>Go to Home</Text>
      <Button
        title="Update the title"
        onPress={() =>
          navigation.setOptions({
            title: "eleştir!"
          })
        }
      />
    </View>
  );
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Info"
                color="white"
              />
            ),
            headerStyle: { ...styles.primaryBackground },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold"
            }
          }}
        >
          <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
