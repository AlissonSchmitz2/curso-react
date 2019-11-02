import React from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { View, Text, StatusBar, Image, TouchableHighlight } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';

import { habilitaInclusaoContato } from '../actions/AppActions';

const imgAddContato = require('../imgs/adicionar-contato.png');

const TabBarMenu = props => (
    <View style={{ backgroundColor: '#115E54', elevation: 4, marginBottom: 6 }} >
        <StatusBar backgroundColor='#114D44' />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
            <View style={{ height: 50, justifyContent: 'center' }}>
                <Text style={{ color: '#FFF', fontSize: 20, marginLeft: 20 }}>WhatsApp Clone</Text>
            </View>

            <View style={{ flexDirection: 'row', marginRight: 20 }}>
                <View style={{ justifyContent: 'center', width: 50, alignItems: 'center' }}>
                    <TouchableHighlight
                    onPress={() => { Actions.adicionarContato(); props.habilitaInclusaoContato(); }}
                    underlayColor='#114D44'
                    >
                        <Image source={imgAddContato} />
                    </TouchableHighlight>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <TouchableHighlight
                    onPress={() => { 
                        firebase.auth().signOut().then(() => Actions.formLogin()); 
                     }}
                    underlayColor='#114D44'
                    >
                    <Text style={{ fontSize: 20, color: '#FFF' }}>Sair</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
        <TabBar {...props} style={{ backgroundColor: '#115E54', elevation: 0 }} />
    </View>
);

export default connect(null, { habilitaInclusaoContato })(TabBarMenu);
