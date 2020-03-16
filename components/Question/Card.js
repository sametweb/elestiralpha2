import React from "react";
import { View, Text, Image } from "react-native";
import { question } from "../../styles";
import Header from "./Header";
import Answers from "./Answers";

const Card = ({ item }) => {
  return (
    <View style={question.container}>
      <Header text={item.question} />
      <Answers answers={item.answers} />
      <View style={question.meta}>
        <Text style={question.commentCount}>
          {item.metaData.commentCount} comment
        </Text>
        <View
          style={{
            padding: 1,
            borderRadius: 25,
            position: "relative",
            backgroundColor: "#e1e1e2"
          }}
        >
          <Image
            style={{
              width: 35,
              height: 35,
              backgroundColor: "rgba(255,255,255,1)",
              borderRadius: 35
            }}
            source={require("../../images/like.png")}
          />
        </View>
        <Text style={question.username}>{item.usersInfo.username}</Text>
      </View>
    </View>
  );
};

export default Card;
