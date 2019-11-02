import React from 'react';
import { View, Text, Button, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

const imgBackground = require('../imgs/bg.png');
const imgWhatts = require('../imgs/logo.png');

export default props => (
    <ImageBackground style={{ flex: 1 }} source={imgBackground}>
        <View style={{ flex: 1, padding: 15 }}>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                <Text
                    style={{ color: '#FFF', fontSize: 28, marginBottom: 10 }}
                >
                    Seja Bem-Vindo
                    </Text>
                <Image source={imgWhatts} />
            </View>
            <View style={{ flex: 1 }}>
                <Button
                    color='#115E54'
                    title="Fazer Login"
                    onPress={() => { Actions.formLogin(); }}
                />
            </View>
        </View>
    </ImageBackground>
);
