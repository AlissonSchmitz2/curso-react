import React, { Component } from 'react';
import {
    StatusBar,
    View,
    Image,
    StyleSheet,
    Text
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheClientes = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class CenaClientes extends Component {
    render() {
        return (

            <View style={{ flex: 1, backgroundColor: '#FFF' }} >
                <StatusBar
                    backgroundColor='#B9C941' //Cor da barra de notificação
                />

                <BarraNavegacao voltar navigator={this.props.navigator} corFundo='#B9C941' />

                <View style={styles.cabecalho}>
                    <Image source={detalheClientes} />
                    <Text style={styles.txtTitulo}>Nossos Clientes</Text>
                </View>

                <View style={styles.detalhesCliente}>
                    <Image source={cliente1} />
                    <Text style={styles.txtDestalheCliente}>Lorem ipsum dolorem</Text>
                </View>
                <View style={styles.detalhesCliente}>
                    <Image source={cliente2} />
                    <Text style={styles.txtDestalheCliente}>Lorem ipsum dolorem</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20
    },
    txtTitulo: {
        fontSize: 30,
        color: '#B9C941',
        marginTop: 25,
        marginLeft: 10
    },
    detalhesCliente: {
        padding: 20,
        marginTop: 10
    },
    txtDestalheCliente: {
        fontSize: 18,
        marginLeft: 20
    }
});
