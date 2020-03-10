import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground
} from "react-native";
import { form } from "../../styles";

const Signup = props => {
  const [creds, setCreds] = useState({
    username: "",
    password: "",
    password2: "",
    email: "",
    phoneNumber: ""
  });
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
        <Text style={form.screenTitle}>Sign up</Text>
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
          <TextInput
            style={form.input}
            placeholder="confirm password"
            value={creds.password2}
            textContentType="password"
            secureTextEntry
            onChangeText={text => setCreds({ ...creds, password2: text })}
          />
          <TextInput
            style={form.input}
            placeholder="email"
            value={creds.email}
            onChangeText={text => setCreds({ ...creds, email: text })}
          />
          <TextInput
            style={form.input}
            placeholder="phone number"
            value={creds.phoneNumber}
            onChangeText={text => setCreds({ ...creds, phoneNumber: text })}
          />
          <TouchableOpacity
            style={form.primaryButton}
            onPress={() => handleLogin(creds)}
          >
            <Text style={form.buttonText}>Sign me up!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={form.button}
            onPress={() => props.navigation.navigate("Login")}
          >
            <Text>If you have an account, log in!</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default Signup;
