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
import { conversasUsuarioFetch } from '../actions/AppActions';

class Conversas extends Component {
    componentWillMount() {
        this.props.conversasUsuarioFetch();
        this.criaFonteDeDados(this.props.conversas);
    }

    componentWillReceiveProps(nextProps) {
        this.criaFonteDeDados(nextProps.conversas);
    }

    criaFonteDeDados(conversas) {
        this.fonteDeDados = conversas;
    }

    renderRow(conversas) {
        return (
            <TouchableHighlight
                onPress={
                    () => Actions.conversa({
                        title: conversas.nome,
                        contatoNome: conversas.nome,
                        contatoEmail: conversas.email
                    })}
                underlayColor='#FFF'
            >
                <View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderColor: '#CCC' }}>
                    <Text style={{ fontSize: 25 }}>{conversas.nome}</Text>
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
    const conversas = _.map(state.ListaConversasReducer, (val, uid) => ({ ...val, uid }));

    return { conversas };
};

export default connect(mapStateToProps, { conversasUsuarioFetch })(Conversas);

