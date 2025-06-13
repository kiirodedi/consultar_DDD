import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as obj_DDD from './services/ddd.js';
import CardCidade from './components/card_cidade.js';

export default function App() {
  obj_DDD.buscarDDDCallBack(11,retorno=>{
    console.log(retorno)
  });
  return (
    <View style={styles.container}>
      <CardCidade
        nome="Itu"
        uf="SP"
      />
            <CardCidade
        nome="Tietê"
        uf="SP"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
