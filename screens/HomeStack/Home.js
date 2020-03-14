import React from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { connect } from "react-redux";
import { logout } from "../../utils/actions";
import styles, { question } from "../../styles";

const Home = props => {
  return (
    <ScrollView style={styles.container}>
      <View style={question.container}>
        <Text style={question.title}>Sizce coronavirüs tehlikeli mi?</Text>
        <View style={question.answers}>
          <View style={question.answer}>
            <Text style={question.answerText}>Evet</Text>
          </View>
          <View style={question.answer}>
            <Text style={question.answerText}>Hayir</Text>
          </View>
          <View style={question.answer}>
            <Text style={question.answerText}>Amerika'nin oyunu</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default connect(null, { logout })(Home);
