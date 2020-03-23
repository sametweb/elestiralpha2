import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { fetchQuestion } from "../../utils/actions";

const Question = props => {
  const { ID } = props.route.params;

  useEffect(() => {
    props.fetchQuestion(ID);
  }, []);
  console.log("Question Props: ", props);
  return (
    <View>
      <Text>Question</Text>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    singleQuestion: state.singleQuestion
  };
};

export default connect(mapStateToProps, { fetchQuestion })(Question);
