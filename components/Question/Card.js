import React from "react";
import { View } from "react-native";
import { question } from "../../styles";

import Header from "./Header";
import Answers from "./Answers";
import Meta from "./Meta";

const Card = ({ item }) => {
  return (
    <View style={question.container}>
      <Header text={item.question} ID={item.ID} />
      <Answers
        answers={item.answers}
        questionID={item.ID}
        usersChoice={item.choice}
      />
      <Meta metaData={item.metaData} usersInfo={item.usersInfo} />
    </View>
  );
};

export default Card;
