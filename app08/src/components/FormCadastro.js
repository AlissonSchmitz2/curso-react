import React, { Component } from 'react';
import { View, TextInput, Button, ImageBackground, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import {
    modificaNome,
    modificaEmail,
    modificaSenha,
    cadastrarUsuario
} from '../actions/AutenticacaoActions';

const imgBackground = require('../imgs/bg.png');

class formCadastro extends Component {
    _cadastrarUsuario() {
        const { nome, email, senha } = this.props;

        this.props.cadastrarUsuario({ nome, email, senha });
    }

    renderBtnCadastro() {
        if (this.props.loading_cadastro) {
            return (
                <ActivityIndicator size='large' />
            );
        }
        return (
            <Button
                title='Cadastrar'
                color='#115E54'
                onPress={() => this._cadastrarUsuario()}
            />
        );
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1 }} source={imgBackground}>
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 4, justifyContent: 'center' }}>
                        <TextInput
                            value={this.props.nome}
                            style={{
                                fontSize: 20,
                                height: 45,
                                borderBottomColor: '#FFF',
                                borderBottomWidth: 0.25
                            }}
                            placeholder='Nome'
                            placeholderTextColor='#FFF'
                            onChangeText={texto => this.props.modificaNome(texto)}
                        />
                        <TextInput
                            value={this.props.email}
                            style={{
                                fontSize: 20,
                                height: 45,
                                borderBottomColor: '#FFF',
                                borderBottomWidth: 0.25
                            }}
                            placeholder='E-mail'
                            placeholderTextColor='#FFF'
                            onChangeText={texto => this.props.modificaEmail(texto)}
                        />
                        <TextInput
                            secureTextEntry
                            value={this.props.senha}
                            style={{
                                fontSize: 20,
                                height: 45,
                                borderBottomColor: '#FFF',
                                borderBottomWidth: 0.25
                            }}
                            placeholder='Senha'
                            placeholderTextColor='#FFF'
                            onChangeText={texto => this.props.modificaSenha(texto)}
                        />
                        <Text 
                        style={{ color: '#FF0000', fontSize: 18 }}
                        >
                        {this.props.erroCadastro}
                        </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        {this.renderBtnCadastro()}
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => (
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroCadastro: state.AutenticacaoReducer.erroCadastro,
        loading_cadastro: state.AutenticacaoReducer.loading_cadastro
    }
);

export default connect(mapStateToProps,
    {
        modificaNome,
        modificaEmail,
        modificaSenha,
        cadastrarUsuario
    })(formCadastro);
