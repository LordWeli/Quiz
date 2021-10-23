import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function(props) {
  return (
    <View>
      <Text style={styles.questionTitle}> { props.question } </Text>
      <View style={styles.result}>
        <Text> { props.answer } </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  questionTitle: {
    fontSize: 22,
    color: '#F08080',
    marginBottom: 15
  },
  result: {
    width: 340,
    height: 130,
    borderRadius: 15,
    backgroundColor: '#F8AD9D'
  }
});
