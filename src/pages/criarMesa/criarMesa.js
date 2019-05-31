import React, { Component } from "react";
import { View, ScrollView, Text, Picker } from "react-native";
import {
  Appbar,
  TextInput,
  Button,
  Portal,
  Dialog,
  Paragraph
} from "react-native-paper";

import styles from "../../config/styles";

export default class criarMesa extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.pop()} />
        <Appbar.Content title="Criar Mesa" />
      </Appbar.Header>
    )
  });
  state = {
    nomeMesa: "",
    senha: "",
    mundo: null,
    criar: false,
    cancelar: false
  };

  _showcriar = () => this.setState({ criar: true });

  _hidecriar = () => this.setState({ criar: false });

  _showcancelar = () => this.setState({ cancelar: true });

  _hidecancelar = () => this.setState({ cancelar: false });

  render() {
    return (
      <ScrollView>
        <View>
          <TextInput
            label="Nome"
            style={styles.textContainer2}
            value={this.state.nomeMesa}
            onChangeText={nomeMesa => this.setState({ nomeMesa })}
          />
          <TextInput
            label="Senha"
            style={styles.textContainer2}
            value={this.state.senha}
            onChangeText={senha => this.setState({ senha })}
            secureTextEntry
          />

          <View>
            <Button
              style={styles.entrar}
              mode="contained"
              onPress={() => this.setState({ criar: true })}
            >
              Criar
            </Button>
            <Button
              style={styles.cancelar}
              mode="contained"
              onPress={() => this.setState({ cancelar: true })}
            >
              Cancelar
            </Button>
            <Portal>
              <Dialog visible={this.state.criar} onDismiss={this._hidecriar}>
                <Dialog.Content>
                  <Paragraph>Mesa criada com sucesso!</Paragraph>
                  <Paragraph />
                  <Paragraph>Id da Mesa: #0000</Paragraph>
                </Dialog.Content>

                <Dialog.Actions>
                  <Button
                    onPress={() => this.props.navigation.navigate("fichaPrinc")}
                  >
                    Suave Japão
                  </Button>
                </Dialog.Actions>
              </Dialog>
              <Dialog
                visible={this.state.cancelar}
                onDismiss={this._hidecancelar}
              >
                <Dialog.Content>
                  <Paragraph>Desesa cancelar?</Paragraph>
                </Dialog.Content>

                <Dialog.Actions>
                  <Button
                    onPress={() => this.props.navigation.navigate("Home")}
                  >
                    Cancelar
                  </Button>
                  <Button onPress={this._hidecancelar}>Não</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
          </View>
        </View>
      </ScrollView>
    );
  }
}
