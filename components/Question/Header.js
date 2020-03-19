import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { question } from "../../styles";

const Header = ({ text }) => {
  return (
    <TouchableOpacity>
      <Text style={question.title}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Header;
