import React, { Component } from 'react';
import {
    View, Text, TextInput, Image,
    TouchableHighlight, SafeAreaView, FlatList
} from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { modificaMensagem, enviarMensagem, conversaUsuarioFetch } from '../actions/AppActions';

const imgBtnEnviar = require('../imgs/enviar_mensagem.png');

class Conversa extends Component {
    componentWillMount() {
        this.props.conversaUsuarioFetch(this.props.contatoEmail);
        this.criaFonteDeDados(this.props.conversa);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.contatoEmail !== nextProps.contatoEmail) {
            this.props.conversaUsuarioFetch(nextProps.props.contatoEmail);
        }
        this.criaFonteDeDados(nextProps.conversa);
    }

    criaFonteDeDados(conversa) {
        this.fonteDeDados = conversa;
    }

    _enviarMensagem() {
        const { mensagem, contatoNome, contatoEmail } = this.props;

        this.props.enviarMensagem(mensagem, contatoNome, contatoEmail);
    }

    renderRow(texto) {
        if (texto.tipo === 'e') {
            return (
                <View style={{ alignItems: 'flex-end', marginVertical: 5, marginLeft: 40 }}>
                    <Text 
                    style={{
                        fontSize: 18,
                        color: '#000',
                        padding: 10,
                        backgroundColor: '#DBF5D4',
                        elevation: 1
                    }}
                    >
                        {texto.mensagem}</Text>
                </View>
            );
        }

        return (
            <View style={{ alignItems: 'flex-start', marginVertical: 5, marginRight: 40 }}>
                    <Text 
                    style={{
                        fontSize: 18,
                        color: '#000',
                        padding: 10,
                        backgroundColor: '#F7F7F7',
                        elevation: 1
                    }}
                    >
                        {texto.mensagem}</Text>
                </View>
        );
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#EEE4DC', padding: 10 }}>
                <View style={{ flex: 1, paddingBottom: 20 }}>
                    <SafeAreaView>
                        <FlatList
                            data={this.fonteDeDados}
                            renderItem={({ item }) => this.renderRow(item)}
                        />
                    </SafeAreaView>
                </View>
                <View style={{ flexDirection: 'row', height: 60 }}>
                    <TextInput
                        value={this.props.mensagem}
                        onChangeText={texto => this.props.modificaMensagem(texto)}
                        style={{ flex: 4, backgroundColor: '#FFF', fontSize: 18 }}
                    />
                    <TouchableHighlight
                        onPress={this._enviarMensagem.bind(this)}
                        underlayColor='#FFF'
                    >
                        <Image source={imgBtnEnviar} />
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const conversa = _.map(state.ListaConversaReducer, (val, uid) => ({ ...val, uid }));
    return ({
        conversa,
        mensagem: state.AppReducer.mensagem
    });
};

export default connect(mapStateToProps, {
    modificaMensagem,
    enviarMensagem,
    conversaUsuarioFetch
})(Conversa);
