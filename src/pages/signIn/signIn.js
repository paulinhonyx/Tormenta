import React, { Component } from "react";
import { Image, View, Text, AsyncStorage } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { StackActions, NavigationActions } from "react-navigation";

import Axios from "axios";

import styles from "../../config/styles";

export default class SignIn extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  state = {
    usuario: "paulo",
    senha: "123",
    error: ""
  };

  handleSignInPress = async () => {
    if (this.state.usuario.length === 0 || this.state.senha.length === 0) {
      this.setState(
        { error: "Preencha usuário e senha para continuar!" },
        () => false
      );
    } else {
      try {
        const response = await Axios.post(
          "http://tormenta.herokuapp.com/usuario/login",
          {
            nome: this.state.usuario,
            senha: this.state.senha
          }
        );
        console.log(response);
        console.log(response.config.data);

        const resetAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({
              routeName: "Home",
              params: { token: response.data.token }
            })
          ]
        });

        console.log(resetAction);
        this.props.navigation.dispatch(resetAction);
      } catch (_err) {
        this.setState({
          error: "Houve um problema com o login, verifique suas credenciais!"
        });
      }
    }
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
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          label="Senha"
          style={styles.textContainer}
          value={this.state.senha}
          onChangeText={senha => this.setState({ senha })}
          autoCorrect={false}
          secureTextEntry={true}
        />
        {this.state.error.length !== 0 && <Text>{this.state.error}</Text>}
        <Button
          style={styles.entrar}
          mode="contained"
          onPress={this.handleSignInPress}
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
