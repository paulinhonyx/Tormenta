import React, { Component } from "react";
import { View, ScrollView, FlatList, ActivityIndicator } from "react-native";
import { Appbar, Avatar, Text, TextInput, Button } from "react-native-paper";

import styles from "../config/styles";
import Cards from "../components/Cards";

export default class Perfil extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.pop()} />
        <Appbar.Content title="Perfil" />
      </Appbar.Header>
    )
  });

  constructor() {
    super();
    this.state = {
      loading: false,
      pessoais: "",
      items: [],
      error: null
    };
  }

  componentDidMount() {
    this._get("http://5ce16d028ad3c700145b7c26.mockapi.io/mesas").then(data => {
      this.setState({ items: data });
      this.makeRemoteRequest();
    });
  }

  makeRemoteRequest = () => {
    this.setState({ loading: true });

    getMesas()
      .then(mesas => {
        this.setState({
          loading: false,
          items: mesas
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };
  render() {
    if (this.state.items.length === 0) {
      return (
        <View>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <ScrollView>
        <Avatar.Image
          source={require("../avatar/avatarIcon.png")}
          style={styles.perfil}
        />
        <Button onPress={() => console.log("ok")} style={styles.alterarFoto}>
          Alterar Foto
        </Button>
        <View style={styles.viewName}>
          <Text>Nome: </Text>
          <Text>Fulano</Text>
        </View>
        <View>
          <TextInput
            label="Detalhes"
            value={this.state.pessoais}
            onChangeText={pessoais => this.setState({ pessoais })}
            multiline
          />
        </View>
        <Text>Mesas: </Text>
        <View style={styles.procurarCard}>
          <FlatList
            data={this.state.items}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Cards item={item} onPress={() => this.props} />
            )}
          />
        </View>
      </ScrollView>
    );
  }
  _get = async endpoint => {
    const res = await fetch(endpoint);
    const data = await res.json();
    return data;
  };
}
