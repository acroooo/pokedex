import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import getColorByPokemonType from "../utils/getColorByPokemonType";


export default function PokemonCard(props) {
  const { pokemon } = props;

  // Background colors
  const pokemonColor = getColorByPokemonType(pokemon.type);
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyle };
  // function goTo
  const goToPokemon = () => {
    console.log(`Vamos al pokemon: ${pokemon.name}`);
    console.log(pokemon);
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
          <View style={styles.spacing}>
              <View style={bgStyles}>
                <Text style={styles.number}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
                <Text style={styles.name}>{pokemon.name}</Text>
                <Image style={styles.image} source={{uri: pokemon.image}} />
              </View>
          </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 200,
  },
  spacing: {
      flex: 1,
      padding: 5,
      marginTop: 15,
  },
  bgStyle: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  name: {
      color: "white",
      fontSize: 15,
      fontWeight: "bold",
      paddingTop: 10,
      textTransform: "capitalize",
  },
  image: {
      position: "absolute",
      bottom: 2,
      right: 2,
      width: 90,
      height: 90,
  },
  number: {
      color: "white",
      position: "absolute",
      right: 10,
      top: 10,
      fontSize: 11,
  }
});