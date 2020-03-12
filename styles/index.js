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

export const form = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 80,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: "space-between",
    backgroundColor: "rgba(255,255,255,0.4)"
  },
  screenTitle: {
    color: secondary,
    fontSize: 36,
    fontWeight: "bold"
  },
  formContainer: {
    paddingTop: 50,
    paddingBottom: 50
  },
  input: {
    fontSize: 17,
    height: 50,
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderColor: "#d1d1d2",
    backgroundColor: `rgba(255,255,255,0.5)`,
    borderRadius: 5,
    paddingLeft: 30,
    marginBottom: 10
  },
  button: {
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  primaryButton: {
    height: 50,
    backgroundColor: secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    textShadowRadius: 1,
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 }
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
