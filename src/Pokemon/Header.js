import { Text, StyleSheet, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import getColorByPokemonType from "../utils/getColorByPokemonType";
export default function Header(props) {
    const { name, order, image, type } = props;

    const color = getColorByPokemonType(type)

    const bgStyles = [{ backgroundColor: color, ...styles.bg}]
  return (
    <>
         <View style={bgStyles} />
      <SafeAreaView style={styles.content}>
          <View style={styles.header}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.order}>#{`${order}`.padStart(3,0)}</Text>
          </View>
          <View style={styles.contentImg}>
              <Image source={{uri: image}} style={styles.image} />
          </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
    bg: {
        width: '100%',
        height: 400,
        position: 'absolute',
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        transform: [{ scaleX: 2}]
    },
    content: {
        marginHorizontal: 20,
        marginTop: 30,
    },
    contentImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 40,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'capitalize',
    },
    order: {
        color: "white",
        fontWeight: "bold",
    },
    image:{
        width: 250,
        height: 300,
        resizeMode: 'contain',
    }
})