import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import logo from './assets/eevee.png'

function App() {
    return ( <
        View >
        <
        Image source = { logo }
        style = { styles.imagem }
        /> <
        Text >
        <
        FontAwesome name = "user-circle"
        size = { 50 } > < /FontAwesome>
        Olá Mundo!
        <
        /Text> <
        FontAwesome.Button name = "shopping.cart"
        style = { styles.botao } >
        comprar < /FontAwesome.Button> <
        /View>
    )
}

const styles = StyleSheet.create({
            imagem: {
                width: '90%',
                height: 300,
                resizeMode: 'center'
            },
            botao: {
                width: '50%',
                heigth: 30
            },
            titulo: {
                fontSize: 30,
                color: "#1A237E"
            }
        )

        export default App