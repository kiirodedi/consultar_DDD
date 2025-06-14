import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import * as obj_DDD from './services/ddd.js';
import CardCidade from './components/card_cidade.js';
import { FlatList } from 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';

export default function App() {
  // Cria uma variável para guardar o DDD e atualizar esse valor //
  const [ddd, setDDD] = useState('');
  // ria uma variável para guardar a sigla do estado e guardar esse valor //
  const [uf, setUf] = useState('');
  // Cria uma variável para guardar a lista de cidades que veio da API e atualizar esse valor //
  const [cities, setCities] = useState([]);

  // Cria uma variável para verifiar se o campo do input está em foco ou não //
  const [emFoco, setEmFoco] = useState(false);

  useEffect(() => {
    if(ddd.length === 2){
      obj_DDD.buscarDDDCallBack(ddd, dados => {
        console.log(dados);
        setUf(dados.state);
        setCities(dados.cities);
      });
    }
  }, [ddd]);
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
            data={cities}
            renderItem={({ item, index }) => 
              <CardCidade
                nome={item}
                uf={uf}
                key={index}
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
