import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function() {
  return (
    <View>
      <Text style={styles.scoreInitial}>
        12/
        <Text style={styles.scoreFinal}>
          22
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scoreInitial: {
    color: '#F4978E',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10
  },
  scoreFinal: {
    fontWeight: 'normal'
  }
});