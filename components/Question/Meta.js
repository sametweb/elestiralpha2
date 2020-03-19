import React from "react";
import { View, Text, Image } from "react-native";
import { question } from "../../styles";

const Meta = ({ metaData, usersInfo }) => {
  return (
    <View style={question.meta}>
      <Text style={question.commentCount}>{metaData.commentCount} comment</Text>
      <View style={question.likeContainer}>
        <Image
          style={question.likeImage}
          source={require("../../images/like.png")}
        />
      </View>
      <Text style={question.username}>{usersInfo.username}</Text>
    </View>
  );
};

export default Meta;
