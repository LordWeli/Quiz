import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function(props) {
  const score = {
    accept: 10,
    wrong: 20
  }

  return (
    <View>
      <Text style={styles(props).scoreInitial}>
        {score['accept']}/
        <Text style={styles(props).scoreFinal}>
        {score['wrong']}
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
