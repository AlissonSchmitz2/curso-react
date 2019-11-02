import React, { Component } from 'react';
import {
    StatusBar,
    View,
    Image,
    StyleSheet,
    Text
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheServico = require('../imgs/detalhe_servico.png');

export default class CenaServicos extends Component {
    render() {
        return (

            <View style={{ flex: 1, backgroundColor: '#FFF' }} >
                <StatusBar
                    backgroundColor='#19D1C8'
                />

                <BarraNavegacao voltar navigator={this.props.navigator} corFundo='#19D1C8' />

                <View style={styles.cabecalho}>
                    <Image source={detalheServico} />
                    <Text style={styles.txtTitulo}>Nossos Serviços</Text>
                </View>

                <View style={styles.detalheServicos}>
                    <Text style={styles.txtServicos}>- Consultoria</Text>
                    <Text style={styles.txtServicos}>- Processos</Text>
                    <Text style={styles.txtServicos}>- Acompanhamento de Projetos</Text>
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
        color: '#19D1C8',
        marginTop: 25,
        marginLeft: 10
    },
    detalheServicos: {
        marginTop: 20,
        padding: 20
    },
    txtServicos: {
        fontSize: 18
    }
});
