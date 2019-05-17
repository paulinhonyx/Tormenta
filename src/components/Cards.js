import React, { Component } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Text, Title } from "react-native-paper";

import styles from "../config/styles";

export default class Cards extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.viewCard}>
        <View style={styles.card}>
          <Image
            style={styles.viewName2}
            source={require("../avatar/image.png")}
          />
          <View style={{ marginLeft: 10 }}>
            <Title>Mesa Tal</Title>
            <Text>Detalhes</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
