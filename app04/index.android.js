import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import ListaItens from './src/components/ListaItens';

class app04 extends Component {
  render() {
    return (
      <ListaItens />
    );
  }
}

AppRegistry.registerComponent('app04', () => app04);
