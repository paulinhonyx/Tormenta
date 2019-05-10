import React, { Component } from "react";
import { View } from "react-native";
import { Appbar, Button } from "react-native-paper";

import styles from "../config/styles";

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  state = {};
  render() {
    return (
      <View>
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction onPress={() => this.props.navigation.pop()} />
          <Appbar.Content title="Principal" />
          <Appbar.Action
            icon="person"
            onPress={() => this.props.navigation.navigate("Perfil")}
          />
        </Appbar.Header>
        <Button
          style={styles.homeContainer}
          mode="contained"
          onPress={() => this.props.navigation.navigate("")}
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
