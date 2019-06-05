import React, { Component } from "react";
import { View } from "react-native";
import { Appbar, Button } from "react-native-paper";
import { StackActions, NavigationActions } from "react-navigation";

import styles from "../../config/styles";
import Axios from "axios";

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  logout = async () => {
    const response = await Axios.post(
      "http://tormenta.herokuapp.com/usuario/logout",
      {}
    );
    console.log(response);

    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: "SignIn"
        })
      ]
    });
    console.log(resetAction);
    this.props.navigation.dispatch(resetAction);
  };
  render() {
    return (
      <View>
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction onPress={this.logout} />
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
