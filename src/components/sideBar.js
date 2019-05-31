import React, { Component } from "react";
import { Drawer } from "react-native-paper";

import styles from "../config/styles";

export default class SideBar extends Component {
  render() {
    return (
      <Drawer.Section style={styles.drawer}>
        <Drawer.Item
          label="First Item"
          onPress={() => this.props.navigation.navigate("signUp")}
        />
        <Drawer.Item
          label="Second Item"
          onPress={() => this.props.navigation.navigate("minhasMesas")}
        />
      </Drawer.Section>
    );
  }
}
