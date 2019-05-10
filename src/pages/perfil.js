import React, { Component } from "react";
import { View, Image, ScrollView } from "react-native";
import {
  Appbar,
  Avatar,
  Text,
  TextInput,
  Card,
  Title,
  Paragraph,
  Button
} from "react-native-paper";

import styles from "../config/styles";

export default class Perfil extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  state = {
    pessoais: null
  };

  render() {
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
        <Button>Alterar Foto</Button>
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
        <View>
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
