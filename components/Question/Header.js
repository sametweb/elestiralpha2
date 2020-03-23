import React from "react";
import { Text } from "react-native";
import { withNavigation } from "@react-navigation/compat";
import { TouchableOpacity } from "react-native-gesture-handler";
import { question } from "../../styles";

const Header = ({ text, ID, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Question", { ID })}>
      <Text style={question.title}>{text}</Text>
    </TouchableOpacity>
  );
};

export default withNavigation(Header);
