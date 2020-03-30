import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { connect } from "react-redux";
import { appStart, login as loginAction, logout } from "../../utils/actions";

import { form } from "../../styles";
import Spinner from "../../components/Spinner";

const Login = props => {
  const [creds, setCreds] = useState({ username: "", password: "" });

  const handleLogin = creds => props.loginAction(creds);

  useEffect(() => {
    props.appStart();
  }, []);

  return (
    <ImageBackground
      style={{
        backgroundColor: "#ccc",
        flex: 1,
        resizeMode: "center",
        position: "absolute",
        width: "100%",
        height: "100%",
        justifyContent: "center"
      }}
      source={{
        uri:
          "https://i.pinimg.com/474x/cc/21/fa/cc21fa7f22bd400a13044468088bf1e8.jpg"
      }}
    >
      <KeyboardAvoidingView style={form.screenContainer} behavior="padding">
        <Text style={form.screenTitle}>Log in</Text>
        {props.isLoading && <Spinner />}
        <View style={form.formContainer}>
          <TextInput
            style={form.input}
            placeholder="username"
            value={creds.username}
            onChangeText={text => setCreds({ ...creds, username: text })}
          />
          <TextInput
            style={form.input}
            placeholder="password"
            value={creds.password}
            textContentType="password"
            secureTextEntry
            onChangeText={text => setCreds({ ...creds, password: text })}
          />
          <TouchableOpacity
            style={form.primaryButton}
            onPress={() => handleLogin(creds)}
          >
            <Text style={form.buttonText}>Log me in!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={form.button}
            onPress={() => props.navigation.navigate("Signup")}
          >
            <Text>Register if you don't have an account yet!</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    message: state.message
  };
};

export default connect(mapStateToProps, { appStart, loginAction, logout })(
  Login
);
