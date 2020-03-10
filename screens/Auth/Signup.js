import React from "react";
import { View, Text, Button } from "react-native";

const Signup = props => {
  return (
    <View>
      <Text>Signup</Text>
      <Button
        title="Go to Home"
        onPress={() => props.navigation.push("Home")}
      />
    </View>
  );
};

export default Signup;
