import React from "react";
import { View, Text } from "react-native";
import { question } from "../../styles";

const Answers = ({ answers }) => {
  return (
    <View style={question.answers}>
      {answers.map(
        answer =>
          answer.value && (
            <View style={question.answer} key={answer.name}>
              <Text style={question.answerText}>{answer.value}</Text>
            </View>
          )
      )}
    </View>
  );
};

export default Answers;
