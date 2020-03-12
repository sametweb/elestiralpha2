import React from "react";
import { View, Text, ScrollView, Button } from "react-native";

const Settings = props => {
  return (
    <View>
      <Text>Settings</Text>
      <Button title="Home" onPress={() => props.navigation.navigate("Home")} />
    </View>
  );
};

export default Settings;
