import React from 'react'
import { StyleSheet, SafeAreaView, Text, Platform, StatusBar } from 'react-native'

export default function Favorite() {
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <Text>Favorite Screen</Text>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    AndroidSafeArea: {
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
  });