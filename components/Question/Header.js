import React from "react";
import { Text } from "react-native";
import { question } from "../../styles";

const Header = ({ text }) => {
  return <Text style={question.title}>{text}</Text>;
};

export default Header;
