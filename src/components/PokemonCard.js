import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

export default function PokemonCard(props) {
  const { pokemon } = props;

  const goToPokemon = () => {
    console.log(`Vamos al pokemon: ${pokemon.name}`);
    console.log(pokemon);
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
          <View style={styles.spacing}>
              <View style={styles.bgStyle}>
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
    height: 130,
  },
  spacing: {
      flex: 1,
      padding: 5,
      marginTop: 85,
  },
  bgStyle: {
    backgroundColor: "#242582",
  },
  name: {
      color: "white",
      fontSize: 15,
      fontWeight: "bold",
      paddingTop: 10,
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