import React, { Component } from "react";
import { View, ScrollView, FlatList, TouchableOpacity } from "react-native";
import { Appbar, Text, ActivityIndicator } from "react-native-paper";

import styles from "../../config/styles";
import Cards from "../../components/Cards";

export default class minhasMesas extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
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
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction onPress={() => this.props.navigation.goBack()} />
          <Appbar.Content title="Minhas mesas" />
        </Appbar.Header>
        <Text>Mesas: </Text>
        <View style={styles.procurarCard}>
          <FlatList
            data={this.state.items}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("fichaPrinc")}
              >
                <Cards item={item} />
              </TouchableOpacity>
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
