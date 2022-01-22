import React, {useState, useEffect} from 'react'
import { StyleSheet, SafeAreaView, Text, Platform, StatusBar } from 'react-native'
import {getPokemonApi, getPokemonDetailsByUrlApi} from '../api/pokemon'

export default function Pokedex() {
    const [pokemons, setPokemons] = useState([])
    useEffect(() => {
        // funcion anonima autoejecutable
        (async() => {
            await loadPokemons()
        })()
            }, [])

    const loadPokemons = async () => {
        try {
            const response = await getPokemonApi()
            
            const pokemonsArray = []

            for await (pokemon of response.results) {
                const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url)
                pokemonsArray.push({
                    id: pokemonDetails.id,
                    name: pokemonDetails.name,
                    type: pokemonDetails.types[0].type.name,
                    order: pokemonDetails.order,
                    image: pokemonDetails.sprites.other['official-artwork'].front_default,
                })
            }

            setPokemons(...pokemons, ...pokemonsArray)
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