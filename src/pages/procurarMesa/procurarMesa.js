import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Appbar, ActivityIndicator, Searchbar } from "react-native-paper";

import styles from "../../config/styles";
import Cards from "../../components/Cards";

export default class procurarMesa extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  componentDidMount() {
    this._get("http://5ce16d028ad3c700145b7c26.mockapi.io/mesas").then(data => {
      this.setState({ data: data, dataSource: data });
    });
  }

  constructor() {
    super();
    this.state = { loading: false, data: [], value: "" };
  }

  searchFilterFunction = text => {
    this.setState({
      value: text
    });

    const newData = this.state.data.filter(item => {
      const itemData = `${item.title.toUpperCase()} ${item.id.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.includes(textData);
    });

    this.setState({
      dataSource: newData
    });
  };

  renderHeader = () => {
    return (
      <Searchbar
        placeholder="Type..."
        value={this.state.value}
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
      />
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE"
        }}
      />
    );
  };

  render() {
    if (this.state.data.length === 0) {
      return (
        <View>
          <ActivityIndicator size="large" />
        </View>
      );
    }

<<<<<<< HEAD
    return (
      <ScrollView>
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction onPress={() => this.props.navigation.pop()} />
          <Appbar.Content title="Procurar Mesa" />
          <Appbar.Action icon="refresh" onPress={() => this._onRefresh} />
        </Appbar.Header>
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
=======
    if (this.state.loading) {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator />
>>>>>>> b9b6493f1d47840606f1340b27c3b63490446eed
        </View>
      );
    } else {
      return (
        <ScrollView>
          <Text style={styles.nomeCodigoText}>Mesas:</Text>

          <View style={styles.procurarCard}>
            <FlatList
              data={this.state.dataSource}
              keyExtractor={(item, index) => index.toString()}
              extraData={this.state}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => this.props.navigation.push("Pericias")}
                >
                  <Cards item={item} />
                </TouchableOpacity>
              )}
              ItemSeparatorComponent={this.renderSeparator}
              ListHeaderComponent={this.renderHeader}
            />
          </View>
        </ScrollView>
      );
    }
  }
  _get = async endpoint => {
    const res = await fetch(endpoint);
    const data = await res.json();
    return data;
  };
}
