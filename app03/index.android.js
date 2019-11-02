import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Text,
  View,
  StyleSheet
} from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';

class app03 extends Component {
  constructor(props) {
    super(props);

    this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' };
  }

  jokempo(escolhaUsuario) {
    //Gerar um número aleatório (0, 1, 3)
    const numAleatorio = Math.floor(Math.random() * 3);

    let escolhaComputador = numAleatorio;

    switch (escolhaComputador) {
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
      default: escolhaComputador = '';
    }

    let resultado = '';

    if (escolhaComputador === 'pedra') {
      if (escolhaUsuario === 'pedra') {
        resultado = 'Empate';
      } else if (escolhaUsuario === 'papel') {
        resultado = 'Você ganhou';
      } else if (escolhaUsuario === 'tesoura') {
        resultado = 'Você perdeu';
      }
    }

    if (escolhaComputador === 'papel') {
      if (escolhaUsuario === 'papel') {
        resultado = 'Empate';
      } else if (escolhaUsuario === 'tesoura') {
        resultado = 'Você ganhou';
      } else if (escolhaUsuario === 'pedra') {
        resultado = 'Você perdeu';
      }
    }

    if (escolhaComputador === 'tesoura') {
      if (escolhaUsuario === 'tesoura') {
        resultado = 'Empate';
      } else if (escolhaUsuario === 'pedra') {
        resultado = 'Você ganhou';
      } else if (escolhaUsuario === 'papel') {
        resultado = 'Você perdeu';
      }
    }

    this.setState({ escolhaUsuario, escolhaComputador, resultado });
  }

  render() {
    return (
      <View>

        <Topo />

        <View style={styles.painelAcoes}>

          <View style={styles.btnEscolha}>
            <Button title='Pedra' onPress={() => { this.jokempo('pedra'); }} />
          </View>

          <View style={styles.btnEscolha}>
            <Button title='Papel' onPress={() => { this.jokempo('papel'); }} />
          </View>

          <View style={styles.btnEscolha}>
            <Button title='Tesoura' onPress={() => { this.jokempo('tesoura'); }} />
          </View>

        </View>

        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>

          <Icone escolha={this.state.escolhaComputador} jogador={'Computador'} />
          <Icone escolha={this.state.escolhaUsuario} jogador={'Você'} />
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 5
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  }
});
AppRegistry.registerComponent('app03', () => app03);
