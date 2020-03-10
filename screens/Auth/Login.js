import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { connect } from "react-redux";
import { login as loginAction, logout } from "../../utils/actions";

import { login } from "../../styles";

const Login = props => {
  const [creds, setCreds] = useState({ username: "", password: "" });

  const handleLogin = creds => props.loginAction(creds);

  return (
    <View style={login.loginContainer}>
      <Text style={login.title}>Please Log in</Text>
      <View style={login.formContainer}>
        <TextInput
          style={login.input}
          placeholder="username"
          value={creds.username}
          onChangeText={text => setCreds({ ...creds, username: text })}
        />
        <TextInput
          style={login.input}
          placeholder="password"
          value={creds.password}
          textContentType="password"
          secureTextEntry
          onChangeText={text => setCreds({ ...creds, password: text })}
        />
        <Button title="Login" onPress={() => handleLogin(creds)} />
        <Button title="Logout" onPress={() => props.logout(creds)} />
      </View>
    </View>
  );
};

export default connect(null, { loginAction, logout })(Login);
