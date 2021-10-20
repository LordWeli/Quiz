import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function(props) {
  const question = 'Se David tem 27 anos em 2011. Qual a idade dele em 2003?'

  return (
    <View>
      <Text style={styles.question}> {question} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    fontSize: 22,
    color: '#F08080',
  }
});
