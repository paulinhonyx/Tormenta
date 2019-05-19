import React, { Component } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Text, Title } from "react-native-paper";

import styles from "../config/styles";

export default class Cards extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.viewCard}
        onPress={() => this.props.props.navigation.navigate("Ficha")}
      >
        <View style={styles.card}>
          <Image
            style={styles.viewName2}
            source={{ uri: this.props.item.image }}
          />
          <View style={{ marginLeft: 10 }}>
            <Title>{this.props.item.title}</Title>
            <Text>{this.props.item.description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
