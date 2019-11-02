import React, { Component } from 'react';
import { View, Image } from 'react-native';

const imagem = require('../../imgs/jokenpo.png');

class Topo extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#00B2EE' }}>
                <Image source={imagem} />
            </View>
        );
    }
}

export default Topo;
