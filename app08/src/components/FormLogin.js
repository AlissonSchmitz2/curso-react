import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    TouchableOpacity,
    ImageBackground,
    ActivityIndicator
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions';

const imgBackgroung = require('../imgs/bg.png');

class FormLogin extends Component {
    _autenticarUsuario() {
        const { email, senha } = this.props;

        this.props.autenticarUsuario({ email, senha });
    }

    renderBtnAcessar() {
        if (this.props.loading_login) {
            return (
                <ActivityIndicator size="large" />
            );
        }

        return (
            <Button
                title='Acessar'
                color='#115E54'
                onPress={() => this._autenticarUsuario()}
            />
        );
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1 }} source={imgBackgroung}>
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, color: '#FFF' }}>WhatsApp Clone</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <TextInput
                            value={this.props.email}
                            style={{
                                fontSize: 20,
                                height: 45,
                                borderBottomColor: '#FFF',
                                borderBottomWidth: 0.1999
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
                                borderBottomWidth: 0.1999
                            }}
                            placeholder='Senha'
                            placeholderTextColor='#FFF'
                            onChangeText={texto => this.props.modificaSenha(texto)}
                        />
                        <Text style={{ color: '#FF0000', fontSize: 18 }} >
                            {this.props.erroLogin}
                        </Text>
                        <TouchableOpacity
                            onPress={() => { Actions.formCadastro(); }}
                        >
                            <Text style={{ fontSize: 20, color: '#FFF' }}>
                                Não tem cadastro? Cadastre-se!
                        </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 2 }}>
                        {this.renderBtnAcessar()}
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin,
        loading_login: state.AutenticacaoReducer.loading_login
    }
);

export default connect(
    mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario })(FormLogin);
