import React, { Component } from "react";
import { ScrollView } from "react-native";
import { Appbar, Text } from "react-native-paper";

import styles from "../config/styles";

export default class Ficha extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  state = {};

  render() {
    return (
      <ScrollView>
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction onPress={() => this.props.navigation.pop()} />
          <Appbar.Content title="Ficha" />
          <Appbar.Action
            icon="menu"
            onPress={() => this.props.navigation.navigate("drawerMenu")}
          />
        </Appbar.Header>
        <Container />
        <Text>Tela da Ficha</Text>
      </ScrollView>
    );
  }
}
