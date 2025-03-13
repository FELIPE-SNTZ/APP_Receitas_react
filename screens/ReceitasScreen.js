import React from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity,Image } from 'react-native';



export default function ReceitasScreen({ navigation }) {
    const receitas = [
        { id: 1, nome: 'BOLO DE CHOCOLATE',imagem: require('../assets/img/bolo.jpg'), ingredientes: 'Farinha Ovos, Chocolate...', preparo: 'Misture tudo e assepor 40min.' },
        { id: 2, nome: 'PANQUECA', imagem: require('../assets/img/panqueca.jpg'),  ingredientes: 'Farinha, Leite, Ovos...', preparo: 'Misture tudo e frite em uma frigideira.' },
        { id: 3, nome: 'BRIGADEIRO', imagem: require('../assets/img/briga.jpg'),  ingredientes: 'Leite Condensado, Chocolate, Manteiga...', preparo: ' Cozinhe até engrossar e enrole.'},
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🍽 Lista de Receitas</Text>
            {receitas.map((receita) => (
                <View key={receita.id} style={styles.card}>
                    <Image style={styles.imagem} source= {receita.imagem}/>
                    <Text style={styles.recipeName}>{receita.nome}</Text>
                    <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Detalhes', receita)}>
                        <Text style={styles.Buttont}>Ver Detalhes</Text>
                        </TouchableOpacity>
                </View>
            ))}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor:'#666666',
        
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    card: {
        backgroundColor:'#5985E1' ,
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
        
    },
    recipeName: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center',
    },
    Button:{
        textAlign:'center,'

    },
    Buttont:{
        padding:6,
        width:350,
        height:40,
        textAlign:'center',
        fontSize:20,
        color:'#ffffff',
        borderRadius:9,
        backgroundColor:'#A9C3C8'
        
    },
    imagem:{
        width:340,
        height:240,
        justifyContent:'center',
    },
    
});