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

import styles from "../config/styles";

export default class cirarMesa extends Component {
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
    jogadores: "",
    mundo: null,
    visible: false
  };
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
          <TextInput
            label="Convidar Jogadores"
            style={styles.textContainer2}
            value={this.state.jogadores}
            onChangeText={jogadores => this.setState({ jogadores })}
          />
          <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 16 }}>
            Selecione o Mundo:
          </Text>
          <View style={styles.piker2}>
            <Picker
              selectedValue={this.state.mundo}
              style={styles.piker}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ mundo: itemValue })
              }
            >
              <Picker.Item label="Tormenta" value="Tormenta" />
              <Picker.Item label="Tormenta2" value="Tormenta2" />
              <Picker.Item label="Tormenta3" value="Tormenta3" />
              <Picker.Item label="Tormenta4" value="Tormenta4" />
              <Picker.Item label="Tormenta5" value="Tormenta5" />
            </Picker>
          </View>
          <View>
            <Button
              style={styles.entrar}
              mode="contained"
              onPress={() => this.setState({ visible: "true" })}
            >
              Criar
            </Button>
            <Portal>
              <Dialog visible={this.state.visible} onDismiss={this._hideDialog}>
                <Dialog.Content>
                  <Paragraph>Mesa criada com sucesso!</Paragraph>
                  <Paragraph />
                  <Paragraph>Id da Mesa: #0000</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button
                    onPress={() => this.props.navigation.navigate("Home")}
                  >
                    Done
                  </Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
          </View>
        </View>
      </ScrollView>
    );
  }
}
