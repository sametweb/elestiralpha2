import React from "react";
import { View, Text, Image } from "react-native";
import { question } from "../../styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const Meta = ({ metaData, usersInfo }) => {
  return (
    <View style={question.meta}>
      <View style={question.commentCount}>
        <TouchableOpacity>
          <Text style={question.commentCountText}>
            {metaData.commentCount} comment
          </Text>
        </TouchableOpacity>
      </View>
      <View style={question.likeContainer}>
        <TouchableOpacity>
          <Image
            style={question.likeImageActive}
            source={require("../../images/like.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={question.username}>
        <TouchableOpacity>
          <Text style={question.usernameText}>{usersInfo.username}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Meta;
