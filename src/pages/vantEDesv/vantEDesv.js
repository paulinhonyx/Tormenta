import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { Appbar, Text, TextInput } from "react-native-paper";

import styles from "../../config/styles";

export default class vantEDesv extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  state = {
    acrobaciasTotal: "",
    acrobacias1: "",
    acrobacias2: "",
    acrobacias3: "",
    adestrarTotal: "",
    adestrar1: "",
    adestrar2: "",
    adestrar3: "",
    atletismoTotal: "",
    atletismo1: "",
    atletismo2: "",
    atletismo3: "",
    sobrevivenciaTotal: "",
    sobrevivencia1: "",
    sobrevivencia2: "",
    sobrevivencia3: "",
    pecepcaoTotal: "",
    percepicao1: "",
    percepicao2: "",
    percepicao3: "",
    oficioTotal2: "",
    oficioTotal: "",
    oficio1: "",
    oficio11: "",
    oficio2: "",
    oficio22: "",
    oficio3: "",
    oficio33: "",
    informacaoTotal: "",
    informacao1: "",
    informacao2: "",
    informacao3: "",
    ladinagemTotal: "",
    ladinagem1: "",
    ladinagem2: "",
    ladinagem3: "",
    intuicaoTotal: "",
    intuicao1: "",
    intuicao2: "",
    intuicao3: "",
    intimidacaoTotal: "",
    intimidavao1: "",
    intimidavao2: "",
    intimidavao3: "",
    iniciativaTotal: "",
    iniciativa1: "",
    iniciativa2: "",
    iniciativa3: "",
    identificarMagiaTotal: "",
    identificarMagia1: "",
    identificarMagia2: "",
    identificarMagia3: "",
    furtividadeTotal: "",
    furtividade1: "",
    furtividade2: "",
    furtividade3: "",
    enganacaTotal: "",
    enganacao1: "",
    enganacao2: "",
    enganacao3: "",
    diplomaciaTotal: "",
    diplomacia1: "",
    diplomacia2: "",
    diplomacia3: "",
    curaTotal: "",
    cura1: "",
    cura2: "",
    cura3: "",
    conhecimentoTotal2: "",
    conhecimentoTotal: "",
    conhecimento1: "",
    conhecimento11: "",
    conhecimento2: "",
    conhecimento22: "",
    conhecimento3: "",
    conhecimento33: "",
    cavalgarTotal: "",
    cavalgar1: "",
    cavalgar2: "",
    cavalgar3: "",
    atuacaoTotal2: "",
    atuacaoTotal: "",
    atuacao1: "",
    atuacao11: "",
    atuacao2: "",
    atuacao22: "",
    atuacao3: "",
    atuacao33: "",
    atuacaoName: "",
    atuacaoName2: "",
    conhecimentoName: "",
    conhecimentoName2: "",
    oficioName2: "",
    oficioName: ""
  };

  render() {
    return (
      <ScrollView>
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction onPress={() => this.props.navigation.goBack()} />
          <Appbar.Content title="Perícias" />
        </Appbar.Header>
        <View style={styles.periciaContent}>
          <View style={styles.periciaTitle} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 1
            }}
          >
            <Text
              style={{
                fontSize: 9
              }}
            >
              + Penalidade de Armadura
            </Text>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 9
              }}
            >
              * Somente Treinado
            </Text>
          </View>
          <Text
            style={{
              alignSelf: "flex-end",
              fontWeight: "bold",
              marginTop: 5,
              marginRight: 173
            }}
          >
            Total
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5
            }}
          >
            <Text>Acrobacias +</Text>
            <View style={styles.periciaInputContainer}>
              <TextInput
                mode="outlined"
                style={styles.periciaBox}
                value={this.state.acrobaciasTotal}
                disabled
              />
              <Text>=</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.acrobacias1}
                onChangeText={acrobacias1 => this.setState({ acrobacias1 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.acrobacias2}
                onChangeText={acrobacias2 => this.setState({ acrobacias2 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.acrobacias3}
                onChangeText={acrobacias3 => this.setState({ acrobacias3 })}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5
            }}
          >
            <Text>Adestrar Animais *</Text>
            <View style={styles.periciaInputContainer}>
              <TextInput
                mode="outlined"
                style={styles.periciaBox}
                value={this.state.adestrarTotal}
                disabled
              />
              <Text>=</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.adestrar1}
                onChangeText={adestrar1 => this.setState({ adestrar1 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.adestrar2}
                onChangeText={adestrar2 => this.setState({ adestrar2 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.adestrar3}
                onChangeText={adestrar3 => this.setState({ adestrar3 })}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5
            }}
          >
            <Text>Atletismo +</Text>
            <View style={styles.periciaInputContainer}>
              <TextInput
                mode="outlined"
                style={styles.periciaBox}
                value={this.state.atletismoTotal}
                disabled
              />
              <Text>=</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.atletismo1}
                onChangeText={atletismo1 => this.setState({ atletismo1 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.atletismo2}
                onChangeText={atletismo2 => this.setState({ atletismo2 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.atletismo3}
                onChangeText={atletismo3 => this.setState({ atletismo3 })}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5
            }}
          >
            <Text>Atuação (</Text>
            <TextInput
              style={{
                backgroundColor: "#fff",
                height: 30,
                width: 90,
                justifyContent: "center"
              }}
              value={this.state.atuacaoName}
              onChangeText={atuacaoName => this.setState({ atuacaoName })}
            />
            <Text>)*</Text>
            <View style={styles.periciaInputContainer}>
              <TextInput
                mode="outlined"
                style={styles.periciaBox}
                value={this.state.atuacaoTotal}
                disabled
              />
              <Text>=</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.atuacao1}
                onChangeText={atuacao1 => this.setState({ atuacao1 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.atuacao2}
                onChangeText={atuacao2 => this.setState({ atuacao2 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.atuacao3}
                onChangeText={atuacao3 => this.setState({ atuacao3 })}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5
            }}
          >
            <Text>Atuação (</Text>
            <TextInput
              style={{
                backgroundColor: "#fff",
                height: 30,
                width: 90,
                justifyContent: "center"
              }}
              value={this.state.atuacaoName2}
              onChangeText={atuacaoName2 => this.setState({ atuacaoName2 })}
            />
            <Text>)*</Text>
            <View style={styles.periciaInputContainer}>
              <TextInput
                mode="outlined"
                style={styles.periciaBox}
                value={this.state.atuacaoTotal2}
                disabled
              />
              <Text>=</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.atuacao11}
                onChangeText={atuacao11 => this.setState({ atuacao11 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.atuacao22}
                onChangeText={atuacao22 => this.setState({ atuacao22 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.atuacao33}
                onChangeText={atuacao33 => this.setState({ atuacao33 })}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5
            }}
          >
            <Text>Cavalgar</Text>
            <View style={styles.periciaInputContainer}>
              <TextInput
                mode="outlined"
                style={styles.periciaBox}
                value={this.state.cavalgarTotal}
                disabled
              />
              <Text>=</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.cavalgar1}
                onChangeText={cavalgar1 => this.setState({ cavalgar1 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.cavalgar2}
                onChangeText={cavalgar2 => this.setState({ cavalgar2 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.cavalgar3}
                onChangeText={cavalgar3 => this.setState({ cavalgar3 })}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5
            }}
          >
            <Text>Conhecimento (</Text>
            <TextInput
              style={{
                backgroundColor: "#fff",
                height: 30,
                width: 50,
                justifyContent: "center"
              }}
              value={this.state.conhecimentoName}
              onChangeText={conhecimentoName =>
                this.setState({ conhecimentoName })
              }
            />
            <Text>)</Text>
            <View style={styles.periciaInputContainer}>
              <TextInput
                mode="outlined"
                style={styles.periciaBox}
                value={this.state.conhecimentoTotal}
                disabled
              />
              <Text>=</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.conhecimento1}
                onChangeText={conhecimento1 => this.setState({ conhecimento1 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.conhecimento2}
                onChangeText={conhecimento2 => this.setState({ conhecimento2 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.conhecimento3}
                onChangeText={conhecimento3 => this.setState({ conhecimento3 })}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5
            }}
          >
            <Text>Conhecimento (</Text>
            <TextInput
              style={{
                backgroundColor: "#fff",
                height: 30,
                width: 50,
                justifyContent: "center"
              }}
              value={this.state.conhecimentoName2}
              onChangeText={conhecimentoName2 =>
                this.setState({ conhecimentoName2 })
              }
            />
            <Text>)</Text>
            <View style={styles.periciaInputContainer}>
              <TextInput
                mode="outlined"
                style={styles.periciaBox}
                value={this.state.conhecimentoTotal2}
                disabled
              />
              <Text>=</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.conhecimento1}
                onChangeText={conhecimento11 =>
                  this.setState({ conhecimento11 })
                }
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.conhecimento2}
                onChangeText={conhecimento22 =>
                  this.setState({ conhecimento22 })
                }
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.conhecimento3}
                onChangeText={conhecimento33 =>
                  this.setState({ conhecimento33 })
                }
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5
            }}
          >
            <Text>Cura</Text>
            <View style={styles.periciaInputContainer}>
              <TextInput
                mode="outlined"
                style={styles.periciaBox}
                value={this.state.curaTotal}
                disabled
              />
              <Text>=</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.cura1}
                onChangeText={cura1 => this.setState({ cura1 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.cura2}
                onChangeText={cura2 => this.setState({ cura2 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.cura3}
                onChangeText={cura3 => this.setState({ cura3 })}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5
            }}
          >
            <Text>Diplomacia</Text>
            <View style={styles.periciaInputContainer}>
              <TextInput
                mode="outlined"
                style={styles.periciaBox}
                value={this.state.diplomaciaTotal}
                disabled
              />
              <Text>=</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.diplomacia1}
                onChangeText={diplomacia1 => this.setState({ diplomacia1 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.diplomacia2}
                onChangeText={diplomacia2 => this.setState({ diplomacia2 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.diplomacia3}
                onChangeText={diplomacia3 => this.setState({ diplomacia3 })}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5
            }}
          >
            <Text>Enganação</Text>
            <View style={styles.periciaInputContainer}>
              <TextInput
                mode="outlined"
                style={styles.periciaBox}
                value={this.state.enganacaTotal}
                disabled
              />
              <Text>=</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.enganacao1}
                onChangeText={enganacao1 => this.setState({ enganacao1 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.enganacao2}
                onChangeText={enganacao2 => this.setState({ enganacao2 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.enganacao3}
                onChangeText={enganacao3 => this.setState({ enganacao3 })}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5
            }}
          >
            <Text>Furtividade +</Text>
            <View style={styles.periciaInputContainer}>
              <TextInput
                mode="outlined"
                style={styles.periciaBox}
                value={this.state.furtividadeTotal}
                disabled
              />
              <Text>=</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.furtividade1}
                onChangeText={furtividade1 => this.setState({ furtividade1 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.furtividade2}
                onChangeText={furtividade2 => this.setState({ furtividade2 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.furtividade3}
                onChangeText={furtividade3 => this.setState({ furtividade3 })}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5
            }}
          >
            <Text>Identificar Magia *</Text>
            <View style={styles.periciaInputContainer}>
              <TextInput
                mode="outlined"
                style={styles.periciaBox}
                value={this.state.identificarMagiaTotal}
                disabled
              />
              <Text>=</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.identificarMagia1}
                onChangeText={identificarMagia1 =>
                  this.setState({ identificarMagia1 })
                }
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.identificarMagia2}
                onChangeText={identificarMagia2 =>
                  this.setState({ identificarMagia2 })
                }
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.identificarMagia3}
                onChangeText={identificarMagia3 =>
                  this.setState({ identificarMagia3 })
                }
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5
            }}
          >
            <Text>Iniciativa</Text>
            <View style={styles.periciaInputContainer}>
              <TextInput
                mode="outlined"
                style={styles.periciaBox}
                value={this.state.iniciativaTotal}
                disabled
              />
              <Text>=</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.iniciativa1}
                onChangeText={iniciativa1 => this.setState({ iniciativa1 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.iniciativa2}
                onChangeText={iniciativa2 => this.setState({ iniciativa2 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.iniciativa3}
                onChangeText={iniciativa3 => this.setState({ iniciativa3 })}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5
            }}
          >
            <Text>Intimidação</Text>
            <View style={styles.periciaInputContainer}>
              <TextInput
                mode="outlined"
                style={styles.periciaBox}
                value={this.state.intimidacaoTotal}
                disabled
              />
              <Text>=</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.intimidavao1}
                onChangeText={intimidavao1 =>
                  this.setState({ atletisintimidavao1mo1 })
                }
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.intimidavao2}
                onChangeText={intimidavao2 => this.setState({ intimidavao2 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.intimidavao3}
                onChangeText={intimidavao3 => this.setState({ intimidavao3 })}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5
            }}
          >
            <Text>Intuição</Text>
            <View style={styles.periciaInputContainer}>
              <TextInput
                mode="outlined"
                style={styles.periciaBox}
                value={this.state.intuicaoTotal}
                disabled
              />
              <Text>=</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.intuicao1}
                onChangeText={intuicao1 => this.setState({ intuicao1 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.intuicao2}
                onChangeText={intuicao2 => this.setState({ intuicao2 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.intuicao3}
                onChangeText={intuicao3 => this.setState({ intuicao3 })}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5
            }}
          >
            <Text>Ladinagem *+</Text>
            <View style={styles.periciaInputContainer}>
              <TextInput
                mode="outlined"
                style={styles.periciaBox}
                value={this.state.ladinagemTotal}
                disabled
              />
              <Text>=</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.ladinagem1}
                onChangeText={ladinagem1 => this.setState({ ladinagem1 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.ladinagem2}
                onChangeText={ladinagem2 => this.setState({ ladinagem2 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.ladinagem3}
                onChangeText={ladinagem3 => this.setState({ ladinagem3 })}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5
            }}
          >
            <Text>Obter Informação</Text>
            <View style={styles.periciaInputContainer}>
              <TextInput
                mode="outlined"
                style={styles.periciaBox}
                value={this.state.informacaoTotal}
                disabled
              />
              <Text>=</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.informacao1}
                onChangeText={informacao1 => this.setState({ informacao1 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.informacao2}
                onChangeText={informacao2 => this.setState({ informacao2 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.informacao3}
                onChangeText={informacao3 => this.setState({ informacao3 })}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5
            }}
          >
            <Text>Ofício (</Text>
            <TextInput
              style={{
                backgroundColor: "#fff",
                height: 30,
                width: 102,
                justifyContent: "center"
              }}
              value={this.state.oficioName}
              onChangeText={oficioName => this.setState({ oficioName })}
            />
            <Text>)</Text>
            <View style={styles.periciaInputContainer}>
              <TextInput
                mode="outlined"
                style={styles.periciaBox}
                value={this.state.oficioTotal}
                disabled
              />
              <Text>=</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.oficio1}
                onChangeText={oficio1 => this.setState({ oficio1 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.oficio2}
                onChangeText={oficio2 => this.setState({ oficio2 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.oficio3}
                onChangeText={oficio3 => this.setState({ oficio3 })}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5
            }}
          >
            <Text>Ofício (</Text>
            <TextInput
              style={{
                backgroundColor: "#fff",
                height: 30,
                width: 102,
                justifyContent: "center"
              }}
              value={this.state.oficioName2}
              onChangeText={oficioName2 => this.setState({ oficioName2 })}
            />
            <Text>)</Text>
            <View style={styles.periciaInputContainer}>
              <TextInput
                mode="outlined"
                style={styles.periciaBox}
                value={this.state.oficioTotal2}
                disabled
              />
              <Text>=</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.oficio11}
                onChangeText={oficio11 => this.setState({ oficio11 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.oficio22}
                onChangeText={oficio22 => this.setState({ oficio22 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.oficio33}
                onChangeText={oficio33 => this.setState({ oficio33 })}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5
            }}
          >
            <Text>Percepção</Text>
            <View style={styles.periciaInputContainer}>
              <TextInput
                mode="outlined"
                style={styles.periciaBox}
                value={this.state.pecepcaoTotal}
                disabled
              />
              <Text>=</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.percepicao1}
                onChangeText={percepicao1 => this.setState({ percepicao1 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.percepicao2}
                onChangeText={percepicao2 => this.setState({ percepicao2 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.percepicao3}
                onChangeText={percepicao3 => this.setState({ percepicao3 })}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5
            }}
          >
            <Text>Sobrevivencia</Text>
            <View style={styles.periciaInputContainer}>
              <TextInput
                mode="outlined"
                style={styles.periciaBox}
                value={this.state.sobrevivenciaTotal}
                disabled
              />
              <Text>=</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.sobrevivencia1}
                onChangeText={sobrevivencia1 =>
                  this.setState({ sobrevivencia1 })
                }
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.sobrevivencia2}
                onChangeText={sobrevivencia2 =>
                  this.setState({ sobrevivencia2 })
                }
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.sobrevivencia3}
                onChangeText={sobrevivencia3 =>
                  this.setState({ sobrevivencia3 })
                }
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5
            }}
          >
            <TextInput
              style={{
                backgroundColor: "#fff",
                height: 30,
                width: 155,
                justifyContent: "center"
              }}
              value={this.state.periciaExtra}
              onChangeText={periciaExtra => this.setState({ periciaExtra })}
            />
            <View style={styles.periciaInputContainer}>
              <TextInput
                mode="outlined"
                style={styles.periciaBox}
                value={this.state.periciaExtraTotal}
                disabled
              />
              <Text>=</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.periciaExtra1}
                onChangeText={periciaExtra1 => this.setState({ periciaExtra1 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.periciaExtra2}
                onChangeText={periciaExtra2 => this.setState({ periciaExtra2 })}
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.periciaExtra3}
                onChangeText={periciaExtra3 => this.setState({ periciaExtra3 })}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5
            }}
          >
            <TextInput
              style={{
                backgroundColor: "#fff",
                height: 30,
                width: 155,
                justifyContent: "center"
              }}
              value={this.state.periciaExtra_}
              onChangeText={atletismo1 => this.setState({ atletismo1 })}
            />
            <View style={styles.periciaInputContainer}>
              <TextInput
                mode="outlined"
                style={styles.periciaBox}
                value={this.state.periciaExtra_Total}
                disabled
              />
              <Text>=</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.periciaExtra_1}
                onChangeText={periciaExtra_1 =>
                  this.setState({ periciaExtra_1 })
                }
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.periciaExtra_2}
                onChangeText={periciaExtra_2 =>
                  this.setState({ periciaExtra_2 })
                }
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.periciaExtra_3}
                onChangeText={periciaExtra_3 =>
                  this.setState({ periciaExtra_3 })
                }
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5,
              marginBottom: 10
            }}
          >
            <TextInput
              style={{
                backgroundColor: "#fff",
                height: 30,
                width: 155,
                justifyContent: "center"
              }}
              value={this.state.periciaExtra__}
              onChangeText={periciaExtra__ => this.setState({ periciaExtra__ })}
            />
            <View style={styles.periciaInputContainer}>
              <TextInput
                mode="outlined"
                style={styles.periciaBox}
                value={this.state.periciaExtra__Total}
                disabled
              />
              <Text>=</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.periciaExtra_1}
                onChangeText={periciaExtra_1 =>
                  this.setState({ periciaExtra_1 })
                }
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.periciaExtra_2}
                onChangeText={periciaExtra_2 =>
                  this.setState({ periciaExtra_2 })
                }
              />
              <Text>+</Text>
              <TextInput
                style={styles.periciaBox}
                keyboardType="numeric"
                value={this.state.periciaExtra_3}
                onChangeText={periciaExtra_3 =>
                  this.setState({ periciaExtra_3 })
                }
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
