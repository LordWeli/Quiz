import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Score from '../home/Score';

export default function() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Resultado
      </Text>

      <View style={styles.scores}>
        <Score fontSize={60} component={'final'}/>
      </View>
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
  },
  scores: {
    marginBottom: 25
  },
});
