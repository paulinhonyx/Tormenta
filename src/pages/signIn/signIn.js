import React, { Component } from "react";
import { Image, View } from "react-native";
import { TextInput, Button } from "react-native-paper";

import styles from "../../config/styles";

export default class SignIn extends Component {
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
        <Image
          style={styles.logo}
          source={require("../../avatar/tormenta-rpg-01.png")}
        />
        <TextInput
          label="Login"
          style={styles.textContainer}
          value={this.state.usuario}
          onChangeText={usuario => this.setState({ usuario })}
        />
        <TextInput
          label="Senha"
          style={styles.textContainer}
          value={this.state.senha}
          onChangeText={senha => this.setState({ senha })}
          secureTextEntry={true}
        />
        <Button
          style={styles.entrar}
          mode="contained"
          onPress={() => this.props.navigation.navigate("Home")}
        >
          Entrar
        </Button>
        <Button
          style={styles.cadastrar}
          mode="contained"
          onPress={() => this.props.navigation.navigate("signUp")}
        >
          Cadastrar
        </Button>
      </View>
    );
  }
}
