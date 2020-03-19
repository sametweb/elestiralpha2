import React from "react";
import { View, Text } from "react-native";
import Answer from "./Answer";
import { question } from "../../styles";

const Answers = ({ answers, questionID, usersChoice }) => {
  return (
    <View style={question.answers}>
      {answers.map(
        (answer, i) =>
          answer.value && (
            <Answer
              key={i}
              answer={answer}
              choice={i + 1}
              questionID={questionID}
              usersChoice={usersChoice}
            />
          )
      )}
    </View>
  );
};

export default Answers;
