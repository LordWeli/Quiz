import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Score from '../shared/Score'

export default function(props) {

  return (
    <View>
      <Text style={styles(props).scoreInitial}>
        {Score['current']}/
        <Text style={styles(props).scoreFinal}>
        {Score['total']}
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
