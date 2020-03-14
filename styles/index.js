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
    height: "100%",
    width: "100%",
    padding: 10,
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
  },
  messageContainer: {
    padding: 20,
    marginTop: 50,
    backgroundColor: "rgba(255,255,255,0.2)"
  },
  signupSuccessful: {
    fontSize: 20,
    textAlign: "center",
    lineHeight: 30
  }
});

export const question = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.07)",
    padding: 10,
    marginBottom: 20
  },
  title: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    fontWeight: "bold",
    color: "black"
  },
  answers: {
    padding: 10,
    marginBottom: 10
  },
  answer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    marginBottom: 8,
    borderRadius: 5,
    backgroundColor: "#fff"
  },
  answerText: {
    fontSize: 15
  },
  meta: {
    flex: 1,
    height: 22,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 5
  },
  metaText: {
    fontSize: 12
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
