import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import { Appbar, TextInput } from "react-native-paper";

import styles from "../../config/styles";

export default class equipamento extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  state = {
    item1: "",
    item2: "",
    item3: "",
    item4: "",
    item5: "",
    item6: "",
    item7: "",
    item8: "",
    item9: "",
    item10: "",
    item11: "",
    item12: ""
  };

  render() {
    return (
      <ScrollView>
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction onPress={() => this.props.navigation.goBack()} />
          <Appbar.Content title="Equipamento" />
        </Appbar.Header>
        <View>
          <View
            style={{
              height: 25,
              backgroundColor: "#da552f",
              marginTop: 15,
              marginBottom: 15
            }}
          />
          <View>
            <TextInput
              value={this.state.item1}
              onChangeText={item1 => this.setState({ item1 })}
            />
            <TextInput
              value={this.state.item2}
              onChangeText={item2 => this.setState({ item2 })}
            />
            <TextInput
              value={this.state.item3}
              onChangeText={item3 => this.setState({ item3 })}
            />
            <TextInput
              value={this.state.item4}
              onChangeText={item4 => this.setState({ item4 })}
            />
            <TextInput
              value={this.state.item5}
              onChangeText={item5 => this.setState({ item5 })}
            />
            <TextInput
              value={this.state.item6}
              onChangeText={item6 => this.setState({ item6 })}
            />
            <TextInput
              value={this.state.item7}
              onChangeText={item7 => this.setState({ item7 })}
            />
            <TextInput
              value={this.state.item8}
              onChangeText={item8 => this.setState({ item8 })}
            />
            <TextInput
              value={this.state.item9}
              onChangeText={item9 => this.setState({ item9 })}
            />
            <TextInput
              value={this.state.item10}
              onChangeText={item10 => this.setState({ item10 })}
            />
            <TextInput
              value={this.state.item11}
              onChangeText={item11 => this.setState({ item11 })}
            />
            <TextInput
              value={this.state.item12}
              onChangeText={item12 => this.setState({ item12 })}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
