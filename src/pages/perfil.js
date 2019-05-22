import React, { Component } from "react";
import { View, ScrollView, FlatList, ActivityIndicator } from "react-native";
import { Appbar, Text } from "react-native-paper";

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
      items: []
    };
  }

  componentDidMount() {
    this._get("http://5ce16d028ad3c700145b7c26.mockapi.io/mesas").then(data => {
      this.setState({ items: data });
    });
  }

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
        <View style={styles.viewName}>
          <Text>Nome: </Text>
          <Text>Fulano</Text>
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
