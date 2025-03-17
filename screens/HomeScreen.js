import React from 'react';
import { View, Text, Button, StyleSheet,Image,ImageBackground } from 'react-native';
export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>📖 Mini App de Receitas</Text>
            <Button title="Ver Receitas" onPress={() => navigation.navigate('Receitas')} />
            
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#8081bf'
        
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color:"#fff"
    },
   
    
});
