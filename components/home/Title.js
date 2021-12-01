import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function(props) {
  return (
    <Text style={styles(props).title}> Arboristique </Text>
  );
}

const styles = (props) => StyleSheet.create({
  title: {
    color: '#F08080',
    fontWeight: '500',
    fontSize: 24,
    textAlign: 'center',   
    width: props.width
  },
});
