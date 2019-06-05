import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { Appbar, Text, TextInput } from "react-native-paper";

import styles from "../../config/styles";
import Axios from "axios";

export default class fichaPrinc extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  constructor() {
    super();
    this.state = {
      nomeJogador: "",
      pv: "",
      pontosDeAcao: "",
      atuais: "",
      xpProx: "",
      xpAtual: "",
      forca: "",
      destreza: "",
      constituicao: "",
      inteligencia: "",
      sabedoria: "",
      carisma: "",
      itens: []
    };
  }

  changeNome = text => {
    this.setState({ nome: text });
  };

  componentDidMount = async () => {
    if (this.state.itens.length === 0) {
      await Axios.get(`http://tormenta.herokuapp.com/personagem/1`).then(
        res => {
          const persons = res.data;
          this.setState({ itens: persons });
          console.log(this.state.nomeJogador);
          console.log(this.state.itens);
        }
      );
    } else {
      await Axios.post("http://tormenta.herokuapp.com/personagem/criar", {
        nome: this.state.nomeJogador,
        senha: this.state.senha
      });
      this.setState({
        success: "Conta criada com sucesso! Redirecionando para o login",
        error: ""
      });

      this.props.navigation.navigate("SignIn");
    }
  };

  render() {
    return (
      <ScrollView>
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction onPress={() => this.props.navigation.pop()} />
          <Appbar.Content style={styles.text} title="Jogador" />
        </Appbar.Header>
        <View>
          <TextInput
            label="Nome"
            style={styles.textContainer6}
            value={this.state.nomeJogador}
            onChangeText={nomeJogador => this.setState({ nomeJogador })}
          />
        </View>

        <Appbar style={styles.header}>
          <Appbar.Content style={styles.text} title="Pontos de Vida" />
        </Appbar>

        <View style={styles.inputDirection}>
          <TextInput
            label="PV"
            style={styles.textContainer7}
            keyboardType="numeric"
            value={this.state.pv}
            onChangeText={pv => this.setState({ pv })}
          />
          <TextInput
            label="Pontos de ação"
            style={styles.textContainer7}
            keyboardType="numeric"
            value={this.state.pontosDeAcao}
            onChangeText={pontosDeAcao => this.setState({ pontosDeAcao })}
          />
        </View>

        <TextInput
          label="Atuais"
          style={styles.textContainer6}
          keyboardType="numeric"
          value={this.state.atuais}
          onChangeText={atuais => this.setState({ atuais })}
        />

        <Appbar style={styles.header}>
          <Appbar.Content style={styles.text} title="Experiencia" />
        </Appbar>

        <View>
          <Text>Prox. Nivel</Text>
          <Text>Exp Atual</Text>
        </View>
        <View>
          <TextInput
            value={this.state.xpProx}
            onChangeText={xpProx => this.setState({ xpProx })}
          />
        </View>
        <View>
          <TextInput
            value={this.state.xpAtual}
            onChangeText={xpAtual => this.setState({ xpAtual })}
          />
        </View>

        <Appbar style={styles.header}>
          <Appbar.Content style={styles.text} title="Atributos" />
        </Appbar>

        <TextInput
          label="Força"
          style={styles.textContainer6}
          keyboardType="numeric"
          value={this.state.forca}
          onChangeText={forca => this.setState({ forca })}
        />

        <TextInput
          label="Destreza"
          style={styles.textContainer6}
          keyboardType="numeric"
          value={this.state.destreza}
          onChangeText={destreza => this.setState({ destreza })}
        />

        <TextInput
          label="Constituição"
          style={styles.textContainer6}
          keyboardType="numeric"
          value={this.state.constituicao}
          onChangeText={constituicao => this.setState({ constituicao })}
        />

        <TextInput
          label="Inteligência"
          style={styles.textContainer6}
          keyboardType="numeric"
          value={this.state.inteligencia}
          onChangeText={inteligencia => this.setState({ inteligencia })}
        />

        <TextInput
          label="Sabedoria"
          style={styles.textContainer6}
          keyboardType="numeric"
          value={this.state.sabedoria}
          onChangeText={sabedoria => this.setState({ sabedoria })}
        />

        <TextInput
          label="Carisma"
          style={styles.textContainer6}
          keyboardType="numeric"
          value={this.state.carisma}
          onChangeText={carisma => this.setState({ carisma })}
        />
      </ScrollView>
    );
  }
  _get = async endpoint => {
    const res = await fetch(endpoint);
    const data = await res.json();
    return data;
  };
}
