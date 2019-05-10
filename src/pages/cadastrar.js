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
    header: null
  });
  state = {
    usuario: "",
    senha: "",
    confSenha: "",
    email: "",
    confEmail: "",
    visible: false
  };
  _showDialog = () => this.setState({ visible: true });

  _hideDialog = () => this.setState({ visible: false });

  render() {
    return (
      <View>
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction onPress={() => this.props.navigation.pop()} />
          <Appbar.Content title="Cadastro" />
        </Appbar.Header>
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
        <TextInput
          label="Email"
          style={styles.textContainer}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <HelperText style={styles.erroText} type="error" visible={!this.state.email.includes("@")}>
          Email invalido!
        </HelperText>
        <TextInput
          label="Confirmar Email"
          style={styles.textContainer}
          keyboardType="email-address"
          value={this.state.confEmail}
          onChangeText={confEmail => this.setState({ confEmail })}
        />
        <Button
          style={styles.cadastrar}
          mode="contained"
          onPress={() => this.setState({visible:"true"})}
        >
          Cadastrar
        </Button>
        <Portal>
          <Dialog visible={this.state.visible} onDismiss={this._hideDialog}>
            <Dialog.Content>
              <Paragraph>Cadastro realizado com sucesso!</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => this.props.navigation.navigate("Main")}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    );
  }
}
