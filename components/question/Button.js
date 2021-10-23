import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Animated } from 'react-native';

export default function(props) {
  const is_correct = props.correct;

  const animatedButton = () => {
    Animated.timing(
      props.height,
      {
        toValue: is_correct ? 80 : 60,
        duration: 300,
        useNativeDriver: false,
      }).start();
  }

  const styleButton = {
    button: {
      width: 328,
      height: props.height,
      backgroundColor: '#ECA39A',
      borderRadius: 18,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 19
    },
  }

  return (
    //props.navigation.navigate('Final')
    <TouchableOpacity onPress={()=> { animatedButton() }}>
      <Animated.View style={styleButton.button}>
        <Text style={styles.textButton}> {props.text} </Text>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textButton: {
    fontSize: 22,
    color: '#FAFAFA',
  }
});
