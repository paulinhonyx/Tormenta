import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Appbar, ActivityIndicator } from "react-native-paper";

import styles from "../../config/styles";
import Cards from "../../components/Cards";

export default class procurarMesa extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.pop()} />
        <Appbar.Content title="Procurar Mesa" />
        <Appbar.Action icon="refresh" onPress={() => this._onRefresh} />
      </Appbar.Header>
    )
  });

  componentDidMount() {
    this._get("http://5ce16d028ad3c700145b7c26.mockapi.io/mesas").then(data => {
      this.setState({ items: data });
    });
  }

  constructor() {
    super();
    this.state = { nomeCodigo: "", items: [] };
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
        <Text style={styles.nomeCodigoText}>Mesas:</Text>

        <View style={styles.procurarCard}>
          <FlatList
            data={this.state.items}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => this.props.navigation.push("vantEDesv")}
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
