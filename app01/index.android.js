import React from 'react'; // importar o módulo react
import { Text, Button, View, AppRegistry } from 'react-native';

const geraNumeroAleatorio = () => {
  let numeroAleatorio = Math.random(); //Retorna um valor aletorio entre 0 e 1 flutuante
  numeroAleatorio = Math.floor(numeroAleatorio * 10);
  alert(numeroAleatorio);
};

const App = () => (
    <View>
      <Text>Gerador de números randômicos</Text>
      <Button
        title="Gerar um número randômico"
        onPress={geraNumeroAleatorio}
      />
    </View>
    );

AppRegistry.registerComponent('app01', () => App);
