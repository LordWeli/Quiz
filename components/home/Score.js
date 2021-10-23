import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function(props) {
  return (
    <View>
      <Text style={styles(props).scoreInitial}>
        12/
        <Text style={styles(props).scoreFinal}>
          22
        </Text>
      </Text>
    </View>
  );
}

const styles = (props) => StyleSheet.create({
  scoreInitial: {
    color: '#F4978E',
    fontWeight: 'bold',
    fontSize: props.fontSize,
    marginLeft: 10
  },
  scoreFinal: {
    fontWeight: 'normal'
  }
});