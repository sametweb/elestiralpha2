import React, { useEffect } from "react";
import { View, Text, ScrollView, Button, Image } from "react-native";
import { connect } from "react-redux";
import { fetchQuestions, logout } from "../../utils/actions";
import styles from "../../styles";
import Card from "../../components/Question/Card";

const Home = props => {
  useEffect(() => {
    props.fetchQuestions({ count: 10, offset: 0 });
  }, []);

  console.log(props.feed);
  return (
    <ScrollView style={styles.container}>
      {props.feed.map(item => (
        <Card item={item} key={item.ID} />
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
