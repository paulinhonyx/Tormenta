import React, { Component } from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { Appbar, Card, Title, Paragraph, TextInput } from "react-native-paper";

import styles from "../config/styles";

export default class procurarMesa extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  state = { nomeCodigo: "" };
  render() {
    return (
      <ScrollView>
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction onPress={() => this.props.navigation.pop()} />
          <Appbar.Content title="Procurar Mesa" />
        </Appbar.Header>
        <Text style={styles.nomeCodigoText}>Nome/Codigo:</Text>
        <TextInput
          value={this.state.nomeCodigo}
          onChangeText={nomeCodigo => this.setState({ nomeCodigo })}
          style={styles.nomeCodigo}
        />
        <View style={styles.procurarCard}>
          <View style={styles.viewCard}>
            <Card style={styles.card}>
              <Image
                source={require("../avatar/image.png")}
                style={styles.viewName2}
              />
              <Card.Content>
                <Title>Mesa Tal</Title>
                <Paragraph>Detalhes da Mesa</Paragraph>
              </Card.Content>
            </Card>
          </View>
          <View style={styles.viewCard}>
            <Card style={styles.card}>
              <Image
                source={require("../avatar/image.png")}
                style={styles.viewName2}
              />
              <Card.Content>
                <Title>Mesa Tal</Title>
                <Paragraph>Detalhes da Mesa</Paragraph>
              </Card.Content>
            </Card>
          </View>
          <View style={styles.viewCard}>
            <Card style={styles.card}>
              <Image
                source={require("../avatar/image.png")}
                style={styles.viewName2}
              />
              <Card.Content>
                <Title>Mesa Tal</Title>
                <Paragraph>Detalhes da Mesa</Paragraph>
              </Card.Content>
            </Card>
          </View>
          <View style={styles.viewCard}>
            <Card style={styles.card}>
              <Image
                source={require("../avatar/image.png")}
                style={styles.viewName2}
              />
              <Card.Content>
                <Title>Mesa Tal</Title>
                <Paragraph>Detalhes da Mesa</Paragraph>
              </Card.Content>
            </Card>
          </View>
          <View style={styles.viewCard}>
            <Card style={styles.card}>
              <Image
                source={require("../avatar/image.png")}
                style={styles.viewName2}
              />
              <Card.Content>
                <Title>Mesa Tal</Title>
                <Paragraph>Detalhes da Mesa</Paragraph>
              </Card.Content>
            </Card>
          </View>
        </View>
      </ScrollView>
    );
  }
}
