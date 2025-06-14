import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput } from 'react-native';
import * as obj_DDD from './services/ddd.js';
import CardCidade from './components/card_cidade.js';
import { FlatList } from 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [ddd, setDDD] = useState('');
   // Cria uma variável para guardar o DDD e atualizar esse valor //
  const [uf, setUf] = useState('');
  // Cria uma variável para guardar a sigla do estado e guardar esse valor //
  const [cities, setCities] = useState([]);
  // Cria uma variável para guardar a lista de cidades que veio da API e atualizar esse valor //

  const [emFoco, setEmFoco] = useState(false);
  // Cria uma variável para verifiar se o campo do input está em foco ou não //

  useEffect(() => {
    // Esse useEffect serve para rodas um código sempre que um valor for alterado, nesse caso, o DDD //
    if(ddd.length === 2){
      // Quando o valor digitado no input tiver 2 digitos, o código dentro do if será exeutado //
      obj_DDD.buscarDDDCallBack(ddd, dados => {
        // Chama a função "buscarDDDCallBack" passando o DDD digitado e uma função callBack que receberá od dados //

        // Quando os dados da API chegar:
        console.log(dados); // exibe os dados no console
        setUf(dados.state); // atualiza a variável "uf" com os dados recebidos da API
        setCities(dados.cities); // atualiza a variável "cities" com a lista de cidade recebidas da API
      });
    }
  },
  [ddd]); // Significa que esse ódigo só será executado quando o valor de "ddd" for alterado.
  return (
    <View style={estilo.container}>
      <TextInput
        style={[estilo.input,{ borderColor: emFoco ? 'blue' : 'black', borderWidth: 1 }]}
        placeholder="Digite o DDD"
        keyboardType="numeric"
        maxLength={2}
        value={ddd}
        onChangeText={text => setDDD(text.replace(/[^0-9]/g, ''))}
        onFocus={() => setEmFoco(true)}
        onBlur={() => setEmFoco(false)}
        />
        <View style={estilo.view_lista}> 
          <FlatList
          // Um componente do React Native para exibir listas //
            data={cities}
            // A lista de dados que será exibida no FlatList //
            renderItem={({ item, index }) => 
            // Uma função que diz como redenrizar cada item //
              <CardCidade // para cada item é redenrizado um componente CardCidade
                nome={item} // nome da cidade
                uf={uf} // sigla do estado
                key={index} // uma chave única para cada item
              />
            }
            estimatedItemSize={200}
          />
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
  },
  input: {
    width: 200,
    height: 40,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    outlineWidth: 0, // <- Adicione esta linha
},
  view_lista: {
    flex: 1,
    width: '100%',
  },
});
