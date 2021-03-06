import React, { Component } from "react";
import { View } from "react-native";
import { Appbar, Button } from "react-native-paper";

import styles from "../../config/styles";

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  render() {
    return (
      <View>
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction onPress={() => this.props.navigation.goBack()} />
          <Appbar.Content title="Principal" />
        </Appbar.Header>
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
          onPress={() => this.props.navigation.navigate("minhasMesas")}
        >
          Minhas Mesas
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
