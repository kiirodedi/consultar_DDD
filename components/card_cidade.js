import { StyleSheet, Text, View } from "react-native";

const CardCidade = ({nome, uf}) => {
    return (
        <View style={estilo.card}>
            <Text style={estilo.cidade}>{nome}</Text>
            <Text> - </Text>
            <Text style={estilo.uf}>{uf}</Text>
        </View>
    )  
};

export default CardCidade;

const estilo = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
    },
    cidade: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    uf: {
        fontSize: 16,
        color: '#666',
    },
})