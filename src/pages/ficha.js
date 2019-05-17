import React, { Component } from "react";
import { ScrollView } from "react-native";
import { Appbar, Text, Drawer } from "react-native-paper";

import styles from "../config/styles";

export default class Ficha extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  state = { nomeCodigo: "" };
  closeDrawer() {
    this.drawer._root.close();
  }
  Copy;
  openDrawer() {
    <Drawer.Section title="Some title">
      <Drawer.Item
        label="First Item"
        onPress={() => {
          this.setState({ active: "first" });
        }}
      />
      <Drawer.Item
        label="Second Item"
        onPress={() => {
          this.setState({ active: "second" });
        }}
      />
    </Drawer.Section>;
  }

  render() {
    return (
      <ScrollView>
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction onPress={() => this.props.navigation.pop()} />
          <Appbar.Content title="Ficha" />
          <Appbar.Action icon="menu" onPress={() => this.openDrawer()} />
        </Appbar.Header>

        <Text />
      </ScrollView>
    );
  }
}
