import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Header from './Header'

export default function() {
  return (
    <View style={styles.container}>
      <Header/>

      <Image style={styles.homeLogo} source={require('../../assets/homeLogo.png')} />

      <TouchableOpacity style={styles.buttonInit}>
        <Text style={styles.textToButtonInit}>
          Iniciar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  homeLogo: {
    width: 328,
    height: 195,
    marginBottom: 80,
  },
  buttonInit: {
    width: 338,
    height: 114,
    backgroundColor: '#ECA39A',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textToButtonInit: {
    fontSize: 22,
    color: '#FAFAFA',
  },
});
