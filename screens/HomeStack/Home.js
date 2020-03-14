import React, { useEffect } from "react";
import { View, Text, ScrollView, Button, Image } from "react-native";
import { connect } from "react-redux";
import { fetchQuestions, logout } from "../../utils/actions";
import styles, { question } from "../../styles";

const Home = props => {
  useEffect(() => {
    props.fetchQuestions({ count: 5, offset: 0, token: "" });
  }, []);

  console.log(props.feed);
  return (
    <ScrollView style={styles.container}>
      {props.feed.map(item => (
        <View style={question.container} key={item.ID}>
          <Text style={question.title}>{item.question}</Text>
          <View style={question.answers}>
            {item.answers.map(
              answer =>
                answer.value && (
                  <View style={question.answer} key={answer.name}>
                    <Text style={question.answerText}>{answer.value}</Text>
                  </View>
                )
            )}
          </View>
          <View style={question.meta}>
            <Text style={question.metaText}>
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
            <Text style={question.metaText}>{item.usersInfo.username}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const mapStateToProps = state => {
  return {
    feed: state.feed
  };
};

export default connect(mapStateToProps, { fetchQuestions, logout })(Home);
