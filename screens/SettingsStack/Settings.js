import React from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { connect } from "react-redux";
import { logout } from "../../utils/actions";

const Settings = props => {
  return (
    <View>
      <Text>Settings</Text>
      <Button title="Home" onPress={() => props.navigation.navigate("Home")} />
      <Button title="Logout" onPress={() => props.logout()} />
    </View>
  );
};

export default connect(null, { logout })(Settings);
