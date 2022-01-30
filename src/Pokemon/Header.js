import { Text, StyleSheet, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import getColorByPokemonType from "../utils/getColorByPokemonType";
export default function Header(props) {
    const { name, order, image, type } = props;

    const color = getColorByPokemonType(type)

  return (
    <View>
      <SafeAreaView>
          <View>
              <Image source={{uri: image}} style={styles.image} />
          </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
    image:{
        width: 250,
        height: 250,
    }
})