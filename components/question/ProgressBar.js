import React from 'react';
import { StyleSheet, Animated, View } from 'react-native';

export default function(props) {
  return (
    <View style={styles(props).progressBar}>
      <Animated.View style={styles(props).progress}/>
    </View>
  );
}

const styles = (props) => StyleSheet.create({
  progressBar: {
    width: 328,
    height: 10,
    borderRadius: 15,
    backgroundColor: '#FFDAB9',
    flexDirection:'row'
  },
  progress: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#F8AD9D",
    borderRadius: 15,
    width: props.quantity
  }
});
