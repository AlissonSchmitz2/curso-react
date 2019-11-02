import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import CenaPrincial from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServicos from './src/components/CenaServicos';

class app05 extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'principal' }}
        renderScene={(route, navigator) => {
          switch (route.id) {
            case 'principal':
              //exibir a cena principal
              return (<CenaPrincial navigator={navigator} />);
            case 'cliente':
              //exibir a cena clientes 
              return (<CenaClientes navigator={navigator} />);
            case 'contatos':
              //exibir a cena contatos 
              return (<CenaContatos navigator={navigator} />);
            case 'empresa':
              //exibir a cena empresa 
              return (<CenaEmpresa navigator={navigator} />);
            case 'servicos':
              //exibir a cena servicos 
              return (<CenaServicos navigator={navigator} />);
            default:
              return false;
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('app05', () => app05);
