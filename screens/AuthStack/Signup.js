import React, { useState } from "react";
import { connect } from "react-redux";
import { signup } from "../../utils/actions";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground
} from "react-native";

import { form } from "../../styles";
import { ScrollView } from "react-native-gesture-handler";

const INITIAL_STATE = {
  username: "",
  password: "",
  email: "",
  phonenumber: ""
};

const Signup = props => {
  const [creds, setCreds] = useState(INITIAL_STATE);

  const [password2, setPassword2] = useState("");

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
        <ScrollView showsVerticalScrollIndicator={false}>
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
              value={password2}
              textContentType="password"
              secureTextEntry
              onChangeText={text => setPassword2(text)}
            />
            {creds.password !== password2 && (
              <Text>* Passwords don't match</Text>
            )}
            <TextInput
              style={form.input}
              placeholder="email"
              value={creds.email}
              onChangeText={text => setCreds({ ...creds, email: text })}
            />
            <TextInput
              style={form.input}
              placeholder="phone number"
              value={creds.phonenumber}
              onChangeText={text => setCreds({ ...creds, phonenumber: text })}
            />
            <TouchableOpacity
              style={form.primaryButton}
              onPress={() => props.signup(creds)}
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
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default connect(null, { signup })(Signup);
