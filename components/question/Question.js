import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function(props) {
  return (
    <Text style={styles.question}>{props.question}</Text>
  );
}

const styles = StyleSheet.create({
  question: {
    fontSize: 22,
    color: '#F08080',
    textAlign: 'left',
    width: 328,
    marginTop: 5,
    marginBottom: 20
  }
});
