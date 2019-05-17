import React, { Component } from "react";
import { ScrollView } from "react-native";
import { Appbar, Drawer } from "react-native-paper";

import styles from "../config/styles";

export default class drawerMenu extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  state = { nomeCodigo: "", active: "first" };

  render() {
    const { active } = this.state;
    return (
      <ScrollView>
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction onPress={() => this.props.navigation.pop()} />
          <Appbar.Content title="Menu" />
        </Appbar.Header>
        <Drawer.Section style={styles.drawer}>
          <Drawer.Item
            label="First Item"
            onPress={() => this.props.navigation.navigate("")}
          />
          <Drawer.Item
            label="Second Item"
            onPress={() => this.props.navigation.navigate("")}
          />
        </Drawer.Section>
      </ScrollView>
    );
  }
}
