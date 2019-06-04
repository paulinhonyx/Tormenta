import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import { Appbar, TextInput } from "react-native-paper";

import styles from "../../config/styles";

export default class tiposDeDano extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  state = {
    forca1: "",
    forca2: "",
    forca3: "",
    forca4: "",
    forca5: "",
    poder1: "",
    poder2: "",
    poder3: "",
    poder4: "",
    poder5: ""
  };

  render() {
    return (
      <ScrollView>
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction onPress={() => this.props.navigation.goBack()} />
          <Appbar.Content title="Tipos de Dano" />
        </Appbar.Header>
        <View>
          <View>
            <Text>Força</Text>
          </View>
          <View>
            <TextInput
              value={this.state.forca1}
              onChangeText={forca1 => this.setState({ forca1 })}
            />
            <TextInput
              value={this.state.forca2}
              onChangeText={forca2 => this.setState({ forca2 })}
            />
            <TextInput
              value={this.state.forca3}
              onChangeText={forca3 => this.setState({ forca3 })}
            />
            <TextInput
              value={this.state.forca4}
              onChangeText={forca4 => this.setState({ forca4 })}
            />
            <TextInput
              value={this.state.forca5}
              onChangeText={forca5 => this.setState({ forca5 })}
            />
          </View>
        </View>
        <View>
          <View>
            <Text>Poder de Fogo</Text>
          </View>
          <View>
            <TextInput
              value={this.state.poder1}
              onChangeText={poder1 => this.setState({ poder1 })}
            />
            <TextInput
              value={this.state.poder2}
              onChangeText={poder2 => this.setState({ poder2 })}
            />
            <TextInput
              value={this.state.poder3}
              onChangeText={poder3 => this.setState({ poder3 })}
            />
            <TextInput
              value={this.state.poder4}
              onChangeText={poder4 => this.setState({ poder4 })}
            />
            <TextInput
              value={this.state.poder5}
              onChangeText={poder5 => this.setState({ poder5 })}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
