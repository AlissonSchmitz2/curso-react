import React, { Component } from 'react';
import _ from 'lodash';
import {
    Text,
    SafeAreaView,
    FlatList,
    View,
    TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { contatosUsuarioFetch } from '../actions/AppActions';


class Contatos extends Component {
    componentWillMount() {
        this.props.contatosUsuarioFetch();
        this.criaFonteDeDados(this.props.contatos);
    }

    componentWillReceiveProps(nextProps) {
        this.criaFonteDeDados(nextProps.contatos);
    }

    criaFonteDeDados(contatos) {
        this.fonteDeDados = contatos;
    }

    renderRow(contato) {
        return (
            <TouchableHighlight
                onPress={() => 
                    Actions.conversa({ 
                        title: contato.nome, contatoNome: contato.nome, contatoEmail: contato.email 
                    })}
                underlayColor='#FFF'
            >
                <View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderColor: '#CCC' }}>
                    <Text style={{ fontSize: 25 }}>{contato.nome}</Text>
                    <Text style={{ fontSize: 18 }}>{contato.email}</Text>
                </View>
            </TouchableHighlight>

        );
    }

    render() {
        return (
            <SafeAreaView>
                <FlatList
                    data={this.fonteDeDados}
                    renderItem={({ item }) => this.renderRow(item)}
                />
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);

    const contatos = _.map(state.ListaContatosReducer, (val, uid) => ({ ...val, uid }));

    return { contatos };
};

export default connect(mapStateToProps, { contatosUsuarioFetch })(Contatos);
