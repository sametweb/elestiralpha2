import * as React from "react";
import styles from "./styles";
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

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Question" component={Question} />
      <HomeStack.Screen name="Profile" component={Profile} />
    </HomeStack.Navigator>
  );
};

const SettingsStackScreen = ({ navigation }) => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={Settings} />
      <SettingsStack.Screen name="Personal" component={Personal} />
      <SettingsStack.Screen name="EmailPassword" component={EmailPassword} />
    </SettingsStack.Navigator>
  );
};

// function HomeScreen({ navigation }) {
//   let token = "";

//   storeData = async (token, data) => {
//     try {
//       await AsyncStorage.setItem(token, JSON.stringify(data));
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   retrieveData = async () => {
//     try {
//       console.log(JSON.parse(await AsyncStorage.getItem("token")));
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   React.useEffect(() => {
//     storeData("token", [1, 2, 3]);
//     retrieveData();
//   }, []);

//   return (
//     <Tab.Navigator
//       tabBarOptions={{
//         activeTintColor: "white",
//         inactiveTintColor: "white",
//         style: {
//           backgroundColor: "#141534"
//         }
//       }}
//     >
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Profile" component={Profile} />
//     </Tab.Navigator>
//   );
// }

// function DetailsScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text>Details Screen</Text>
//       <Text onPress={() => navigation.push("Home")}>Go to Home</Text>
//       <Button
//         title="Update the title"
//         onPress={() =>
//           navigation.setOptions({
//             title: "eleştir!"
//           })
//         }
//       />
//     </View>
//   );
// }

const MainApp = connect(state => ({ token: state.token }))(props => {
  console.log("PROPS", props);
  return (
    <NavigationContainer>
      {!props.token ? (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Auth" component={AuthStackScreen} />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator
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
          <Stack.Screen name="Home" component={HomeStackScreen} />
          <Stack.Screen name="Settings" component={SettingsStackScreen} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
});

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
