import React, { Component } from "react";
import { View, Image } from "react-native";
import { Text, Title } from "react-native-paper";

import styles from "../config/styles";

export default class Cards extends Component {
  render() {
    return (
      <View style={styles.viewCard}>
        <View style={styles.card}>
          <Image
            style={styles.viewName2}
            source={{ uri: this.props.item.image }}
          />
          <View style={{ marginLeft: 10 }}>
            <Title>{this.props.item.name}</Title>
          </View>
        </View>
      </View>
    );
  }
}
