import React, { Component } from "react";
import { Image, View, AsyncStorage, Text, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";

import styles from "../config/styles";
import api from "../services/api";

export default class SignIn extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  state = {
    email: "",
    logged: null,
    password: "",
    errorMessage: null
  };

  /*signIn = async () => {
    try {
      const response = await api.post("/users", {
        email: "Zaria69@yahoo.com",
        password: "JzHVX1V_wpiGx7q",
        projects: []
      });

      const { user, token } = response.data;

      await AsyncStorage.multiSet([
        ["@CodeApi:token", token],
        ["@CodeApi:user", JSON.stringify(user)]
      ]);

      this.setState({ logged: user });

      Alert.alert("Login com sucesso!");
    } catch (response) {
      console.log(response);
      this.setState({ errorMessage: err.data.error });
    }
  };

  getProjectList = async () => {
    try {
      const response = await api.get("/mesas");

      const { mesas } = response.data;

      this.setState({ projects });
    } catch (response) {
      this.setState({ errorMessage: response.data.error });
    }
  };

  async componentDidMount() {
    const token = await AsyncStorage.getItem("@CodeApi:token");
    const user =
      JSON.parse(await AsyncStorage.getItem("@CodeApi:user")) || null;

    if (token && user) {
      this.setState({ logged: user });
    }
  }
*/
  render() {
    return (
      <View>
        <Image
          style={styles.logo}
          source={require("../avatar/tormenta-rpg-01.png")}
        />
        <TextInput
          label="Login"
          style={styles.textContainer}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          label="Senha"
          style={styles.textContainer}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          secureTextEntry={true}
        />
        {!!this.state.errorMessage && <Text>{this.state.errorMessage}</Text>}
        <Button
          style={styles.entrar}
          mode="contained"
          onPress={() => this.props.navigation.navigate("Home")}
          //onPress={this.signIn}
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
