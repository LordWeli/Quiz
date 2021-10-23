import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function(props) {
  const question = 'Se David tem 27 anos em 2011. Qual a idade dele em 2003?'

  return (
    <Text style={styles.question}>{question}</Text>
  );
}

const styles = StyleSheet.create({
  question: {
    fontSize: 22,
    color: '#F08080',
    textAlign: 'left',
    width: 328,
    marginTop: 15,
    marginBottom: 36
  }
});
