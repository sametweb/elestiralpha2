import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { connect } from "react-redux";
import { fetchQuestions, logout } from "../../utils/actions";
import styles from "../../styles";
import Card from "../../components/Question/Card";

const Home = props => {
  const [params, setParams] = useState({ count: 10, offset: 0 });

  useEffect(() => {
    props.fetchQuestions(params);
  }, []);

  console.log({ feed: props.feed });

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
