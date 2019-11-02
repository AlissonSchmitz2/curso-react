import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { View } from 'react-native';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';
import AdicionarContato from './components/AdicionarContato';
import Conversa from './components/Conversa';

const Rotas = () => (
    <Router titleStyle={{ color: '#FFF' }} navigationBarStyle={{ backgroundColor: '#115E54' }}>
        <View>
            <Scene
                key='formLogin'
                component={FormLogin}
                title='WhatsApp Clone'
                hideNavBar
            />
            <Scene
                key='formCadastro'
                component={FormCadastro}
                title='Cadastro'
                hideNavBar={false}
            />
            <Scene
                key='boasVindas'
                component={BoasVindas}
                title='Boas Vindas'
                hideNavBar
            />
            <Scene
                key='principal'
                component={Principal}
                title='Principal'
                hideNavBar
            />
            <Scene
                key='adicionarContato'
                component={AdicionarContato}
                title='Adicionar Contato'
                hideNavBar={false}
            />
            <Scene
                key='conversa'
                component={Conversa}
                title='Conversa'
                hideNavBar={false}
            />
        </View>
    </Router>
);

export default Rotas;
