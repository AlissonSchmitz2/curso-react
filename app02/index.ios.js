//Import
import React from 'react';
import { Text, AppRegistry, View, Image, TouchableOpacity, Alert } from 'react-native';

//Formatações
const Estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 40
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const gerarNovaFrase = () => {
    let numeroAleatorio = Math.random();
    numeroAleatorio = Math.floor(numeroAleatorio * 5)

    //frases
    const frases = new Array();
    frases[0] = 'Quando tudo der errado escreva um livro.';
    frases[1] = 'É hora de começar a esquecer os erros do passado e começar a planejar os erros do futuro!';
    frases[2] = 'Você ainda não chegou lá, mas olha o quando você já se fudeu.';
    frases[3] = 'Não permita que uma estúpida frase motivacional alegre o teu dia de merda.';
    frases[4] = 'Nunca deixe que lhe digam que você não consegue fazer algo. Diga você mesmo: "Eu não consigo".';

    Alert.alert('', frases[numeroAleatorio]);
}
      //<Image source={ require('./imgs/uvas.png') } />
//Criar o componente
const App = () => {
  const { principal, botao, textoBotao } = Estilos;

  return (
    <View style={principal}>
      <Image source={require('./imgs/logo.png')} />
        <TouchableOpacity
        style={botao}
        onPress={gerarNovaFrase}
        >
          <Text style={textoBotao}>Nova Frase</Text>
        </TouchableOpacity>
    </View>
  );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app02', () => App);
