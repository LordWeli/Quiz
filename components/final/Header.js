import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Resultado
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 70,
  },
  title: {
    color: '#F08080',
    fontSize: 32,
  }
});