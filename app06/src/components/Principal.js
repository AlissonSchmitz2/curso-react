import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableHighlight
} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Actions } from 'react-native-router-flux';

const logo = require('../imgs/logo.png');
const botaoJogar = require('../imgs/botao_jogar.png');
const sobreJogo = require('../imgs/sobre_jogo.png');
const outrosJogos = require('../imgs/outros_jogos.png');

export default class Principal extends Component {
    render() {
        return (
            <View style={styles.cenaPrincipal}>

                <View style={styles.apresentacaoJogo}>
                    <Image source={logo} />
                    <TouchableHighlight
                    onPress={() => { Actions.resultado(); }}
                    >
                    <Image source={botaoJogar} />
                    </TouchableHighlight>
                </View>

                <View style={styles.rodape}>
                    <TouchableHighlight
                    onPress={() => { Actions.sobreJogo(); }}
                    >
                    <Image source={sobreJogo} />
                    </TouchableHighlight>
                    <TouchableHighlight
                    onPress={() => { Actions.outrosJogos(); }}
                    >
                    <Image source={outrosJogos} />
                    </TouchableHighlight>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    cenaPrincipal: {
        backgroundColor: '#61BD8C',
        flex: 1
    },
    apresentacaoJogo: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 10
    },
    rodape: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        flex: 0,
        marginBottom: 10
    }
});
