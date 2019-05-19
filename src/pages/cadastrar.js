import React, { Component } from "react";
import { View } from "react-native";
import {
  Appbar,
  TextInput,
  HelperText,
  Button,
  Dialog,
  Portal,
  Paragraph
} from "react-native-paper";

import styles from "../config/styles";

export default class Cadastro extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.pop()} />
        <Appbar.Content title="Cadastro" />
      </Appbar.Header>
    )
  });
  state = {
    usuario: "",
    senha: "",
    confSenha: "",
    visible: false
  };
  _showDialog = () => this.setState({ visible: true });

  _hideDialog = () => this.setState({ visible: false });

  render() {
    return (
      <View>
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
        <TextInput
          label="Confirmar Senha"
          style={styles.textContainer}
          value={this.state.confSenha}
          onChangeText={confSenha => this.setState({ confSenha })}
          secureTextEntry={true}
        />

        <Button
          style={styles.cadastrar}
          mode="contained"
          onPress={() => this.setState({ visible: "true" })}
        >
          Cadastrar
        </Button>
        <Portal>
          <Dialog visible={this.state.visible} onDismiss={this._hideDialog}>
            <Dialog.Content>
              <Paragraph>Cadastro realizado com sucesso!</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => this.props.navigation.navigate("Main")}>
                Suave Japão
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    );
  }
}
