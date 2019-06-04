import React, { Component } from "react";
import { Drawer } from "react-native-paper";

import styles from "../config/styles";

export default class SideBar extends Component {
  render() {
    return (
      <Drawer.Section style={styles.drawer}>
        <Drawer.Item
          label="Principal"
          onPress={() => this.props.navigation.navigate("fichaPrinc")}
        />
        <Drawer.Item
          label="Magias"
          onPress={() => this.props.navigation.navigate("magias")}
        />
        <Drawer.Item
          label="itens"
          onPress={() => this.props.navigation.navigate("equipamento")}
        />
        <Drawer.Item
          label="Tipos de Dano"
          onPress={() => this.props.navigation.navigate("tiposDeDano")}
        />
      </Drawer.Section>
    );
  }
}
