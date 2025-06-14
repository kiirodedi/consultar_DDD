import { StyleSheet, Text, View } from "react-native";

const CardCidade = ({nome, uf}) => {
// Cria um componente que recebe dois parametros: nome e uf //
    return (
        <View style={estilo.card}>
            <Text style={estilo.cidade}>{nome}</Text>
            // Exibe o nome da cidade //
            <Text> - </Text>
            <Text style={estilo.uf}>{uf}</Text>
            // Exibe a sigla do estado //
        </View>
    )  
};

export default CardCidade;

const estilo = StyleSheet.create({
    card: {
        width: 'auto',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f1f1f1',
        borderBottomStyle: 'solid',
        borderBottomWidth: 0.3,
        borderBottomColor: '#018080',
    },
    cidade: {
        fontSize: 18,
        color: '#000',
        fontWeight: '600',
    },
    uf: {
        fontSize: 18,
        color: '#0206ff',
        fontWeight: '700',
    },
})