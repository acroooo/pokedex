import React from 'react'
import { StyleSheet, SafeAreaView, Text, Platform, StatusBar } from 'react-native'

export default function Account() {
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <Text>Account Screen</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
  });