import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={()=> {}}>
      <Text style={styles.textButton}> {props.text} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 328,
    height: 70,
    backgroundColor: '#ECA39A',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 19
  },
  textButton: {
    fontSize: 22,
    color: '#FAFAFA',
  }
});
