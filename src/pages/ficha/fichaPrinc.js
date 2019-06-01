import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { Appbar, Text, TextInput } from "react-native-paper";

import styles from "../../config/styles";

export default class fichaPrinc extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  state = { nome: "" };

  changeNome = text => {
    this.setState({ nome: text });
  };
  render() {
    return (
      <ScrollView>
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction onPress={() => this.props.navigation.pop()} />
          <Appbar.Content title="Principal" />
        </Appbar.Header>
        <View>
          <TextInput
            label="Nome"
            value={this.state.nome}
            onChangeText={text => this.changeNome(text)}
          />
        </View>
        <View>
          <View>
            <Text>Pontos de Vida</Text>
          </View>
          <View />
        </View>
      </ScrollView>
    );
  }
}
