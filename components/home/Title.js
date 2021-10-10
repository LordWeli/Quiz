import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function() {
  return (
    <Text style={styles.title}> Math Quiz </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#F08080',
    fontWeight: '500',
    fontSize: 24,
    textAlign: 'center',   
    width: '70%'
  },
});