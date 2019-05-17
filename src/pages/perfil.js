import React, { Component } from "react";
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from "react-native";
import {
  Appbar,
  Avatar,
  Text,
  TextInput,
  Title,
  Button
} from "react-native-paper";

import styles from "../config/styles";
import Cards from "../components/Cards";

export default class Perfil extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  constructor() {
    super();
    this.state = {
      pessoais: "",
      items: []
    };
  }

  componentDidMount() {
    this._get("https://jsonplaceholder.typicode.com/posts").then(data => {
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
          <Appbar.BackAction onPress={() => this.props.navigation.pop()} />
          <Appbar.Content title="Perfil" />
        </Appbar.Header>
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
            renderItem={({ item }) => <Cards item={item} />}
            keyExtractor={(item, index) => index.toString()}
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
