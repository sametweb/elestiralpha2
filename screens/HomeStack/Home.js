import React from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { connect } from "react-redux";
import { logout } from "../../utils/actions";
import styles from "../../styles";

const Home = props => {
  return (
    <ScrollView>
      <Text>Home</Text>
      <Button title="Logout" onPress={() => props.logout()} />
    </ScrollView>
  );
};

export default connect(null, { logout })(Home);
