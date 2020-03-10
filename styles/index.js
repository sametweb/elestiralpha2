import { StyleSheet } from "react-native";

export const primary = "#f4511e";
export const secondary = "#141534";

const styles = StyleSheet.create({
  primaryBackground: { backgroundColor: "#f4511e" },
  secondaryBackground: { backgroundColor: "#141534" },
  primaryText: { color: "#f4511e" },
  secondaryText: { color: "#141534" },
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "flex-start",
    backgroundColor: "#f0fafd"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export const login = StyleSheet.create({
  loginContainer: {
    paddingTop: 100,
    paddingLeft: 30,
    paddingRight: 30
  },
  title: {
    color: secondary,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
  formContainer: {
    paddingTop: 50,
    paddingBottom: 20
  },
  input: {
    fontSize: 18,
    height: 50,
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderColor: "#d1d1d2",
    backgroundColor: `#f1f1f2`,
    paddingLeft: 30,
    marginBottom: 10
  }
});

export default styles;

// import { Platform } from 'react-native';
// const instructions = Platform.select({
//     ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
//     android:
//       "Double tap R on your keyboard to reload,\n" +
//       "Shake or press menu button for dev menu"
//   });
