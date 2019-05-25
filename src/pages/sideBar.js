import React, { Component } from "react";
import { Text, List, Drawer } from "react-native-paper";

import styles from "../config/styles";
const routes = ["Home", "Perfil"];

export default class SideBar extends Component {
  render() {
    return (
      <Drawer.Section style={styles.drawer}>
        <Drawer.Item
          label="First Item"
          onPress={() => this.props.navigation.navigate("Perfil")}
        />
        <Drawer.Item
          label="Second Item"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </Drawer.Section>
    );
  }
}
