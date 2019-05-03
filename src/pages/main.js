import React, { Component } from "react";
import { Image, View } from "react-native";
import {
  Provider as PaperProvider,
  TextInput,
  Button,
  Appbar
} from "react-native-paper";

import styles from "./styles";

export default class Main extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  state = {
    usuario: "",
    senha: ""
  };

  render() {
    return (
      <View>
        <Appbar.Header style={styles.header}>
          <Appbar.Content title="SingIn" />
        </Appbar.Header>
        <Image
          style={styles.logo}
          source={require("../avatar/tormenta-rpg-01.png")}
        />
        <TextInput
          label="Login"
          style={styles.username}
          value={this.state.usuario}
          onChangeText={usuario => this.setState({ usuario })}
        />
        <TextInput
          label="Senha"
          style={styles.senha}
          value={this.state.senha}
          onChangeText={senha => this.setState({ senha })}
          secureTextEntry={true}
        />
        <Button
          style={styles.entrar}
          mode="contained"
          onPress={() => this.props.navigation.navigate("Principal")}
        >
          Entrar
        </Button>
        <Button
          style={styles.cadastrar}
          mode="contained"
          onPress={() => this.props.navigation.navigate("Cadastro")}
        >
          Cadastrar
        </Button>
      </View>
    );
  }
}
