import React, {useState, useEffect} from 'react'
import { StyleSheet, SafeAreaView, Text, Platform, StatusBar } from 'react-native'
import {getPokemonApi} from '../api/pokemon'

export default function Pokedex() {

    useEffect(() => {
        // funcion anonima autoejecutable
        (async() => {
            await loadPokemons()
        })()
            }, [])

    const loadPokemons = async () => {
        try {
            const response = await getPokemonApi()
            console.log(response)
        } catch(error) {
            console.log(error)
        }
    }


    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <Text>Pokedex Screen</Text>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    AndroidSafeArea: {
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
  });