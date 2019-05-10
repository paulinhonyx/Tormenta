import React, { Component } from "react";
import { View, ScrollView, Text, Picker } from "react-native";
import { Appbar, TextInput, RadioButton } from "react-native-paper";

import styles from "../config/styles";

export default class cirarMesa extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  state = {};
  render() {
    return (
      <ScrollView>
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction onPress={() => this.props.navigation.pop()} />
          <Appbar.Content title="Criar Mesa" />
        </Appbar.Header>
        <View>
          <TextInput
            label="Nome"
            style={styles.textContainer}
            value={this.state.nomeMesa}
            onChangeText={nomeMesa => this.setState({ nomeMesa })}
          />
          <TextInput
            label="Senha"
            style={styles.textContainer}
            value={this.state.senha}
            onChangeText={senha => this.setState({ senha })}
            secureTextEntry
          />
          <TextInput
            label="Convidar Jogadores"
            style={styles.textContainer}
            value={this.state.jogadores}
            onChangeText={jogadores => this.setState({ jogadores })}
          />
          <Text>Selecione o Mundo:</Text>
          <View style={styles.piker2}>
            <Picker
              selectedValue={this.state.language}
              style={styles.piker}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ language: itemValue })
              }
            >
              <Picker.Item label="Tormenta" value="Tormenta" />
              <Picker.Item label="Tormenta2" value="Tormenta2" />
              <Picker.Item label="Tormenta3" value="Tormenta3" />
              <Picker.Item label="Tormenta4" value="Tormenta4" />
              <Picker.Item label="Tormenta5" value="Tormenta5" />
            </Picker>
          </View>
          
        </View>
      </ScrollView>
    );
  }
}
