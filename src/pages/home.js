import React, { Component } from "react";
import { View } from "react-native";
import { Appbar, Button } from "react-native-paper";

import styles from "../config/styles";

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.pop()} />
        <Appbar.Content title="Principal" />
        <Appbar.Action
          icon="person"
          onPress={() => navigation.navigate("Perfil")}
        />
      </Appbar.Header>
    )
  });
  state = {};
  render() {
    return (
      <View>
        <Button
          style={styles.homeContainer}
          mode="contained"
          onPress={() => this.props.navigation.navigate("procurarMesa")}
        >
          Procurar Mesa
        </Button>
        <Button
          style={styles.homeContainer}
          mode="contained"
          onPress={() => this.props.navigation.navigate("criarMesa")}
        >
          Criar Mesa
        </Button>
      </View>
    );
  }
}
