import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { question } from "../../styles";

import { connect } from "react-redux";
import { setChoice } from "../../utils/actions";
import { TouchableOpacity } from "react-native-gesture-handler";
import Spinner from "../Spinner";

const Answer = ({ answer, choice, questionID, setChoice, usersChoice }) => {
  const [choosing, setChoosing] = useState(false);

  const handleSetChoice = params => {
    setChoosing(true);
    setChoice(params);
  };

  useEffect(() => {
    if (usersChoice) setChoosing(false);
  }, [usersChoice]);

  if (usersChoice) {
    if (usersChoice !== choice) {
      return (
        <View style={question.answer} key={answer.name}>
          <Text style={question.answerText}>{answer.value}</Text>
        </View>
      );
    } else {
      return (
        <View style={question.selectedAnswer} key={answer.name}>
          <Text style={question.selectedAnswerText}>{answer.value}</Text>
        </View>
      );
    }
  }
  return (
    <TouchableOpacity
      style={question.answer}
      key={answer.name}
      onPress={() => handleSetChoice({ questionID, choice })}
    >
      <Text style={question.answerText}>{answer.value}</Text>
      {choosing && <Spinner size={18} paddingTop={0} />}
    </TouchableOpacity>
  );
};

export default connect(null, { setChoice })(Answer);
